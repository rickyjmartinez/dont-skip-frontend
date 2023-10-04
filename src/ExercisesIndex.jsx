export function ExercisesIndex(props) { 
  return (
    <div>
      <h1>All Exercises</h1>
      {props.exercises.map((exercise) => (
        <div key={exercise.id}>
          <h2>{exercise.name}</h2>
          <img src={exercise.image_url} width={250} height={250} />
          <p>{exercise.description}</p>
        <br/>
        <button onClick={() => props.onShowExercise(exercise)}>Add exercise to routine</button>
        <hr/>
          </div>
      ))}
    </div>
  );
}