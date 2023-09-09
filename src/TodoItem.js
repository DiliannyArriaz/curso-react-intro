import './css/TodoItem.css';
import checklogo from './css/icons8-comprobado-32.png'
import closelogo from './css/icons8-x-50.png'

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}>
        <img src={checklogo} alt='Check Icon' className='checklogo'></img>
      </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete">
        <img src={ closelogo } alt='closelogo' className='closelogo'></img>
      </span>
    </li>
  );
}

export { TodoItem };