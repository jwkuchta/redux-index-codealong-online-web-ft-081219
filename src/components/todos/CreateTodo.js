import React, { Component } from 'react'
import { connect } from 'react-redux'
// import TodosContainer from './TodosContainer';

class CreateTodo extends Component {

  constructor() {
    super();
    this.state = {
      text: '',
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.state)
  }

  handleChange(event) {
    this.setState({
      text: event.target.value
    });
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
    	    <label>add todo</label>
          <input type="text" onChange={(event) => this.handleChange(event)} value={this.state.text}/>
          <input type="submit" />
       </form>
     </div>
   );
  }
};

const mapDispatchToProps = dispatch => ({
  addTodo: formData => dispatch({ type: 'ADD_TODO', payload: formData })
})

const mapStateToProps = (state) => {
  return {todos: state.todos}
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTodo);
