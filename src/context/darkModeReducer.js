const DarkModeReducer = (state, action) => {
  switch (action.type) {
    case "LIGHT": {
      return {
        ...state,
        darkMode: false,
      };
    }
    case "DARK": {
      return { ...state, darkMode: true };
    }
    case "TOGGLE": {
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    }
    case "SMALL": {
      return {
        ...state,
        size: 3,
      };
    }
    case "MEDIUM": {
      return {
        ...state,
        size: 5,
      };
    }
    case "LARGE": {
      return {
        ...state,
        size: 7,
      };
    }
    default:
      return state;
  }
};

export default DarkModeReducer;
