import React from "react";
import PropTypes from "prop-types";
import MainCard from "core/components/MainCard";
import { Space, Table } from "antd";
import GenericButton from "../GenericButton";
import { PlusOutlined, EyeOutlined, EditOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { replaceParamsToLink } from "core/utils/UrlUtils";

/**
 * Página a qual todos as páginas Index, que exibem items de alguma entidade,
 * deve herdar.
 */
export default function GenericIndex({
  title,
  entity,
  columns,
  viewLink,
  editLink,
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

  const actionColumn = {
    displayName: "actionButtons",
    title: "Ações",
    key: "actions",
    render: (_, record) => (
      <Space size="middle">
        <Link to={viewLink ? replaceParamsToLink(viewLink, record.id) : ""}>
          <EyeOutlined />
        </Link>
        <Link to={editLink ? replaceParamsToLink(editLink, record.id) : ""}>
          <EditOutlined />
        </Link>
      </Space>
    ),
  };

  return (
    <MainCard title={title}>
      <>
        <Space style={{ marginBottom: 16 }}>{buttons}</Space>
        <Table dataSource={entity} columns={[...columns, actionColumn]}></Table>
      </>
    </MainCard>
  );
}

GenericIndex.propTypes = {
  title: PropTypes.string,
  entity: PropTypes.array.isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      dataIndex: PropTypes.string,
      key: PropTypes.string,
    })
  ).isRequired,
  viewLink: PropTypes.string,
  editLink: PropTypes.string,
  headerButtons: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};
