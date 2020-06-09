import React, { MouseEventHandler, useState } from 'react';
import './App.css';
import HeaderBar from './components/header-bar/header-bar';
import AddButton from './UI/add-button/add-button';
import MainContainer from './components/main-container/main-container';
import Card from './UI/card/card';
import TodoContainer from './components/todo-container/todo-container';
import { useTypedSelector } from "./store/reducer";
import { IInitState } from './interfaces/initState.interface';
import { ITodoContainer } from './interfaces/todoContainer.interface';

function App() {
  const [showCard, setShowCard] = useState(false);
  const containers = useTypedSelector(state => state.containers)  

  const onModalCloseHandler: MouseEventHandler = (event) => {
    setShowCard(false);
  }
  const onNewListHandler: MouseEventHandler = (event) => {
    setShowCard(true);
  }

  return (
    <div className="App">
      <HeaderBar></HeaderBar>
      <Card show={showCard} clickHandler={onModalCloseHandler}>
        <TodoContainer></TodoContainer>
      </Card>
  {containers.length > 0 ? <p>Please add a Todo-list</p>: <p>you have {containers.length} lists</p> }
      <AddButton additionalClasses="main__addButton" width={26} height={26} clickHandler={onNewListHandler} />
    </div>
  );
}

export default App;
