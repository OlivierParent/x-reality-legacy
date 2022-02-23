import { Suspense } from "react";
import {
  HashRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { MathUtils } from "three";
import { Stats } from "@react-three/drei";
import { useControls } from "leva";

import {
  Animation,
  Button,
  Clock,
  Cube,
  Effects,
  Composition,
  Face,
  Gauge,
  Geometry2D,
  Geometry3D,
  Helpers,
  Image,
  InputControls,
  Lighting,
  Logo,
  LoremIpsum,
  Normals,
  Particles,
  Planes,
  ReactRouter,
  ReactRouterPathAlpha,
  ReactRouterPathOmega,
  Socket,
  Spring,
  Suzanne,
  Texture,
  Tripod,
  World,
  ROUTES,
} from "./components";

const COMPONENT = Object.freeze({
  Animation: "Animation",
  Button: "Button",
  Clock: "Clock",
  Composition: "Composition",
  Cube: "Cube",
  Cube_Positioned: "Cube_Positioned",
  Face: "Face",
  Gauge: "Gauge",
  Geometry2D: "Geometry2D",
  Geometry3D: "Geometry3D",
  Image: "Image",
  Logo: "Logo",
  LoremIpsum: "LoremIpsum",
  None: "None",
  Normals: "Normals",
  Particles: "Particles",
  Planes: "Planes",
  ReactRouter: "ReactRouter",
  Socket: "Socket",
  Spring: "Spring",
  Suzanne: "Suzanne",
  Texture: "Texture",
  Tripod: "Tripod",
  World: "World",
});

const Content = () => {
  const { enableStats } = useControls("General", {
    enableStats: { label: "Stats", value: false },
  });

  const { useComponent } = useControls("Components", {
    useComponent: {
      label: "Component",
      options: {
        "None                  ": COMPONENT.None,
        "Animation             ": COMPONENT.Animation,
        "Button                ": COMPONENT.Button,
        "Clock                 ": COMPONENT.Clock,
        "Composition           ": COMPONENT.Composition,
        "Cube                  ": COMPONENT.Cube,
        "Cube (positioned)     ": COMPONENT.Cube_Positioned,
        "Face                  ": COMPONENT.Face,
        "Gauge                 ": COMPONENT.Gauge,
        "Geometry 2D           ": COMPONENT.Geometry2D,
        "Geometry 3D           ": COMPONENT.Geometry3D,
        "Image                 ": COMPONENT.Image,
        "Logo                  ": COMPONENT.Logo,
        "Lorem Ipsum           ": COMPONENT.LoremIpsum,
        "Normals               ": COMPONENT.Normals,
        "Particles             ": COMPONENT.Particles,
        "Planes                ": COMPONENT.Planes,
        "ReactRouter           ": COMPONENT.ReactRouter,
        "Socket (Socket.IO 4.4)": COMPONENT.Socket,
        "Spring                ": COMPONENT.Spring,
        "Suzanne               ": COMPONENT.Suzanne,
        "Texture               ": COMPONENT.Texture,
        "Tripod                ": COMPONENT.Tripod,
        "World                 ": COMPONENT.World,
      },
      value: COMPONENT.Suzanne,
    },
  });

  function enableComponent(name, element) {
    return useComponent === name ? element : null;
  }

  return (
    <>
      {enableStats && <Stats />}
      <Effects />
      <Helpers />
      <InputControls />
      <Lighting />

      <Router>
        {enableComponent(COMPONENT.Button, <Button />)}
        {enableComponent(COMPONENT.Cube, <Cube />)}
        {enableComponent(
          COMPONENT.Cube_Positioned,
          <Cube
            position={[1, 1, 1]}
            rotation={[45, 45, 45].map((degrees) =>
              MathUtils.degToRad(degrees)
            )}
          />
        )}
        {enableComponent(COMPONENT.Face, <Face />)}
        {enableComponent(COMPONENT.Gauge, <Gauge />)}
        {enableComponent(COMPONENT.ReactRouter, <ReactRouter />)}
        {enableComponent(COMPONENT.Socket, <Socket />)}
        <Suspense fallback={null}>
          {enableComponent(COMPONENT.Animation, <Animation />)}
          {enableComponent(COMPONENT.Clock, <Clock />)}
          {enableComponent(COMPONENT.Composition, <Composition />)}
          {enableComponent(COMPONENT.Geometry2D, <Geometry2D />)}
          {enableComponent(COMPONENT.Geometry3D, <Geometry3D />)}
          {enableComponent(COMPONENT.Image, <Image />)}
          {enableComponent(COMPONENT.Logo, <Logo />)}
          {enableComponent(COMPONENT.LoremIpsum, <LoremIpsum />)}
          {enableComponent(COMPONENT.Normals, <Normals />)}
          {enableComponent(COMPONENT.Particles, <Particles />)}
          {enableComponent(COMPONENT.Planes, <Planes />)}
          {enableComponent(COMPONENT.Spring, <Spring />)}
          {enableComponent(COMPONENT.Suzanne, <Suzanne />)}
          {enableComponent(COMPONENT.Texture, <Texture />)}
          {enableComponent(COMPONENT.World, <World />)}
        </Suspense>
        {enableComponent(COMPONENT.Tripod, <Tripod />)}
        <Routes>
          <Route element={<Navigate to={ROUTES.Root} />} path={ROUTES.All} />
          <Route element={<ReactRouterPathAlpha />} path={ROUTES.Alpha} />
          <Route element={<ReactRouterPathOmega />} path={ROUTES.Omega} />
          <Route element={null} path={ROUTES.Root} />
        </Routes>
      </Router>
    </>
  );
};

export default Content;
