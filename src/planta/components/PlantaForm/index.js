import React from "react";
import { Input, FormItem } from "formik-antd";
import GenericForm from "core/generics/GenericForm";
import PropTypes from "prop-types";
import { Col, Row } from "antd";

//TODO: Fazer com que o mesmo form funcione para edição e criação
function PlantaForm({ initialValues, validationSchema, onSubmit, ...props }) {
  return (
    <GenericForm
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      {...props}
    >
      <>
        <Row gutter={10}>
          <Col md={8} sm={24}>
            <FormItem name="nome" label="Nome" required>
              <Input name="nome" placeholder="Nome" />
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <FormItem name="especie" label="Espécie">
              <Input name="especie" placeholder="Nome da Espécie" />
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <FormItem name="infos_por_estacao" label="Informação por estação">
              <Input
                name="infos_por_estacao"
                placeholder="Informação por estação"
              />
            </FormItem>
          </Col>
        </Row>
        <Row gutter={10}>
          <Col sm={24}>
            <FormItem name="tecnicas_plantio" label="Técnicas de plantio">
              <Input
                name="tecnicas_plantio"
                placeholder="Técnicas de plantio"
              />
            </FormItem>
          </Col>
        </Row>
        <Row gutter={10}>
          <Col md={8} sm={24}>
            <FormItem name="cor_folhas" label="Cor das folhas">
              <Input name="cor_folhas" placeholder="Cor das folhas" />
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <FormItem name="num_frutos_colhidos" label="Nº de frutos colhidos">
              <Input
                type="number"
                min={0}
                name="num_frutos_colhidos"
                placeholder="Nº de frutos colhidos"
              />
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <FormItem name="qtd_diaria_agua" label="Qntd. de água diária">
              <Input
                name="qtd_diaria_agua"
                placeholder="Qntd. de água diária"
                min={0}
                step={0.01}
              />
            </FormItem>
          </Col>
        </Row>

        <Row gutter={10}>
          <Col md={12} sm={24}>
            <FormItem name="qtd_media_sementes" label="Qntd. média de sementes">
              <Input
                type="number"
                min={0}
                name="qtd_media_sementes"
                placeholder="Qntd. média de sementes"
              />
            </FormItem>
          </Col>
          <Col md={12} sm={24}>
            <FormItem name="nivel_incidencia_solar" label="Nº incidência solar">
              <Input
                type="number"
                min={0}
                step={0.01}
                name="nivel_incidencia_solar"
                placeholder="Nº incidência solar"
              />
            </FormItem>
          </Col>
        </Row>
        <Row gutter={10}>
          <Col sm={24}>
            <FormItem name="tecnicas_plantio" label="Técnicas de plantio">
              <Input
                name="tecnicas_plantio"
                placeholder="Técnicas de plantio"
              />
            </FormItem>
          </Col>
        </Row>
      </>
    </GenericForm>
  );
}

PlantaForm.propTypes = {
  initialValues: PropTypes.object,
  validationSchema: PropTypes.any,
  onSubmit: PropTypes.func,
};

export default PlantaForm;
