const initialState = {
  count: 0
};

export const reducerCounter = (state = initialState, action) => {
  switch (action.type) {
    case "arti":
      return { count: state.count + 1 };
    case "eksi":
      return { count: state.count - 1 };
    case "sil":
      return { count: 0 };
    default:
      return state;
  }
};
