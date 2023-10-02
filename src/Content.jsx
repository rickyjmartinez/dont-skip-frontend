import axios from "axios";
import { useState, useEffect } from "react";

import { Signup } from "./Signup"; 
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { ExercisesIndex } from "./ExercisesIndex";
import { Modal } from "./Modal"; 
import { ExerciseShow } from "./ExerciseShow";
import { RoutinesIndex } from "./RoutinesIndex";

export function Content() {
  
  const [exercises, setExercises] = useState([]);
  const [isExerciseShowVisible, setIsExerciseShowVisible] = useState(false);
  const [currentExercise, setCurrentExercise] = useState({}); 

  const handleIndexExercises = () => {
    axios.get("http://localhost:3000/exercises.json").then((response) => {
      console.log(response.data); 
      setExercises(response.data);
    });
  };

  const handleShowExercise = (exercise) => {
    setIsExerciseShowVisible(true); 
    setCurrentExercise(exercise); 
  };

  const handleClose = () => {
    setIsExerciseShowVisible(false); 
  };

  useEffect(handleIndexExercises, []);

 const [routines, setRoutines] = useState([]);

 const handleIndexRoutines = () => {
  axios.get("http://localhost:3000/routines.json").then((response) => {
    setRoutines(response.data); 
  });
 };

  useEffect(handleIndexRoutines, []); 

  return (
    <div>
      <Signup /> 
      <Login />
      < br/> 
      <LogoutLink />
      <RoutinesIndex routines={routines}/>
      <ExercisesIndex exercises={exercises} onShowExercise={handleShowExercise}/>
      <Modal show={isExerciseShowVisible} onClose={handleClose}>
       <ExerciseShow exercise ={currentExercise} /> 
      </Modal>
    </div>
  )
}