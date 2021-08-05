import React from "react";
import PropTypes from "prop-types";
import MainCard from "core/components/MainCard";
import { Space, Table } from "antd";
import GenericButton from "../GenericButton";
import { PlusOutlined } from "@ant-design/icons";

/**
 * Página a qual todos as páginas Index, que exibem items de alguma entidade,
 * deve herdar.
 */
export default function GenericIndex({
  title,
  entity,
  columns,
  headerButtons,
}) {
  const buttons =
    typeof headerButtons === "string" ? (
      <GenericButton
        type="primary"
        icon={<PlusOutlined />}
        navLink={headerButtons}
      >
        Novo
      </GenericButton>
    ) : (
      headerButtons
    );

  return (
    <MainCard title={title}>
      <Space style={{ marginBottom: 16 }}>{buttons}</Space>
      <Table dataSource={entity} columns={columns}></Table>
    </MainCard>
  );
}

GenericIndex.propTypes = {
  title: PropTypes.string,
  entity: PropTypes.object.isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      dataIndex: PropTypes.string,
      key: PropTypes.string,
    })
  ),
  headerButtons: PropTypes.oneOf([PropTypes.string, PropTypes.element]),
  createEntityLink: PropTypes.string,
};
