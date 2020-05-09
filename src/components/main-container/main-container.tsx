import React from 'react';
import TodoContainer from '../todo-container/todo-container';
import './main-container.css';

const MainContainer:React.FC = (props) => {
    return(
    <div className="mainContainer">
        <TodoContainer></TodoContainer>
    </div>
);
}

export default MainContainer;