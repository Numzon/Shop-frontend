import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "../../../routes/hooks";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  TextField,
} from "@mui/material";
import { useGetSpecificationType } from "../../../api/hooks/SpecificationType/useGetSpecificationType";
import SpecificationTypeForm, {
  SpecificationTypeFormValues,
  mapSpecificationTypeDtoToSpecificationTypeFormValues,
  mapSpecificationTypeFormValuesToEditSpecificationTypeRequest,
  specificationTypeValidationSchema,
} from "../SpecificationTypeForm";
import { useEditSpecificationType } from "../../../api/hooks/SpecificationType";

export const EditSpecificationTypeView = () => {
  const router = useRouter();
  const { id } = useParams();

  const {
    data: specificationType,
    isLoading,
    isError,
    refetch,
  } = useGetSpecificationType(id!, { enabled: !!id });

  const formMethods = useForm<SpecificationTypeFormValues>({
    resolver: zodResolver(specificationTypeValidationSchema),
  });
  const { handleSubmit, setError, reset } = formMethods;
  const { mutateAsync } = useEditSpecificationType();

  useEffect(() => {
    if (specificationType) {
      reset(
        mapSpecificationTypeDtoToSpecificationTypeFormValues(specificationType)
      );
    }
  }, [specificationType, reset]);

  const onSubmit: SubmitHandler<SpecificationTypeFormValues> = async (
    values
  ) => {
    await mutateAsync(
      mapSpecificationTypeFormValuesToEditSpecificationTypeRequest(values),
      {
        onSuccess: () => {
          refetch();
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
        {specificationType?.parent && (
          <Grid item xs={12} md={12}>
            <InfoCard title="Parent Specification Type">
              <TextField
                disabled
                label="Name"
                fullWidth
                defaultValue={specificationType?.parent.name}
              />
            </InfoCard>
          </Grid>
        )}
      </Grid>
      <FormProvider {...formMethods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <SpecificationTypeForm onCancel={() => router.back()} />
        </form>
      </FormProvider>
    </Box>
  );
};

export default EditSpecificationTypeView;
