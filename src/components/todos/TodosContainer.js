import React, {Component} from 'react'
import {connect} from 'react-redux'
import Todo from './Todo'

class TodosContainer extends Component {

    renderTodos = () => this.props.todos.map((todo, index) => <Todo key={index} todo={todo}/>)

    render() {
        // debugger
        console.log(this.props.todos)
        return(
        <div>
            {this.renderTodos()}
        </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    displayTodos: data => dispatch({type: 'DISPLAY_TODOS', payload: data})
})

const mapStateToProps = (state) => {
    return {todos: state.todos}
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer)