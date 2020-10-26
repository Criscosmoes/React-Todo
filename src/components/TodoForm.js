import React from 'react'; 
import styled from 'styled-components'; 


const StyledTodoForm = styled.div`

& {
    display: flex; 
    justify-content: center; 
    align-items: center;
    margin: 2%; 
}

button {
    margin: 1%
}

`

const TodoForm = ({onInputChange, input, onFormSubmit}) => {



    return (
       <StyledTodoForm>
           <form onSubmit={onFormSubmit}>
               <input onChange={onInputChange} value={input} type="text" />
               <button type="submit">Add Todo:</button>
               <button type="submit">Clear Completed</button>
           </form>
       </StyledTodoForm>
    )
}

export default TodoForm; 