import { Html, useProgress } from "@react-three/drei";

function Loader() {
  const { progress } = useProgress();
  return <Html center className="font-normal text-xl text-center">{progress}% Loaded</Html>;
}

export default Loader;
