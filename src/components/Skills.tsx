import React from 'react';

interface SkillCategoryProps {
  title: string;
  skills: Array<{
    name: string;
    level: number;
  }>;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills }) => {
  return (
    <div className="mb-12">
      <h3 className="text-xl font-bold text-white mb-6">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
        {skills.map((skill, index) => (
          <div key={index} className="mb-3">
            <div className="flex justify-between mb-1">
              <span className="text-gray-300">{skill.name}</span>
              <span className="text-gray-400">{skill.level}%</span>
            </div>
            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-red-600 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const frontendSkills = [
    { name: 'HTML & CSS', level: 95 },
    { name: 'JavaScript/TypeScript', level: 90 },
    { name: 'React', level: 92 },
    { name: 'Vue.js', level: 85 },
    { name: 'Tailwind CSS', level: 88 },
    { name: 'Next.js', level: 80 }
  ];

  const backendSkills = [
    { name: 'Node.js', level: 88 },
    { name: 'Express', level: 85 },
    { name: 'GraphQL', level: 75 },
    { name: 'MongoDB', level: 82 },
    { name: 'PostgreSQL', level: 78 },
    { name: 'Firebase', level: 80 }
  ];

  const otherSkills = [
    { name: 'Git/GitHub', level: 90 },
    { name: 'Docker', level: 75 },
    { name: 'AWS', level: 70 },
    { name: 'UI/UX Design', level: 85 },
    { name: 'Agile/Scrum', level: 80 },
    { name: 'Testing', level: 78 }
  ];

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Skills & Expertise</h2>
        <p className="text-gray-400 mb-12">Technologies and tools I work with</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <SkillCategory title="Frontend Development" skills={frontendSkills} />
          <SkillCategory title="Backend Development" skills={backendSkills} />
          <SkillCategory title="Other Skills" skills={otherSkills} />
        </div>
      </div>
    </section>
  );
};

export default Skills;