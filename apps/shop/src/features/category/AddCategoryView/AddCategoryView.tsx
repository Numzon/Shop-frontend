import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { CategoryFormValues, categoryValidationSchema } from "../CategoryForm";
import { zodResolver } from "@hookform/resolvers/zod";
import CategoryForm from "../CategoryForm/CategoryForm";
import { mapCategoryFormValuesToCreateCategoryRequest } from "../CategoryForm/utils";
import { useRouter } from "../../../routes/hooks";
import { useAddCategory } from "../../../api";

export const AddCategoryView = () => {
  const router = useRouter();
  const formMethods = useForm<CategoryFormValues>({
    resolver: zodResolver(categoryValidationSchema),
  });
  const { handleSubmit, setError } = formMethods;
  const { mutateAsync } = useAddCategory();

  const onSubmit: SubmitHandler<CategoryFormValues> = async (values) => {
    await mutateAsync(mapCategoryFormValuesToCreateCategoryRequest(values), {
      onSuccess: () => {
        router.back();
      },
      onError: (error) => {
        setError(`root.${error.name}`, {
          type: "manual",
          message: error.message,
        });
      },
    });
  };

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CategoryForm onCancel={() => router.back()}></CategoryForm>
      </form>
    </FormProvider>
  );
};

export default AddCategoryView;
