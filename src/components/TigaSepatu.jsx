/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/TigaSepatu.glb 
*/

import React, { useLayoutEffect, useRef } from 'react'
import { useGLTF, useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import { gsap } from 'gsap';

export const FLOOR_HEIGHT = 2.3;
export const NB_FLOORS = 3;

export function TigaSepatu(props) {

  const ref = useRef();
  const tl = useRef();

  const libraryRef = useRef();
  const atticRef = useRef();


  const scroll = useScroll();

  useFrame(() => {
    tl.current.seek(scroll.offset * tl.current.duration());
  })



  useLayoutEffect(() => {
    tl.current = gsap.timeline();

    // VERTICAL ANIMATION
    tl.current.to(
      ref.current.position,
      {
        duration: 2,
        y: -FLOOR_HEIGHT * (NB_FLOORS - 1),
      },
      0
    );


    tl.current.to(
      ref.current.rotation,
      { duration: 1, x: 0, y: Math.PI / 6, z: 0 },
      0
    );
    tl.current.to(
      ref.current.rotation,
      { duration: 1, x: 0, y: -Math.PI / 6, z: 0 },
      1
    );

    // Office movement
    tl.current.to(
      ref.current.position,
      {
        duration: 1,
        x: -1,
        z: 2,
      },
      0
    );
    tl.current.to(
      ref.current.position,
      {
        duration: 1,
        x: 1,
        z: 2,
      },
      1
    );

    // LIBRARY FLOOR
    tl.current.from(
      libraryRef.current.position,
      {
        duration: 0.5,
        x: -2,
      },
      0.5
    );
    tl.current.from(
      libraryRef.current.rotation,
      {
        duration: 0.5,
        y: -Math.PI / 2,
      },
      0
    );

    // ATTIC
    tl.current.from(
      atticRef.current.position,
      {
        duration: 1.5,
        y: 2,
      },
      0
    );

    tl.current.from(
      atticRef.current.rotation,
      {
        duration: 0.5,
        y: Math.PI / 2,
      },
      1
    );

    tl.current.from(
      atticRef.current.position,
      {
        duration: 0.5,

        z: -2,
      },
      1.5
    );
  }, []);











  const { nodes, materials } = useGLTF('/models/TigaSepatu.glb')
  return (
    <group {...props} dispose={null} ref={ref} position={[0.5, -1, -1]} rotation={[0, -Math.PI / 3, 0]}>
      <group scale={[1.045, 1, 1]}>
        <mesh geometry={nodes.Cube003.geometry} material={materials['Material.007']} />
        <mesh geometry={nodes.Cube003_1.geometry} material={materials['Material.012']} />
        <mesh geometry={nodes.Cube003_2.geometry} material={materials['Material.013']} />
        <mesh geometry={nodes.Cube003_3.geometry} material={materials['Material.014']} />
        <mesh geometry={nodes.Cube003_4.geometry} material={materials['Material.015']} />
      </group>
      <group position={[0, 2.114, -2.23]} scale={[1.045, 1, 1]}>
        <group ref={libraryRef}>

          <mesh geometry={nodes.Cube001.geometry} material={materials['Material.001']} />
          <mesh geometry={nodes.Cube001_1.geometry} material={materials['Material.002']} />
          <mesh geometry={nodes.Cube001_2.geometry} material={materials['Material.003']} />
          <mesh geometry={nodes.Cube001_3.geometry} material={materials['Material.004']} />
          <mesh geometry={nodes.Cube001_4.geometry} material={materials['Material.005']} />
        </group>
      </group>
      <group position={[-1.97, 4.227, -2.199]} rotation={[0, -1.479, 0]}>
        <group ref={atticRef}>
          <mesh geometry={nodes.Cube008.geometry} material={materials['Material.008']} />
          <mesh geometry={nodes.Cube008_1.geometry} material={materials['Material.006']} />
          <mesh geometry={nodes.Cube008_2.geometry} material={materials['Material.010']} />
          <mesh geometry={nodes.Cube008_3.geometry} material={materials['Material.009']} />
          <mesh geometry={nodes.Cube008_4.geometry} material={materials['Material.011']} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/TigaSepatu.glb')
