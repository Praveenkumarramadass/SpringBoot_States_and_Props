import React from "react";
import './App.css';

// function App() {
//   const [isImportant,setIsImportant] = React.useState("yes")
//   function handleClick(){
//     setIsImportant("No")
//   }
//   return (
//     <div className="App">
//       <h1 className="title">Is State is important to know ?</h1>
//       <h1 className="title-" onClick={handleClick}>{isImportant}</h1>
//     </div>
//   );
// }

function App(){
  const [isGoingOut,setIsGoingOut] = React.useState(true)
  function chnageMind(){
    setIsGoingOut(prevState => !prevState)
  }
  return(
    <div>
      <h1>You are good boy!!!?</h1>
      <div onClick={chnageMind}>
        <h1>{isGoingOut ? "Yes" : "No"}</h1>
      </div>
    </div>
  );
}

export default App;
