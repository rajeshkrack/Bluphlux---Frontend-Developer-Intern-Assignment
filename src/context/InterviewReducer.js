export const interviewReducer = (state, action) => {
    switch (action.type) {
      case "ADD_INTERVIEW":
        return { ...state, interviews: [...state.interviews, action.payload] };
      case "UPDATE_INTERVIEW":
        return {
          ...state,
          interviews: state.interviews.map((interview) =>
            interview.id === action.payload.id ? action.payload : interview
          ),
        };
      case "DELETE_INTERVIEW":
        return {
          ...state,
          interviews: state.interviews.filter(
            (interview) => interview.id !== action.payload
          ),
        };
      case "LOAD_INTERVIEWS":
        return { ...state, interviews: action.payload }; // Load interviews from localStorage
      default:
        return state;
    }
  };
  