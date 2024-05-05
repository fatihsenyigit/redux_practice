const initialState = {
  count: 0
};

export const arttir = 'arti'
export const eksilt = 'eksi'

export const azaltma = () => {
    return {type:eksilt}
}

export const reducerCounter = (state = initialState, action) => {
  switch (action.type) {
    case arttir:
      return { count: state.count + 1 };
    case eksilt:
      return { count: state.count - 1 };
    case "sil":
      return { count: 0 };
    default:
      return state;
  }
};
