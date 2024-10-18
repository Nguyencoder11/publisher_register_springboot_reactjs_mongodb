import "bootstrap/dist/css/bootstrap.css";
import api from "./api/axiosConfig";
import { useEffect, useState } from "react";
import "./App.css";
import PublisherCrud from "./components/PublisherCrud";

function App() {
  const [publishers, setPublishers] = useState([]);

  // Manage side effects
  useEffect(() => {
    (async () => await load())();
  }, []);

  async function load() {
    const result = await api.get("/all");
    setPublishers(result.data);
  }

  return (
    <div>
      <h1 className="text-center">List Of Publisher</h1>
      <PublisherCrud load={load} publishers={publishers} />
    </div>
  );
}

export default App;
