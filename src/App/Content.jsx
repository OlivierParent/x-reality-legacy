import { Suspense, useCallback, useEffect, useState } from "react";
import { Route, Router } from "wouter";
import { MathUtils } from "three";
import {
  GizmoHelper,
  GizmoViewport,
  OrbitControls,
  Stats,
} from "@react-three/drei";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { useControls } from "leva";
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
  const components = [
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
    "Wouter (router)",
  ];

  const lightings = ["None", "Demo", "Studio", "Three Point"];

  const { enableOrbitControls } = useControls("Controls", {
    enableOrbitControls: { label: "Orbit Controls", value: true },
  });
  const { showEffects, showStats, useComponent, useLighting, useLightingGui } =
    useControls("General", {
      showEffects: { label: "Effects", value: false },
      showStats: { label: "Stats", value: false },
      useComponent: {
        label: "Component",
        options: components,
        value: "Suzanne (default)",
      },
      useLighting: {
        label: "Lighting",
        options: lightings,
        value: "Studio",
      },
      useLightingGui: {
        label: "Lighting GUI",
        value: false,
      },
    });
  const { showAxesHelper, showGizmoHelper, showGridHelper } = useControls(
    "Helpers",
    {
      showAxesHelper: { label: "Axes Helper", value: false },
      showGizmoHelper: { label: "Gizmo Helper", value: true },
      showGridHelper: { label: "Grid Helper", value: false },
    }
  );

  function showLighting(name) {
    return useLighting === name;
  }

  function showComponent(name) {
    return useComponent === name;
  }

  return (
    <Router base={process.env.PUBLIC_URL} hook={useHashLocation}>
      {enableOrbitControls && (
        <OrbitControls enablePan={true} enableRotate={true} enableZoom={true} />
      )}
      {showAxesHelper && <axesHelper />}
      {showGizmoHelper && (
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
      {showGridHelper && <gridHelper args={[10, 10, 0xffffff, 0x333333]} />}
      {showStats && <Stats />}
      {showEffects && (
        <EffectComposer>
          <Bloom height={500} luminanceThreshold={0} luminanceSmoothing={0.9} />
        </EffectComposer>
      )}
      {showLighting("Demo") && !useLightingGui && <Lighting />}
      {showLighting("Demo") && useLightingGui && <LightingGui />}
      {showLighting("Studio") && !useLightingGui && <LightingStudio />}
      {showLighting("Studio") && useLightingGui && <LightingStudioGui />}
      {showLighting("Three Point") && !useLightingGui && <LightingThreePoint />}
      {showLighting("Three Point") && useLightingGui && (
        <LightingThreePointGui />
      )}
      {showComponent("Button") && <Button />}
      {showComponent("Button (React Spring)") && <ButtonSpring />}
      {showComponent("Clock (analogue)") && <ClockAnalogue />}
      {showComponent("Clock (digital)") && <ClockDigital />}
      {showComponent("Cube") && <Cube />}
      {showComponent("Cube (positioned)") && (
        <Cube
          position={[1, 1, 1]}
          rotation={[45, 45, 45].map((degrees) => MathUtils.degToRad(degrees))}
        />
      )}
      {showComponent("Face") && <Face />}
      {showComponent("Gauge") && <Gauge />}
      {showComponent("Socket (Socket.IO 4.0)") && <Socket />}
      {true && (
        <Suspense fallback={null}>
          {showComponent("Animation") && <Animation />}
          {showComponent("Logo") && <Logo />}
          {showComponent("Logo (double)") && <LogoDouble />}
          {showComponent("Lorem Ipsum") && <LoremIpsum />}
          {showComponent("Normals") && <Normals />}
          {showComponent("Image") && <Image />}
          {showComponent("Image (SVG)") && <ImageSvg />}
          {showComponent("Spring") && <Spring />}
          {showComponent("Suzanne (default)") && <Suzanne />}
          {showComponent("Suzanne (MatCap Texture)") && (
            <SuzanneMatcapTexture />
          )}
          {showComponent("Suzanne (Normal Texture)") && (
            <SuzanneNormalTexture />
          )}
          {showComponent("Suzanne (Physical Material)") && (
            <SuzannePhysicalMaterial />
          )}
          {showComponent("Suzanne (Standard Material)") && (
            <SuzanneStandardMaterial />
          )}
          {showComponent("Suzanne (Toon Material)") && <SuzanneToonMaterial />}
          {showComponent("Texture") && <Texture />}
          {showComponent("Texture (Baked Normals)") && <TextureBakedNormals />}
          {showComponent("World (Sound)") && <WorldSound />}
        </Suspense>
      )}
      {showComponent("Tripod") && <Tripod />}
      {showComponent("World") && <World />}
      {showComponent("Wouter (router)") && <Wouter />}
      <Route component={WouterPathRouter} path="/router" />
      <Route component={WouterPathWouter} path="/wouter" />
    </Router>
  );
};

export default Content;
