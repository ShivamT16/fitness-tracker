export const fetchExercises = () => async (dispatch) => {
    try{
        dispatch({type: "FETCH_DATA_LOADING"});
        const response = await fetch("https://fitness-tracker-management.vercel.app/exercises")
        const data = await response.json();
        dispatch({type: "FETCH_EXERCISE_DATA_SUCCESS", payload: data})
    }
    catch(error){
        console.log("Error fetching exercise data", error);
        dispatch({type: "FETCH_EXERCISE_DATA_FAILURE"})
    }
}

export const addExercise = (newExercise) => async (dispatch) => {
    try{
     const response = await fetch("https://fitness-tracker-management.vercel.app/exercises",{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newExercise)
     })
     const data = await response.json()
     if(data) {
        dispatch({type: "ADD_EXERCISE", payload: data})
     }
    }
    catch(error) {
      console.log('Error adding exercise',error)
      dispatch({type: "ADD_ENTRY_FAILURE" })
    }
}

export const deleteExercise = (exerciseId) => async (dispatch) => {
    try{
        const response = await fetch(`https://fitness-tracker-management.vercel.app/exercises/${exerciseId}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        dispatch({type: "REMOVE_AN_EXERCISE", payload: exerciseId})
    }
    catch(error){
      console.log('Error deleting exercise',error)
      dispatch({type: "ADD_ENTRY_FAILURE" })
    }
}
  
export const fetchFood = () => async (dispatch) => {
    try{
        dispatch({type: "FETCH_DATA_LOADING"});
        const response = await fetch("https://fitness-tracker-management.vercel.app/food")
        const data = await response.json();
        dispatch({type: "FETCH_FOOD_DATA_SUCCESS", payload: data})
    }
    catch(error){
        console.log("Error fetching food data", error);
        dispatch({type: "FETCH_FOOD_DATA_FAILURE"})
    }
}

export const addFood = (newFood) => async (dispatch) => {
    try{
     const response = await fetch("https://fitness-tracker-management.vercel.app/food",{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newFood)
     })
     const data = await response.json()
     if(data) {
        dispatch({type: "ADD_FOOD", payload: data})
     }
    }
    catch(error) {
      console.log('Error adding food',error)
      dispatch({type: "ADD_ENTRY_FAILURE" })
    }
}

export const deleteFood = (foodId) => async (dispatch) => {
    try{
        const response = await fetch(`https://fitness-tracker-management.vercel.app/food/${foodId}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        dispatch({type: "REMOVE_FOOD", payload: foodId})
    }
    catch(error){
        console.log('Error deleting food',error)
        dispatch({type: "ADD_ENTRY_FAILURE" })
      }
}

export const fetchgoals = () => async (dispatch) => {
    try{
        dispatch({type: "FETCH_DATA_LOADING"});
        const response = await fetch("https://fitness-tracker-management.vercel.app/goals")
        const data = await response.json();
        dispatch({type: "FETCH_GOAL_DATA_SUCCESS", payload: data})
    }
    catch(error){
        console.log("Error fetching goals data", error);
        dispatch({type: "FETCH_GOAL_DATA_FAILURE"})
    }
}

export const addGoal = (newGoal) => async (dispatch) => {
    try{
     const response = await fetch("https://fitness-tracker-management.vercel.app/goals",{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newGoal)
     })
     const data = await response.json()
     if(data) {
        dispatch({type: "ADD_GOAL", payload: data})
     }
    }
    catch(error) {
      console.log('Error adding goal',error)
      dispatch({type: "ADD_ENTRY_FAILURE" })
    }
}

export const deleteGoal = (goalId) => async (dispatch) => {
    try{
        const response = await fetch(`https://fitness-tracker-management.vercel.app/goals/${goalId}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        dispatch({type: "REMOVE_GOAL", payload: goalId})
    }
    catch(error){
        console.log('Error deleting goal',error)
        dispatch({type: "ADD_ENTRY_FAILURE" })
      }
}