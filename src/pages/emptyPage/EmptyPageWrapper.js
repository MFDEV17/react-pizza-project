import React from "react";

const EmptyPageWrapper = ({components}) => {
  return (
    <div className="wrapper">
      <div className="content">
        <div className="container container--cart">
          <div className="cart cart--empty">{components.map((c) => c)}</div>
        </div>
      </div>
    </div>
  );
};

export default EmptyPageWrapper;