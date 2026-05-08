import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: 0 },

        background: {
          color: "#ffffff"
        },

        particles: {
          number: {
            value: 50,
            density: {
              enable: true,
              area: 800
            }
          },

          color: {
            value: ["#de0f66", "#ffb3c6", "#f4a261", "#c3aed6"]
          },

          shape: {
            type: "circle"
          },

          opacity: {
            value: 0.7,
            random: true
          },

          size: {
            value: { min: 2, max: 4 }
          },

          move: {
            enable: true,
            speed: 1.2,
            direction: "none",
            outModes: {
              default: "out"
            }
          },

          links: {
            enable: true,
            distance: 140,
            color: "#d291bc",
            opacity: 0.35,
            width: 1
          }
        },

        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse"
            },
            onClick: {
              enable: true,
              mode: "push"
            }
          },

          modes: {
            repulse: {
              distance: 100,
              duration: 0.4
            },
            push: {
              quantity: 3
            }
          }
        },

        detectRetina: true
      }}
    />
  );
};

export default ParticlesBackground;