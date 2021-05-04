import React from "react";
import PropTypes from "prop-types";

const PageTop = ({ children }) => {
  return (
    <div className="pt-4 pb-3 mb-3 text-center">
      <h2>{children}</h2>
    </div>
  );
};

export default PageTop;

PageTop.propTypes = {
  children: PropTypes.string,
};

PageTop.defaultProps = {
  children: "PageTop",
};
