import React from 'react';
import { Calendar, MapPin, Award, Briefcase } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left column - Profile Image */}
          <div className="md:w-1/3">
            <div 
              className="aspect-[3/4] rounded-md overflow-hidden bg-cover bg-center shadow-xl"
              style={{ 
                backgroundImage: 'url("https://images.pexels.com/photos/3799523/pexels-photo-3799523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
              }}
            >
              <div className="w-full h-full bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6">
                  <h3 className="text-white text-xl font-bold">Developer Name</h3>
                  <p className="text-gray-300">Full Stack Developer</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right column - About Info */}
          <div className="md:w-2/3">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">About Me</h2>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              I'm a passionate full-stack developer with a focus on creating intuitive and engaging user experiences. 
              With expertise in modern web technologies, I've built a range of applications from e-commerce platforms 
              to interactive dashboards and real-time applications.
            </p>
            
            <p className="text-gray-300 mb-8 leading-relaxed">
              My approach combines technical excellence with creative problem-solving to deliver solutions 
              that exceed client expectations. I'm constantly exploring new technologies and methodologies 
              to enhance my skill set and create more innovative digital products.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-3">
                <div className="bg-red-600 p-2 rounded">
                  <Calendar size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Experience</h4>
                  <p className="text-gray-400">5+ Years</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-red-600 p-2 rounded">
                  <MapPin size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Location</h4>
                  <p className="text-gray-400">San Francisco, CA</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-red-600 p-2 rounded">
                  <Award size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Education</h4>
                  <p className="text-gray-400">B.S. Computer Science</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-red-600 p-2 rounded">
                  <Briefcase size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Employment</h4>
                  <p className="text-gray-400">Available for Hire</p>
                </div>
              </div>
            </div>
            
            <a 
              href="#contact" 
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;