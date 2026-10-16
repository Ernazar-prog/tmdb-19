// import React, { useContext } from "react";
// import { MovieContext } from "../../context";

// const Favorite = () => {
//   const { favorite, setFavorite } = useContext(MovieContext);
//   function deleteFavorite(proId) {
//     let filterFavorite = favorite.filter((el) => el.id !== proId);
//     setFavorite(filterFavorite);
//     localStorage.setItem("favorite", JSON.stringify(filterFavorite));
//   }

//   return (
//     <div id="favorite">
//       <div className="container">
//         <div className="popular">
//           {favorite.map((el) => (
//             <>
//               <div className="popularCard">
//                 <img
//                   src={`https://image.tmdb.org/t/p/w500${el.poster_path}`}
//                   alt={el.title}
//                   width="220px"
//                 />
//                 <span>
//                   {el.title}

//                   <button onClick={() => deleteFavorite(el.id)}>delete</button>
//                 </span>
//               </div>
//             </>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Favorite;

import React, { useContext } from "react";
import { MovieContext } from "../../context";
import { Link } from "react-router-dom";
import "./Favorite.css";

const Favorite = () => {
  const { favorite, setFavorite, lang } = useContext(MovieContext);

  function deleteFavorite(movieId) {
    const filterFavorite = favorite.filter((el) => el.id !== movieId);

    setFavorite(filterFavorite);
  }

  return (
    <div id="favorite">
      <div className="container">
        <h1>{lang === "ru-RU" ? "Избранные фильмы" : "Favorite Movies"}</h1>

        {favorite.length === 0 ? (
          <p className="emptyFavorite">
            {lang === "ru-RU"
              ? "Список избранного пуст."
              : "Your favorites list is empty."}
          </p>
        ) : (
          <div className="popular">
            {favorite.map((el) => (
              <div className="popularCard" key={el.id}>
                <Link to={`/movieDetails/${el.id}`}>
                  {el.poster_path && (
                    <img
                      src={`https://image.tmdb.org/t/p/w500${el.poster_path}`}
                      alt={el.title || el.original_title}
                      width="220"
                    />
                  )}
                </Link>

                <span>
                  {el.title || el.original_title}

                  <button onClick={() => deleteFavorite(el.id)}>
                    {lang === "ru-RU" ? "Удалить" : "Delete"}
                  </button>
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorite;
