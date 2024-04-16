import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addFood, deleteFood, fetchFood } from "../actions"

export const FoodTracking = () => {
    const dispatch = useDispatch()
    const food = useSelector((state)=> state.food)

    const [addNewFood, setAddNewFood] = useState({
        foodName: "",
        calories: "",
        protein: "",
        carbohydrates: "",
        fat: ""
    })
    
    useEffect(() => {
        dispatch(fetchFood())
    }, [dispatch])

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setAddNewFood({...addNewFood, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addFood(addNewFood))
        setAddNewFood({
            foodName: "",
            calories: "",
            protein: "",
            carbohydrates: "",
            fat: ""
        })
    }

    return(
        <div className="tracking-main">
            <h1>Food Tracking</h1>
            <form>
            <input className="input" type="text" placeholder="Food Name" value={addNewFood.foodName} name="foodName" onChange={handleChange}  />
            <input className="input" type="number" placeholder="Calories" value={addNewFood.calories} name="calories" onChange={handleChange} />
            <input className="input" type="number" placeholder="Protein (grams)" value={addNewFood.protein} name="protein" onChange={handleChange} />
            <input className="input" type="number" placeholder="Carbohydrates (grams)" value={addNewFood.carbohydrates} name="carbohydrates" onChange={handleChange} />
            <input className="input" type="number" placeholder="Fat (grams)" value={addNewFood.fat} name="fat" onChange={handleChange} />
            </form>
            <button className="submit-btn" onClick={handleSubmit} >Add New Item</button>
            <div className="cards">
                {food.map(({_id,foodName,calories,protein,carbohydrates,fat}) =>
              <div className="cards-item" key={_id} >
                <p className="description">Food Name: {foodName} </p>
                <p>Calories: {calories} </p>
                <p>Protein: {protein} </p>
                <p>Carbohydrates: {carbohydrates} </p>
                <p>Fat: {fat} </p>
                <button className="delete-btn" onClick={() => dispatch(deleteFood(_id)) } >Delete</button>
              </div>
            )}
            </div>
        </div>
    )
}
