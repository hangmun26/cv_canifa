import React, { useState, useEffect } from "react";
import axios from "axios";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  // Hàm gọi API để lấy danh sách phim
  // "39ae16f1cbmsh24d2d5d15038a89p1e0496jsne161cb4bd352", // Thay bằng khóa API của bạn

  // const fetchMovies = async () => {
  //   try {

  //     const response = await axios.get(
  //       "https://movie-database-imdb-alternative.p.rapidapi.com/",
  //       {
  //         params: { s: "Batman", page: "1", r: "json" },
  //         headers: {
  //           "X-RapidAPI-Key":
  //             "39ae16f1cbmsh24d2d5d15038a89p1e0496jsne161cb4bd352", // Thay bằng khóa API của bạn

  //           "X-RapidAPI-Host": "movie-database-imdb-alternative.p.rapidapi.com",
  //         },
  //       }
  //     );
  //     setMovies(response.data.Search); // Lưu danh sách phim vào state
  //   } catch (error) {
  //     console.error("Lỗi khi gọi API:", error);
  //   }
  // };
  const fetchMovies = async () => {
    try {
      const response = await axios.get(
        "https://movie-database-imdb-alternative.p.rapidapi.com/",
        {
          params: { s: query, page: "1", r: "json" },
          headers: {
            "X-RapidAPI-Key":
              "39ae16f1cbmsh24d2d5d15038a89p1e0496jsne161cb4bd352",
            "X-RapidAPI-Host": "movie-database-imdb-alternative.p.rapidapi.com",
          },
        }
      );
      setMovies(response.data.Search);
    } catch (error) {
      if (error.response && error.response.status === 429) {
        // Nếu gặp lỗi 429, thông báo người dùng về việc vượt quá giới hạn yêu cầu
        console.error(
          "Bạn đã gửi quá nhiều yêu cầu. Vui lòng đợi một lúc và thử lại."
        );
        alert("Bạn đã gửi quá nhiều yêu cầu. Vui lòng đợi một lúc và thử lại.");
      } else {
        console.error("Lỗi khi gọi API:", error);
      }
    }
  };

  useEffect(() => {
    fetchMovies(); // Gọi API khi component được render
  }, []);

  return (
    <div>
      <h1>Danh sách phim</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.imdbID}>
            <h2>{movie.Title}</h2>
            <img src={movie.Poster} alt={movie.Title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
