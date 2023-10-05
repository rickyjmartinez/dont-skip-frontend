import React, { useState } from 'react';

export function RoutinesShow(props) {
  const [sets, setSets] = useState(props.routine.sets);
  const [reps, setReps] = useState(props.routine.reps);

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateRoutine(props.routine.id, params, () => {
      event.target.reset();
      setSets(params.get('sets'));
      setReps(params.get('reps'));
    });
  };

  const handleClick = () => {
    props.onDestroyRoutine(props.routine);
  }; 

  return (
    <div>
      <h1>{props.routine.exercise_name}</h1>
      <p>
        <strong>Number of Sets:</strong> {sets} {" "}
        <strong>Number of Reps:</strong> {reps}
      </p>
      <br />
      <form onSubmit={handleSubmit}>
        <div>
          New Sets: <input value={sets} name="sets" type="text" onChange={(event) => setSets(event.target.value)} /> {" "}
      
          New Reps: <input value={reps} name="reps" type="text" onChange={(event) => setReps(event.target.value)} />
        </div>
        <br/>
        <button type="submit">Update routine</button>
      </form>
      <br/>
      <button onClick={handleClick}>Remove exercise from routine</button>
    </div>
  );
}
