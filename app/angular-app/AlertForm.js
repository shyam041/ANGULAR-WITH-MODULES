import React from "react";

const AlertForm = ({ fnc }) => {
  const [name, setName] = React.useState("");
  const handleButtonSubmit = (e) => {
    fnc(name);
  };

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleInputChange} />
      <button onClick={handleButtonSubmit}>Save</button>
    </div>
  );
};

export default AlertForm;
