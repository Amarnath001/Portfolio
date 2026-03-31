import { motion } from 'framer-motion';

const About = () => {
  const stats = [
    { label: "Years Experience", value: "3+" },
    { label: "Projects Completed", value: "20+" }
  ];

  const skills = [
    {
      category: 'Languages',
      items: ['Python', 'TypeScript', 'Java', 'C/C++', 'SQL', 'JavaScript']
    },
    {
      category: 'Frontend / Mobile',
      items: ['React', 'Next.js', 'React Native', 'Expo', 'HTML', 'CSS', 'Tailwind']
    },
    {
      category: 'Backend',
      items: ['Flask', 'Node.js', 'REST APIs', 'Microservices', 'Supabase']
    },
    {
      category: 'Databases',
      items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Supabase']
    },
    {
      category: 'AI / ML',
      items: ['LLMs', 'Prompt Engineering', 'NLP', 'Whisper', 'RAG', 'Embeddings']
    },
    {
      category: 'Cloud & DevOps',
      items: ['Docker', 'Nginx', 'CI/CD', 'Prometheus', 'Grafana', 'AWS']
    },
    {
      category: 'Tools & Systems',
      items: ['Git', 'Linux', 'Stripe', 'Firebase', 'Postman']
    }
  ];

  const timeline = [
    {
      type: 'experience',
      title: 'Sentari AI',
      subtitle: 'Full Stack Engineer',
      location: '',
      date: 'Summer 2025',
      details: [
        'Built a production Flask backend for a voice journaling and emotional intelligence platform, powering transcription, tagging, and analytics pipelines.',
        'Designed and implemented 20+ REST APIs for workflows including transcription (Whisper), tag analysis, emotion insights, and journaling.',
        'Developed an end-to-end async pipeline: audio → transcription → analysis → storage → AI-generated responses.',
        'Integrated Supabase (auth + database) and Stripe subscriptions + usage tracking for production billing flows.',
        'Built LLM-driven tagging and analysis systems (emotion, intent, cognition classification).',
        'Deployed scalable services using Docker, Nginx, Prometheus, and Grafana.'
      ]
    },
    {
      type: 'experience',
      title: 'Sentari',
      subtitle: 'Mobile (React Native / iOS)',
      location: '',
      date: 'Summer 2025',
      details: [
        'Developed a cross-platform voice journaling app using React Native + Expo with real-time recording and transcription.',
        'Implemented AI-powered features including transcript analysis, tag generation, and “inner voice” responses.',
        'Built custom hooks and state management for recording, analytics, and history flows.',
        'Integrated Supabase authentication (OAuth, magic links) and backend APIs across multiple services.'
      ]
    },
    {
      type: 'experience',
      title: 'Sentari',
      subtitle: 'Web Frontend (Next.js)',
      location: '',
      date: 'Summer 2025',
      details: [
        'Built a production-grade Next.js (App Router) frontend with TypeScript and Tailwind.',
        'Developed core product features: Record, History, and Insights dashboards with real-time data flows.',
        'Implemented Stripe subscription flows and paywall logic.',
        'Designed analytics UI components for emotion trends, energy insights, and behavioral patterns.',
        'Built scalable frontend architecture using React Context + custom hooks.'
      ]
    },
    {
      type: 'experience',
      title: 'Salus Wellness',
      subtitle: 'Full Stack Engineer',
      location: '',
      date: 'Summer 2025',
      details: [
        'Contributed to a full-stack wellness platform spanning web, mobile, and backend systems.',
        'Built backend services for authentication, scheduling, payments (Stripe), and messaging workflows.',
        'Developed AI-powered coaching features including insights and recommendations.',
        'Worked within a Turborepo monorepo architecture with shared types, APIs, and schemas.',
        'Designed real-world workflows for coach–client interactions, bookings, and progress tracking.'
      ]
    },
    {
      type: 'experience',
      title: 'HCI Lab',
      subtitle: 'Research Assistant',
      location: '',
      date: 'Summer 2025',
      details: [
        'Designed a natural language system to predict user focus intent in YouTube sessions.',
        'Built a rule-based + prompt-engineered decision system using behavioral heuristics.',
        'Developed few-shot prompting strategies to improve prediction accuracy.',
        'Evaluated system performance using structured rule-based analysis and user behavior signals.'
      ]
    },
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
      </div>
    </section>
  );
};

export default About; 