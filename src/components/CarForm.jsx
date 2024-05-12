import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeCost, changeName } from '../store/slices/formSlice'
import { addCar } from '../store/slices/carSlice'

const CarForm = () => {
  const dispatch = useDispatch()
  const { name, cost } = useSelector((state) => {
    return {
      name: state.form.name,
      cost: state.form.cost
    }
  })

  const handleNameChange = (e) => {
    dispatch(changeName(e.target.value))
  }

  const handleCostChange = (e) => {
    const carCost = parseInt(e.target.value) || 0
    dispatch(changeCost(carCost))
  }

  const handleFormSubmit = (e) =>{
    e.preventDefault()
    dispatch(addCar({
      name,
      cost
    }))
  }
  return (
    <div className='car-form panel'>
      <h4 className='subtitle is-3'>Add Car</h4>
      <form onSubmit={handleFormSubmit}>
        <div className="field-group">
          <div className="field">
            <label className="label">Name</label>
            <input className="input is-exanded" type="text"
              value={name}
              onChange={handleNameChange}
            />
          </div>

          <div className="field">
            <label className="label">Cost</label>
            <input className="input is-exanded" type="number"
              value={cost || ""}
              onChange={handleCostChange}
            />
          </div>

          <div className='field'>
            <button className='button is-link' type='submit'>Submit</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default CarForm
