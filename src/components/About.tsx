import { motion } from 'framer-motion';

const About = () => {
  const stats = [
    { label: "Years Experience", value: "3+" },
    { label: "Projects Completed", value: "20+" },
    { label: "Happy Clients", value: "15+" }
  ];

  const skills = [
    {
      category: 'Programming Languages',
      items: ['Java', 'Kotlin', 'Python', 'C/C++', 'SQL', 'TypeScript']
    },
    {
      category: 'Web & Mobile',
      items: ['HTML', 'CSS', 'JavaScript', 'PHP', 'React', 'Streamlit', 'Android']
    },
    {
      category: 'Backend & Databases',
      items: ['Node.js', 'PostgreSQL', 'MySQL']
    },
    {
      category: 'Cloud',
      items: ['AWS', 'Firebase']
    },
    {
      category: 'Machine Learning & AI',
      items: ['TensorFlow', 'Keras', 'OpenCV']
    },
    {
      category: 'Version Control & CI/CD',
      items: ['Git', 'Jenkins']
    }
  ];

  const timeline = [
    {
      type: 'experience',
      title: 'Capgemini',
      subtitle: 'Software Engineer',
      location: 'India',
      date: 'Aug 2022 - Jun 2024',
      details: [
        'Software solutions for Logitech video conferencing products.',
        'Spearheaded Android OS service updates, reducing installation times by 20% and enhancing user experience.',
        'Triaged and resolved critical service issues within 24 hours, reducing downtime and improving customer experience, leading to 15% increase in system reliability.',
        'Handled Linux security policy upgrades to ensure proper access restrictions were placed for our services.',
        'Optimized Jenkins pipelines by updating dependencies, achieving consistent green builds, and streamlining deployment processes.',
        'Ranked #1 among 100+ new hires for technical proficiency and rapid learning.',
        'Received Capgemini WOW Award for innovation and efficiency, contributing to a 10% increase in customer satisfaction.'
      ]
    },
    {
      type: 'education',
      title: 'Santa Clara University',
      subtitle: 'Master of Science, Computer Science',
      location: 'Santa Clara, CA',
      date: 'Sep 2024 - Jun 2026',
      details: []
    },
    {
      type: 'education',
      title: 'B.N.M Institute of Technology',
      subtitle: 'Bachelor of Engineering, Computer Science',
      location: '',
      date: 'Aug 2018 - Jun 2022',
      details: []
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-white text-center mb-12">About Me</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-300 text-lg mb-8">
              I'm a passionate full-stack developer with expertise in building modern web applications.
              With a strong foundation in both frontend and backend technologies, I create seamless
              user experiences and robust server-side solutions.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">{stat.value}</div>
                    <div className="text-gray-400">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Skills</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="font-semibold text-blue-300 mb-1">{skill.category}</div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {skill.items.map((item, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Timeline Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Experience & Education Timeline</h3>
          <div className="relative border-l-4 border-blue-500 pl-8">
            {timeline.map((item, idx) => (
              <div key={idx} className="mb-12 relative">
                <div className="absolute -left-5 top-2 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-800" />
                <div>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h4 className="text-xl font-bold text-white">{item.title}</h4>
                      <div className="text-blue-300 font-semibold">{item.subtitle}</div>
                      {item.location && <div className="text-gray-400 text-sm">{item.location}</div>}
                    </div>
                    <div className="text-gray-300 text-sm mt-2 md:mt-0">{item.date}</div>
                  </div>
                  {item.details.length > 0 && (
                    <ul className="list-disc ml-6 mt-2 text-gray-300 space-y-1">
                      {item.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 