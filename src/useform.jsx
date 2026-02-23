import { useState } from "react";

const UseForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return { values, handleChange };
};

export default UseForm;