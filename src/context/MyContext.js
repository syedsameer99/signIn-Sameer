import { useState, createContext, useEffect } from "react";

export const MyContext = createContext();

const ContextProvider = (props) => {
  const initialFormData = JSON.parse(localStorage.getItem("items")) || [];

  const [formData, setFormData] = useState(initialFormData);
  const addFormData = (fName, lName, email, password) => {
    const updatedFormData = [...formData, { fName, lName, email, password }];
    setFormData(updatedFormData);
  };
  const checkFormData = (email, pass) => {
    return formData.find((item) => {
      return item.email === email && item.password === pass;
    });
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(formData));
  }, [formData]);

  return (
    <MyContext.Provider value={{ formData, addFormData, checkFormData }}>
      {props.children}
    </MyContext.Provider>
  );
};

export default ContextProvider;
