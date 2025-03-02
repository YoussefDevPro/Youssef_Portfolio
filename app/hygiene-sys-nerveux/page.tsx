'use client';

import { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

interface Slide {
  title: string;
  content: string;
  modelPath: string;
}

const slides: Slide[] = [
  {
    title: "L'impact de l'alcool sur le système nerveux",
    content: "L'alcool peut gravement endommager votre système nerveux, affectant la mémoire, la coordination et le jugement.",
    modelPath: "/models/alcool.glb"
  },
  {
    title: "Les effets du tabac sur le cerveau",
    content: "Le tabagisme peut réduire l'oxygénation du cerveau et augmenter les risques de maladies neurologiques.",
    modelPath: "/models/cigar.glb"
  },
  {
    title: "Maintenir un cerveau sain",
    content: "Une bonne hygiène du système nerveux implique une alimentation équilibrée, du sommeil régulier et de l'exercice physique.",
    modelPath: "/models/brain.glb"
  }
];

export default function HygieneSystemeNerveux() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const modelRef = useRef<THREE.Group | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controlsRef.current = controls;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      if (controlsRef.current) {
        controlsRef.current.update();
      }
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      renderer.dispose();
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  useEffect(() => {
    if (!sceneRef.current) return;

    // Remove previous model
    if (modelRef.current) {
      sceneRef.current.remove(modelRef.current);
    }

    // Load new model
    const loader = new GLTFLoader();
    loader.load(slides[currentSlide].modelPath, (gltf) => {
      const model = gltf.scene;
      model.scale.set(2, 2, 2);
      sceneRef.current?.add(model);
      modelRef.current = model;
    });
  }, [currentSlide]);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-700 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          Hygiène du Système Nerveux
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            ref={containerRef}
            className="aspect-square bg-gray-800 rounded-lg overflow-hidden"
          />
          
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-2xl font-semibold">{slides[currentSlide].title}</h2>
            <p className="text-lg">{slides[currentSlide].content}</p>
            
            <div className="flex justify-between mt-8">
              <button
                onClick={handlePrevSlide}
                className="px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Précédent
              </button>
              <button
                onClick={handleNextSlide}
                className="px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Suivant
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}