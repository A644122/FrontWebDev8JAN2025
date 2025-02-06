import React from 'react';

const Skills = () => {
  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Git'];

  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center">Skills</h2>
        <div className="mt-8 flex flex-wrap justify-center">
          {skills.map((skill, index) => (
            <div key={index} className="m-2 px-4 py-2 bg-blue-500 text-white rounded-full">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;