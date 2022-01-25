import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Anime = () => {
  const [upcomingAnime, setUpcomingAnime] = useState([]);
  useEffect(() => {
    const getUpcomingAnime = async () => {
      await fetch("https://api.jikan.moe/v3/top/anime/1/upcoming")
        .then((resp) => resp.json())
        .then((data) => setUpcomingAnime(data.top.slice(0, 10)));
    };
    getUpcomingAnime();
  }, []);
  console.log(upcomingAnime);
  return (
    <AnimeList>
      <h2>Upcoming Anime</h2>
      <Animes>
        {upcomingAnime.map((item) => {
          const { mal_id, image_url, start_date, url, title } = item;
          return (
            <StyledAnime key={mal_id}>
              <a href={url} target='_blank'>
                <h4>{title}</h4>
                {start_date ? <p>{start_date}</p> : "No specific date yet"}
                <img src={image_url} alt={title} />
              </a>
            </StyledAnime>
          );
        })}
      </Animes>
    </AnimeList>
  );
};
const AnimeList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding-right: 5rem 0;
  }
`;
const Animes = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;
const StyledAnime = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  a {
    text-decoration: none;
    color: black;
    img {
      width: 100%;
      height: 60vh;
      /* object-fit: cover; */
    }
  }
`;
export default Anime;
