import './App.css';
import React from 'react';
import Child from './Child';

function App() {
  const data1="Junaid khan"

  function parentAlert(data2,object){
    alert(data2);
    //alert(data2,object);// this is not valide
    //you can't directly see object in alert box
    alert(object.name);
    alert(object.Address);
    console.log(object);
    // console.log(data2,object);// this is also valide
  }
  return (
    <div className="App">
      <h1> It is Parent component and in alert box email id comes from child component </h1>
      <Child name={data1} CBFunction={parentAlert}/>
     
    </div>
  );
}

export default App;
