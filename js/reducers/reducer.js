const initialState = {
  summaries: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_SUMMARY':
      // valid summary must have 4 required properties: 'title', 'date', 'author', 'excerpt'
      if (['title', 'date', 'author', 'excerpt'].every(prop => prop in action.payload)) {
        return {
          ...state,
          summaries: [...state.summaries, action.payload]
        }
      } else {
        return state;
      }

    default:
      return state;
  }
};

export {
  initialState,
  reducer
};
