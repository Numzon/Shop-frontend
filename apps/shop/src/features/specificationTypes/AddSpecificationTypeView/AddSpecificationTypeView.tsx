import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "../../../routes/hooks";
import SpecificationTypeForm, {
  SpecificationTypeFormValues,
  mapSpecificationTypeFormValuesToCreateSpecificationTypeRequest,
  specificationTypeValidationSchema,
} from "../SpecificationTypeForm";
import useAddSpecificationType from "../../../api/hooks/SpecificationType/useAddSpecificationType";

export const AddSpecificationTypeView = () => {
  const router = useRouter();
  const formMethods = useForm<SpecificationTypeFormValues>({
    resolver: zodResolver(specificationTypeValidationSchema),
  });
  const { handleSubmit, setError } = formMethods;
  const { mutateAsync } = useAddSpecificationType();

  const onSubmit: SubmitHandler<SpecificationTypeFormValues> = async (
    values
  ) => {
    await mutateAsync(
      mapSpecificationTypeFormValuesToCreateSpecificationTypeRequest(values),
      {
        onSuccess: () => {
          router.back();
        },
        onError: (error) => {
          setError(`root.${error.name}`, {
            type: "manual",
            message: error.message,
          });
        },
      }
    );
  };

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <SpecificationTypeForm
          onCancel={() => router.back()}
        ></SpecificationTypeForm>
      </form>
    </FormProvider>
  );
};

export default AddSpecificationTypeView;
