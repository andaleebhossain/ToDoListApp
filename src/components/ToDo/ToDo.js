import "./ToDo.css";
import Item from "../Item/Item";

const ToDo = (props) => {
  return (
    <div className="wrapper">
      <h3 className="title">{props.title}</h3>
      <button onClick={props.addH} className="but">+</button>
      {props.data.map((task, i) => (
        <Item key={i} desc={task} right={props.right} btn_style={props.left_button}/>
      ))}
    </div>
  );
};

export default ToDo;
