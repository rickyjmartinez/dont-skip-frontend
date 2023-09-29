import axios from "axios";
import { useState, useEffect } from "react";

import { Signup } from "./Signup"; 
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { ExercisesIndex } from "./ExercisesIndex";

export function Content() {
  
  const [exercises, setExercises] = useState([]);

  const handleIndexExercises = () => {
    axios.get("http://localhost:3000/exercises.json").then((response) => {
      console.log(response.data); 
      setExercises(response.data);
    });
  };

  useEffect(handleIndexExercises, []);


  return (
    <div>
      <Signup /> 
      <Login />
      < br/> 
      <LogoutLink />
      <ExercisesIndex exercises={exercises}/>
    </div>
  )
}