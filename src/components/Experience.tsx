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
      title: 'Full Stack Engineer',
      company: 'Sentari AI',
      duration: 'Summer 2025',
      location: '',
      description: [
        'Built a production Flask backend for a voice journaling and emotional intelligence platform, powering transcription, tagging, and analytics pipelines.',
        'Designed and implemented 20+ REST APIs for workflows including transcription (Whisper), tag analysis, emotion insights, and journaling.',
        'Developed an end-to-end async pipeline: audio → transcription → analysis → storage → AI-generated responses.',
        'Integrated Supabase (auth + database) and Stripe subscriptions + usage tracking for production billing flows.',
        'Built LLM-driven tagging and analysis systems (emotion, intent, cognition classification).',
        'Deployed scalable services using Docker, Nginx, Prometheus, and Grafana.'
      ]
    },
    {
      title: 'Mobile (React Native / iOS)',
      company: 'Sentari',
      duration: 'Summer 2025',
      location: '',
      description: [
        'Developed a cross-platform voice journaling app using React Native + Expo with real-time recording and transcription.',
        'Implemented AI-powered features including transcript analysis, tag generation, and “inner voice” responses.',
        'Built custom hooks and state management for recording, analytics, and history flows.',
        'Integrated Supabase authentication (OAuth, magic links) and backend APIs across multiple services.'
      ]
    },
    {
      title: 'Web Frontend (Next.js)',
      company: 'Sentari',
      duration: 'Summer 2025',
      location: '',
      description: [
        'Built a production-grade Next.js (App Router) frontend with TypeScript and Tailwind.',
        'Developed core product features: Record, History, and Insights dashboards with real-time data flows.',
        'Implemented Stripe subscription flows and paywall logic.',
        'Designed analytics UI components for emotion trends, energy insights, and behavioral patterns.',
        'Built scalable frontend architecture using React Context + custom hooks.'
      ]
    },
    {
      title: 'Full Stack Engineer',
      company: 'Salus Wellness',
      duration: 'Summer 2025',
      location: '',
      description: [
        'Contributed to a full-stack wellness platform spanning web, mobile, and backend systems.',
        'Built backend services for authentication, scheduling, payments (Stripe), and messaging workflows.',
        'Developed AI-powered coaching features including insights and recommendations.',
        'Worked within a Turborepo monorepo architecture with shared types, APIs, and schemas.',
        'Designed real-world workflows for coach–client interactions, bookings, and progress tracking.'
      ]
    },
    {
      title: 'Research Assistant',
      company: 'HCI Lab',
      duration: 'Summer 2025',
      location: '',
      description: [
        'Designed a natural language system to predict user focus intent in YouTube sessions.',
        'Built a rule-based + prompt-engineered decision system using behavioral heuristics.',
        'Developed few-shot prompting strategies to improve prediction accuracy.',
        'Evaluated system performance using structured rule-based analysis and user behavior signals.'
      ]
    },
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
                  <div className="flex flex-wrap justify-between gap-2 text-gray-400 mb-4">
                    <span>{exp.duration}</span>
                    {exp.location ? <span>{exp.location}</span> : null}
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