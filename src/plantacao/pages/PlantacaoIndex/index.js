import UrlRouter from "core/constants/UrlRouter";
import GenericIndex from "core/generics/GenericIndex";
import React from "react";

export default function PlantacaoIndex() {
  const columns = [
    { title: "Identificador",key:"id" },
    { title: "Solo", key:"solo_id" },
    { title: "Ultima atualização" , key:"updatedAt" },
  ];

  return (
    <GenericIndex
      columns={columns}
      entity={[]}
      headerButtons={UrlRouter.plantacoes.novo}
    />
  );
}