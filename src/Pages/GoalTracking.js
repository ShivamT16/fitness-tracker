export const GoalTracking = () => {
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
        </div>
    )
}