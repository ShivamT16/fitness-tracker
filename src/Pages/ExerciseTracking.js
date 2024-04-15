export const ExerciseTracking = () => {
    return(
        <div>
            <h1>Exercise Tracking</h1>
            <form>
            <input type="text" placeholder="Exercise Name" />
            <input type="number" placeholder="Duration (minutes) " />
            <input type="number" placeholder="Calories burned" />
            <button>Add New Exercise</button>
            </form>
        </div>
    )
}