import { useSelector } from "react-redux"

export const Dashboard = () => {
    const exercises = useSelector((state) => state.exercise)
    const food = useSelector((state) => state.food)
    const goal = useSelector((state) =>state.goals)

    const totolExerciseCalories = exercises.reduce((acc,curr) => curr.calories + acc, 0)
    const totolFoodCalories = food.reduce((acc,curr) => curr.calories + acc, 0)
    const totolGoalCalories = goal.reduce((acc,curr) => curr.calories + acc, 0)


    return(
        <div>
            <h1>Dashboard</h1>
            Total Calories Burned: {totolExerciseCalories}
            Total Calories Consumed: {totolFoodCalories}
            Total Calories Goal: {totolGoalCalories}
            Remaining Calories to Goal: {totolGoalCalories - totolExerciseCalories}
        </div>
    )
} 