import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addExercise, deleteExercise, fetchExercises } from "../actions"
import "./pages.css"

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
        <div className="tracking-main">
            <h1>Exercise Tracking</h1>
            <form>
            <input className="input" type="text" placeholder="Exercise Name" value={newExercise.name} name="name" autoComplete="off" onChange={handleChange} />
            <input className="input" type="number" placeholder="Duration (minutes) " value={newExercise.duration} name="duration" autoComplete="off" onChange={handleChange} />
            </form>
            <button className="submit-btn" onClick={handleSubmit} >Add New Exercise</button>
            <div className="cards">
                {exercises.map(({_id,name,duration,calories}) => 
                <div className="cards-item" key={_id}> 
                    <p>Exercise Name: {name}</p>
                    <p>Duration: {duration} min</p>
                    <p>Calories: {calories}</p>
                    <button className="delete-btn" onClick={() => dispatch(deleteExercise(_id)) } >Delete</button>
                </div>
                )
                }
            </div>
        </div>
    )
}