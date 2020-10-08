import React from "react";

interface Props {
  message: string
}

const Notification = ({message = "No feedback given"}: Props) => (
  <h2>{message}</h2>
);

export default Notification;