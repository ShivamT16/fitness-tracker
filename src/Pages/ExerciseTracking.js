import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addExercise, deleteExercise, fetchExercises } from "../actions"

export const ExerciseTracking = () => {
    const dispatch = useDispatch()
    const exercises = useSelector((state) => state.exercise)

    const [newExercise, setNewExercise] = useState({
        name: "",
        duration: "",
    })

    useEffect(() => {
        dispatch(fetchExercises())
    }, [dispatch])

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setNewExercise({...newExercise, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addExercise(newExercise))
        setNewExercise({
            name: "",
            duration: "",
        })
    }

    return(
        <div>
            <h1>Exercise Tracking</h1>
            <form>
            <input type="text" placeholder="Exercise Name" value={newExercise.name} name="name" autoComplete="off" onChange={handleChange} />
            <input type="number" placeholder="Duration (minutes) " value={newExercise.duration} name="duration" autoComplete="off" onChange={handleChange} />
            <button onClick={handleSubmit} >Add New Exercise</button>
            </form>
            {/* {console.log(exercises)} */}
            <div>
                {exercises.map(({_id,name,duration,calories}) => 
                <div key={_id}> 
                    {name} : {duration} : {calories}
                    <button onClick={() => dispatch(deleteExercise(_id)) } >Delete</button>
                </div>
                )
                }
            </div>
        </div>
    )
}