const initialState = {
  id: 1,
  title: "Cholas Rojas",
  category: "Cholas",
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return state;

    default:
      return state;
  }
};
