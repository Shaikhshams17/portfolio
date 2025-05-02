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
      <Float 
        speed={1.2} 
        rotationIntensity={0.2} 
        floatIntensity={0.7}
        key={skill.title}
      >
        <mesh position={[x, y, 0]}>
          <planeGeometry args={[2.5, 3]} />
          <meshStandardMaterial
            color="#30444c"
            transparent
            opacity={0.1}
            metalness={0.6}
            roughness={0.2}
            envMapIntensity={1.5}
          />
          <Html center>
            <motion.div
              className="w-full h-full p-6 rounded-xl backdrop-blur-sm border border-teal-300/20"
              style={{
                background: "linear-gradient(145deg, #ffffff 0%, #f5f5f5 100%)",
                boxShadow: "0 10px 30px rgba(48, 68, 76, 0.15)"
              }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 15px 30px rgba(48, 68, 76, 0.25)",
                transition: { type: "spring", stiffness: 200, damping: 20 },
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: { delay: index * 0.075, duration: 0.5, ease: "easeOut" } 
              }}
            >
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-lg mb-3 flex items-center justify-center border border-gray-200">
                <img
                  src={skill.img}
                  alt={skill.title}
                  className="w-4/5 h-auto mx-auto filter drop-shadow-md"
                />
              </div>
              <h3 className="text-gray-800 text-xl font-bold text-center mt-2">{skill.title}</h3>
              <div className="h-0.5 w-12 bg-gradient-to-r from-teal-500 to-teal-400 rounded-full mx-auto mt-2 opacity-80"></div>
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

  useFrame(({ clock }) => {
    if (sphereRef.current) {
      // Mouse follow effect with smoother transition
      sphereRef.current.position.x = THREE.MathUtils.lerp(
        sphereRef.current.position.x,
        mouse.x.get() * viewport.width / 3,
        0.02
      );
      sphereRef.current.position.y = THREE.MathUtils.lerp(
        sphereRef.current.position.y,
        mouse.y.get() * viewport.height / 3,
        0.02
      );
      
      // Subtle breathing effect
      const t = clock.getElapsedTime();
      sphereRef.current.scale.x = sphereRef.current.scale.y = sphereRef.current.scale.z = 
        1 + Math.sin(t * 0.4) * 0.08;
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1.2} color="#14b8a6" />
      <pointLight position={[-10, -10, -5]} intensity={0.8} color="#0d9488" />
      <directionalLight position={[-5, 5, 5]} intensity={0.8} color="#f0f0f0" />
      
      {/* Main glow sphere */}
      <mesh ref={sphereRef} position={[0, 0, -5]}>
        <sphereGeometry args={[2, 64, 64]} />
        <meshStandardMaterial
          color="#30444c"
          transparent
          opacity={0.1}
          metalness={0.7}
          roughness={0.2}
          emissive="#2dd4bf"
          emissiveIntensity={0.3}
        />
      </mesh>
      
      {/* Background elements */}
      <mesh position={[5, -7, -10]}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshStandardMaterial
          color="#30444c"
          transparent
          opacity={0.08}
          metalness={0.6}
          roughness={0.3}
        />
      </mesh>
      
      <mesh position={[-6, 8, -12]}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshStandardMaterial
          color="#30444c"
          transparent
          opacity={0.08}
          metalness={0.6}
          roughness={0.3}
        />
      </mesh>
    </>
  );
}

// Desktop View
function SkillsDesktop({ skills }) {
  const mouse = {
    x: useSpring(useMotionValue(0), { stiffness: 50, damping: 25 }),
    y: useSpring(useMotionValue(0), { stiffness: 50, damping: 25 }),
  };

  const handlePointerMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouse.x.set(((e.clientX - rect.left) / rect.width - 0.5) * 2);
    mouse.y.set((0.5 - (e.clientY - rect.top) / rect.height) * 2);
  }, [mouse]);

  return (
    <div
      className="relative h-screen w-full overflow-hidden"
      style={{ 
        background: "linear-gradient(135deg, #30444c 0%, #243842 100%)"
      }}
      onPointerMove={handlePointerMove}
    >
      {/* Subtle background pattern */}
      <div 
        className="absolute inset-0 opacity-10" 
        style={{ 
          backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "30px 30px"
        }}
      ></div>

      <Canvas camera={{ position: [0, 0, 15], fov: 50 }}>
        <InteractiveBackground mouse={mouse} />
        <FloatingSkills skills={skills} />
        <Stars radius={100} depth={50} count={1500} factor={3} saturation={0} fade speed={0.8} />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          enableRotate={true}
          rotateSpeed={0.2}
          autoRotate
          autoRotateSpeed={0.2}
        />
      </Canvas>

      <motion.div
        className="absolute top-12 left-1/2 -translate-x-1/2 z-10 text-center"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h2 
          className="text-5xl md:text-7xl font-bold z-10 text-white"
          style={{
            textShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          }}
        >
          SKILLS
        </h2>
        <div className="h-0.5 w-24 bg-gradient-to-r from-teal-400 to-teal-300 rounded-full mx-auto mt-3"></div>
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 h-40 w-40 bg-teal-500/5 rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 h-56 w-56 bg-teal-400/5 rounded-tr-full"></div>
    </div>
  );
}

// Mobile View - enhanced cards
function SkillsMobile({ skills }) {
  return (
    <div 
      className="py-16 px-6 min-h-screen" 
      style={{ 
        background: "linear-gradient(135deg, #30444c 0%, #243842 100%)"
      }}
    >
      {/* Subtle background pattern */}
      <div 
        className="absolute inset-0 opacity-10" 
        style={{ 
          backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "30px 30px"
        }}
      ></div>

      <div className="text-center mb-12">
        <h2 
          className="text-5xl font-bold mb-2 text-white"
          style={{
            textShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          Skills
        </h2>
        <div className="h-0.5 w-20 bg-gradient-to-r from-teal-400 to-teal-300 rounded-full mx-auto mt-1"></div>
      </div>
      
      <div className="grid grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.title}
            className="p-5 rounded-xl flex flex-col items-center justify-center"
            style={{ 
              background: "linear-gradient(145deg, #ffffff, #f5f5f5)",
              boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)"
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: { delay: index * 0.075, duration: 0.5, ease: "easeOut" } 
            }}
            whileHover={{
              y: -5,
              boxShadow: "0 15px 20px rgba(0, 0, 0, 0.15)",
              transition: { type: "spring", stiffness: 200, damping: 20 },
            }}
          >
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-lg mb-3 w-full flex items-center justify-center border border-gray-200">
              <img
                src={skill.img}
                alt={skill.title}
                className="w-16 h-16 object-contain"
              />
            </div>
            <h3 className="text-gray-800 font-semibold text-center text-sm">
              {skill.title}
            </h3>
            <div className="h-0.5 w-8 bg-gradient-to-r from-teal-500 to-teal-400 rounded-full mx-auto mt-2 opacity-80"></div>
          </motion.div>
        ))}
      </div>

      {/* Decorative elements */}
      <div className="fixed top-0 right-0 h-32 w-32 bg-teal-500/5 rounded-bl-full"></div>
      <div className="fixed bottom-0 left-0 h-40 w-40 bg-teal-400/5 rounded-tr-full"></div>
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