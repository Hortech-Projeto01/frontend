import { Button } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

function GenericButton({ navLink, children, ...buttonProps }) {
  return (
    <>
      {navLink ? (
        <NavLink to={navLink}>
          <Button {...buttonProps}>{children}</Button>
        </NavLink>
      ) : (
        <Button {...buttonProps}>{children}</Button>
      )}
    </>
  );
}

GenericButton.propTypes = {
  navLink: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default GenericButton;
