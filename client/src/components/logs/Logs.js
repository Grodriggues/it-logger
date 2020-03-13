import React, { useState, useEffect } from "react";

function Logs() {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getLogs();
  }, []);

  const getLogs = async () => {
    setLoading(true);
    const res = await fetch("/logs");
    console.log("to aqui", res);
    const data = await res.json();

    setLogs(data);
    setLoading(false);
  };

  if (loading) {
    return <h3>Loading..</h3>;
  }

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">System Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p>No logs</p>
      ) : (
        logs.map(log => <li>{log.message}</li>)
      )}
    </ul>
  );
}

export default Logs;
