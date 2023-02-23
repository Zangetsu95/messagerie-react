import { useState, useEffect } from 'react';
import Message from '../message/message';
import style from './displayMessage.module.css';
import axios from 'axios';

const Categorie = [
  {
    name: "React js ",
    lastMessage: "8h15",
    numberMessage: '8 messages'
  },
  {
    name: "Sport",
    lastMessage: "8h15",
    numberMessage: '6 messages'
  },
  {
    name: "Amino",
    lastMessage: "8h15",
    numberMessage: '1000 messages'
  },
  {
    name: "Eric",
    lastMessage: "8h15",
    numberMessage: '100 messages'
  }
];





const DisplayMessage = ({ data, miaou }) => {

  const [dataDB, setDataDB] = useState([]);
  const [error,setError] = useState();


  useEffect(() => {
    axios.get(`http://localhost:8080/api/subject/category`)
      .then(response => {
      const res = response.data
      setDataDB(res);
      console.log(res);

    }).catch(response => {
      setError(response.message);
    })

    return () => {
      setDataDB(null);
      setError(null);
    }



  },[])



  return (
    <>
      <h2 className={style.center}>Bienvenue <span className={style.name}>{data}</span></h2>
      <div>
        {dataDB && dataDB.map((c, index) => <article onClick={() => miaou()} key={index}><h3>{c.name}</h3> Nombre de message{c.count > 1 && "s"} :  {c.count} <p>Dernier message : {c.lastUpdate}</p> </article>)}
        
      </div>
    </>
  )

};

export default DisplayMessage;