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
        <div className="tracking-main">
            <h1>Goal Tracking</h1>
            <form>
            <input className="input" autoComplete="off" type="text" placeholder="Goal Name" value={newGoal.name} name="name" onChange={handleChange} />
            <input className="input" autoComplete="off" type="text" placeholder="Goal Description" value={newGoal.description} name="description" onChange={handleChange} />
            <input className="input" autoComplete="off" type="date" value={newGoal.date} name="date" onChange={handleChange} />
            <input className="input" autoComplete="off" type="number" placeholder="Target Calories Value" value={newGoal.calories} name="calories" onChange={handleChange} />
            <select className="input" value={newGoal.status} name="status" onChange={handleChange}>
                <option value="">Status</option>
                <option>In Progress</option>
                <option>Achieved</option>
                <option>Abandoned</option>
            </select>
            </form>
            <button className="submit-btn" onClick={handleSubmit} >Add New Goal</button>
            <div className="cards">
                {goals.map(({_id,name,description,date,calories,status}) =>
            <div className="cards-item" key={_id} >
                <p className="description">Goal: {name} </p>
                <p className="description">Description: {description} </p>
                <p>Target Date: {date ? date.slice(0,10).split("-").reverse().join("-") : ""} </p>
                <p>Target Calories: {calories} </p>
                <p>Status: {status} </p>
                <button className="delete-btn" onClick={() => dispatch(deleteGoal(_id)) } >Delete</button>
            </div>
            )}
            </div>
        </div>
    )
}