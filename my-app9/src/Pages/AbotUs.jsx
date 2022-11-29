import React, {useState} from "react";
import {Link} from 'react-router-dom';
import { Fragment } from "react";
const AboutUs = () => {
  const [equipos, setEquipos] = useState([]);
  React.useEffect(() => {
    getDates();
  }, []);

  const getDates = async () => {
    const Date = await fetch(`https://jsonplaceholder.typicode.com/users`);
     const users=  await Date.json()
     setEquipos(users)
   
   
  };
  return (
    <Fragment>
      <h1>Nosotros</h1>
      <ul>
      {
        equipos.map(item=>(
            <li key={item.id}><Link to={`/AboutUs${item.id}`}>{item.name}</Link></li>
        ))
      }
      </ul>
     
    </Fragment>
  );
};

export default AboutUs;
