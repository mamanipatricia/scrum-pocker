import React from "react";

export const Card = ({classes, value, eventclick}) => {
  return (
    <div
      className={classes}
      onClick={eventclick}
    >
      <span className="card-value">{value}</span>
    </div>
  );
};
