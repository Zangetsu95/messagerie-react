import style from './message.module.css';

const Message = ({data}) => {

return (
  <>
   <h2>{data}, voici le message sélectionné </h2> 
    <div className={style.messageDeco}>
    <p>Ceci est mon message</p>
    </div>
  </>
)


};
export default Message;