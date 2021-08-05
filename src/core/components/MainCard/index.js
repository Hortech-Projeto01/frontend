import { Card } from "antd";
import React from "react";
import PropTypes from "prop-types";

import "./style.scss";

export default function MainCard({ title, children }) {
  return (
    <Card className="main-card" title={title}>
      {children}
    </Card>
  );
}

MainCard.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
};
