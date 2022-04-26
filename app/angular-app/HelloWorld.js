import React from "react";

// Note: This also works with class components
const HelloWorld = ({ name }) => {
  if (name) return <h1>Hello {name}</h1>;
  return <h1>Hello world</h1>;
};

export default HelloWorld;
