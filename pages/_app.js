import "../styles/globals.css";
import { useState } from "react/cjs/react.development";

function MyApp({ Component, pageProps }) {
  const [formData, setFormData] = useState(null);
  function addNewData(data) {
    setFormData(data);
  }
  return (
    <Component {...pageProps} addNewData={addNewData} formData={formData} />
  );
}

export default MyApp;
