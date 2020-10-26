// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js


import React from 'react'; 
import styled from 'styled-components'; 
import Todo from '../components/Todo'; 

const StyledTodoList = styled.div`

& {

    display: flex; 
    justify-content: space-around; 
    align-items: center; 
    flex-wrap: wrap; 
    height: 40vh; 
    width: 50%; 
    margin: 2%

}

.task {
    width: 25%; 
    text-align: center; 
}


`


class TodoList extends React.Component {
    constructor() {
        super(); 
    }


    onTodoClick = e => {
        console.log(e.target); 
    }

    render() {

        const renderedList = this.props.todos.map(cur => {
            return <Todo key={cur.id} task={cur.task} id={cur.id}/> 
        })

        return (
            <StyledTodoList>
                {renderedList}
            </StyledTodoList>
        )
    }
}

export default TodoList; 