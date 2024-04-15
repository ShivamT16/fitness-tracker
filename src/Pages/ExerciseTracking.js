import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchExercises } from "../actions"

export const ExerciseTracking = () => {
    const dispatch = useDispatch()
    const exercises = useSelector((state) => state.exercise)

    useEffect(() => {
        dispatch(fetchExercises())
    }, [dispatch])

    return(
        <div>
            <h1>Exercise Tracking</h1>
            <form>
            <input type="text" placeholder="Exercise Name" />
            <input type="number" placeholder="Duration (minutes) " />
            <input type="number" placeholder="Calories burned" />
            <button>Add New Exercise</button>
            </form>
            <div>
                {
                    exercises.map(({_id,name,duration,calories}) => 
                <div key={_id}> 
                    {name} : {duration} : {calories}
                </div>
                )
                }
            </div>
        </div>
    )
}