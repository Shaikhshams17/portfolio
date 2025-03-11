import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Html, Float, Stars } from "@react-three/drei";
import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import * as THREE from "three";

function FloatingSkills({ skills }) {
  // Grid settings: number of columns and spacing
  const columns = 4;
  const spacing = 3.5;
  const totalRows = Math.ceil(skills.length / columns);
  // Center the grid: compute offsets so that the grid is centered
  const xOffset = ((columns - 1) / 2) * spacing;
  const yOffset = ((totalRows - 1) / 2) * spacing;

  return skills.map((skill, i) => {
    const col = i % columns;
    const row = Math.floor(i / columns);
    const x = col * spacing - xOffset;
    const y = -row * spacing + yOffset;
    return (
      <Float speed={2} rotationIntensity={0.5} key={i}>
        <mesh position={[x, y, 0]}>
          <planeGeometry args={[2.5, 3]} />
          <meshStandardMaterial
            color="#ffffff"
            transparent
            opacity={0.9}
            metalness={0.9}
            roughness={0.1}
            envMapIntensity={2}
          />
          <Html center>
            <motion.div 
              className="w-full h-full p-6 rounded-xl backdrop-blur-lg bg-gradient-to-br from-red-600 to-red-400 shadow-2xl shadow-red-600"
              whileHover={{
                scale: 1.1,
                rotateX: 5,
                rotateY: 5,
                transition: { type: 'spring', stiffness: 300 }
              }}
            >
              <img 
                src={skill.img} 
                alt={skill.title} 
                className="w-4/5 h-auto mx-auto filter drop-shadow-lg" 
              />
              <h3 className="text-white text-xl font-bold text-center mt-4">
                {skill.title}
              </h3>
            </motion.div>
          </Html>
        </mesh>
      </Float>
    );
  });
}

function InteractiveBackground({ mouse }) {
  const sphereRef = useRef();
  const { viewport } = useThree();

  useFrame(() => {
    if (!sphereRef.current) return;
    
    // Mouse following effect for the sphere
    sphereRef.current.position.x = THREE.MathUtils.lerp(
      sphereRef.current.position.x,
      mouse.x.get() * viewport.width / 4,
      0.1
    );
    sphereRef.current.position.y = THREE.MathUtils.lerp(
      sphereRef.current.position.y,
      mouse.y.get() * viewport.height / 4,
      0.1
    );
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <directionalLight position={[-5, 5, 5]} intensity={0.8} />

      {/* Red box removed. To show a subtle version, uncomment the code below and adjust opacity.
      <mesh position={[0, 0, -5]}>
        <boxGeometry args={[3, 3, 3]} />
        <meshStandardMaterial 
          color="#ff4040" 
          metalness={0.9}
          roughness={0.3}
          emissive="#ff4040"
          emissiveIntensity={0.1}
          transparent
          opacity={0.1}
        />
      </mesh>
      */}

      <mesh ref={sphereRef}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshStandardMaterial 
          color="#4040ff"
          transparent
          opacity={0.2}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
    </>
  );
}

export default function Skills() {
  const skills = [
    { title: "MongoDB", img: "/7.png" },
    { title: "Express.js", img: "/expressjs.webp" },
    { title: "React.js", img: "/11.png" },
    { title: "Next.js", img: "/8.png" },
    { title: "Node.js", img: "/9.png" },
    { title: "Git & Github", img: "/6.png" },
    { title: "Docker", img: "/3.png" },
    { title: "AWS", img: "/2.png" },
    { title: "Tailwind CSS", img: "/12.png" },
    { title: "Figma", img: "/1.png" },
    { title: "Firebase", img: "/5.png" },
    { title: "Python", img: "/10.png" },
  ];

  const mouse = {
    x: useSpring(useMotionValue(0), { stiffness: 100, damping: 20 }),
    y: useSpring(useMotionValue(0), { damping: 20 })
  };

  return (
    <div 
      className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-gray-900 to-black"
      onPointerMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouse.x.set((e.clientX - rect.width/2) / rect.width * 2);
        mouse.y.set((rect.height/2 - e.clientY) / rect.height * 2);
      }}
    >
      <Canvas camera={{ position: [0, 0, 15], fov: 50 }}>
        <InteractiveBackground mouse={mouse} />
        <FloatingSkills skills={skills} />
        {/* Adding a starry background for extra depth */}
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>

      <motion.h2 
        className="absolute top-12  -translate-x-1/2 text-4xl md:text-6xl font-bold text-white z-10 text-start"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          textShadow: '0 0 20px rgba(255,64,64,0.5)',
        }}
      >
        SKILLS:
      </motion.h2>
    </div>
  );
}
