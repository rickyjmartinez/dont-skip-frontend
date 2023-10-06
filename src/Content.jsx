import axios from "axios";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { Signup } from "./Signup"; 
import { Login } from "./Login";
import { ExercisesIndex } from "./ExercisesIndex";
import { Modal } from "./Modal"; 
import { RoutineModal } from "./RoutineModal";
import { ExerciseShow } from "./ExerciseShow";
import { RoutinesIndex } from "./RoutinesIndex";
import { RoutinesNew } from "./RoutinesNew"; 
import { RoutinesShow } from "./RoutinesShow";

import { AdditionsIndex } from "./AdditionsIndex";

export function Content() {
  
  const [exercises, setExercises] = useState([]);
  const [isExerciseShowVisible, setIsExerciseShowVisible] = useState(false);
  const [currentExercise, setCurrentExercise] = useState({}); 

  //routine modal
  const [isRoutineShowVisible, setIsRoutineShowVisible] = useState(false);
  const [currentRoutine, setCurrentRoutine] = useState({}); 


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

  const handleCreateRoutine = (params, successCallback) => {
    axios.post("http://localhost:3000/routines.json", params).then((response) => {
    setRoutines([...routines,response.data]);
    successCallback();
    handleClose();
    });
  };

  const handleShowRoutine = (routine) => {
    setIsRoutineShowVisible(true);
    setCurrentRoutine(routine);
  };

  const handleRoutineClose = () => {
    setIsRoutineShowVisible(false);
  };

  const handleUpdateRoutine = (id, params, successCallback) => {
    axios.patch(`http://localhost:3000/routines/${id}.json`, params).then((response) => {
      setRoutines(
        routines.map((routine) => {
          if (routine.id === response.data.id) {
            return response.data;
          } else {
            return routine;
          }
        })
      );
      successCallback();
      handleRoutineClose(); 
    })
  }

  const handleDestroyRoutine = (routine) => {
    axios.delete(`http://localhost:3000/routines/${routine.id}.json`).then((response) => {
      setRoutines(routines.filter((r) => r.id !== routine.id));
      handleRoutineClose();
    });
  };


  return (
    <div>
      <Routes>
        <Route path="/myroutine" element={<RoutinesIndex routines={routines} onShowRoutine={handleShowRoutine}/>}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup /> }/>
        <Route path="/" element={<ExercisesIndex exercises={exercises} onShowExercise={handleShowExercise}/>}/>
        <Route path="/additions" element={<AdditionsIndex/>}/> 
      </Routes>
      
      {/* <RoutinesNew onCreateRoutine={handleCreateRoutine}/> could add form back on main page if user wants to add manually */}
      
      <Modal show={isExerciseShowVisible} onClose={handleClose}>
       <ExerciseShow exercise ={currentExercise} onCreateRoutine={handleCreateRoutine}/> 
      </Modal>
      <RoutineModal show={isRoutineShowVisible} onClose={handleRoutineClose}>
        <RoutinesShow routine={currentRoutine} onUpdateRoutine={handleUpdateRoutine} onDestroyRoutine={handleDestroyRoutine} /> 
      </RoutineModal>
    </div>
  )
}