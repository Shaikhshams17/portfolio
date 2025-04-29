import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Html, Float, Stars } from "@react-three/drei";
import { useRef, useEffect, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import * as THREE from "three";

// Floating Skill Cards (Desktop)
function FloatingSkills({ skills }) {
  const columns = 4;
  const spacing = 3.5;
  const totalRows = Math.ceil(skills.length / columns);
  const xOffset = ((columns - 1) / 2) * spacing;
  const yOffset = ((totalRows - 1) / 2) * spacing;

  return skills.map((skill, index) => {
    const col = index % columns;
    const row = Math.floor(index / columns);
    const x = col * spacing - xOffset;
    const y = -row * spacing + yOffset;

    return (
      <Float speed={2} rotationIntensity={0.5} key={skill.title}>
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
              className="w-full h-full p-6 rounded-xl backdrop-blur-md bg-[#29414a] shadow-2xl shadow-gray-700"
              whileHover={{
                scale: 1.1,
                rotateX: 5,
                rotateY: 5,
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              <img
                src={skill.img}
                alt={skill.title}
                className="w-4/5 h-auto mx-auto filter drop-shadow-lg"
              />
              <h3 className="text-white text-xl font-bold text-center mt-4">{skill.title}</h3>
            </motion.div>
          </Html>
        </mesh>
      </Float>
    );
  });
}

// Interactive Background (Desktop)
function InteractiveBackground({ mouse }) {
  const sphereRef = useRef();
  const { viewport } = useThree();

  useFrame(() => {
    if (sphereRef.current) {
      sphereRef.current.position.x = THREE.MathUtils.lerp(
        sphereRef.current.position.x,
        mouse.x.get() * viewport.width / 4,
        0.05 // even smoother and slower movement
      );
      sphereRef.current.position.y = THREE.MathUtils.lerp(
        sphereRef.current.position.y,
        mouse.y.get() * viewport.height / 4,
        0.05
      );
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <directionalLight position={[-5, 5, 5]} intensity={0.8} />
      <mesh ref={sphereRef} position={[0, 0, -5]}>
        <sphereGeometry args={[1.2, 32, 32]} />
        <meshStandardMaterial
          color="#4040ff"
          transparent
          opacity={0.08}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
    </>
  );
}

// Desktop View
function SkillsDesktop({ skills }) {
  const mouse = {
    x: useSpring(useMotionValue(0), { stiffness: 100, damping: 20 }),
    y: useSpring(useMotionValue(0), { stiffness: 100, damping: 20 }),
  };

  const handlePointerMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouse.x.set(((e.clientX - rect.left) / rect.width - 0.5) * 2);
    mouse.y.set((0.5 - (e.clientY - rect.top) / rect.height) * 2);
  }, [mouse]);

  return (
    <div
      className="relative h-screen w-full overflow-hidden"
      style={{ backgroundColor: "#c9c8cb" }}
      onPointerMove={handlePointerMove}
    >
      <Canvas camera={{ position: [0, 0, 15], fov: 50 }}>
        <InteractiveBackground mouse={mouse} />
        <FloatingSkills skills={skills} />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>

      <motion.h2
        className="absolute top-12 left-1/2 -translate-x-1/2 text-4xl md:text-6xl font-bold text-black z-10 text-center"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          textShadow: "0 0 20px rgba(0,0,0,0.3)",
        }}
      >
        SKILLS
      </motion.h2>
    </div>
  );
}

// Mobile View - simple cards
function SkillsMobile({ skills }) {
  return (
    <div className="py-12 px-6 min-h-screen" style={{ backgroundColor: "#c9c8cb" }}>
      <h2 className="text-black text-4xl font-bold text-center mb-8">Skills</h2>
      <div className="grid grid-cols-2 gap-6">
        {skills.map((skill) => (
          <div
            key={skill.title}
            className="p-4 rounded-xl flex flex-col items-center justify-center shadow-md"
            style={{ backgroundColor: "#29414a" }}
          >
            <img
              src={skill.img}
              alt={skill.title}
              className="w-16 h-16 object-contain mb-4"
            />
            <h3 className="text-white font-semibold text-center text-sm">{skill.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

// Main Skills Component
export default function Skills() {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

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

  return isMobile ? <SkillsMobile skills={skills} /> : <SkillsDesktop skills={skills} />;
}
