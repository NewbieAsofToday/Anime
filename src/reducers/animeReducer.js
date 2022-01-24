const initState = {
  popular: [],
  newAnime: [],
  upcoming: [],
  searched: [],
};

const animesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_ANIME":
      return { ...state };

    default:
      return { ...state };
  }
};
//action
const fetchAnime = () => {
  return {
    type: "FETCH_ANIME",
  };
};
fetchAnime();
export default animesReducer;
