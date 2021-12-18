import { GizmoHelper, GizmoViewport } from "@react-three/drei";
import { folder, useControls } from "leva";

const Helpers = () => {
  const { enableAxesHelper, enableGizmoHelper, enableGridHelper } = useControls(
    "General",
    {
      Helpers: folder({
        enableAxesHelper: { label: "Axes", value: false },
        enableGizmoHelper: { label: "Gizmo", value: true },
        enableGridHelper: { label: "Grid", value: false },
      }),
    }
  );

  return (
    <>
      {enableAxesHelper && <axesHelper />}
      {enableGizmoHelper && (
        <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
          <GizmoViewport
            axisColors={[
              "hsl(0, 100%, 50%)",
              "hsl(120, 100%, 50%)",
              "hsl(240, 100%, 50%)",
            ]}
            labelColor="black"
          />
        </GizmoHelper>
      )}
      {enableGridHelper && <gridHelper args={[10, 10, 0xffffff, 0x333333]} />}
    </>
  );
};

export default Helpers;
