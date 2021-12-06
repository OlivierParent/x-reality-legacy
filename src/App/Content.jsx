import { Suspense, useCallback, useEffect, useState } from "react";
import { Route, Router } from "wouter";
import { MathUtils } from "three";
import {
  GizmoHelper,
  GizmoViewport,
  OrbitControls,
  Stats,
  TrackballControls,
} from "@react-three/drei";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { folder, useControls } from "leva";

import {
  Animation,
  Button,
  Clock,
  Cube,
  Face,
  Gauge,
  Image,
  Lighting,
  Logo,
  LoremIpsum,
  Normals,
  Socket,
  Spring,
  Suzanne,
  Texture,
  Tripod,
  World,
  Wouter,
  WouterPathRouter,
  WouterPathWouter,
} from "./components";

const currentLocation = () => window.location.hash.replace("#", "") || "/";
const useHashLocation = () => {
  const [location, setLocation] = useState(currentLocation());

  useEffect(() => {
    const handler = () => setLocation(currentLocation());
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, []);

  const navigate = useCallback((to) => (window.location.hash = to), []);
  return [location, navigate];
};

const CONTROLS = {
  Orbit: "Orbit",
  Trackball: "Trackball",
};

const Content = () => {
  const {
    enableAxesHelper,
    enableEffects,
    enableGizmoHelper,
    enableGridHelper,
    enableStats,
    useInputControls,
  } = useControls("General", {
    enableEffects: { label: "Effects", value: false },
    enableStats: { label: "Stats", value: false },
    Helpers: folder({
      enableAxesHelper: { label: "Axes", value: false },
      enableGizmoHelper: { label: "Gizmo", value: true },
      enableGridHelper: { label: "Grid", value: false },
    }),
    "Input Controls": folder({
      useInputControls: {
        label: "Controls",
        options: CONTROLS,
        value: CONTROLS.Orbit,
      },
    }),
  });

  const COMPONENT = {
    Animation: "Animation",
    Button: "Button",
    Clock: "Clock",
    Cube: "Cube",
    Cube_Positioned: "Cube_Positioned",
    Face: "Face",
    Gauge: "Gauge",
    Image: "Image",
    Logo: "Logo",
    LoremIpsum: "LoremIpsum",
    None: "None",
    Normals: "Normals",
    Socket: "Socket",
    Spring: "Spring",
    Suzanne: "Suzanne",
    Texture: "Texture",
    Tripod: "Tripod",
    World: "World",
    Wouter: "Wouter",
  };

  const { useComponent } = useControls("Components", {
    useComponent: {
      label: "Component",
      options: {
        "None                  ": COMPONENT.None,
        "Animation             ": COMPONENT.Animation,
        "Button                ": COMPONENT.Button,
        "Clock                 ": COMPONENT.Clock,
        "Cube                  ": COMPONENT.Cube,
        "Cube (positioned)     ": COMPONENT.Cube_Positioned,
        "Face                  ": COMPONENT.Face,
        "Gauge                 ": COMPONENT.Gauge,
        "Image                 ": COMPONENT.Image,
        "Logo                  ": COMPONENT.Logo,
        "Lorem Ipsum           ": COMPONENT.LoremIpsum,
        "Normals               ": COMPONENT.Normals,
        "Socket (Socket.IO 4.4)": COMPONENT.Socket,
        "Spring                ": COMPONENT.Spring,
        "Suzanne               ": COMPONENT.Suzanne,
        "Texture               ": COMPONENT.Texture,
        "Tripod                ": COMPONENT.Tripod,
        "World                 ": COMPONENT.World,
        "Wouter (Router)       ": COMPONENT.Wouter,
      },
      value: COMPONENT.Suzanne,
    },
  });

  function enableInputControls(name) {
    return useInputControls === name;
  }

  function enableComponent(name) {
    return useComponent === name;
  }

  return (
    <Router base={process.env.PUBLIC_URL} hook={useHashLocation}>
      <>
        {enableInputControls(CONTROLS.Orbit) && (
          <OrbitControls
            enablePan={true}
            enableRotate={true}
            enableZoom={true}
          />
        )}
        {enableInputControls(CONTROLS.Trackball) && <TrackballControls />}
      </>
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
        {enableStats && <Stats />}
      </>
      {enableEffects && (
        <EffectComposer>
          <Bloom height={500} luminanceThreshold={0} luminanceSmoothing={0.9} />
        </EffectComposer>
      )}
      <Lighting />
      <>
        {enableComponent(COMPONENT.Button) && <Button />}
        {enableComponent(COMPONENT.Cube) && <Cube />}
        {enableComponent(COMPONENT.Cube_Positioned) && (
          <Cube
            position={[1, 1, 1]}
            rotation={[45, 45, 45].map((degrees) =>
              MathUtils.degToRad(degrees)
            )}
          />
        )}
        {enableComponent(COMPONENT.Face) && <Face />}
        {enableComponent(COMPONENT.Gauge) && <Gauge />}
        {enableComponent(COMPONENT.Socket) && <Socket />}
        <Suspense fallback={null}>
          {enableComponent(COMPONENT.Animation) && <Animation />}
          {enableComponent(COMPONENT.Clock) && <Clock />}
          {enableComponent(COMPONENT.Image) && <Image />}
          {enableComponent(COMPONENT.Logo) && <Logo />}
          {enableComponent(COMPONENT.LoremIpsum) && <LoremIpsum />}
          {enableComponent(COMPONENT.Normals) && <Normals />}
          {enableComponent(COMPONENT.Spring) && <Spring />}
          {enableComponent(COMPONENT.Suzanne) && <Suzanne />}
          {enableComponent(COMPONENT.Texture) && <Texture />}
          {enableComponent(COMPONENT.World) && <World />}
        </Suspense>
        {enableComponent(COMPONENT.Tripod) && <Tripod />}
        {enableComponent(COMPONENT.Wouter) && <Wouter />}
      </>
      <Route component={WouterPathRouter} path="/router" />
      <Route component={WouterPathWouter} path="/wouter" />
    </Router>
  );
};

export default Content;
