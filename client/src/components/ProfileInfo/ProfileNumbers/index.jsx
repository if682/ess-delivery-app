import React from "react";
import { useEffect } from "react";
import "./style.css";
import { useContext, useState } from "react";
 
const port = 4001;

const ProfileNumbers = () => {
    const userId = localStorage.getItem("userId");
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async (url) =>{
            console.log(url)
            try{
              let dataResponse = await fetch(url, {
                  method: "GET"
              });
              console.log("estou aqui")
              const dataJson = await dataResponse.json();
              console.log(dataJson.moviesId)
              if(dataResponse.status === 201){
                  console.log("Passsou ok")
                  setMovies(dataJson.moviesId)
              }else{
                  console.log("Ja esta no servidor esse filme")
              }
            }catch(error){
              console.log(error);
            }
          }
          fetchMovies(`http://localhost:${port}/list/${userId}/Historico`)
    }, []);
  return (
        <section className="user-info-container">
            <div className="movies">
                <p>{movies.length}</p>
                <p>movies</p>
            </div>
        </section>
  );
};

export default ProfileNumbers;
