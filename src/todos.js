import React, { PureComponent } from 'react'

class Todos extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }


    render() {
       
        const {todos}=this.props;
        return(<div>
            {
                todos.length<0 ? todos.map((todo)=>{
                    return (<div key={todos.id}>
                        {todo.content}
                    </div>)}):
                    <p>No Todo Left Yay!!!!</p>
            }
        </div>)
            
            
        
       
    }
}

export default Todos