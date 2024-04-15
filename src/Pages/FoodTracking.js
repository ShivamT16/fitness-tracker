import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchFood } from "../actions"

export const FoodTracking = () => {
    const dispatch = useDispatch()
    const food = useSelector((state)=> state.food)

    useEffect(() => {
        dispatch(fetchFood())
    }, [dispatch])

    return(
        <div>
            <h1>Food Tracking</h1>
            <form>
            <input type="text" placeholder="Food Name" />
            <input type="number" placeholder="Calories" />
            <input type="number" placeholder="Protein (grams)" />
            <input type="number" placeholder="Carbohydrates (grams)" />
            <input type="number" placeholder="Fat (grams)" />
            <button>Add New Item</button>
            </form>
            <div>
                {food.map(({_id,foodName,calories,protein,carbohydrates,fat}) =>
              <div key={_id} >
                {foodName} : {calories} : {protein} : {carbohydrates} : {fat}
              </div>
            )}
            </div>
        </div>
    )
}
