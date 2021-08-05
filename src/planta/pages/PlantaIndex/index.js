import UrlRouter from "core/constants/UrlRouter";
import GenericIndex from "core/generics/GenericIndex";
import React from "react";

export default function PlantaIndex() {
  const columns = [
    { title: "Nome" },
    { title: "Espécie" },
    { title: "Qnt. Diária de Água" },
  ];

  return (
    <GenericIndex
      columns={columns}
      entity={[]}
      headerButtons={UrlRouter.plantas.novo}
    />
  );
}
