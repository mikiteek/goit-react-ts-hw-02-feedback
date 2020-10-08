import React from "react";

interface Props {
  children: any,
  title: string
}

const Section = ({children, title = "Please leave feedback"}: Props) => (
  <section className="section feedback-section">
    <h2>{title}</h2>
    {children}
  </section>
);

export default Section;