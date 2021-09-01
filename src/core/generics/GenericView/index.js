import MainCard from "core/components/MainCard";
import React from "react";
import PropTypes from "prop-types";
import { Descriptions, Skeleton } from "antd";

function GenericView({
  title,
  entity,
  entityToProps,
  column = { xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 },
}) {

  return (
    <MainCard title={title}>
      {entity && entityToProps ? (
        <Descriptions column={column} layout="vertical" bordered>
          {entityToProps(entity).map(({ label, data, key, span = 1 }) => {
            return (
              <Descriptions.Item span={span} label={label} key={key || label}>
                {data || ""}
              </Descriptions.Item>
            );
          })}
        </Descriptions>
      ) : (
        <Skeleton active />
      )}
    </MainCard>
  );
}

GenericView.propTypes = {
  title: PropTypes.string,
  column: PropTypes.object,
  entity: PropTypes.object,
  entityToProps: PropTypes.func,
};

export default GenericView;
