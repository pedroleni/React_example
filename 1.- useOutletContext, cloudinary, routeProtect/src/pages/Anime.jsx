import "./Anime.css";

import React from "react";
//import { useContext } from "react";
import { useOutletContext } from "react-router-dom";

import Cards from "../components/Cards";
//import { UserContext } from "../Contexts/UserContext";
const Anime = () => {
  const [requestAnime] = useOutletContext();
  //const { login, user } = useContext(UserContext);
  return (
    <div className="gallery">
      {/* POR LA PAGINA ANIME ---Gestionar el control del error de la recarga de la pagina 
          por el componente card -----------------------------------------*/}

      {/* {requestAnime.data?.anime.map((animeSingle) => (
                    <Card key={animeSingle._id} data={animeSingle} />
                  ))} */}

      {/* POR EL COMPONENTE --Gestionar el control del error de la recarga de la pagina por el componente cards */}
      <Cards data={requestAnime} />
    </div>
  );
};

export default Anime;