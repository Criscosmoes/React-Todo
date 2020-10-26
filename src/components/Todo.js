import React from 'react'; 



class Todo extends React.Component {
    constructor(){
        super(); 


    }


    onTodoClick = e => {

        console.log(e.target,id)
    }

    render() {



        return (
            <div onClick={this.onTodoClick} id={this.props.id} name={this.props.task} >
                {this.props.task}
            </div>
        )
    }
}


export default Todo; 