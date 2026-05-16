import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, animate } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [images, setImages] = useState([]);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const frameCount = 240;

  // Track scroll progress of the hero section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth out the scroll progress for a more "premium" feel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Map scroll progress to image frame index
  const currentIndex = useTransform(smoothProgress, [0, 1], [1, frameCount]);

  // Text animations based on scroll
  const opacity1 = useTransform(smoothProgress, [0, 0.15, 0.2], [0, 1, 0]);
  const y1 = useTransform(smoothProgress, [0, 0.15, 0.2], [50, 0, -50]);

  const opacity2 = useTransform(smoothProgress, [0.25, 0.4, 0.45], [0, 1, 0]);
  const y2 = useTransform(smoothProgress, [0.25, 0.4, 0.45], [50, 0, -50]);

  const opacity3 = useTransform(smoothProgress, [0.5, 0.65, 0.7], [0, 1, 0]);
  const y3 = useTransform(smoothProgress, [0.5, 0.65, 0.7], [50, 0, -50]);

  const opacity4 = useTransform(smoothProgress, [0.75, 0.9, 1], [0, 1, 1]);
  const y4 = useTransform(smoothProgress, [0.75, 0.9, 1], [50, 0, 0]);

  const imageUrls = React.useMemo(() => {
    const urls = [];
    for (let i = 1; i <= frameCount; i++) {
      const num = i.toString().padStart(3, '0');
      urls.push(`/image/hero-section/ezgif-frame-${num}.webp`);
    }
    return urls;
  }, [frameCount]);

  // Preload images with progress tracking
  useEffect(() => {
    let loadedCount = 0;
    const loadedImages = [];

    const preloadImages = async () => {
      const loadPromises = imageUrls.map((src, index) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = () => {
            loadedCount++;
            setLoadingProgress(Math.floor((loadedCount / frameCount) * 100));
            loadedImages[index] = img;
            resolve();
          };
          img.onerror = () => {
            loadedCount++;
            resolve(); 
          };
        });
      });

      await Promise.all(loadPromises);
      setImages(loadedImages);
      setIsLoaded(true);
    };

    preloadImages();
  }, [imageUrls]);

  // Draw current frame on canvas
  useEffect(() => {
    const render = () => {
      const index = Math.floor(currentIndex.get());
      if (images[index - 1] && canvasRef.current) {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const img = images[index - 1];
        const hRatio = canvas.width / img.width;
        const vRatio = canvas.height / img.height;
        const ratio = Math.max(hRatio, vRatio);
        const centerShift_x = (canvas.width - img.width * ratio) / 2;
        const centerShift_y = (canvas.height - img.height * ratio) / 2;

        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(
          img, 
          0, 0, img.width, img.height,
          centerShift_x, centerShift_y, img.width * ratio, img.height * ratio
        );
      }
    };

    const unsubscribe = currentIndex.on("change", render);
    window.addEventListener('resize', render);
    if (images.length > 0) render();

    return () => {
      unsubscribe();
      window.removeEventListener('resize', render);
    };
  }, [images, currentIndex]);

  useEffect(() => {
    if (!isLoaded) return;
    
    let animationFrameId;
    let isUserInteracting = false;

    const handleUserInteraction = () => {
      isUserInteracting = true;
      cancelAnimationFrame(animationFrameId);
      document.documentElement.style.scrollBehavior = 'smooth';
    };

    const timer = setTimeout(() => {
      if (isUserInteracting) return;
      document.documentElement.style.scrollBehavior = 'auto';
      const duration = 18000; 
      const start = window.scrollY;
      const end = window.innerHeight * 5; 
      const startTime = performance.now();

      const autoScroll = (currentTime) => {
        if (isUserInteracting) return;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 2);
        const nextScroll = start + (end - start) * ease;
        window.scrollTo(0, nextScroll);
        if (progress < 1) {
          animationFrameId = requestAnimationFrame(autoScroll);
        } else {
          document.documentElement.style.scrollBehavior = 'smooth';
        }
      };

      window.addEventListener('wheel', handleUserInteraction, { once: true });
      window.addEventListener('touchmove', handleUserInteraction, { once: true });
      window.addEventListener('mousedown', handleUserInteraction, { once: true });
      animationFrameId = requestAnimationFrame(autoScroll);
    }, 4000);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(animationFrameId);
      document.documentElement.style.scrollBehavior = 'smooth';
    };
  }, [isLoaded]);

  return (
    <div ref={containerRef} className="hero-scroll-container">
      <div className="sticky-wrapper">
        <canvas ref={canvasRef} className="hero-canvas" />
        <div className="hero-gradient-overlay" />
        
        <div className="hero-header">
          <div className="container flex justify-between items-center">
            <a href="/" className="hero-logo">
              <span className="logo-dot"></span>
              Arvanta Governance
            </a>
            <a href="#contact" className="hero-cta">Get in touch</a>
          </div>
        </div>

        <div className="hero-overlay">
          <motion.div style={{ opacity: opacity1, y: y1 }} className="hero-text-block text-center">
            <h1 className="hero-main-title uppercase">
              Transforming <br />
              <span className="text-highlight-cyan">Public</span> <br />
              Governance.
            </h1>
            <p className="hero-subtitle mt-8">Architecting the future of public systems through <br />precision design and empirical research.</p>
          </motion.div>

          <motion.div style={{ opacity: opacity2, y: y2 }} className="hero-text-block pos-top-left">
            <div className="feature-tag">01 · Diagnostic Research</div>
            <h2 className="hero-feature-title">EVIDENCE-DRIVEN <br />FOUNDATIONS</h2>
            <p className="hero-feature-subtitle">We deploy deep-dive analytics to identify and solve <br />the most complex structural bottlenecks.</p>
          </motion.div>

          <motion.div style={{ opacity: opacity3, y: y3 }} className="hero-text-block pos-bottom-left">
            <div className="feature-tag">02 · Strategic Design</div>
            <h2 className="hero-feature-title">ARCHITECTING <br />INSTITUTIONS</h2>
            <p className="hero-feature-subtitle">Designing next-generation operational models <br />that redefine accountability and performance.</p>
          </motion.div>

          <motion.div style={{ opacity: opacity4, y: y4 }} className="hero-text-block text-center">
            <h1 className="hero-main-title uppercase">
              Transforming <br />
              <div className="mt-6">
                <span className="text-highlight-cyan">Governance.</span>
              </div>
            </h1>
            <p className="hero-subtitle mt-12">Arvanta works with global institutions to deliver <br />systemic reform that endures for generations.</p>
            <div className="scroll-indicator-end mt-16">
              <span className="dot-blink"></span>
              <span className="scroll-text">INITIATE DISCOVERY</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
