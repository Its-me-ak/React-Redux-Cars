import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeCar } from '../store/slices/carSlice'



const CarList = () => {
  const dispatch = useDispatch()
  const { cars, name } = useSelector(({ form, cars: { data, searchTerm } }) => {
    const filteredCar = data.filter((car) => car.name.toLowerCase().includes(searchTerm.toLowerCase()))
    return {
      cars: filteredCar,
      name: form.name
    }
  })

  const handleCarDelete = (car) => {
    dispatch(removeCar(car.id))
  }

  const renderCars = cars.map((car) => {
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase())
    return (
      <div key={car.id} className={`panel ${bold && 'text-bold'}`}>
        <p>
          {car.name} - ${car.cost}
        </p>
        <button className='button is-danger' onClick={() => handleCarDelete(car)}>
          delete
        </button>
      </div>
    )
  })
  return (
    <div className='car-list'>
      {renderCars}
      <hr />
    </div>
  )
}

export default CarList
