import { useDispatch, useSelector } from "react-redux"
import "./Counter.css"
import { arttir } from "../../store/reducerCounter"
import {azaltma} from '../../store/reducerCounter'

const Counter = () => {
  const dispatch = useDispatch()
  const countt = useSelector((state) => state.reducerCounter.count);
  return (
    <div className="app">
      <h2 className="counter-header">Counter With Redux</h2>
      <h1>{countt}</h1>
      <div>
        <button
          onClick={() => dispatch({ type: arttir })}
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
          onClick={() => dispatch(azaltma())}
          className="counter-button negative"
        >
          decrease
        </button>
      </div>
    </div>
  );
}

export default Counter
