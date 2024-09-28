import { useState } from "react";





function App() {

  let [value, SetValue] = useState(0);

  const DecreaseValue = () => {
   value--;
   SetValue(value);
  }

  const IncreaseValue = () => {
    value++;
    SetValue(value);
  }

  const DecrementIncrementCounter = () => {

    return (
    <div style={{width: '80%', padding: '50px', backgroundColor: 'blue', color: 'white', display: 'flex'}}>
        
        <div style={{ border: 'solid white', width: '100px', height: '100px', backgroundColor: 'white', color: 'black', display: 'flex', 'justifyContent': "center", textAlign: "center", flexDirection: "column"}}>{ value }</div>
        <button onClick={DecreaseValue} style={{ padding: '40px', backgroundColor: 'red', color: 'white' }}>-</button>
        <button onClick={IncreaseValue} style={{ padding: '40px', backgroundColor: 'green', color: 'white' }}>+</button>
    </div>
    
    )
    
    }
    

  return(
    <>
    <p style={{ width: '80%', backgroundColor: "blue", padding: '20px', margin: 'auto', color: 'white' }}>INCREMENT AND DECREAMENT USING USETATE COMPONENT HOOK</p>
    <DecrementIncrementCounter/>
    </>
    
  )
}









export default App;








/*


let currDate = new Date();




function App() {

  const[name, SetName] = useState('Austin');


  const ClickFunction = () => {
  
    return SetName('Austin Has Clicked This');
  
  }


  return( 
  <>
 
  <div className="book-list">
    <Book title='Things Fall Appart' author='Chinua Achebe' description='A fiction book partening to Africa' date={ currDate.getUTCDate() } />
    <Book title='There was a country' author='Chinua Achebe' description='A fiction book partening to Africa' date={ currDate.getUTCDate() } />
    <Book title='Arrow of the gods' author='Chinua Achebe' description='A fiction book partening to Africa' date={ currDate.getUTCDate() }/>
    <Book title='The Lion and the jewel' author='Wole Soyinka' description='A fiction about deceit of a youn vilage belle' date={ currDate.getUTCDate() } />
  </div>

  <p> { name } </p>

  <button onClick={ ClickFunction }>click me</button>

  </>
  );
}

export default App;


const Book = (props) => {
  return(

      <div style={{ marginBottom: '20px', padding: '10px' }}>
        <p> Book Title: {props.title} </p>
        <p> Book Author: {props.author} </p>
        <p> Book Description: {props.description} </p>
        <p> Book Date: {props.date} </p>
        <hr/>

      </div>
  );
}


*/


