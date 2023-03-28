import "./Done.css";
import Item from "../Item/Item";

const Done = (props) => {
  return <div className="wrapper">
    <h3 className="title">{props.title}</h3>
    {props.data.map((task, i) => (
        <Item key={i} desc={task} left={props.left} rbtn_style={props.right_button}/>
      ))}
  </div>;
};

export default Done;
