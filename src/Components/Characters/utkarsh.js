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

export default function useUtkarsh(controlled, tracked) {
  const group = useRef();

  const gltf = useGLTF("/temp/joe.glb");
  group.current = gltf.scene;
  const { actions } = useAnimations(gltf.animations, gltf.scene);
  const { camera, scene, gl } = useThree();

  const clock = new THREE.Clock();
  let keyPressed;

  useEffect(() => {
    if (controlled) {
      actions["stand-idle"].reset().fadeIn(0.5).play();
      keyPressed = KeyboardControls(actions);
    }
  }, [group.current]);

  useFrame(() => {
    const delta = clock.getDelta();
    if (controlled && keyPressed) {
      if (keyPressed?.w) {
        group.current.translateZ(2.5 * delta);
      }

      if (keyPressed?.s) {
        group.current.translateZ(-0.02);
      }

      if (keyPressed?.a) {
        group.current.rotation.y += 0.05;
      }
      if (keyPressed?.d) {
        group.current.rotation.y -= 0.05;
      }
    }
    if (tracked) {
      UpdateCam(group.current, camera);
      // console.log(group.current);
    }
  });
  return { gltf, Scene: gltf.scene, actions };
}

useGLTF.preload("/temp/joe.glb");
