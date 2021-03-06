import "../styles/globals.css";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [formData, setFormData] = useState(null);
  const [toDos, setToDos] = useState([]);
  const [newGuest, setNewGuest] = useState([]);
  const [newExpense, setNewExpense] = useState([]);

  function addNewData(data) {
    setFormData(data);
  }

  function addNewToDos(data) {
    setToDos(data);
  }

  function addNewGuest(data) {
    setNewGuest([...newGuest, data]);
  }

  function addNewExpense(data) {
    setNewExpense([...newExpense, data]);
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
