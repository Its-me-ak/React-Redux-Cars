import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeCar } from '../store/slices/carSlice'



const CarList = () => {
  const dispatch = useDispatch()
  const cars = useSelector(({cars: {data, searchTerm}}) => {
    return data.filter((car) => car.name.toLowerCase().includes(searchTerm.toLowerCase()))
  })

  const handleCarDelete = (car) =>{
    dispatch(removeCar(car.id))
  }
  
  const renderCars = cars.map((car) => (
    <div key={car.id} className='panel'>
      <p>
        {car.name} - ${car.cost}
      </p>
      <button className='button is-danger' onClick={()=> handleCarDelete(car)}>
        delete
      </button>
    </div>
  ))
  return (
    <div className='car-list'>
      {renderCars}
      <hr />
    </div>
  )
}

export default CarList
