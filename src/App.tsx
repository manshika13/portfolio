import { motion, useScroll, useSpring } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  ExternalLink, 
  Cpu, 
  Code2, 
  BrainCircuit, 
  Database, 
  Network, 
  GraduationCap, 
  Award, 
  ChevronRight,
  Monitor,
  Cloud,
  Terminal,
  Layers,
  Search
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen font-sans selection:bg-blue-500/30">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-emerald-500 to-indigo-600 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-[#030711]/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <span className="font-mono font-bold text-xl tracking-tighter text-blue-400">
            MG<span className="text-slate-500">.</span>dev
          </span>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
            <a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
          </div>
          <div className="flex gap-4">
            <a href="https://github.com/manshika13" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-slate-800 rounded-full transition-colors">
              <Github size={20} />
            </a>
            <a href="https://bit.ly/manshika_linkedin" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-slate-800 rounded-full transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <section id="about" className="py-12 md:py-24">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={stagger}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeIn}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-mono mb-6">
                <BrainCircuit size={14} />
                AVAILABLE FOR AI/ML ROLES
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                MANSHIKA <span className="text-gradient">GARG</span>
              </h1>
              <p className="text-xl text-slate-400 leading-relaxed mb-8 max-w-lg">
                Aspiring AI & Machine Learning Engineer | Deep Learning | Generative AI Enthusiast. 
                Dedicated to building intelligent systems that solve real-world problems.
              </p>
              <div className="flex flex-wrap gap-4 text-sm font-mono text-slate-500">
                <span className="flex items-center gap-1.5"><MapPin size={16} /> Ambala, Haryana</span>
                <span className="flex items-center gap-1.5"><Mail size={16} /> manshikagarg13@gmail.com</span>
              </div>
            </motion.div>
            
            <motion.div 
              variants={fadeIn}
              className="relative aspect-square md:aspect-auto md:h-[500px] glass-card rounded-3xl overflow-hidden flex items-center justify-center bg-slate-900/30"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-indigo-500/10" />
              <div className="relative p-8 font-mono text-xs text-blue-400/80 leading-relaxed max-w-md">
                <pre className="whitespace-pre-wrap">
                  {`// Profile Summary
const engineer = {
  experience: '1.5 years',
  focus: ['SNNs', 'Transformers', 'GenAI'],
  tools: ['PyTorch', 'TensorFlow', 'LangChain'],
  goal: 'Building intelligent agent systems',
  foundation: 'Full-stack MERN exposure'
};

// Currently exploring
// - Graph-based models
// - Transformer scaling
// - Energy-efficient AI`}
                </pre>
              </div>
              {/* Background Glow */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-emerald-500/10 blur-[100px] rounded-full" />
            </motion.div>
          </motion.div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 border-t border-slate-800">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-12"
          >
            <div className="md:w-1/3">
              <h2 className="text-3xl font-bold mb-4">Professional <br /><span className="text-blue-400">Experience</span></h2>
              <p className="text-slate-400">Internships and research positions in AI research, computer vision, and networking.</p>
            </div>
            <div className="md:w-2/3 space-y-12">
              {[
                {
                  role: "AI & ML Trainee",
                  company: "CSIR-CEERI, Pilani",
                  period: "Jan 2025 – Jun 2025",
                  description: "Research focusing on Spiking Neural Networks (SNNs) for energy-efficient AI in robotics and BCIs.",
                  bullets: [
                    "Developed prototype models mimicking neuronal spiking to reduce power consumption.",
                    "Performed comparative studies of SNNs vs. standard ANNs implementation."
                  ]
                },
                {
                  role: "AI & ML Intern",
                  company: "Siemens Technologies",
                  period: "Jul 2024 – Aug 2024",
                  description: "Developed scalable computer vision apps using YOLOv8 for real-time detection and segmentation.",
                  bullets: [
                    "Implemented object tracking with consistent ID assignment for dynamic scenes.",
                    "Integrated UNet and Mask R-CNN for pixel-level segmentation.",
                    "Built custom OpenCV pipelines for video processing and annotation."
                  ]
                },
                {
                  role: "iT Networking Intern",
                  company: "Cisco Internship",
                  period: "Jun 2023 – Aug 2023",
                  description: "Gained foundational skills in Networking Essentials and Cybersecurity.",
                  bullets: [
                    "Simulated campus networks using Cisco Packet Tracer.",
                    "Configured and troubleshot network architectures for security compliance."
                  ]
                },
                {
                  role: "Full Stack Web Development Intern",
                  company: "Cosmos Innovation",
                  period: "Jan 2022 – Jun 2022",
                  description: "Built front-end components and client websites.",
                  bullets: [
                    "Developed components using HTML, CSS, and JavaScript.",
                    "Managed WordPress project end-to-end for clients."
                  ]
                }
              ].map((exp, i) => (
                <div key={i} className="relative pl-8 border-l border-slate-800">
                  <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                  <span className="text-xs font-mono text-blue-400 mb-2 block">{exp.period}</span>
                  <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                  <div className="text-lg font-medium text-slate-300 mb-4">{exp.company}</div>
                  <p className="text-slate-400 mb-4">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.bullets.map((bullet, j) => (
                      <li key={j} className="text-sm text-slate-500 flex gap-2">
                        <ChevronRight size={14} className="mt-1 flex-shrink-0 text-blue-500/50" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 border-t border-slate-800">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Featured <span className="text-blue-400">Projects</span></h2>
              <p className="text-slate-400">Research and engineering projects in Machine Learning and Computer Vision.</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Network Security ML Pipeline",
                tags: ["Random Forest", "FastAPI", "AWS", "Docker"],
                desc: "End-to-end ML pipeline for network security analytics achieving 99% accuracy.",
                details: "Includes ETL pipeline to MongoDB, model training via MLflow, and deployment to AWS EC2 using CI/CD with GitHub Actions.",
                icon: <Network className="text-emerald-400" />
              },
              {
                title: "English-Hindi Transformer",
                tags: ["PyTorch", "NLP", "Transformer", "Scratch"],
                desc: "Transformer architecture implemented from scratch for machine translation.",
                details: "Coded multi-head self-attention, layer norm, and positional encoding. Achieved 0.45 BLEU score on IIT-Bombay corpus.",
                icon: <Layers className="text-blue-400" />
              },
              {
                title: "License Plate Recognition",
                tags: ["YOLOv8", "EasyOCR", "OpenCV", "Python"],
                desc: "Real-time computer vision project for plate extraction and recognition.",
                details: "Achieved validation precision of 0.979 with 0.5ms inference speed. Scalable for smart parking scenarios.",
                icon: <Search className="text-indigo-400" />
              },
              {
                title: "SNN Research",
                tags: ["SNNs", "BCI", "Robotics", "Research"],
                desc: "Developing energy-efficient AI mimicking neuronal spiking behavior.",
                details: "Comparative study of Spiking Neural Networks against standard ANN models for robotics power reduction.",
                icon: <Cpu className="text-pink-400" />
              }
            ].map((project, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="glass-card rounded-2xl p-8 flex flex-col group"
              >
                <div className="mb-6 p-3 rounded-lg bg-slate-800/50 w-fit group-hover:bg-blue-500/10 transition-colors">
                  {project.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, j) => (
                    <span key={j} className="text-[10px] font-mono px-2 py-1 bg-slate-800 rounded-md text-slate-400 uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-slate-400 mb-4">{project.desc}</p>
                <p className="text-sm text-slate-500 mb-6 flex-grow">{project.details}</p>
                <a href="https://github.com/manshika13" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-blue-400 hover:gap-3 transition-all">
                  View Code <ExternalLink size={14} />
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 border-t border-slate-800">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Technical <span className="text-blue-400">Toolkit</span></h2>
            <p className="text-slate-400 max-w-2xl mx-auto">A comprehensive view of the technologies and frameworks I use to build intelligent systems.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Programming",
                icon: <Code2 className="text-blue-400" />,
                skills: ["Python", "C/C++", "Java", "JavaScript"]
              },
              {
                title: "AI/ML Frameworks",
                icon: <BrainCircuit className="text-emerald-400" />,
                skills: ["PyTorch", "TensorFlow", "Keras", "Scikit-learn"]
              },
              {
                title: "Generative AI",
                icon: <Monitor className="text-indigo-400" />,
                skills: ["LangChain", "LangGraph", "VectorDB", "Transformers"]
              },
              {
                title: "Web & Backend",
                icon: <Terminal className="text-purple-400" />,
                skills: ["React.js", "FastAPI", "MongoDB", "Express"]
              },
              {
                title: "Cloud & Dev",
                icon: <Cloud className="text-sky-400" />,
                skills: ["AWS", "Docker", "Git", "RestAPI"]
              },
              {
                title: "Data Science",
                icon: <Database className="text-amber-400" />,
                skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn"]
              },
              {
                title: "Computer Vision",
                icon: <Search className="text-red-400" />,
                skills: ["YOLOv8", "OpenCV", "UNet", "Mask R-CNN"]
              },
              {
                title: "OS",
                icon: <Monitor size={20} className="text-slate-400" />,
                skills: ["Linux", "Windows"]
              }
            ].map((category, i) => (
              <div key={i} className="glass-card p-6 rounded-2xl">
                <div className="flex items-center gap-3 mb-4">
                  {category.icon}
                  <h4 className="font-bold text-sm uppercase tracking-wider">{category.title}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, j) => (
                    <span key={j} className="text-xs px-2.5 py-1 bg-slate-800/50 rounded-full text-slate-300 border border-slate-700/50">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20">
            <h3 className="text-xl font-bold mb-8 text-center text-slate-400 font-mono">CORE COMPETENCIES</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Deep Learning", "Spiking Neural Networks", "Graph-based Models", "Transformer Architectures",
                "Computer Vision", "Object Detection", "Reinforcement Learning", "Generative AI",
                "Agentic Systems", "Cloud ML Ops", "Full-Stack Development", "Research & Development"
              ].map((skill, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-slate-500">
                  <div className="w-1 h-1 rounded-full bg-blue-500/50" />
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education & Accomplishments */}
        <section className="py-20 border-t border-slate-800">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <GraduationCap className="text-blue-400" />
                <h2 className="text-3xl font-bold">Education</h2>
              </div>
              <div className="space-y-8">
                {[
                  {
                    degree: "B.Tech, Computer Science",
                    school: "DCRUST, Murthal",
                    period: "2021 – 2025",
                    result: "7.77 CGPA"
                  },
                  {
                    degree: "Senior Secondary",
                    school: "D.A.V. Public School, Ambala",
                    period: "2019 – 2021",
                    result: "93%"
                  },
                  {
                    degree: "Secondary",
                    school: "D.A.V. Public School, Ambala",
                    period: "2018 – 2019",
                    result: "93.8%"
                  }
                ].map((edu, i) => (
                  <div key={i} className="relative pl-6 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-px before:bg-slate-800">
                    <h4 className="font-bold">{edu.degree}</h4>
                    <p className="text-slate-400 text-sm">{edu.school}</p>
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-xs font-mono text-slate-500">{edu.period}</span>
                      <span className="text-xs font-mono px-2 py-0.5 bg-blue-500/10 text-blue-400 rounded-md">{edu.result}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-8">
                <Award className="text-emerald-400" />
                <h2 className="text-3xl font-bold">Accomplishments</h2>
              </div>
              <div className="grid gap-4">
                {[
                  "TechForSociety Hackathon (Top 15 – MVP Round)",
                  "GATE 2024 Qualified – Computer Science",
                  "Siemens Scholarship Recipient (Selected among 200 in India)",
                  "Smart India Hackathon 2023 Participant",
                  "JEE MAIN 2021 – 91% Percentile"
                ].map((item, i) => (
                  <div key={i} className="glass-card p-4 rounded-xl text-sm text-slate-300 flex gap-3">
                    <ChevronRight size={16} className="text-emerald-500 mt-0.5" />
                    {item}
                  </div>
                ))}
              </div>
              
              <div className="mt-12">
                <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                  <Award size={20} className="text-indigo-400" />
                  Certifications
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "AWS Certified Cloud Practitioner",
                    "Learning GANs",
                    "IoT Fundamentals",
                    "Networking Essentials",
                    "Database Design (MySQL)"
                  ].map((cert, i) => (
                    <span key={i} className="text-[10px] px-2 py-1 bg-slate-800/80 rounded-md text-slate-400 border border-slate-700/50 uppercase font-mono tracking-wider">
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gradient mb-2">Let's connect</h2>
            <p className="text-slate-500 max-w-sm mx-auto">Always open to discussions about AI research, ML engineering, or potential collaborations.</p>
          </div>
          <div className="flex justify-center gap-6 mb-12">
            <a href="mailto:manshikagarg13@gmail.com" className="p-3 bg-slate-900 rounded-2xl hover:bg-blue-500/10 hover:text-blue-400 transition-all border border-slate-800">
              <Mail size={24} />
            </a>
            <a href="https://github.com/manshika13" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-900 rounded-2xl hover:bg-slate-800 transition-all border border-slate-800">
              <Github size={24} />
            </a>
            <a href="https://bit.ly/manshika_linkedin" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-900 rounded-2xl hover:bg-blue-500/10 hover:text-blue-400 transition-all border border-slate-800">
              <Linkedin size={24} />
            </a>
          </div>
          <p className="text-xs font-mono text-slate-600">
            &copy; {new Date().getFullYear()} MANSHIKA GARG. BUILT WITH REACT & PRECISION.
          </p>
        </div>
      </footer>
    </div>
  );
}
