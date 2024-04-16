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
        <div>
            <h1>Food Tracking</h1>
            <form>
            <input type="text" placeholder="Food Name" value={addNewFood.foodName} name="foodName" onChange={handleChange}  />
            <input type="number" placeholder="Calories" value={addNewFood.calories} name="calories" onChange={handleChange} />
            <input type="number" placeholder="Protein (grams)" value={addNewFood.protein} name="protein" onChange={handleChange} />
            <input type="number" placeholder="Carbohydrates (grams)" value={addNewFood.carbohydrates} name="carbohydrates" onChange={handleChange} />
            <input type="number" placeholder="Fat (grams)" value={addNewFood.fat} name="fat" onChange={handleChange} />
            <button onClick={handleSubmit} >Add New Item</button>
            </form>
            <div>
                {food.map(({_id,foodName,calories,protein,carbohydrates,fat}) =>
              <div key={_id} >
                {foodName} : {calories} : {protein} : {carbohydrates} : {fat}
                <button onClick={() => dispatch(deleteFood(_id)) } >Delete</button>
              </div>
            )}
            </div>
        </div>
    )
}
