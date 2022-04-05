import "../styles/globals.css";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [formData, setFormData] = useState(null);
  const [toDos, setToDos] = useState([]);

  function addNewData(data) {
    setFormData(data);
  }

  function addNewToDos(data) {
    setToDos(data);
  }
  return (
    <Component
      {...pageProps}
      addNewData={addNewData}
      formData={formData}
      addNewToDos={addNewToDos}
      toDos={toDos}
    />
  );
}

export default MyApp;
