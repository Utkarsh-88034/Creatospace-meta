/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import KeyboardControls from "../../Utils/Controls";
import UpdateCam from "../../Utils/Camera";
import io from "socket.io-client";

export default function useJoe(controlled, tracked) {
  const group = useRef();

  const gltf = useGLTF("/joe.glb");
  group.current = gltf.scene;
  const { actions } = useAnimations(gltf.animations, gltf.scene);
  const { camera, scene, gl } = useThree();

  return { gltf, Scene: gltf.scene, actions };
}

useGLTF.preload("/joe.glb");
