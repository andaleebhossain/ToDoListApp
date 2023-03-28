import './TaskAdder.css'

const TaskAdder = (props) => {
    return <form className='container'>
        <input onChange={props.change} value={props.state}/>
        <button onClick={props.add}>Add</button>
    </form>
};

export default TaskAdder;