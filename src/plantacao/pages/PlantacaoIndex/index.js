import React, { useState, useEffect } from "react";
import UrlRouter from "core/constants/UrlRouter";
import GenericIndex from "core/generics/GenericIndex";
import PlantacaoService from "plantacao/services/PlantacaoService"


export default function PlantacaoIndex() {
    const plantacaoService = new PlantacaoService();
    const [plantacoes, setPlantacoes] = useState([]);

    const columns = [
        { title: "Identificador", dataIndex: "id", key: "id" },
        { title: "Solo", dataIndex: "solo_id", key: "solo_id" },
        { title: "Ultima atualização", dataIndex: "updatedAt", key: "updatedAt" },
    ];

    useEffect(() => {
        plantacaoService.getAll()
            .then((response) => {
                setPlantacoes(response.data)
            })
    },[])


    return (
        <GenericIndex
            columns={columns}
            entity={plantacoes}
            headerButtons={UrlRouter.plantacoes.novo}
        />
    );
}
