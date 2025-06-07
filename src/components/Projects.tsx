import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Patient Monitoring Using Emotion Recognition',
    date: '2022',
    technologies: [
      'Python', 'Anaconda Navigator', 'Jupyter Notebook', 'Keras', 'TensorFlow', 'Streamlit', 'Machine Learning', 'OpenCV'
    ],
    details: [
      'Developed a 4-layer CNN model achieving 80% accuracy in pain detection, improving diagnostic insights for clinical applications.',
      'Built a Streamlit-based web app, reducing manual emotion assessment time by 50% for doctors.',
      'Published in IJRASET, Volume 10, Issue VIII, increasing visibility among 1000+ researchers.'
    ],
    github: '',
    demo: ''
  },
  {
    title: 'File Transfer Application',
    date: '2022-2023',
    technologies: ['Java', 'Kotlin', 'Android Studio'],
    details: [
      'Implemented an Android application and independently created the network transfer module, enabling secure encrypted data transmission between client and server.',
      'Reduced data transmission errors by 30% by optimizing network transfer protocols.',
      'Achieved an average file transfer speed improvement of 25% over traditional Bluetooth-based sharing.'
    ],
    github: 'https://github.com/Amarnath001/FileTransferApp',
    demo: ''
  },
  {
    title: 'Multi-Image Fusion Generator',
    date: '2025',
    technologies: ['Python', 'Flask', 'OpenAI GPT-4 Vision', 'DALL-E', 'Pillow', 'Requests'],
    details: [
      'Built a Flask-based AI tool that generates a composite image from 3-5 reference inputs using GPT-4 Vision and DALL-E 3, with secure API integration and error handling.',
      'Automated image captioning and prompt generation, reducing manual effort by 70% and improving output relevance across 150 test cases.',
      'Designed modular architecture with preprocessing logic to standardize image inputs, decreasing generation errors by 40%.'
    ],
    github: 'https://github.com/Amarnath001/Multi_Image_Generator',
    demo: ''
  },
  {
    title: 'Small Business Management System',
    date: '2022-2023',
    technologies: ['HTML', 'CSS', 'PHP', 'XAMPP'],
    details: [
      'Developed an PHP-based order management web application for small business owners to manage their orders and services in an easy and efficient way.',
      'Allows for secure user authentication, ensuring 100% data privacy and security. The user can create, view, and edit customer orders.',
      'Delivered daily/monthly sales reports, reducing manual report generation time by 70%.'
    ],
    github: '',
    demo: ''
  },
  {
    title: 'Logic Gate Simulator — CodeHS',
    date: '2025',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    details: [
      'An interactive educational game designed to teach K-12 students the fundamentals of Boolean logic through puzzle-based challenges.',
      'Level-based challenges: AND, OR, and NOT gates with progressive difficulty.',
      'Interactive grid for placing gates and wires, with color-coded visual feedback.',
      'Progress tracking and step-by-step instructions for each level.',
      'Originally built for Bool.com, adapted for CodeHS Summer 2025 Internship Challenge.'
    ],
    github: 'https://github.com/Amarnath001/Logic_Gate_Simulator_CodeHS',
    demo: 'https://www.loom.com/share/1cb9fb42b52a42afb60a5eba5a0e4ac4'
  }
];

const cardVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 }
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-white">
              Projects (Full Stack & Mobile)
            </h2>
            <p className="text-gray-400 mt-2 text-lg">Explore my work! Scroll horizontally to see more.</p>
          </motion.div>
        </div>
        <div className="overflow-x-auto pb-4">
          <div className="flex space-x-8 min-w-[700px]">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="bg-gray-800 rounded-2xl shadow-lg p-8 min-w-[350px] max-w-xs flex-shrink-0 flex flex-col justify-between border-2 border-transparent hover:border-blue-500 transition-all duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(0,0,0,0.2)' }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs">{tech}</span>
                      ))}
                    </div>
                    <div className="text-gray-400 text-xs mb-2">{project.date}</div>
                    <ul className="list-disc ml-5 mt-2 text-gray-300 space-y-1 text-sm">
                      {project.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex gap-4 mt-6">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-gray-700 text-blue-400 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition"
                      >
                        GitHub
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-800 transition"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 