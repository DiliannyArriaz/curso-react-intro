
import './css/TodoItem.css';
import { FiCheckCircle } from '../node_modules/react-icons/fi'
import { RiDeleteBin6Line } from '../node_modules/react-icons/ri'



function TodoItem(props) {
  return (
    <li className={`TodoItem ${props.completed ? "completed" : ""}`}>
      <span
        className={`Icon Icon-check ${props.completed  ? "disabled Icon-check--active" : ""}`}
        onClick={props.onCompleted}
      >
        <FiCheckCircle />
      </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete" onClick={
        props.onDeleted}>
        <RiDeleteBin6Line />
      </span>
    </li>
  );
}

export { TodoItem };