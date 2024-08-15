
"use client";
import { useEffect } from 'react';

export default function Particle() {
  useEffect(() => {
    const root = '/';
    const script = document.createElement('script');
    script.src = "/js/particles.min.js";
    script.onload = () => {
      particlesJS('particles-js', {
        particles: {
          number: {
            value: 30,
            density: {
              enable: true,
              value_area: 1121.6780303333778
            }
          },
          color: {
            value: "#fff"
          },
          shape: {
            type: "image",
            stroke: {
              width: 0,
            },
            image: {
              src: `${root}images/momiji.png`,
              width: 120,
              height: 120
            }
          },
          opacity: {
            value: 0.06409588744762158,
            random: true,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 8.011985930952697,
            random: true,
            anim: {
              enable: false,
              speed: 4,
              size_min: 0.1,
              sync: false
            }
          },
          line_linked: {
            enable: false,
          },
          move: {
            enable: true,
            speed: 7,
            direction: "bottom-right",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 281.9177489524316,
              rotateY: 127.670995809726
            }
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: false,
            },
            onclick: {
              enable: false,
            },
            resize: true
          }
        },
        retina_detect: false
      });
    };

    document.body.appendChild(script);
  }, []);

  return (
    <div id="particles-js" style={{ position: 'absolute', width: '100%', height: '100%' }}></div>
  );
}
