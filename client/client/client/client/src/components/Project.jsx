import React, { useState } from "react";
import ProjectDetail from "./ProjectDetail";

function Project({
  title,
  description,
  subDescription,
  href,
  image,
  tags,
  setPreview,
  github
}) {
  const [isHidden, setIsHidden] = useState(false);
  return (
    <>
      <div
        className="flex-wrap items-center py-10 justify-between space-y-14 sm:flex  sm:space-y-0"
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
      >
        <p className="text-2xl">{title}</p>
        <div className="flex gap-5  mt-2 text-sand">
          {tags.map((tag) => (
            <span key={tag.id}>{tag.name}</span>
          ))}
        </div>
        <button
          onClick={() => setIsHidden(true)}
          className="flex items-center gap-1 cursor-pointer hover-animation"
        >
          Read more
          <img
            src="assets/arrow-right.svg"
            alt="Right Arrow Icon"
            className="w-5"
          />
        </button>
      </div>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      {isHidden && (
        <ProjectDetail
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          tags={tags}
          href={href}
          github={github}
          closeModal={() => setIsHidden(false)}
        />
      )}
    </>
  );
}

export default Project;
