/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function CatWalk({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/catWalk-transformed.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorig8Hips} />
          <skinnedMesh name="Ch07_Body" geometry={nodes.Ch07_Body.geometry} material={materials.Ch07_body} skeleton={nodes.Ch07_Body.skeleton} />
          <skinnedMesh name="Ch07_Eyelashes" geometry={nodes.Ch07_Eyelashes.geometry} material={materials.Ch07_hair} skeleton={nodes.Ch07_Eyelashes.skeleton} />
          <skinnedMesh name="Ch07_Hair" geometry={nodes.Ch07_Hair.geometry} material={materials.Ch07_hair} skeleton={nodes.Ch07_Hair.skeleton} />
          <skinnedMesh name="Ch07_Heels" geometry={nodes.Ch07_Heels.geometry} material={materials.Ch07_body} skeleton={nodes.Ch07_Heels.skeleton} />
          <skinnedMesh name="Ch07_Pants" geometry={nodes.Ch07_Pants.geometry} material={materials.Ch07_body} skeleton={nodes.Ch07_Pants.skeleton} />
          <skinnedMesh name="Ch07_Shirt" geometry={nodes.Ch07_Shirt.geometry} material={materials.Ch07_body} skeleton={nodes.Ch07_Shirt.skeleton} />
          <skinnedMesh name="Ch07_Suit" geometry={nodes.Ch07_Suit.geometry} material={materials.Ch07_body} skeleton={nodes.Ch07_Suit.skeleton} />
          {/* material-color="red" */}
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/catWalk-transformed.glb')