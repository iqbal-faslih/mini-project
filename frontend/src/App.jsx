import { useEffect, useState } from "react";
import axios from "axios";

function App(){
  const [status, setStatus] = useState("");

  useEffect(() =>{
    axios.get("http://localhost:5000/api/health")
    .then(res => setStatus(res.data.status))
    .catch(err => console.error(err));
  },[]);
  
  return(
    <div className="p-6">
      <h1 className="text-2xl font-bold">
        Frontend Connected
        <p>Status API: {status}</p>
      </h1>
    </div>
  );
}

export default App;