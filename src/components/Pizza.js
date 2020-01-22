import React from "react"
import { render } from "react-dom";

// const Pizza = (props) => 
class Pizza extends React.Component {

  // { handleClick, pizza } = props;

  // let handleVeg = (pizza) => {
  //   pizza.vegetarian ? 'Yes' : 'No'
  // }

  handleOnClick = () => {
    this.props.handleClick(this.props.pizza)
  }

  render() {

  return(
    
    <tr>
      <td>{this.props.pizza.topping}</td>
      <td>{this.props.pizza.size}</td>
      <td>{this.props.pizza.vegetarian ? 'Yes' : 'No'}</td>
      <td><button type="button" className="btn btn-primary" onClick={this.handleOnClick}>Edit Pizza</button></td>
    </tr>
  )}
}

export default Pizza
