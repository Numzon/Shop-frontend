import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { CategoryFormValues, categoryValidationSchema } from "../CategoryForm";
import {
  mapCategoryDtoToUserFormValues,
  mapCategoryFormValuesToEditCategoryRequest,
} from "../CategoryForm/utils";
import CategoryForm from "../CategoryForm/CategoryForm";
import { useRouter } from "../../../routes/hooks";
import { useEditCategory, useGetSimplePatterns } from "../../../api";
import { useParams } from "react-router-dom";
import { useGetCategory } from "../../../api/hooks/Category/useGetCategory";
import { useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  TextField,
} from "@mui/material";

export const EditCategoryView = () => {
  const router = useRouter();
  const { id } = useParams();

  const {
    data: category,
    isLoading,
    isError,
    refetch,
  } = useGetCategory(id!, { enabled: !!id });

  const { data: patterns } = useGetSimplePatterns();

  const formMethods = useForm<CategoryFormValues>({
    resolver: zodResolver(categoryValidationSchema),
  });
  const { handleSubmit, setError, reset } = formMethods;
  const { mutateAsync } = useEditCategory();

  useEffect(() => {
    if (category) {
      reset(mapCategoryDtoToUserFormValues(category));
    }
  }, [category, reset]);

  const onSubmit: SubmitHandler<CategoryFormValues> = async (values) => {
    await mutateAsync(mapCategoryFormValuesToEditCategoryRequest(values), {
      onSuccess: () => {
        refetch();
      },
      onError: (error) => {
        setError(`root.${error.name}`, {
          type: "manual",
          message: error.message,
        });
      },
    });
  };

  const InfoCard = ({
    title,
    children,
  }: {
    title: string;
    children: React.ReactNode;
  }) => {
    return (
      <Card>
        <CardHeader title={title} />
        <CardContent>{children}</CardContent>
      </Card>
    );
  };

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Something went wrong</div>;

  return (
    <Box>
      <Grid container spacing={3} sx={{ marginBottom: 3 }}>
        {category?.parentCategory && (
          <Grid item xs={12} md={12}>
            <InfoCard title="Parent category">
              <TextField
                disabled
                label="Name"
                fullWidth
                defaultValue={category?.parentCategory.name}
              />
            </InfoCard>
          </Grid>
        )}
      </Grid>
      <FormProvider {...formMethods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CategoryForm
            onCancel={() => router.back()}
            hasSubcategories={category?.hasSubcategories}
            patterns={patterns}
          />
        </form>
      </FormProvider>
    </Box>
  );
};

export default EditCategoryView;
