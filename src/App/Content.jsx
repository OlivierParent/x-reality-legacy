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
  ButtonSpring,
  ClockAnalogue,
  ClockDigital,
  Cube,
  Face,
  Gauge,
  Image,
  ImageSvg,
  Lighting,
  LightingGui,
  LightingStudio,
  LightingStudioGui,
  LightingThreePoint,
  LightingThreePointGui,
  Logo,
  LogoDouble,
  LoremIpsum,
  Normals,
  Socket,
  Spring,
  Suzanne,
  SuzanneMatcapTexture,
  SuzanneNormalTexture,
  SuzannePhysicalMaterial,
  SuzanneStandardMaterial,
  SuzanneToonMaterial,
  Texture,
  TextureBakedNormals,
  Tripod,
  World,
  WorldSound,
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
        options: ["Orbit", "Trackball"],
        value: "Trackball",
      },
    }),
  });

  const { useComponent } = useControls("Components", {
    useComponent: {
      label: "Component",
      options: [
        "None",
        "Animation",
        "Button",
        "Button (React Spring)",
        "Clock (analogue)",
        "Clock (digital)",
        "Cube (positioned)",
        "Cube",
        "Face",
        "Gauge",
        "Image",
        "Image (SVG)",
        "Logo",
        "Logo (double)",
        "Lorem Ipsum",
        "Normals",
        "Socket (Socket.IO 4.0)",
        "Spring",
        "Suzanne (default)",
        "Suzanne (MatCap Texture)",
        "Suzanne (Normal Texture)",
        "Suzanne (Physical Material)",
        "Suzanne (Standard Material)",
        "Suzanne (Toon Material)",
        "Texture",
        "Texture (Baked Normals)",
        "Tripod",
        "World",
        "World (Sound)",
        "Wouter (Router)",
      ],
      value: "Suzanne (default)",
    },
  });

  const { useLighting, useLightingGui } = useControls("Lightings", {
    useLighting: {
      label: "Lighting",
      options: ["None", "Demo", "Studio", "Three Point"],
      value: "Studio",
    },
    useLightingGui: {
      label: "Gui",
      value: false,
    },
  });

  function enableInputControls(name) {
    return useInputControls === name;
  }

  function enableComponent(name) {
    return useComponent === name;
  }

  function enableLighting(name) {
    return useLighting === name;
  }

  return (
    <Router base={process.env.PUBLIC_URL} hook={useHashLocation}>
      <>
        {enableInputControls("Orbit") && (
          <OrbitControls
            enablePan={true}
            enableRotate={true}
            enableZoom={true}
          />
        )}
        {enableInputControls("Trackball") && <TrackballControls />}
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
      <>
        {enableLighting("Demo") && !useLightingGui && <Lighting />}
        {enableLighting("Demo") && useLightingGui && <LightingGui />}
        {enableLighting("Studio") && !useLightingGui && <LightingStudio />}
        {enableLighting("Studio") && useLightingGui && <LightingStudioGui />}
        {enableLighting("Three Point") && !useLightingGui && (
          <LightingThreePoint />
        )}
        {enableLighting("Three Point") && useLightingGui && (
          <LightingThreePointGui />
        )}
      </>
      <>
        {enableComponent("Button") && <Button />}
        {enableComponent("Button (React Spring)") && <ButtonSpring />}
        {enableComponent("Clock (analogue)") && <ClockAnalogue />}
        {enableComponent("Clock (digital)") && <ClockDigital />}
        {enableComponent("Cube") && <Cube />}
        {enableComponent("Cube (positioned)") && (
          <Cube
            position={[1, 1, 1]}
            rotation={[45, 45, 45].map((degrees) =>
              MathUtils.degToRad(degrees)
            )}
          />
        )}
        {enableComponent("Face") && <Face />}
        {enableComponent("Gauge") && <Gauge />}
        {enableComponent("Socket (Socket.IO 4.0)") && <Socket />}
        <Suspense fallback={null}>
          {enableComponent("Animation") && <Animation />}
          {enableComponent("Logo") && <Logo />}
          {enableComponent("Logo (double)") && <LogoDouble />}
          {enableComponent("Lorem Ipsum") && <LoremIpsum />}
          {enableComponent("Normals") && <Normals />}
          {enableComponent("Image") && <Image />}
          {enableComponent("Image (SVG)") && <ImageSvg />}
          {enableComponent("Spring") && <Spring />}
          {enableComponent("Suzanne (default)") && <Suzanne />}
          {enableComponent("Suzanne (MatCap Texture)") && (
            <SuzanneMatcapTexture />
          )}
          {enableComponent("Suzanne (Normal Texture)") && (
            <SuzanneNormalTexture />
          )}
          {enableComponent("Suzanne (Physical Material)") && (
            <SuzannePhysicalMaterial />
          )}
          {enableComponent("Suzanne (Standard Material)") && (
            <SuzanneStandardMaterial />
          )}
          {enableComponent("Suzanne (Toon Material)") && (
            <SuzanneToonMaterial />
          )}
          {enableComponent("Texture") && <Texture />}
          {enableComponent("Texture (Baked Normals)") && (
            <TextureBakedNormals />
          )}
          {enableComponent("World (Sound)") && <WorldSound />}
        </Suspense>

        {enableComponent("Tripod") && <Tripod />}
        {enableComponent("World") && <World />}
        {enableComponent("Wouter (router)") && <Wouter />}
      </>
      <Route component={WouterPathRouter} path="/router" />
      <Route component={WouterPathWouter} path="/wouter" />
    </Router>
  );
};

export default Content;
