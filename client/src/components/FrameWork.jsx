import { OrbitingCircles } from "./OrbitingCircles";

export function Framework() {
  const skills = [
    
    "React",
    "MongoDB",
    "Azios",
    "Bootstrap",
    "Canva",
    "Express",
    "Figma",
    "GitHub",
    "jQuery",
    "Material UI",
    "MySQL",
    "Node.js",
    "Postman",
    "Redux",
    "Tailwind CSS",
    "css3",
    "html5",
    "javascript",
    "stripe",
  ];
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/logocol/${skill}.svg`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {skills.reverse().map((skill, index) => (
          <Icon key={index} src={`assets/logos/logocol/${skill}.svg`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-110" />
);