import { useGLTF, OrbitControls } from '@react-three/drei'
import React, { useRef, useState, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('car.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, -1.33, 0.1]} rotation={[1.57, 0, 0]}>
        <group rotation={[-Math.PI, 0, 0]} scale={0.03}>
          <group position={[19.39, -3.38, 29.65]} scale={2.65}>
            <group position={[-4.55, 8.35, 9.12]}>
              <mesh geometry={nodes.Body_body_0.geometry} material={nodes.Body_body_0.material} />
            </group>
          </group>
          <group position={[17.72, -89.72, 23.73]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={0.28}>
            <group position={[45.47, 15.14, 9.38]}>
              <mesh geometry={nodes.Grill_UCB_BOTTOM_0.geometry} material={nodes.Grill_UCB_BOTTOM_0.material} />
            </group>
          </group>
          <group position={[16.73, -89.45, 9.88]} rotation={[Math.PI / 2, 0, 0]} scale={2.65}>
            <mesh geometry={nodes.Splitter_Front_UCB_BOTTOM_0.geometry} material={nodes.Splitter_Front_UCB_BOTTOM_0.material} />
          </group>
          <group position={[26.59, 92.42, 26.23]} rotation={[-0.2, 0, 0]} scale={2.65}>
            <mesh geometry={nodes.Bumper_rear_UCB_BOTTOM_0.geometry} material={nodes.Bumper_rear_UCB_BOTTOM_0.material} />
          </group>
          <group position={[19.39, -3.38, 29.65]} scale={2.65}>
            <group position={[-4.55, 8.35, 9.12]}>
              <mesh geometry={nodes.Hood_body_0.geometry} material={nodes.Hood_body_0.material} />
            </group>
          </group>
          <group position={[19.39, -3.38, 29.65]} scale={2.65}>
            <group position={[-4.55, 8.35, 9.12]}>
              <mesh geometry={nodes.Door_FL_body_0.geometry} material={nodes.Door_FL_body_0.material} />
            </group>
          </group>
          <group position={[19.39, -3.38, 29.65]} scale={2.65}>
            <group position={[-4.55, 8.35, 9.12]}>
              <mesh geometry={nodes.Trunkdoor_body_0.geometry} material={nodes.Trunkdoor_body_0.material} />
            </group>
          </group>
          <group position={[19.17, -3.38, 29.65]} scale={2.65}>
            <group position={[-4.55, 8.35, 9.12]}>
              <mesh geometry={nodes.Doorglass_FL_UCB_GLASS_CLEAN_0.geometry} material={nodes.Doorglass_FL_UCB_GLASS_CLEAN_0.material} />
            </group>
          </group>
          <group position={[19.39, -3.38, 29.65]} scale={2.65}>
            <group position={[-4.55, 8.35, 9.12]}>
              <mesh geometry={nodes.Windshield_UCB_GLASS_CLEAN_0.geometry} material={nodes.Windshield_UCB_GLASS_CLEAN_0.material} />
            </group>
          </group>
          <group position={[19.39, -3.38, 29.65]} scale={2.65}>
            <group position={[-4.55, 8.35, 9.12]}>
              <mesh geometry={nodes.Hood_inner_UCB_BOTTOM_0.geometry} material={nodes.Hood_inner_UCB_BOTTOM_0.material} />
            </group>
          </group>
          <group position={[19.39, -3.38, 29.65]} scale={2.65}>
            <group position={[-4.55, 8.35, 9.12]}>
              <mesh geometry={nodes.Taillights_UCB_BOTTOM_0.geometry} material={nodes.Taillights_UCB_BOTTOM_0.material} />
            </group>
          </group>
          <group position={[0.29, -56.59, 12.89]} rotation={[0, 0, Math.PI / 2]}>
            <group position={[-2.13, 13.57, 2.24]}>
              <mesh geometry={nodes.Suspension_front_UCB_BOTTOM_0.geometry} material={nodes.Suspension_front_UCB_BOTTOM_0.material} />
            </group>
          </group>
          <group position={[-0.05, 11.71, 34.63]} rotation={[0, 0, Math.PI / 2]}>
            <group position={[3.49, -0.02, -20.32]}>
              <mesh geometry={nodes.Bottom_UCB_BOTTOM_0.geometry} material={nodes.Bottom_UCB_BOTTOM_0.material} />
            </group>
          </group>
          <group position={[0.3, 91.2, 27.82]} scale={2.65}>
            <group position={[2.66, -30.11, 9.81]}>
              <mesh
                geometry={nodes.Taillights_glass_reverse_Riverside88_lights_0.geometry}
                material={nodes.Taillights_glass_reverse_Riverside88_lights_0.material}
              />
            </group>
          </group>
          <group position={[17.72, -89.72, 23.73]} rotation={[Math.PI / 2, 0, Math.PI]} scale={[0.28, 0.28, 0.28]}>
            <group position={[45.47, 15.14, 9.38]}>
              <mesh
                geometry={nodes.Headlights_glass_Riverside88_lights_0.geometry}
                material={nodes.Headlights_glass_Riverside88_lights_0.material}
              />
            </group>
          </group>
          <group position={[19.39, -3.38, 29.65]} scale={2.65}>
            <group position={[-4.55, 8.35, 9.12]}>
              <mesh
                geometry={nodes.Turnsignals_glass_Riverside88_lights_0.geometry}
                material={nodes.Turnsignals_glass_Riverside88_lights_0.material}
              />
            </group>
          </group>
          <group position={[-32.53, -58.94, 12.89]} rotation={[0, 0, Math.PI / 2]}>
            <group position={[0.22, -19.25, 2.24]}>
              <mesh geometry={nodes.brakes_FR_UCB_BOTTOM_0.geometry} material={nodes.brakes_FR_UCB_BOTTOM_0.material} />
            </group>
          </group>
          <group position={[0.3, 62.25, 33.83]}>
            <group position={[32.06, -28.37, 6.34]}>
              <mesh geometry={nodes.Badges_body_GENERIC_BADGES_0.geometry} material={nodes.Badges_body_GENERIC_BADGES_0.material} />
            </group>
          </group>
          <group position={[16.22, -52.71, 36.18]}>
            <mesh geometry={nodes.Badges_hood_GENERIC_BADGES_0.geometry} material={nodes.Badges_hood_GENERIC_BADGES_0.material} />
          </group>
          <group position={[33.1, -58.94, 12.89]} rotation={[0, 0, Math.PI / 2]}>
            <group position={[0.22, 46.38, 2.24]}>
              <mesh geometry={nodes.brakes_FR_UCB_BOTTOM_0_1.geometry} material={nodes.brakes_FR_UCB_BOTTOM_0_1.material} />
            </group>
          </group>
          <group position={[9.86, -6.77, -0.35]} rotation={[-Math.PI, 0, 0]}>
            <mesh geometry={nodes.Exhaust_UCB_BOTTOM_0.geometry} material={nodes.Exhaust_UCB_BOTTOM_0.material} />
          </group>
          <group position={[0.3, 94.99, 20.23]} rotation={[-0.61, 0, -Math.PI / 2]}>
            <mesh geometry={nodes.Numberplate_rear_Numberplates_0.geometry} material={materials.Numberplates} />
          </group>
          <group position={[-1.19, -16.01, 30.19]} rotation={[0, 0, -Math.PI / 2]} scale={[0.95, 1.03, 0.95]}>
            <group position={[-0.24, 17.8, 5.22]}>
              <mesh geometry={nodes.Dashboard_GEN4DR_INTERIOR_0.geometry} material={nodes.Dashboard_GEN4DR_INTERIOR_0.material} />
            </group>
          </group>
          <group position={[1.6, 27.28, 28.56]} rotation={[0, 0, Math.PI / 2]} scale={[0.97, 0.97, 0.97]}>
            <group position={[-83.58, -14.15, 3.6]}>
              <mesh geometry={nodes.Seats_GEN4DR_INTERIOR_0.geometry} material={nodes.Seats_GEN4DR_INTERIOR_0.material} />
            </group>
          </group>
          <group position={[30.38, 4.07, 22.64]} rotation={[Math.PI / 2, Math.PI / 2, 0]} scale={[1.25, 1.09, 1.05]}>
            <group position={[16.59, -0.98, 0.4]}>
              <mesh geometry={nodes.Doorcard_FL_GEN4DR_INTERIOR_0.geometry} material={nodes.Doorcard_FL_GEN4DR_INTERIOR_0.material} />
            </group>
          </group>
          <group position={[-35.24, 11.71, 34.63]} rotation={[0, 0, Math.PI / 2]}>
            <group position={[3.49, -0.02, -20.32]}>
              <mesh geometry={nodes.Door_inner_FL_UCB_BOTTOM_0.geometry} material={nodes.Door_inner_FL_UCB_BOTTOM_0.material} />
            </group>
          </group>
          <group position={[-0.05, 11.71, 34.63]} rotation={[0, 0, Math.PI / 2]}>
            <group position={[3.49, -0.02, -20.32]}>
              <mesh geometry={nodes.Interior_GEN4DR_INTERIOR_0.geometry} material={nodes.Interior_GEN4DR_INTERIOR_0.material} />
            </group>
          </group>
          <group position={[34.58, -58.88, 12.7]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.28, 0.28, 5.37]}>
            <group position={[0, 0, 1.08]}>
              <mesh geometry={nodes.Wheel_FL_RIMMUSCLE_01_0.geometry} material={nodes.Wheel_FL_RIMMUSCLE_01_0.material} />
            </group>
          </group>
          <group position={[34.58, 49.83, 13.62]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.3, 0.3, 5.74]}>
            <group position={[-350.93, 0, 1.08]}>
              <mesh geometry={nodes.Wheel_RL_RIMMUSCLE_01_0.geometry} material={nodes.Wheel_RL_RIMMUSCLE_01_0.material} />
            </group>
          </group>
          <group position={[-33.99, -58.88, 12.7]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.28, 0.28, 5.37]}>
            <group position={[0, 0, 13.85]}>
              <mesh geometry={nodes.Wheel_FR_RIMMUSCLE_01_0.geometry} material={nodes.Wheel_FR_RIMMUSCLE_01_0.material} />
            </group>
          </group>
          <group position={[-33.99, 49.83, 13.62]} rotation={[Math.PI / 2, 1.57, 0]} scale={[0.3, 0.3, 5.74]}>
            <group position={[-350.93, 0, 13.04]}>
              <mesh geometry={nodes.Wheel_RR_RIMMUSCLE_01_0.geometry} material={nodes.Wheel_RR_RIMMUSCLE_01_0.material} />
            </group>
          </group>
          <group position={[19.39, -3.38, 15.43]} scale={2.65}>
            <group position={[-4.55, 8.35, 9.12]}>
              <mesh geometry={nodes.Trunkdoor_inner_UCB_BOTTOM_0.geometry} material={nodes.Trunkdoor_inner_UCB_BOTTOM_0.material} />
            </group>
          </group>
          <group position={[-0.58, -54.62, 25.49]} rotation={[Math.PI / 2, Math.PI / 2, 0]} scale={[0.85, 0.77, 0.77]}>
            <group position={[-21.14, -1.25, 9.37]}>
              <mesh
                geometry={nodes.Engine_Plarts_muscle_UCB_BOTTOM_0.geometry}
                material={nodes.Engine_Plarts_muscle_UCB_BOTTOM_0.material}
              />
            </group>
          </group>
          <group position={[0.3, 91.2, 27.82]} scale={2.65}>
            <group position={[2.66, -30.11, 9.81]}>
              <mesh
                geometry={nodes.Taillights_glass_brakelights_Riverside88_lights_0.geometry}
                material={nodes.Taillights_glass_brakelights_Riverside88_lights_0.material}
              />
            </group>
          </group>
          <group position={[19.39, -3.38, 29.65]} scale={2.65}>
            <group position={[-4.55, 8.35, 9.12]}>
              <mesh geometry={nodes.Glass_rear_UCB_GLASS_CLEAN_0.geometry} material={nodes.Glass_rear_UCB_GLASS_CLEAN_0.material} />
            </group>
          </group>
          <group position={[19.39, -3.38, 29.65]} scale={2.65}>
            <group position={[-4.55, 8.35, 9.12]}>
              <mesh geometry={nodes.Door_FR_body_0.geometry} material={nodes.Door_FR_body_0.material} />
            </group>
          </group>
          <group position={[-35.24, 11.71, 34.63]} rotation={[0, 0, Math.PI / 2]}>
            <group position={[3.49, -0.02, -20.32]}>
              <mesh geometry={nodes.Door_inner_FR_UCB_BOTTOM_0.geometry} material={nodes.Door_inner_FR_UCB_BOTTOM_0.material} />
            </group>
          </group>
          <group position={[30.38, 4.07, 22.64]} rotation={[Math.PI / 2, Math.PI / 2, 0]} scale={[1.25, 1.09, 1.05]}>
            <group position={[16.59, -0.98, 0.4]}>
              <mesh geometry={nodes.Doorcard_FR_GEN4DR_INTERIOR_0.geometry} material={nodes.Doorcard_FR_GEN4DR_INTERIOR_0.material} />
            </group>
          </group>
          <group position={[19.17, -3.38, 29.65]} scale={2.65}>
            <group position={[-4.55, 8.35, 9.12]}>
              <mesh geometry={nodes.Doorglass_FR_UCB_GLASS_CLEAN_0.geometry} material={nodes.Doorglass_FR_UCB_GLASS_CLEAN_0.material} />
            </group>
          </group>
          <group position={[14.9, -2.07, 31.1]} rotation={[0.09, 0, -1.57]} scale={[0.96, 0.96, 0.96]}>
            <group position={[-4.9, -13.54, -7]} rotation={[0, 0, Math.PI]}>
              <mesh geometry={nodes.Steering_wheel_GEN4DR_INTERIOR_0.geometry} material={nodes.Steering_wheel_GEN4DR_INTERIOR_0.material} />
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('car.glb')
