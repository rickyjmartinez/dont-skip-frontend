export function ExercisesIndex(props) { 
  return (
    <div>
      <h1>All Exercises</h1>
      {props.exercises.map((exercise) => (
        <div key={exercise.id}>
          <h2>{exercise.name}</h2>
          <img src={exercise.image_url} width={250} height={250} />
        <br/>
        <button onClick={() => props.onShowExercise(exercise)}>More info</button>
          </div>
      ))}
    </div>
  );
}