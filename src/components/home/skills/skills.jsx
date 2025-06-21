import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Html, Float, Stars } from "@react-three/drei";
import { useRef, useEffect, useState, useCallback, useMemo } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import * as THREE from "three";

// Mobile-optimized skill orbs with touch interaction
function MobileSkillOrbs({ skills }) {
  const groupRef = useRef();
  
  const positions = useMemo(() => {
    return skills.map((_, index) => {
      const angle = (index / skills.length) * Math.PI * 2;
      const layer = Math.floor(index / 6); // 6 items per layer for mobile
      const layerRadius = 4 - layer * 1.5; // Smaller radius for mobile
      const x = Math.cos(angle) * layerRadius;
      const z = Math.sin(angle) * layerRadius;
      const y = (Math.sin(angle * 1.2) * 2) + (layer * 2);
      return [x, y, z];
    });
  }, [skills.length]);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.08; // Slower rotation for mobile
    }
  });

  return (
    <group ref={groupRef}>
      {skills.map((skill, index) => {
        const [x, y, z] = positions[index];
        
        return (
          <Float 
            speed={1.5} 
            rotationIntensity={0.2} 
            floatIntensity={1.2}
            key={skill.title}
          >
            <group position={[x, y, z]} scale={0.8}>
              <Html center distanceFactor={8}>
                <motion.div
                  className="relative cursor-pointer"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    transition: { 
                      delay: index * 0.1, 
                      duration: 0.8,
                      type: "spring",
                      stiffness: 120
                    } 
                  }}
                  whileTap={{
                    scale: 0.9,
                    transition: { type: "spring", stiffness: 400 }
                  }}
                >
                  <div 
                    className="w-24 h-28 p-3 rounded-xl bg-white/15 backdrop-blur-lg border border-white/25 transition-all duration-300 group active:bg-white/20"
                    style={{
                      boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)"
                    }}
                  >
                    {/* Icon container */}
                    <div className="mb-2">
                      <div className="bg-slate-800/70 p-2.5 rounded-lg border border-white/15">
                        <img
                          src={skill.img}
                          alt={skill.title}
                          className="w-8 h-8 object-contain mx-auto"
                        />
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-white text-xs font-medium text-center mb-2">
                      {skill.title}
                    </h3>
                    
                    {/* Progress bar */}
                    <div className="h-0.5 bg-slate-600/50 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ delay: index * 0.1 + 1.2, duration: 1.2 }}
                      />
                    </div>
                  </div>
                </motion.div>
              </Html>
            </group>
          </Float>
        );
      })}
    </group>
  );
}

// Desktop skill orbs (unchanged)
function SkillOrbs({ skills, deviceSize }) {
  const groupRef = useRef();
  
  const getLayoutParams = () => {
    let radius = 8;
    let verticalSpread = 4;
    let orbScale = 1.0;
    
    if (deviceSize === "small-desktop") {
      radius = 7;
      verticalSpread = 3;
      orbScale = 0.9;
    } else if (deviceSize === "laptop") {
      radius = 6;
      verticalSpread = 2.5;
      orbScale = 0.8;
    }
    
    return { radius, verticalSpread, orbScale };
  };
  
  const { radius, verticalSpread, orbScale } = getLayoutParams();

  const positions = useMemo(() => {
    return skills.map((_, index) => {
      const angle = (index / skills.length) * Math.PI * 2;
      const layer = Math.floor(index / 8);
      const layerRadius = radius - layer * 2;
      const x = Math.cos(angle) * layerRadius;
      const z = Math.sin(angle) * layerRadius;
      const y = (Math.sin(angle * 1.5) * verticalSpread * 0.4) + (layer * 1.5);
      return [x, y, z];
    });
  }, [skills.length, radius, verticalSpread]);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {skills.map((skill, index) => {
        const [x, y, z] = positions[index];
        
        return (
          <Float 
            speed={1.2} 
            rotationIntensity={0.1} 
            floatIntensity={0.8}
            key={skill.title}
          >
            <group position={[x, y, z]} scale={orbScale}>
              <Html center distanceFactor={10}>
                <motion.div
                  className="relative cursor-pointer"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    transition: { 
                      delay: index * 0.08, 
                      duration: 0.6,
                      type: "spring",
                      stiffness: 100
                    } 
                  }}
                  whileHover={{
                    scale: 1.1,
                    y: -3,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                >
                  <div 
                    className="w-32 h-36 p-4 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 hover:border-blue-400/40 transition-all duration-300 group hover:bg-white/15"
                    style={{
                      boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)"
                    }}
                  >
                    {/* Icon container */}
                    <div className="mb-3">
                      <div className="bg-slate-800/60 p-3 rounded-lg border border-white/10 group-hover:border-white/20 transition-colors">
                        <img
                          src={skill.img}
                          alt={skill.title}
                          className="w-12 h-12 object-contain mx-auto"
                        />
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-white text-xs font-medium text-center mb-2">
                      {skill.title}
                    </h3>
                    
                    {/* Simple progress bar */}
                    <div className="h-0.5 bg-slate-600/50 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ delay: index * 0.1 + 1, duration: 1 }}
                      />
                    </div>
                  </div>
                </motion.div>
              </Html>
            </group>
          </Float>
        );
      })}
    </group>
  );
}

// Clean lighting setup
function SimpleLighting() {
  return (
    <>
      <ambientLight intensity={0.6} color="#ffffff" />
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#3b82f6" />
      <pointLight position={[-10, -10, -5]} intensity={0.6} color="#8b5cf6" />
    </>
  );
}

// Enhanced mobile experience with 3D
function EnhancedMobile({ skills }) {
  const [showInstructions, setShowInstructions] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowInstructions(false);
    }, 4000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="py-8 px-4 min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
        <div className="absolute top-32 right-16 w-1 h-1 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-8 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-12 w-1 h-1 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '3s' }} />
      </div>

      {/* Touch instructions overlay */}
      <AnimatePresence>
        {showInstructions && (
          <motion.div
            className="absolute top-4 left-4 right-4 z-10 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-black/40 backdrop-blur-sm rounded-lg p-3 border border-white/20">
              <p className="text-white text-xs">
                👆 Touch and drag to explore • Tap skills to interact
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Header */}
      <motion.div 
        className="text-center mb-6 mt-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
          My Skills
        </motion.h2>
        <motion.div 
          className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full mb-2"
          initial={{ width: 0 }}
          animate={{ width: 64 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        />
        <motion.p className="text-slate-400 text-xs">
          {skills.length} core technologies
        </motion.p>
      </motion.div>

      {/* 3D Skills Container */}
      <div className="relative h-96 w-full touch-manipulation">
        <Canvas 
          camera={{ position: [0, 0, 12], fov: 70 }}
          gl={{ 
            antialias: true,
            alpha: true,
            powerPreference: "high-performance"
          }}
        >
          <SimpleLighting />
          <MobileSkillOrbs skills={skills} />
          <Stars 
            radius={80} 
            depth={40} 
            count={200} 
            factor={1.5} 
            saturation={0.2} 
            fade 
            speed={0.5} 
          />
          <OrbitControls 
            enableZoom={true}
            minDistance={8}
            maxDistance={20}
            enablePan={true}
            enableRotate={true}
            rotateSpeed={0.8}
            autoRotate={true}
            autoRotateSpeed={0.5}
            dampingFactor={0.05}
            enableDamping={true}
            touches={{
              ONE: THREE.TOUCH.ROTATE,
              TWO: THREE.TOUCH.DOLLY_PAN
            }}
          />
        </Canvas>
      </div>
    </div>
  );
}

// Compact desktop experience (unchanged)
function CompactDesktop({ skills, deviceSize }) {
  const mouse = {
    x: useSpring(useMotionValue(0), { stiffness: 100, damping: 30 }),
    y: useSpring(useMotionValue(0), { stiffness: 100, damping: 30 }),
  };

  const handlePointerMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouse.x.set(((e.clientX - rect.left) / rect.width - 0.5) * 2);
    mouse.y.set((0.5 - (e.clientY - rect.top) / rect.height) * 2);
  }, [mouse]);

  const getCameraPosition = () => {
    if (deviceSize === "laptop") return [0, 0, 18];
    if (deviceSize === "small-desktop") return [0, 0, 16];
    return [0, 0, 14];
  };

  return (
    <div className="py-12  bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <motion.div 
        className="text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
          Technical Skills
        </motion.h2>
        {/* <motion.p className="text-slate-400 text-sm">
          Hover and drag to explore • {skills.length} technologies
        </motion.p> */}
      </motion.div>

      {/* 3D Skills Container */}
      <div
        className="relative h-96 w-full"
        onPointerMove={handlePointerMove}
      >
        <Canvas camera={{ position: getCameraPosition(), fov: 60 }}>
          <SimpleLighting />
          <SkillOrbs skills={skills} deviceSize={deviceSize} />
          <Stars 
            radius={100} 
            depth={50} 
            count={500} 
            factor={2} 
            saturation={0} 
            fade 
            speed={0.3} 
          />
          <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            enableRotate={true}
            rotateSpeed={0.4}
            autoRotate
            autoRotateSpeed={0.3}
          />
        </Canvas>
      </div>

      {/* Bottom description */}
      <motion.div
        className="text-center mt-8 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <p className="text-slate-300 text-sm max-w-2xl mx-auto">
          These are the core technologies I work with daily. Each skill represents years of hands-on experience 
          building real-world applications and solving complex problems.
        </p>
      </motion.div>
    </div>
  );
}

// Condensed tablet view (unchanged)
function CompactTablet({ skills }) {
  return (
    <div className="py-16 px-6 min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
          Technical Skills
        </motion.h2>
        <motion.div 
          className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        />
      </motion.div>
      
      {/* Compact grid */}
      <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.title}
            className="group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: { 
                delay: index * 0.05, 
                duration: 0.5
              } 
            }}
            whileHover={{
              y: -5,
              transition: { type: "spring", stiffness: 200 }
            }}
          >
            <div className="p-4 bg-white/8 backdrop-blur-lg border border-white/10 hover:border-blue-400/30 transition-all duration-300 rounded-lg group-hover:bg-white/12">
              <div className="flex flex-col items-center">
                <div className="mb-3 group-hover:scale-105 transition-transform">
                  <div className="bg-slate-800/60 p-3 rounded-lg border border-white/10">
                    <img
                      src={skill.img}
                      alt={skill.title}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                </div>
                
                <h3 className="text-white font-medium text-sm text-center">
                  {skill.title}
                </h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Main component
export default function Skills() {
  const [deviceType, setDeviceType] = useState("desktop");
  const [isLoaded, setIsLoaded] = useState(false);

  const handleResize = useCallback(() => {
    const width = window.innerWidth;
    if (width < 640) {
      setDeviceType("mobile");
    } else if (width < 1024) {
      setDeviceType("tablet");
    } else if (width < 1200) {
      setDeviceType("laptop");
    } else if (width < 1440) {
      setDeviceType("small-desktop");
    } else {
      setDeviceType("desktop");
    }
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    
    setTimeout(() => setIsLoaded(true), 100);
    
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

  if (!isLoaded) {
    return (
      <div className="h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <motion.div
          className="w-8 h-8 border-2 border-blue-400 rounded-full border-t-transparent"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      </div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={deviceType}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {deviceType === "mobile" && <EnhancedMobile skills={skills} />}
        {deviceType === "tablet" && <CompactTablet skills={skills} />}
        {(deviceType === "laptop" || deviceType === "small-desktop" || deviceType === "desktop") && 
          <CompactDesktop skills={skills} deviceSize={deviceType} />
        }
      </motion.div>
    </AnimatePresence>
  );
}