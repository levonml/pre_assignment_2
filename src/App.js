import React, {useState} from 'react';
import ButtonSynch from './components/ButtonSynch';
import ButtonAsynch from './components/ButtonAsynch';
import Count from './components/Count';

const App = () => {
  const [count, setCount] = useState(0);
  const incrementSynch = (event) =>{
    event.preventDefault();
    setCount(count + 1);
  }
  const decrementSynch = (event) =>{
    event.preventDefault();
    setCount(count - 1);
  }
  const incrementAsynch = (event) =>{
    event.preventDefault();
    setTimeout(() => setCount(count + 1), 1000);
  }
  const decrementAsynch = (event) =>{
    event.preventDefault();
    setTimeout(() => setCount(count - 1), 1000);
  }

  return(
    <div>
      <ButtonSynch
        increment = {incrementSynch}
        decrement = {decrementSynch}
      />
      <ButtonAsynch
        increment = {incrementAsynch}
        decrement = {decrementAsynch}
        />
      <Count count = {count}/>
    </div>
  )
}
export default App;
