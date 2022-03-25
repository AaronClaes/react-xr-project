import { Box } from "@react-three/drei";
import { ARCanvas } from "@react-three/xr";

const App = () => {
  return (
    <>
      <ARCanvas>
        <Box>
          <meshBasicMaterial />
        </Box>
      </ARCanvas>
    </>
  );
};

export default App;
