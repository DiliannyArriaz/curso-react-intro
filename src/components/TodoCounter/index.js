import './TodoCounter.css';

function TodoCounter({ total, completed }) {
  let mensaje;
  if (total <= 0) {
    mensaje = (
      <h1 className='TodoCounter'>Aún no tienes To Dos</h1>
    );
  } else if (total === completed) {
    mensaje = (
      <h1 className='TodoCounter'> Felicidades! Has completado todos tus ToDos</h1>
    )
  } else {
    mensaje = (
      <h1 className="TodoCounter">
        Has completado <span>{completed}</span> de <span>{total}</span> TODOs
      </h1>
    );
  };
  return mensaje
}

export { TodoCounter };
