import { useDispatch, useSelector } from "react-redux"
import "./dashboard.css"
import { useEffect } from "react"
import { fetchExercises, fetchFood, fetchGoals } from "../actions"

export const Dashboard = () => {
    const  dispatch = useDispatch()
    const exercises = useSelector((state) => state.exercise)
    const food = useSelector((state) => state.food)
    const goal = useSelector((state) =>state.goals)

    const totolExerciseCalories = exercises.reduce((acc,curr) => curr.calories + acc, 0)
    const totolFoodCalories = food.reduce((acc,curr) => curr.calories + acc, 0)
    const totolGoalCalories = goal.reduce((acc,curr) => curr.calories + acc, 0)

    useEffect(() => {
        dispatch(fetchExercises());
        dispatch(fetchFood());
        dispatch(fetchGoals());
    }, [dispatch])


    return(
        <div className="dashboard" >
            <h1>Dashboard</h1>
        <div className="board">    
            <div className="card" >
            <p>Total Calories Burned</p>
            {totolExerciseCalories}
            </div>
            <div className="card">
            <p>Total Calories Consumed</p>
            {totolFoodCalories}
            </div>
            <div className="card">
            <p>Total Calories Goal</p>
            {totolGoalCalories}
            </div>
            <div className="card">
            <p>Remaining Calories to Goal </p>
            {totolGoalCalories - totolExerciseCalories}
            </div>
        </div>    
        </div>
    )
} 