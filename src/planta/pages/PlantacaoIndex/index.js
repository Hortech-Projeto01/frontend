import UrlRouter from "core/constants/UrlRouter";
import GenericIndex from "core/generics/GenericIndex";
import React from "react";

export default function PlantacaoIndex() {
  const columns = [
    { title: "Identificador" },
    { title: "Cultura" },
    { title: "Ultima atualização" },
  ];

  return (
    <GenericIndex
      columns={columns}
      entity={[]}
      headerButtons={UrlRouter.plantacao.novo}
    />
  );
}
