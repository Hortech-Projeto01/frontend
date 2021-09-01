import React, { useEffect, useState } from "react";
import GenericView from "core/generics/GenericView";
import PlantaService from "planta/services/PlantaService";
import { useParams } from "react-router";

export default function PlantaView() {
  const plantaService = new PlantaService();
  const [entity, setPlanta] = useState();
  const { id } = useParams();

  useEffect(() => {
    plantaService.getById(id).then((response) => setPlanta(response.data));
  }, []);

	

  const entityToProps = (entity) => [
        {
          label: "Nome",
          data: entity.nome,
        },
        {
          label: "Espécie",
          data: entity.especie,
        },
        {
          label: "Técnicas de Plantio",
          data: entity.tecnicas_plantio,
        },
        {
          label: "Informação por estação",
          data: entity.infos_por_estacao,
        },
        {
          label: "Cor das folhas",
          data: entity.cor_folhas,
        },
        {
          label: "Nº de frutos colhidos",
          data: entity.num_frutos_colhidos,
        },
        {
          label: "Qtd. diária de água",
          data: entity.qtd_diaria_agua,
        },
        {
          label: "Qtd. média de sementes",
          data: entity.qtd_media_sementes,
        },
        {
          label: "Nível de incidência solar",
          data: entity.nivel_incidencia_solar,
        },
      ];

  return (
    <GenericView
      title="Visualizar Planta"
      entity={entity}
      entityToProps={entityToProps}
    />
  );
}
