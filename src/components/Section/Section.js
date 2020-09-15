import React from "react";
import PropTypes from "prop-types";

const Section = ({title, children}) => (
  <section className="section feedback-section">
    <h2>{title}</h2>
    {children}
  </section>
);

Section.defaultProps = {
  title: "Please leave feedback",
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
}
export default Section;