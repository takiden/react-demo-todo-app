import React, { MouseEventHandler } from 'react';
import './App.css';
import HeaderBar from './components/header-bar/header-bar';
import AddButton from './UI/add-button/add-button';
import MainContainer from './components/main-container/main-container';

function App() {

  const addNewContainer:MouseEventHandler =(event) => { 
    console.log(`add new container`);
   }
  return (
    <div className="App">
    <HeaderBar></HeaderBar>      
    <MainContainer></MainContainer>
    <AddButton additionalClasses="main__addButton"  width={36} height={36} clickHandler={addNewContainer}/>
    </div>
  );
}

export default App;
