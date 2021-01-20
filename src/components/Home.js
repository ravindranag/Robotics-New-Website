import  header  from "../images/logos/main_header.svg";
import Particles from "react-particles-js";
const Home = () => {
    return (
      <div className="min-h-screen bg-gray-900 relative">
        <Particles
          id="tsparticles"
          options={{
            autoPlay: true,
            background: {
              color: {
                value: "#191919",
              },
              image: "",
              position: "",
              repeat: "",
              size: "",
              opacity: 1,
            },
            backgroundMask: {
              composite: "destination-out",
              cover: {
                color: {
                  value: "#fff",
                },
                opacity: 1,
              },
              enable: false,
            },
            backgroundMode: {
              enable: false,
              zIndex: -1,
            },
            detectRetina: true,
            fpsLimit: 30,
            infection: {
              cure: false,
              delay: 0,
              enable: false,
              infections: 0,
              stages: [],
            },
            interactivity: {
              detectsOn: "canvas",
              events: {
                onClick: {
                  enable: false,
                  mode: [],
                },
                onDiv: {
                  selectors: [],
                  enable: false,
                  mode: [],
                  type: "circle",
                },
                onHover: {
                  enable: false,
                  mode: [],
                  parallax: {
                    enable: false,
                    force: 2,
                    smooth: 10,
                  },
                },
                resize: true,
              },
              modes: {
                attract: {
                  distance: 200,
                  duration: 0.4,
                  speed: 3,
                },
                bounce: {
                  distance: 200,
                },
                bubble: {
                  distance: 200,
                  duration: 0.4,
                },
                connect: {
                  distance: 80,
                  links: {
                    opacity: 0.5,
                  },
                  radius: 60,
                },
                grab: {
                  distance: 100,
                  links: {
                    blink: false,
                    consent: false,
                    opacity: 1,
                  },
                },
                light: {
                  area: {
                    gradient: {
                      start: {
                        value: "#ffffff",
                      },
                      stop: {
                        value: "#000000",
                      },
                    },
                    radius: 1000,
                  },
                  shadow: {
                    color: {
                      value: "#000000",
                    },
                    length: 2000,
                  },
                },
                push: {
                  quantity: 4,
                },
                remove: {
                  quantity: 2,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                  speed: 1,
                },
                slow: {
                  factor: 3,
                  radius: 200,
                },
                trail: {
                  delay: 1,
                  quantity: 1,
                },
              },
            },
            manualParticles: [],
            motion: {
              disable: false,
              reduce: {
                factor: 4,
                value: false,
              },
            },
            particles: {
              bounce: {
                horizontal: {
                  random: {
                    enable: false,
                    minimumValue: 0.1,
                  },
                  value: 1,
                },
                vertical: {
                  random: {
                    enable: false,
                    minimumValue: 0.1,
                  },
                  value: 1,
                },
              },
              collisions: {
                bounce: {
                  horizontal: {
                    random: {
                      enable: false,
                      minimumValue: 0.1,
                    },
                    value: 1,
                  },
                  vertical: {
                    random: {
                      enable: false,
                      minimumValue: 0.1,
                    },
                    value: 1,
                  },
                },
                enable: false,
                mode: "bounce",
              },
              color: {
                value: "#fff",
                animation: {
                  enable: true,
                  speed: 1,
                  sync: true,
                },
              },
              life: {
                count: 0,
                delay: {
                  random: {
                    enable: false,
                    minimumValue: 0,
                  },
                  value: 0,
                  sync: false,
                },
                duration: {
                  random: {
                    enable: false,
                    minimumValue: 0.0001,
                  },
                  value: 0,
                  sync: false,
                },
              },
              links: {
                blink: false,
                color: {
                  value: "#fff",
                },
                consent: false,
                distance: 100,
                enable: true,
                frequency: 1,
                opacity: 1,
                shadow: {
                  blur: 5,
                  color: {
                    value: "#00ff00",
                  },
                  enable: false,
                },
                triangles: {
                  enable: false,
                  frequency: 1,
                },
                width: 1,
                warp: false,
              },
              move: {
                angle: {
                  offset: 45,
                  value: 90,
                },
                attract: {
                  enable: false,
                  rotate: {
                    x: 3000,
                    y: 3000,
                  },
                },
                direction: "none",
                distance: 0,
                enable: true,
                gravity: {
                  acceleration: 9.81,
                  enable: false,
                  maxSpeed: 50,
                },
                noise: {
                  delay: {
                    random: {
                      enable: false,
                      minimumValue: 0,
                    },
                    value: 0,
                  },
                  enable: false,
                },
                outModes: {
                  default: "out",
                },
                random: false,
                size: false,
                speed: 2,
                straight: false,
                trail: {
                  enable: false,
                  length: 10,
                  fillColor: {
                    value: "#000000",
                  },
                },
                vibrate: false,
                warp: false,
              },
              number: {
                density: {
                  enable: false,
                  area: 800,
                  factor: 1000,
                },
                limit: 0,
                value: 100,
              },
              opacity: {
                random: {
                  enable: false,
                  minimumValue: 0.1,
                },
                value: 1,
                animation: {
                  enable: false,
                  minimumValue: 0,
                  speed: 2,
                  sync: false,
                },
              },
              reduceDuplicates: false,
              rotate: {
                random: {
                  enable: false,
                  minimumValue: 0,
                },
                value: 0,
                animation: {
                  enable: false,
                  speed: 0,
                  sync: false,
                },
                direction: "clockwise",
                path: false,
              },
              shadow: {
                blur: 0,
                color: {
                  value: "#000000",
                },
                enable: false,
                offset: {
                  x: 0,
                  y: 0,
                },
              },
              shape: {
                options: {},
                type: "circle",
              },
              size: {
                random: {
                  enable: false,
                  minimumValue: 1,
                },
                value: 3,
                animation: {
                  destroy: "none",
                  enable: true,
                  minimumValue: 0,
                  speed: 5,
                  startValue: "max",
                  sync: false,
                },
              },
              stroke: {
                width: 0,
              },
              twinkle: {
                lines: {
                  enable: false,
                  frequency: 0.05,
                  opacity: 1,
                },
                particles: {
                  enable: false,
                  frequency: 0.05,
                  opacity: 1,
                },
              },
            },
            pauseOnBlur: true,
            pauseOnOutsideViewport: false,
            themes: [],
          }}
        />
        <div className="absolute top-1/3 left-1/4">
          <img
            src={header}
            className="px-10 mx-auto flex-1"
            alt="header"
            srcset=""
          />
        </div>
      </div>
    );
}
 
export default Home;