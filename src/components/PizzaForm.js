import React from "react"

const PizzaForm = (props) => {

  let { id, topping, size, vegetarian } = props.editPizza;
  let { editTopping, editSize, editVeg, handleSubmit} = props;

  // console.log(topping)

  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" placeholder="Pizza Topping" value={
                //Pizza Topping Should Go Here
                topping
              } onChange={editTopping}/>
        </div>
        <div className="col">
          <select value={size} className="form-control" onChange={editSize}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Vegetarian" checked={vegetarian ? true : false} onChange={editVeg}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Not Vegetarian" checked={vegetarian ? false : true} onChange={editVeg}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={handleSubmit}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
