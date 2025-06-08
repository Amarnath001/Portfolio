import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';

const Education = () => {
  const education = [
    {
      degree: 'Master of Science in Computer Science',
      school: 'Santa Clara University, California',
      duration: '2024 - 2026',
      gpa: '3.9/4.0',
      relevantCourses: [
        'Artificial Intelligence',
        'Machine Learning',
        'Deep Learning',
        'Computer Vision',
        'Natural Language Processing',
        'Advanced Operating Systems',
        'Algorithms',
        'Human Computer Interaction',
        'Computer Architecture',
      ]
    },
    {
      degree: 'Bachelor of Engineering in Computer Science',
      school: 'BNM Institute of Technology, Bangalore',
      duration: '2018 - 2022',
      gpa: '3.8/4.0',
      relevantCourses: [
        'Data Structures & Algorithms',
        'Software Engineering',
        'Database Systems',
        'Computer Architecture',
        'Operating Systems',
        'Machine Learning'
      ]
    }
  ];

  return (
    <section id="education" className="py-20 bg-[#0f3460]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <FaGraduationCap className="inline-block mr-2" />
              Education
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          </motion.div>
        </div>
        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <div key={index} className="bg-[#16213e] rounded-lg p-6 mb-6 shadow-lg border border-blue-500/20">
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-bold text-blue-400 mb-2">{edu.degree}</h3>
                  <p className="text-gray-300 mb-2">{edu.school}</p>
                  <div className="flex justify-between text-gray-400 mb-4">
                    <span>{edu.duration}</span>
                    <span>GPA: {edu.gpa}</span>
                  </div>
                  <div className="mt-4">
                    <h4 className="text-blue-300 font-semibold mb-2">Relevant Coursework:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {edu.relevantCourses.map((course, i) => (
                        <span key={i} className="text-gray-300 bg-blue-900/30 px-3 py-1 rounded-full text-sm">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  const experiences = [
    {
      title: 'Software Engineer',
      company: 'Capgemini',
      duration: 'Aug 2022 - Jun 2024',
      location: 'India',
      description: [
        'Software solutions for Logitech video conferencing products.',
        'Spearheaded Android OS service updates, reducing installation times by 20% and enhancing user experience.',
        'Triaged and resolved critical service issues within 24 hours, reducing downtime and improving customer experience, leading to 15% increase in system reliability.',
        'Handled Linux security policy upgrades to ensure proper access restrictions were placed for our services.',
        'Optimized Jenkins pipelines by updating dependencies, achieving consistent green builds, and streamlining deployment processes.',
        'Ranked #1 among 100+ new hires for technical proficiency and rapid learning.',
        'Received Capgemini WOW Award for innovation and efficiency, contributing to a 10% increase in customer satisfaction.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-[#1a1a2e]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <FaBriefcase className="inline-block mr-2" />
              Work Experience
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          </motion.div>
        </div>
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-[#16213e] rounded-lg p-6 mb-6 shadow-lg border border-blue-500/20">
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-bold text-blue-400 mb-2">{exp.title}</h3>
                  <p className="text-gray-300 mb-2">{exp.company}</p>
                  <div className="flex justify-between text-gray-400 mb-4">
                    <span>{exp.duration}</span>
                    <span>{exp.location}</span>
                  </div>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Experience, Education }; 