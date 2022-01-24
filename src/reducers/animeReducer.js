const initState = {
  popular: [],
  newAnime: [],
  upcoming: [],
  searched: [],
};

const animesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return { ...state };

    default:
      return { ...state };
  }
};
export default animesReducer;
