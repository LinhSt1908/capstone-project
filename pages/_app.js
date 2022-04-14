import "../styles/globals.css";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [formData, setFormData] = useState(null);
  const [toDos, setToDos] = useState([]);
  const [newGuest, setNewGuest] = useState(null);
  const [newExpense, setNewExpense] = useState(null);

  function addNewData(data) {
    setFormData(data);
  }

  function addNewToDos(data) {
    setToDos(data);
  }

  function addNewGuest(data) {
    setNewGuest(data);
  }

  function addNewExpense(data) {
    setNewExpense(data);
  }

  return (
    <Component
      {...pageProps}
      addNewData={addNewData}
      formData={formData}
      addNewToDos={addNewToDos}
      toDos={toDos}
      addNewGuest={addNewGuest}
      newGuest={newGuest}
      addNewExpense={addNewExpense}
      newExpense={newExpense}
    />
  );
}

export default MyApp;
