import Message from '../message/message';
import style from './displayMessage.module.css';
const Categorie = [
  {
    name : "React js ",
    lastMessage : "8h15",
    numberMessage : '8 messages'
  },
  {
    name : "Sport" ,
    lastMessage : "8h15",
    numberMessage : '6 messages'
  },
  {
    name : "Amino",
    lastMessage : "8h15",
    numberMessage : '1000 messages'
  },
  {
    name : "Eric" ,
    lastMessage : "8h15",
    numberMessage : '100 messages'
  }
];


const DisplayMessage = ({data, miaou}) => {







return (
  <>
  <p>Bienvenue {data}</p>
  <div>
    {Categorie.map((c, index) => <article onClick={() => miaou() } key={index}>{c.name} {c.lastMessage} {c.numberMessage}</article>)}
    
  </div>
  </>
)

};

export default DisplayMessage;