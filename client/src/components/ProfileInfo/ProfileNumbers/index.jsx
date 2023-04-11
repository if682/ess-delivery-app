import React from "react";
import { useEffect } from "react";
import "./style.css";
import { useContext, useState } from "react";
import { LoginContext } from "../../../Context/LoginContext";
 
const port = 4001;

const ProfileNumbers = () => {
    const [context, setContext] = useContext(LoginContext)
    const userId = context.userId
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
