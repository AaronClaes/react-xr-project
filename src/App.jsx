import { useRef } from "react";
import { Box } from "@react-three/drei";
import { ARCanvas, DefaultXRControllers } from "@react-three/xr";

const App = () => {
  const ref = useRef();
  useHitTest((hit) => {
    console.log(hit);
    hit.decompose(
      ref.current.position,
      ref.current.rotation,
      ref.current.scale
    );
  });
  return (
    <>
      <ARCanvas sessionInit={{ requiredFeatures: ["hit-test"] }}>
        <Box ref={ref}>
          <meshBasicMaterial />
        </Box>
        <DefaultXRControllers />
      </ARCanvas>
    </>
  );
};

export default App;
