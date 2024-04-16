const initialState = {
    exercise: [],
    food: [],
    goals: [],
    loading: false,
    error: null
}

export const fitnessReducer = (state = initialState, action) => {
    switch(action.type){
        case "FETCH_DATA_LOADING": 
          return{
            ...state,
            loading: true
          }
        case "FETCH_EXERCISE_DATA_SUCCESS":
          return{
            ...state,
            exercise: action.payload,
            loading: false,
            error: null
          }
        case "FETCH_EXERCISE_DATA_FAILURE":
          return{
            ...state,
            loading: false,
            error: "Error fetching exercise data."
          }
        case "ADD_EXERCISE":
          return{
            ...state,
            exercise: [...state.exercise, action.payload],
            loading:false,
            error: null
          }
        case "REMOVE_AN_EXERCISE":
          return{
            ...state,
            exercise: state.exercise.filter((item) => item._id !== action.payload),
            loading: false,
            error: null
          }
        case "FETCH_FOOD_DATA_SUCCESS":
          return{
              ...state,
              food: action.payload,
              loading: false,
              error: null
            }
        case "FETCH_FOOD_DATA_FAILURE":
          return{
              ...state,
              loading: false,
              error: "Error fetching food data."
            }
        case "ADD_FOOD":
          return{
                  ...state,
                  food: [...state.food, action.payload],
                  loading:false,
                  error: null
                }
        case "REMOVE_FOOD":
          return{
                  ...state,
                  food: state.food.filter((item) => item._id !== action.payload),
                  loading: false,
                  error: null
                } 
        case "FETCH_GOAL_DATA_SUCCESS":
          return{
                      ...state,
                      goals: action.payload,
                      loading: false,
                      error: null
                    }
        case "FETCH_GOAL_DATA_FAILURE":
                    return{
                      ...state,
                      loading: false,
                      error: "Error fetching goals data."
                    }
        case "ADD_GOAL":
                        return{
                          ...state,
                          goals: [...state.goals, action.payload],
                          loading:false,
                          error: null
                        }
        case "REMOVE_GOAL":
                        return{
                          ...state,
                          goals: state.goals.filter((item) => item._id !== action.payload),
                          loading: false,
                          error: null
                        }
        case "ADD_ENTRY_FAILURE": 
          return{
            ...state,
            loading: false,
            error: "Error fetching data or performing action"
          } 
        default:
            return state;

    }
}