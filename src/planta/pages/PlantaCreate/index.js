import MainCard from "core/components/MainCard";
import PlantaForm from "planta/components/PlantaForm";
import PlantaService from "planta/services/PlantaService";
import React from "react";
import * as yup from "yup";

export default function PlantaCreate() {
  const plantaService = new PlantaService();

  const initialValues = {};

  const validationSchema = yup.object().shape({
    nome: yup.string().required("Campo requerido!"),
    especie: yup.string().notRequired(),
    tecnicas_plantio: yup.string().notRequired(),
    infos_por_estacao: yup.string().notRequired(),
    cor_folhas: yup.string().notRequired(),
    num_frutos_colhidos: yup.number().required("Campo requerido!"),
    qtd_diaria_agua: yup.number().required("Campo requerido!"),
    qtd_media_sementes: yup.number().required("Campo requerido!"),
    nivel_incidencia_solar: yup.number().required("Campo requerido!"),
  });

  return (
    <MainCard>
      <PlantaForm
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          delete values.especie;
          return plantaService.create(values);
        }}
      />
    </MainCard>
  );
}
