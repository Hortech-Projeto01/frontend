import React, {useState, useEffect} from "react";
import UrlRouter from "core/constants/UrlRouter";
import GenericIndex from "core/generics/GenericIndex";
import PlantaService from "planta/services/PlantaService";

export default function PlantaIndex() {
  const plantaService = new PlantaService();
  const [plantas, setPlantas] = useState([]);

  const columns = [
    { title: "Nome", dataIndex: "nome", key: "nome"},
    { title: "Espécie", dataIndex: "especie", key: "especie"},
    { title: "Qnt. Diária de Água", dataIndex: "qtd_diaria_agua", key: "especie" },
  ];

  useEffect(() => {
    plantaService.getAll()
    .then((response) => {
      setPlantas(response.data)
    })
  }, [])

  return (
    <GenericIndex
      columns={columns}
      entity={plantas}
      headerButtons={UrlRouter.plantas.novo}
    />
  );
}
