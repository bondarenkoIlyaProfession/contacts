import React from "react";
import { PropTypes } from "prop-types";

import { Main } from "./layout";

export const App = ({ children }) => {
  return <Main>{children}</Main>;
};

App.propTypes = {
  children: PropTypes.node,
};

App.defaultProps = {
  children: null,
};
