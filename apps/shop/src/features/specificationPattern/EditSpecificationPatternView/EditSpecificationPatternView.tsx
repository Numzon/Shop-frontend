import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "../../../routes/hooks";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Box } from "@mui/material";
import {
  SpecificationPatternForm,
  SpecificationPatternFormValues,
  mapSpecificationPatternDtoToSpecificationPatternFormValues,
  mapSpecificationPatternFormValuesToEditSpecificationPatternRequest,
  specificationPatternValidationSchema,
} from "../SpecificationPatternForm";
import {
  useEditSpecificationPattern,
  useGetSimpleTypes,
  useGetSpecificationPattern,
} from "../../../api/hooks/SpecificationPattern";

export const EditSpecificationPatternView = () => {
  const router = useRouter();
  const { id } = useParams();

  const {
    data: specificationPattern,
    isLoading,
    isError,
    refetch,
  } = useGetSpecificationPattern(id!, { enabled: !!id });

  const { data: types } = useGetSimpleTypes();

  const formMethods = useForm<SpecificationPatternFormValues>({
    resolver: zodResolver(specificationPatternValidationSchema),
  });
  const { handleSubmit, setError, reset } = formMethods;
  const { mutateAsync } = useEditSpecificationPattern();

  useEffect(() => {
    if (specificationPattern) {
      reset(
        mapSpecificationPatternDtoToSpecificationPatternFormValues(
          specificationPattern
        )
      );
    }
  }, [specificationPattern, reset]);

  const onSubmit: SubmitHandler<SpecificationPatternFormValues> = async (
    values
  ) => {
    await mutateAsync(
      mapSpecificationPatternFormValuesToEditSpecificationPatternRequest(
        values
      ),
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

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Something went wrong</div>;

  return (
    <Box>
      <FormProvider {...formMethods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <SpecificationPatternForm
            onCancel={() => router.back()}
            types={types}
          />
        </form>
      </FormProvider>
    </Box>
  );
};

export default EditSpecificationPatternView;
