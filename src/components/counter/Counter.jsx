import { useDispatch, useSelector } from "react-redux"
import "./Counter.css"

const Counter = () => {
  const dispatch = useDispatch()
  const countt = useSelector((state)=>state.count)
  return (
    <div className="app">
      <h2 className="counter-header">Counter With Redux</h2>
      <h1>{countt}</h1>
      <div>
        <button
          onClick={() => dispatch({ type: "arti" })}
          className="counter-button positive"
        >
          increase
        </button>
        <button
          onClick={() => dispatch({ type: "sil" })}
          className="counter-button zero"
        >
          reset
        </button>
        <button
          onClick={() => dispatch({ type: "eksi" })}
          className="counter-button negative"
        >
          decrease
        </button>
      </div>
    </div>
  );
}

export default Counter
