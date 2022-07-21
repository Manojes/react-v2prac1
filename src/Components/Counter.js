import React from 'react';
import { useSelector,useDispatch, connect } from 'react-redux';

const Counter = () => {

  const dispatche = useDispatch();
  const counter = useSelector((state) => state.counter);
const show = useSelector((state) => state.showCounter);
  const incrementhandler=()=>{
    dispatche({type:'increment'})
  }
  const decrementhandler=()=>{
    dispatche({type:'decrement'})
  }

   const toggleCounter=()=>{
    dispatche({type:'toggle'})
  }

  const incrementhandlerbyfive=()=>{
    dispatche({type:'increasebyfive',amount:5})
  }
  const hide=()=>{
    dispatche({type:'hide'})
  }


  return (
    <div>
      {show && <div> {counter} </div>}
      <button onClick={incrementhandler}>increment</button>
         <button onClick={incrementhandlerbyfive}>increment by 5</button>
      <button onClick={decrementhandler}>decrement</button>
      <button onClick={toggleCounter}>reset</button>
       <button onClick={hide}>hide</button>
    </div>
  );
};

export default Counter;
