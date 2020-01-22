import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

const API = 'http://localhost:3000/pizzas'

class App extends Component {

  state = {
    pizzaArray: [],
    editPizza: {}
  }

  componentDidMount() {
    fetch(API)
    .then(resp => resp.json())
    .then(pizzaArray => this.setState({pizzaArray}))
  }

  editPizza = (pizzaObj) => {
    this.setState({editPizza: pizzaObj})
  }

  editTopping = (e) => {
    this.setState({ editPizza: {
      id: this.state.editPizza.id,
      topping: e.target.value,
      size: this.state.editPizza.size,
      vegetarian: this.state.editPizza.vegetarian
    } })
  }

  editSize = (e) => {
    this.setState({ editPizza: {
      id: this.state.editPizza.id,
      topping: this.state.editPizza.topping,
      size: e.target.value,
      vegetarian: this.state.editPizza.vegetarian
    } })
  }

  editVeg = (e) => {
    this.setState({ editPizza: {
      id: this.state.editPizza.id,
      topping: this.state.editPizza.topping,
      size: this.state.editPizza.size,
      vegetarian: e.target.value
    } })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let index = this.state.editPizza.id - 1
    this.state.pizzaArray.splice(index, 1, this.state.editPizza)
    let array = this.state.pizzaArray
    this.setState({pizzaArray: array})
  }

  render() {

    // console.log(this.state.pizzaArray)

    return (
      <Fragment>
        <Header/>
        <PizzaForm editPizza={this.state.editPizza} editTopping={this.editTopping} editSize={this.editSize} editVeg={this.editVeg} handleSubmit={this.handleSubmit}/>
        <PizzaList pizzaArray={this.state.pizzaArray} handleClick={this.editPizza}/>
      </Fragment>
    );
  }
}

export default App;
