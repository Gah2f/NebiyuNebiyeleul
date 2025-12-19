import { useRef } from "react";
import Card from "../components/Card";
// import { Globe } from "../components/Globe";
import CopyEmailBtn from "../components/CopyEmailBtn";
import { Framework } from "../components/FrameWork";
import { Download } from "lucide-react";

function About() {
  const grid2Container = useRef();
  return (
    <section
      id="about"
      className="c-space  min-h-screen mt-20 md:mt-30 scroll-mt-24"
    >
      <h2 className="text-heading ">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            alt="About image"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Hi, I am Nebiyu D. Nebiyeleul</p>
            <p className="subtext">
              I developed frontend and backend dev skills to deliver dynamic and
              responsive software and web applications that don’t just work —
              they wow.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>

        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-4xl text-gray-500">
              {" "}
              MOVE THE STARS IN CODE{" "}
            </p>
            <Card
              style={{ rotate: "0deg", top: "15%", left: "10%" }}
              text="Developer"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-25deg", top: "35%", left: "2%" }}
              text="UI/UX"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "15deg", top: "60%", left: "15%" }}
              text="passionate"
              containerRef={grid2Container}
            />

            <Card
              style={{ rotate: "20deg", top: "25%", left: "65%" }}
              text="MERN"
              containerRef={grid2Container}
            />

            <Card
              style={{ rotate: "15deg", top: "10%", left: "35%" }}
              image="assets/logos/mylogos/git.svg"
              containerRef={grid2Container}
            />

            <Card
              style={{ rotate: "30deg", top: "10%", left: "75%" }}
              image="assets/logos/mylogos/mongodb.svg"
              containerRef={grid2Container}
            />

            <Card
              style={{ rotate: "-10deg", top: "70%", left: "35%" }}
              image="assets/logos/mylogos/nodedotjs.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-20deg", top: "75%", left: "80%" }}
              image="assets/logos/mylogos/react.svg"
              containerRef={grid2Container}
            />

            <Card
              style={{ rotate: "10deg", top: "70%", left: "50%" }}
              image="assets/logos/mylogos/tailwindcss.svg"
              containerRef={grid2Container}
            />
          </div>
        </div>

        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50-%]">
            <p className="headtext">My CV</p>
            <p className="subtext">
              {" "}
              I'm based in SpaceWEB, and open to remote <br /> work worldwide{" "}
              <br />
              <div className="flex gap-16">
                <span className="text-2xl text-primary/90 mt-4">
                  {" "}
                  Look at my CV here!{" "}
                </span>
                <div className="border-2 border-black/50 rounded-lg p-6 bg-primary/80 cursor-pointer ">
                  <a
                    href="/ResumeNebiyuDaniel.pdf"
                    download
                    className="flex items-center gap-2 text-blue-600"
                  >
                    <Download className="w-4 h-4" />
                    My CV
                  </a>
                </div>
              </div>
            </p>
          </div>
          {/* <figure className="absolute left-[30%] top-[10%] ">
            <Globe />
          </figure> */}
        </div>

        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <CopyEmailBtn />
          </div>
        </div>
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headtext"> Teck Stack</p>
            <p className="subtext">
              {" "}
              I do a varity of languages, frameworks and tools that allow me to
              build robust and scalable applications{" "}
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Framework />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
