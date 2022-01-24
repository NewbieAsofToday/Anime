import React, { useEffect, useState } from "react";

function App() {
  const [topAnime, setTopAnime] = useState([]);
  useEffect(() => {
    const getUpcomingAnime = async () => {
      await fetch("https://api.jikan.moe/v3/top/anime/1/upcoming")
        .then((resp) => resp.json())
        .then((data) => setTopAnime(data.top.slice(0, 5)))
        .catch((err) => {
          console.error(err);
        });
    };
    getUpcomingAnime();
  }, []);
  console.log(topAnime);
  return (
    <div className='App'>
      <h1>Hello world</h1>
      {topAnime.map((item) => {
        return <div key={item.mal_id}>{item.title}</div>;
      })}
    </div>
  );
}

export default App;
