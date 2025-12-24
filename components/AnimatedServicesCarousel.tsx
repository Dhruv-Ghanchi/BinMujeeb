"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Service {
  id: number;
  title: string;
  description: string;
  backgroundImage: string;
  backgroundImageUrl?: string; // URL for realistic image
  thumbnailImages: string[];
}

const services: Service[] = [
  {
    id: 4,
    title: "AIR FREIGHT FORWARDING",
    description: "Fast and reliable air freight services connecting Oman and GCC to global markets. We offer express and standard air freight options with real-time tracking and specialized handling for time-sensitive cargo.",
    backgroundImage: "air",
    backgroundImageUrl: "/air-freight-background.png",
    thumbnailImages: ["port", "air-freight", "warehouse"]
  },
  {
    id: 1,
    title: "OCEAN FREIGHT FORWARDING",
    description: "Cost-effective and comprehensive ocean freight services including FCL, LCL, and special cargo handling. We provide optimal routing, competitive rates, and end-to-end visibility for your maritime shipments.",
    backgroundImage: "ocean",
    backgroundImageUrl: "/ocean-frieght-forwarding.png",
    thumbnailImages: ["port", "global-shipping", "warehouse"]
  },
  {
    id: 2,
    title: "CUSTOM CLEARANCE",
    description: "Expert customs clearance services in Oman and GCC, handling import / export documentation, duty calculations, and compliance with local regulations. We ensure smooth and efficient customs processing for all your shipments.",
    backgroundImage: "customs",
    backgroundImageUrl: "/custom-clearance.png",
    thumbnailImages: ["port", "air-freight", "warehouse"]
  },
  {
    id: 5,
    title: "DUTY EXEMPTION",
    description: "Specialized assistance in obtaining duty exemptions and managing tax benefits for qualified shipments. Our team helps navigate complex regulations to maximize your cost savings through available exemption programs.",
    backgroundImage: "duty",
    backgroundImageUrl: "/duty-exemption.png",
    thumbnailImages: ["port", "global-shipping", "warehouse"]
  },
  {
    id: 3,
    title: "INLAND FREIGHT FORWARDING",
    description: "Efficient land transportation solutions for domestic and cross-border shipments. Our extensive network covers all major routes with tracking capabilities, specialized vehicles, and time-definite delivery options.",
    backgroundImage: "inland",
    backgroundImageUrl: "/inland-freight-forwarding.png",
    thumbnailImages: ["port", "land-transport", "warehouse"]
  }
];

export default function AnimatedServicesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0); // Start with Air Freight (index 0)
  const [backgroundType, setBackgroundType] = useState("air"); // Separate state for background to prevent flicker
  const [isAnimating, setIsAnimating] = useState(false);
  const thumbnailIndicesRef = useRef<number[]>([1, 2, 3]); // Track thumbnail indices without causing re-renders
  const isAnimatingRef = useRef(false); // Ref to track animation state for callbacks
  const currentIndexRef = useRef(0); // Ref to track current index for callbacks
  const skipThumbnailRenderRef = useRef(false); // Flag to prevent React from updating thumbnails during animation
  const containerRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const backgroundImageRef = useRef<HTMLDivElement>(null);
  const thumbnailRefs = useRef<(HTMLDivElement | null)[]>([]);
  const thumbnailContainerRef = useRef<HTMLDivElement>(null); // Container for thumbnails
  const progressTimelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    // Preload all background images
    services.forEach((service) => {
      if (service.backgroundImageUrl) {
        const img = new Image();
        img.src = service.backgroundImageUrl;
      }
    });

    // Initial animation
    currentIndexRef.current = 0;
    setBackgroundType(services[0].backgroundImage);
    // Set initial thumbnails (next 3 services) in ref
    const initialThumbnails = [];
    for (let i = 1; i <= 3; i++) {
      const nextIndex = (0 + i) % services.length;
      initialThumbnails.push(nextIndex);
    }
    thumbnailIndicesRef.current = initialThumbnails;
    animateSlide(0, true);
    startProgressBar();

    return () => {
      if (progressTimelineRef.current) {
        progressTimelineRef.current.kill();
      }
      // Clean up GSAP animations on unmount
      thumbnailRefs.current.forEach((thumb) => {
        if (thumb) {
          gsap.killTweensOf(thumb);
        }
      });
    };
  }, []);

  // Keep ref in sync with state
  useEffect(() => {
    currentIndexRef.current = currentIndex;
  }, [currentIndex]);

  // Helper function to get background class
  const getBackgroundImageClass = (type: string) => {
    const classes: { [key: string]: string } = {
      ocean: "bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600",
      customs: "bg-gradient-to-br from-gray-400 via-gray-500 to-gray-600",
      inland: "bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500",
      air: "bg-gradient-to-br from-sky-300 via-blue-400 to-blue-500",
      duty: "bg-gradient-to-br from-green-400 via-green-500 to-green-600"
    };
    return classes[type] || classes.ocean;
  };

  const startProgressBar = () => {
    if (!progressBarRef.current) return;

    // Reset progress bar
    gsap.set(progressBarRef.current, { width: "0%" });

    // Pre-determine next service index BEFORE starting progress bar
    const currentIdx = currentIndexRef.current;
    const nextIdx = (currentIdx + 1) % services.length;

    // Animate progress bar from left to right (7 seconds)
    progressTimelineRef.current = gsap.to(progressBarRef.current, {
      width: "100%",
      duration: 7,
      ease: "none",
      onComplete: () => {
        // Progress bar is 100% complete - now trigger transition
        // Ensure we're not already animating
        if (isAnimatingRef.current) return;
        
        // Update thumbnail indices in ref BEFORE animation starts
        // This prevents React from re-rendering thumbnails
        const nextThumbnails = [];
        for (let i = 1; i <= 3; i++) {
          const nextIndex = (nextIdx + i) % services.length;
          nextThumbnails.push(nextIndex);
        }
        thumbnailIndicesRef.current = nextThumbnails;
        skipThumbnailRenderRef.current = true; // Keep this true - thumbnails update via DOM only
        
        // Hide current content IMMEDIATELY before React can show new content
        // Filter out null refs to prevent GSAP errors
        const contentElements = [
          overlayRef.current, 
          titleRef.current, 
          descriptionRef.current, 
          buttonRef.current
        ].filter(el => el !== null);
        
        if (contentElements.length > 0) {
          gsap.set(contentElements, {
            opacity: 0,
            y: 30
          });
        }
        
        // Update index and ref
        currentIndexRef.current = nextIdx;
        
        // Update React state - but content is already hidden so it won't show
        setCurrentIndex(nextIdx);
        
        // Start animation immediately after hiding content
        requestAnimationFrame(() => {
          if (!isAnimatingRef.current) {
            animateSlide(nextIdx);
          }
        });
      }
    });
  };

  const animateSlide = (index: number, isInitial = false) => {
    // Only prevent if already animating and not initial
    if (isAnimatingRef.current && !isInitial) {
      return;
    }
    
    setIsAnimating(true);
    isAnimatingRef.current = true;
    skipThumbnailRenderRef.current = true; // Prevent React from updating thumbnails during animation

    const service = services[index];
    if (!service) {
      console.error('Invalid service index:', index);
      setIsAnimating(false);
      isAnimatingRef.current = false;
      skipThumbnailRenderRef.current = false;
      return;
    }

    const tl = gsap.timeline({
      onComplete: () => {
        setIsAnimating(false);
        isAnimatingRef.current = false;
        // NEVER reset skipThumbnailRenderRef - thumbnails are updated via DOM only
        // This prevents React from re-rendering thumbnails and causing flicker
        // skipThumbnailRenderRef.current = false; // Keep commented out
        // Start progress bar for next slide (this will trigger nextSlide when complete)
        startProgressBar();
      }
    });

    if (!isInitial) {
      // Hide current content FIRST, before React re-renders with new content
      // This ensures old content is hidden before new content appears
      // Filter out null refs to prevent GSAP errors
      const contentElements = [
        overlayRef.current, 
        titleRef.current, 
        descriptionRef.current, 
        buttonRef.current
      ].filter(el => el !== null && el.parentNode !== null); // Ensure elements are still in DOM
      
      if (contentElements.length > 0) {
        gsap.set(contentElements, {
          opacity: 0,
          y: 30,
          force3D: true // Use GPU acceleration to avoid layout issues
        });
      }
      
      // DON'T update textContent directly - let React handle it to avoid removeChild errors
      // React will update the content when currentIndex changes

      // Get the first thumbnail (leftmost) to expand from
      // The first thumbnail represents the next service that will be shown
      const expandThumbnail = thumbnailRefs.current[0];
      const container = containerRef.current;

      if (expandThumbnail && container && backgroundImageRef.current) {
        // Get position of the thumbnail relative to viewport
        const thumbRect = expandThumbnail.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        const bgRect = backgroundImageRef.current.getBoundingClientRect();
        
        // Calculate the center of the thumbnail relative to the background container
        const thumbCenterX = thumbRect.left + thumbRect.width / 2 - bgRect.left;
        const thumbCenterY = thumbRect.top + thumbRect.height / 2 - bgRect.top;
        
        // Calculate scale to match thumbnail size
        const scaleX = thumbRect.width / bgRect.width;
        const scaleY = thumbRect.height / bgRect.height;
        const initialScale = Math.max(scaleX, scaleY) * 1.2; // Slightly larger than thumbnail
        
        // Calculate position to center thumbnail on background
        const offsetX = thumbCenterX - bgRect.width / 2;
        const offsetY = thumbCenterY - bgRect.height / 2;
        
        // Update background image FIRST, before any GSAP animations
        // This ensures the new image is loaded and ready
        if (backgroundImageRef.current && service.backgroundImageUrl) {
          // Preload the image first
          const img = new Image();
          img.onload = () => {
            // Image loaded, now set it as background
            if (backgroundImageRef.current) {
              const finalBgUrl = `url("${service.backgroundImageUrl}")`;
              backgroundImageRef.current.style.setProperty('background-image', finalBgUrl, 'important');
              backgroundImageRef.current.style.setProperty('background-size', 'cover', 'important');
              backgroundImageRef.current.style.setProperty('background-position', 'center', 'important');
              backgroundImageRef.current.style.setProperty('background-repeat', 'no-repeat', 'important');
            }
          };
          img.src = service.backgroundImageUrl;
          
          // Set immediately as well (in case image is cached)
          const finalBgUrl = `url("${service.backgroundImageUrl}")`;
          backgroundImageRef.current.style.setProperty('background-image', finalBgUrl, 'important');
          backgroundImageRef.current.style.setProperty('background-size', 'cover', 'important');
          backgroundImageRef.current.style.setProperty('background-position', 'center', 'important');
          backgroundImageRef.current.style.setProperty('background-repeat', 'no-repeat', 'important');
          
          // Also update state for next render
          setBackgroundType(service.backgroundImage);
        } else if (backgroundImageRef.current) {
          // Fallback to gradient if no URL
          backgroundImageRef.current.style.setProperty('background-image', 'linear-gradient(to bottom right, #3b82f6, #1e40af)', 'important');
        }

        // Set initial state - thumbnail size at bottom right position
        // Start with low opacity, then animate to full opacity
        gsap.set(backgroundImageRef.current, {
          scale: initialScale,
          x: offsetX,
          y: offsetY,
          opacity: 0.4,
          transformOrigin: "center center"
        });

        // Calculate next thumbnails: current service goes to end, others shift left
        // New queue: [old thumbnails 1, 2, 3] -> [old thumbnails 2, 3, current service]
        const currentThumbnails = thumbnailIndicesRef.current.length > 0 
          ? thumbnailIndicesRef.current 
          : (() => {
              const next = [];
              for (let i = 1; i <= 3; i++) {
                const nextIndex = ((currentIndexRef.current || 0) + i) % services.length;
                next.push(nextIndex);
              }
              return next;
            })();
        
        // New thumbnail queue: shift left, add current service to end
        const nextThumbnails = [
          currentThumbnails[1], // Second thumbnail moves to first
          currentThumbnails[2], // Third thumbnail moves to second
          currentIndexRef.current // Current service goes to end
        ];
        thumbnailIndicesRef.current = nextThumbnails;
        
        // Store current thumbnail positions for slide animation
        const thumbnailContainer = thumbnailRefs.current[0]?.parentElement;
        if (thumbnailContainer) {
          thumbnailRefs.current.forEach((thumb, i) => {
            if (thumb && thumb.parentNode) {
              gsap.set(thumb, { x: 0, force3D: true }); // Reset transform with GPU acceleration
            }
          });
        }
        
        // Hide the first thumbnail (it's expanding to background)
        if (expandThumbnail) {
          gsap.to(expandThumbnail, {
            opacity: 0,
            scale: 0.9,
            duration: 0.2,
            ease: "power2.in"
          });
        }

        // Expand background image from first thumbnail position
        // Start from the thumbnail position and scale/expand
        if (backgroundImageRef.current) {
          tl.to(backgroundImageRef.current, {
            scale: 1,
            x: 0,
            y: 0,
            opacity: 1,
            duration: 1.5,
            ease: "power3.out",
            onComplete: () => {
              // Ensure background image is fully visible after animation
              if (backgroundImageRef.current) {
                backgroundImageRef.current.style.setProperty('opacity', '1', 'important');
              }
            }
          }, 0.3);
        }

        // Animate dark overlay fading in after image expansion starts
        if (overlayRef.current) {
          tl.to(overlayRef.current, {
            opacity: 1,
            duration: 0.8,
            ease: "power2.out"
          }, 0.8);
        }

        // Animate text content with stagger
        // Filter out null refs to prevent GSAP errors
        const textElements = [
          titleRef.current, 
          descriptionRef.current, 
          buttonRef.current
        ].filter(el => el !== null);
        
        if (textElements.length > 0) {
          tl.to(
            textElements,
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              stagger: 0.12,
              ease: "power2.out"
            },
            1.0
          );
        }

        // Animate thumbnails sliding right to left after background expansion
        // Sequence: thumbnails slide left, then new ones slide in from right
        thumbnailRefs.current.forEach((thumb, i) => {
          if (thumb) {
            if (i === 0) {
              // First thumbnail: update content to second thumbnail, slide in from right
              if (nextThumbnails[0] !== undefined) {
                const thumbService = services[nextThumbnails[0]];
                if (thumbService && thumbService.backgroundImageUrl) {
                  const bgUrl = thumbService.backgroundImageUrl.startsWith('http') 
                    ? thumbService.backgroundImageUrl 
                    : thumbService.backgroundImageUrl;
                  thumb.style.backgroundImage = `url("${bgUrl}")`;
                  thumb.style.backgroundSize = 'cover';
                  thumb.style.backgroundPosition = 'center';
                  thumb.style.backgroundRepeat = 'no-repeat';
                }
              }
              // Slide in from right - check if element is still in DOM
              if (thumb && thumb.parentNode) {
                gsap.set(thumb, { x: 200, opacity: 0, force3D: true });
                gsap.to(thumb, {
                  x: 0,
                  opacity: 1,
                  duration: 0.6,
                  delay: 1.8,
                  ease: "power2.out",
                  force3D: true
                });
              }
            } else if (i === 1) {
              // Second thumbnail: slide left, update to third thumbnail, slide in from right
              if (thumb && thumb.parentNode) {
                gsap.to(thumb, {
                  x: -200,
                  opacity: 0,
                  duration: 0.4,
                  delay: 1.5,
                  ease: "power2.in",
                  force3D: true,
                  onComplete: () => {
                    // Check if element still exists and is attached to DOM
                    if (!thumb || !thumb.parentNode) return;
                    
                    // Update content
                    if (nextThumbnails[1] !== undefined) {
                      const thumbService = services[nextThumbnails[1]];
                      if (thumbService && thumbService.backgroundImageUrl) {
                        const bgUrl = thumbService.backgroundImageUrl.startsWith('http') 
                          ? thumbService.backgroundImageUrl 
                          : thumbService.backgroundImageUrl;
                        thumb.style.backgroundImage = `url("${bgUrl}")`;
                        thumb.style.backgroundSize = 'cover';
                        thumb.style.backgroundPosition = 'center';
                        thumb.style.backgroundRepeat = 'no-repeat';
                      }
                    }
                    // Reset and slide in from right
                    if (thumb.parentNode) {
                      gsap.set(thumb, { x: 200, opacity: 0, force3D: true });
                      gsap.to(thumb, {
                        x: 0,
                        opacity: 1,
                        duration: 0.6,
                        delay: 0.1,
                        ease: "power2.out",
                        force3D: true
                      });
                    }
                  }
                });
              }
            } else if (i === 2) {
              // Third thumbnail: slide left, update to current service, slide in from right
              if (thumb && thumb.parentNode) {
                gsap.to(thumb, {
                  x: -200,
                  opacity: 0,
                  duration: 0.4,
                  delay: 1.6,
                  ease: "power2.in",
                  force3D: true,
                  onComplete: () => {
                    // Check if element still exists and is attached to DOM
                    if (!thumb || !thumb.parentNode) return;
                    
                    // Update content to current service (now at end of queue)
                    if (nextThumbnails[2] !== undefined) {
                      const thumbService = services[nextThumbnails[2]];
                      if (thumbService && thumbService.backgroundImageUrl) {
                        const bgUrl = thumbService.backgroundImageUrl.startsWith('http') 
                          ? thumbService.backgroundImageUrl 
                          : thumbService.backgroundImageUrl;
                        thumb.style.backgroundImage = `url("${bgUrl}")`;
                        thumb.style.backgroundSize = 'cover';
                        thumb.style.backgroundPosition = 'center';
                        thumb.style.backgroundRepeat = 'no-repeat';
                      }
                    }
                    // Reset and slide in from right
                    if (thumb.parentNode) {
                      gsap.set(thumb, { x: 200, opacity: 0, force3D: true });
                      gsap.to(thumb, {
                        x: 0,
                        opacity: 1,
                        duration: 0.6,
                        delay: 0.1,
                        ease: "power2.out",
                        force3D: true
                      });
                    }
                  }
                });
              }
            }
          }
        });
      }
    } else {
      // Initial load animation
      // Filter out null refs to prevent GSAP errors
      const contentElements = [
        overlayRef.current, 
        titleRef.current, 
        descriptionRef.current, 
        buttonRef.current
      ].filter(el => el !== null);
      
      if (contentElements.length > 0) {
        gsap.set(contentElements, {
          opacity: 0,
          y: 30
        });
      }

      if (backgroundImageRef.current) {
        // Set initial background image
        const bgImageUrl = service.backgroundImageUrl || `linear-gradient(to bottom right, #3b82f6, #1e40af)`;
        const finalBgUrl = bgImageUrl.startsWith('http') ? `url("${bgImageUrl}")` : bgImageUrl;
        
        backgroundImageRef.current.style.setProperty('background-image', finalBgUrl, 'important');
        backgroundImageRef.current.style.setProperty('background-size', 'cover', 'important');
        backgroundImageRef.current.style.setProperty('background-position', 'center', 'important');
        backgroundImageRef.current.style.setProperty('background-repeat', 'no-repeat', 'important');
        backgroundImageRef.current.style.setProperty('opacity', '1', 'important');
        
        gsap.set(backgroundImageRef.current, {
          scale: 1,
          opacity: 1,
          x: 0,
          y: 0
        });
      }

      tl.to(overlayRef.current, {
        opacity: 1,
        duration: 0.8,
        ease: "power2.out"
      }, 0);

      tl.to(
        [titleRef.current, descriptionRef.current, buttonRef.current],
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: "power2.out"
        },
        0.2
      );

      // Animate thumbnails
      thumbnailRefs.current.forEach((thumb, i) => {
        if (thumb) {
          gsap.fromTo(
            thumb,
            {
              scale: 0.6,
              opacity: 0,
              y: 30
            },
            {
              scale: 1,
              opacity: 1,
              y: 0,
              duration: 0.6,
              delay: 0.5 + i * 0.1,
              ease: "back.out(1.4)"
            }
          );
        }
      });
    }
  };

  const nextSlide = () => {
    if (isAnimatingRef.current) return;
    
    // Kill current progress timeline
    if (progressTimelineRef.current) {
      progressTimelineRef.current.kill();
    }

    // Calculate next index using ref to get latest value (loops back to 0 after last service)
    // This ensures continuous looping: 0 -> 1 -> 2 -> 3 -> 4 -> 0 -> 1 -> ...
    const currentIdx = currentIndexRef.current;
    const nextIndex = (currentIdx + 1) % services.length;
    
    // Update both state and ref
    setCurrentIndex(nextIndex);
    currentIndexRef.current = nextIndex;
    
    // Wait for React to update DOM with new content, then animate
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        animateSlide(nextIndex);
      });
    });
  };

  const prevSlide = () => {
    if (isAnimatingRef.current) return;
    
    // Kill current progress timeline
    if (progressTimelineRef.current) {
      progressTimelineRef.current.kill();
    }

    const currentIdx = currentIndexRef.current;
    const prevIndex = (currentIdx - 1 + services.length) % services.length;
    setCurrentIndex(prevIndex);
    currentIndexRef.current = prevIndex;
    
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        animateSlide(prevIndex);
      });
    });
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    
    // Kill current progress timeline
    if (progressTimelineRef.current) {
      progressTimelineRef.current.kill();
    }

    setCurrentIndex(index);
    animateSlide(index);
  };

  const currentService = services[currentIndex];

  return (
    <section ref={containerRef} className="py-16 relative overflow-hidden min-h-[600px]">
      {/* Background Image - Animated */}
      <div
        ref={backgroundImageRef}
        className="absolute inset-0"
        style={{
          backgroundImage: currentService.backgroundImageUrl 
            ? `url("${currentService.backgroundImageUrl}")` 
            : `linear-gradient(to bottom right, #3b82f6, #1e40af)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 1,
          zIndex: 0
        }}
      >
        {/* Blurred background effect overlay - lighter so images are visible */}
        <div className="absolute inset-0 backdrop-blur-[1px] bg-black/15 z-0"></div>
        {/* Subtle gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-black/5 z-0"></div>
      </div>

      {/* Progress Bar - Green Timeline */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gray-900 bg-opacity-40 z-20">
        <div
          ref={progressBarRef}
          className="h-full bg-green-500 w-0 shadow-lg"
          style={{ transition: "none" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto items-center min-h-[500px] relative">
          {/* Left Side - Text Content with Dark Overlay */}
          <div
            ref={overlayRef}
            className="p-8 rounded-lg text-white backdrop-blur-sm relative"
            style={{ backgroundColor: 'rgba(42, 42, 42, 0.70)' }}
          >
            {/* "OUR SERVICES" - Small white text at top */}
            <p className="text-xs text-white mb-4 uppercase tracking-wider font-medium">OUR SERVICES</p>
            
            {/* Main Title - Large bright green, bold, uppercase */}
            <h2
              ref={titleRef}
              className="text-5xl md:text-6xl font-bold text-[#22c55e] mb-6 leading-tight"
            >
              {currentService.title.split(' ').map((word, i) => (
                <span key={i} className="block">{word}</span>
              ))}
            </h2>
            
            {/* Description - Small white text */}
            <p
              ref={descriptionRef}
              className="text-sm text-white mb-8 leading-relaxed"
            >
              {currentService.description}
            </p>
            
            {/* Learn More Button - Dark with white border */}
            <div className="mb-6">
              <Link
                ref={buttonRef}
                href="/services"
                className="inline-block bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-[#2a2a2a] transition"
              >
                Learn More
              </Link>
            </div>
            
            {/* Navigation Arrows - Bottom right of overlay */}
            <div className="flex gap-2 absolute bottom-6 right-6">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full bg-[#22c55e] hover:bg-[#16a34a] flex items-center justify-center transition shadow-lg"
                disabled={isAnimating}
              >
                <ChevronLeft size={20} className="text-white" />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full bg-[#22c55e] hover:bg-[#16a34a] flex items-center justify-center transition shadow-lg"
                disabled={isAnimating}
              >
                <ChevronRight size={20} className="text-white" />
              </button>
            </div>
          </div>

          {/* Right Side - Three Thumbnail Images - Arranged horizontally in bottom right */}
          <div className="absolute bottom-8 right-8 flex flex-row gap-3 z-30 overflow-hidden">
            {[0, 1, 2].map((index) => {
              // Always use ref values - never calculate from currentIndex
              const thumbnailIndices = thumbnailIndicesRef.current.length > 0
                ? thumbnailIndicesRef.current
                : (() => {
                    // Initialize on first render
                    const next = [];
                    for (let i = 1; i <= 3; i++) {
                      const nextIndex = (currentIndex + i) % services.length;
                      next.push(nextIndex);
                    }
                    thumbnailIndicesRef.current = next;
                    return next;
                  })();
              
              const serviceIndex = thumbnailIndices[index];
              const service = services[serviceIndex];
              if (!service) return null;
              
              return (
                <div
                  key={`thumb-static-${index}`} // Static key that never changes
                  ref={(el) => {
                    // Only set ref if it's different to avoid unnecessary updates
                    if (el && thumbnailRefs.current[index] !== el) {
                      thumbnailRefs.current[index] = el;
                      // Update background image via DOM
                      const currentIndices = thumbnailIndicesRef.current;
                      const currentServiceIndex = currentIndices[index];
                      const currentService = services[currentServiceIndex];
                      if (currentService && currentService.backgroundImageUrl) {
                        el.style.backgroundImage = `url("${currentService.backgroundImageUrl}")`;
                        el.style.backgroundSize = 'cover';
                        el.style.backgroundPosition = 'center';
                        el.style.backgroundRepeat = 'no-repeat';
                      }
                    }
                  }}
                  className="rounded-lg shadow-lg relative overflow-hidden"
                  style={{
                    width: '180px',
                    height: '120px',
                    willChange: 'transform, opacity',
                  }}
                  suppressHydrationWarning // Prevent hydration warnings
                >
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

