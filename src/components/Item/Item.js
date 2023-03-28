import "./Item.css";

const Item = (props) => {
  return (
    <div className="card">
      <p>{props.desc}</p>
      <button onClick={props.right} className="right-button" style={{display: props.rbtn_style}}>→</button>
      <button onClick={props.left} className="left-button" style={{display: props.btn_style}}>←</button>
    </div>
  );
};

export default Item;
