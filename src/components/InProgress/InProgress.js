import "./InProgress.css";
import Item from "../Item/Item";

const InProgress = (props) => {
  return (
    <div className="wrapper">
      <h3 className="title">{props.title}</h3>
      {props.data.map((task, i) => (
        <Item key={i} desc={task} right={props.right} left={props.left}/>
      ))}
    </div>
  );
};

export default InProgress;
