export function ExerciseShow(props) {
  return (
    <div>
      <h1>{props.exercise.name}</h1>
      <p>Description: {props.exercise.description}</p>
      <a href={props.exercise.video_url}>Exercise Video Tutorial</a>
    </div>
  );
}