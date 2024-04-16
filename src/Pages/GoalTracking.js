import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addGoal, deleteGoal, fetchGoals } from "../actions"

export const GoalTracking = () => {
    const dispatch = useDispatch()
    const goals = useSelector((state)=>state.goals)

    const [newGoal,setNewGoal] = useState({
        name: "",
        description: "",
        date: "",
        calories: "",
        status: ""
    }) 

    useEffect(() => {
        dispatch(fetchGoals())
    }, [dispatch] )

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setNewGoal({...newGoal, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addGoal(newGoal))
        setNewGoal({
            name: "",
            description: "",
            date: "",
            calories: "",
            status: ""
        }) 
    }

    return(
        <div>
            <h1>Goal Tracking</h1>
            <form>
            <input type="text" placeholder="Goal Name" value={newGoal.name} name="name" onChange={handleChange} />
            <input type="text" placeholder="Goal Description" value={newGoal.description} name="description" onChange={handleChange} />
            <input type="date" value={newGoal.date} name="date" onChange={handleChange} />
            <input type="number" placeholder="Target Calories Value" value={newGoal.calories} name="calories" onChange={handleChange} />
            <select value={newGoal.status} name="status" onChange={handleChange}>
                <option value="">Status</option>
                <option>In Progress</option>
                <option>Achieved</option>
                <option>Abandoned</option>
            </select>
            <button onClick={handleSubmit} >Add New Goal</button>
            </form>
            <div>
                {goals.map(({_id,name,description,date,calories,status}) =>
            <div key={_id} >
                {name} : {description} : {date} : {calories} : {status}
                <button onClick={() => dispatch(deleteGoal(_id)) } >Delete</button>
            </div>
            )}
            </div>
        </div>
    )
}