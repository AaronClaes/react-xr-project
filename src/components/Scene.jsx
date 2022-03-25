import { useRef } from "react";
import { useHitTest } from "@react-three/xr";
import { Box } from "@react-three/drei";

const Scene = () => {
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
      <Box ref={ref}>
        <meshBasicMaterial />
      </Box>
    </>
  );
};

export default Scene;
