import React from "react";
import { motion } from "motion/react";

function ProjectDetail({ title, description, subDescription, href, tags , image, closeModal, github }) {
  return (
    <div className="fixed  inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm">
      <motion.div className="relative max-w-2xl border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10  " initial={{opacity: 0, scale: 0.5}} animate={{opacity: 1, scale: 1}}>
        <button onClick={closeModal} className="absolute p-2 rounded-sm top-5 right-5 bg-midnight hover:bg-gray-500 cursor-pointer">
          <img src="assets/close.svg" alt="Close Icon" className="w-6 h-6 " />
        </button>
        <img src={image} alt={title} className="w-full rounded-t-2xl" />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold text-white">{title}</h5>
          <p className="mb-3 font-normal text-neutral-400">{description}</p>
          {subDescription.map((subDec, index) => (
            <p key={index} className="mb-3 font-normal text-neutral-400">
              {subDec}
            </p>
          ))} 
          <div className="flex items-center justify-between mt-4">
            <div className=" gap-3 hidden md:flex">
                {tags.map((tag)=><img key={tag.id} src={tag.path} alt={tag.name} className="rounded-lg size-10 hover-animation"/>)}
            </div> 
            <a href={href} target="_blank" className="inline-flex items-center gap-1 font-medium cursor-pointer hover-animation">View Project <img src="assets/arrow-up.svg" alt="Up arrow Icon" className="size-4" /></a>
            <a href={github} target="_blank" className="inline-flex items-center gap-1 font-medium cursor-pointer hover-animation">Github Repo <img src="assets/arrow-up.svg" alt="Up arrow Icon" className="size-4" /></a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default ProjectDetail;
