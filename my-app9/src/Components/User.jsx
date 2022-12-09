import React, { useState } from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { id } = useParams();
  console.log(id);
  const [equipos, setEquipos] = useState([]);
  React.useEffect(() => {
    const getDates = async () => {
      const Date = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`
      );
      const users = await Date.json();
      setEquipos(users);
    };
    getDates();
  }, [id]);

  return (
    <div>
      <h3>{equipos.name}</h3>
      <p>{equipos.email}</p>
    </div>
  );
};

export default User;
