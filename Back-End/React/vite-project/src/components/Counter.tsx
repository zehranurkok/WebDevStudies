import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../state/store";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync
 } from "../state/counter/counterSlice";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  
  // This is needed if we're working with asyncronous actions
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>Increment by Amount</button>
        <button onClick={() => dispatch(incrementAsync(10))}>Increment Async</button>
      </div>
    </div>
  );
};

export default Counter;