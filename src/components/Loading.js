import React from "react";

function Loading() {
  return (
    <div className="d-flex justify-content-center">
    <div
      className="spinner-border text-success"
      style={{ height: 100, width: 100 }}
    ></div>
    </div>
  );
}

export default Loading;
