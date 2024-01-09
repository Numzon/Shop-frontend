import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "../../../routes/hooks";
import {
  SpecificationPatternForm,
  SpecificationPatternFormValues,
  mapSpecificationPatternFormValuesToCreateSpecificationPatternRequest,
  specificationPatternValidationSchema,
} from "../SpecificationPatternForm";
import { useAddSpecificationPattern } from "../../../api/hooks/SpecificationPattern";

export const AddSpecificationPatternView = () => {
  const router = useRouter();
  const formMethods = useForm<SpecificationPatternFormValues>({
    resolver: zodResolver(specificationPatternValidationSchema),
  });
  const { handleSubmit, setError } = formMethods;
  const { mutateAsync } = useAddSpecificationPattern();

  const onSubmit: SubmitHandler<SpecificationPatternFormValues> = async (
    values
  ) => {
    await mutateAsync(
      mapSpecificationPatternFormValuesToCreateSpecificationPatternRequest(
        values
      ),
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
        <SpecificationPatternForm
          onCancel={() => router.back()}
        ></SpecificationPatternForm>
      </form>
    </FormProvider>
  );
};

export default AddSpecificationPatternView;
