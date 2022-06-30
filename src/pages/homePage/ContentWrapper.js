import React from "react";

const ContentWrapper = ({components}) => {
  return (
    <div className={"content"}>
      <div className="container">{components.map((c) => c)}</div>
    </div>
  );
};

export default ContentWrapper;