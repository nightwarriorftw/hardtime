const initialState = {
    events: [],
};

const Posts = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;      

    case "CREATE":
      return state;


    default:
      return state;

  }
};

export default Posts;