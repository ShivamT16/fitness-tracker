import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchGoals } from "../actions"

export const GoalTracking = () => {
    const dispatch = useDispatch()
    const goals = useSelector((state)=>state.goals)

    useEffect(() => {
        dispatch(fetchGoals())
    }, [dispatch] )

    return(
        <div>
            <h1>Goal Tracking</h1>
            <form>
            <input type="text" placeholder="Goal Name" />
            <input type="text" placeholder="Goal Description" />
            <input type="date" />
            <input type="number" placeholder="Target Calories Value" />
            <input type="text" placeholder="Status" />
            <button>Add New Goal</button>
            </form>
            <div>
                {goals.map(({_id,name,description,date,calories,status}) =>
            <div key={_id} >
                {name} : {description} : {date.slice(0,10).split("-").reverse().join("-")} : {calories} : {status}
            </div>
            )}
            </div>
        </div>
    )
}