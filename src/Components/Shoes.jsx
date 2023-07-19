/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 public/models/Shoes.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Shoes(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('models/Shoes.glb')
  return (
    <group {...props} dispose={null} ref={group} scale={9}>
      <group position={[0, 0, 0.146]}>
        <mesh geometry={nodes.Plane044.geometry} material={materials['Main Body Material']} material-color={props.customColor.mesh} />
        <mesh geometry={nodes.Plane044_1.geometry} material={materials['Sole Material']} material-color={props.customColor.sole}/>
        <mesh geometry={nodes.Plane044_2.geometry} material={materials['Main Shoe Inside']} />
        <mesh geometry={nodes.Plane044_3.geometry} material={materials['Insole Material']} />
        <mesh geometry={nodes.Laces006.geometry} material={materials['Laces Material']} material-color={props.customColor.laces} position={[-0.087, 0.081, -0.001]} rotation={[0, 0, 0.45]} />
        <mesh geometry={nodes.Nike_Logo_left005.geometry} material={materials['Logo left Material']} position={[0.213, 0.065, 0.033]} rotation={[0, 0.174, 0]} />
        <mesh geometry={nodes.Nike_Logo_right005.geometry} material={materials['Logo right Material']} position={[0.213, 0.065, -0.087]} rotation={[0, 0.044, 0]} />
        <mesh geometry={nodes.Shoe_Flap010.geometry} material={materials['Flap Material.002']} material-color={props.customColor.flap}position={[0, -0.005, 0]} />
        <mesh geometry={nodes.Shoe_Flap011.geometry} material={materials['Tag material']} position={[0, -0.005, 0]} />
      </group>
      <group position={[0, 0, -0.136]}>
        <mesh geometry={nodes.Plane040.geometry} material={materials['Sole Material']} />
        <mesh geometry={nodes.Plane040_1.geometry} material={materials['Insole Material right']} />
        <mesh geometry={nodes.Plane040_2.geometry} material={materials['Main Body Material']} />
        <mesh geometry={nodes.Plane040_3.geometry} material={materials['Main Shoe Inside']} />
        <mesh geometry={nodes.Laces005.geometry} material={materials['Laces Material']} position={[-0.087, 0.081, -0.001]} rotation={[0, 0, 0.45]} />
        <mesh geometry={nodes.Nike_Logo_left004.geometry} material={materials['Logo left Material']} position={[0.213, 0.065, 0.033]} rotation={[0, 0.174, 0]} />
        <mesh geometry={nodes.Nike_Logo_right004.geometry} material={materials['Logo right Material']} position={[0.213, 0.065, -0.087]} rotation={[0, 0.044, 0]} />
        <mesh geometry={nodes.Shoe_Flap008.geometry} material={materials['Tag materialright.001']} position={[0, -0.005, 0]} />
        <mesh geometry={nodes.Shoe_Flap009.geometry} material={materials['Flap Material.002']} position={[0, -0.005, 0]} />
      </group>
    </group>
  )
}

useGLTF.preload('models/Shoes.glb')