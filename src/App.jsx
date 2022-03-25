import { useRef } from "react";
import { Box } from "@react-three/drei";
import { ARCanvas, DefaultXRControllers, useHitTest } from "@react-three/xr";
import Scene from "./components/Scene";

const App = () => {
  return (
    <>
      <ARCanvas sessionInit={{ requiredFeatures: ["hit-test"] }}>
        <Scene />
        <DefaultXRControllers />
      </ARCanvas>
    </>
  );
};

export default App;
