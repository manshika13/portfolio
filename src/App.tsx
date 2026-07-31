import React from "react";
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
  Search,
  Eye,
  FileText
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
    <div className="min-h-screen font-sans bg-white text-slate-800 selection:bg-blue-500/20">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <span className="font-mono font-bold text-xl tracking-tighter text-blue-600">
            MG<span className="text-slate-400">.</span>research
          </span>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#experience" className="hover:text-blue-600 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-blue-600 transition-colors">Research & Projects</a>
            <a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a>
          </div>
          <div className="flex gap-4">
            <a href="https://github.com/manshika13" target="_blank" rel="noopener noreferrer" className="p-2 text-slate-600 hover:bg-slate-100 rounded-full transition-colors">
              <Github size={20} />
            </a>
            <a href="https://bit.ly/manshika_linkedin" target="_blank" rel="noopener noreferrer" className="p-2 text-slate-600 hover:bg-slate-100 rounded-full transition-colors">
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-xs font-mono mb-6">
                <Eye size={14} />
                COMPUTER VISION & AI RESEARCHER
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-slate-900">
                MANSHIKA <span className="text-blue-600">GARG</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-8 max-w-lg">
                Aspiring AI & Machine Learning Engineer | Deep Learning | Researcher in Computer Vision. 
                Focused on Vision-Language Models (VLMs), spatial intelligence, and energy-efficient neural networks.
              </p>
              <div className="flex flex-wrap gap-4 text-sm font-mono text-slate-500">
                <span className="flex items-center gap-1.5"><MapPin size={16} className="text-blue-500" /> Ambala, Haryana</span>
                <span className="flex items-center gap-1.5"><Mail size={16} className="text-blue-500" /> manshikagarg13@gmail.com</span>
              </div>
            </motion.div>
            
            <motion.div 
              variants={fadeIn}
              className="relative aspect-square md:aspect-auto md:h-[500px] border border-slate-200 shadow-xl rounded-3xl overflow-hidden flex items-center justify-center bg-slate-900"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-slate-900" />
              <div className="relative p-8 font-mono text-xs text-blue-300 leading-relaxed max-w-md">
                <pre className="whitespace-pre-wrap">
                  {`// Research & Clinical Focus
const researcher = {
  domain: 'Computer Vision & VLMs',
  current_role: 'Associate Researcher @ CSIR-CSIO',
  focus_areas: [
    'Vision-Language Models (Qwen-3VL)',
    'Spatial Intelligence & Point Clouds',
    'Zero-shot Semantic Reasoning',
    'Spiking Neural Networks (SNNs)'
  ],
  core_stack: [
    'PyTorch', 'YOLOv8', 'OpenCV', 
    'LangChain', 'LangGraph', 'Docker'
  ]
};

// Research Vision:
// Advancing surveillance systems from simple
// perception to explainable scene understanding.`}
                </pre>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 border-t border-slate-200">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-12"
          >
            <div className="md:w-1/3">
              <h2 className="text-3xl font-bold mb-4 text-slate-900">Professional <br /><span className="text-blue-600">Experience</span></h2>
              <p className="text-slate-600">Academic research positions and technical engineering internships specializing in computer vision, deep learning, and network systems.</p>
            </div>
            <div className="md:w-2/3 space-y-12">
              {[
                {
                  role: "Associate Researcher",
                  company: "CSIR-CSIO, Chandigarh",
                  period: "November 2025 – Present",
                  description: "Focusing on Vision-Language Models, Reasoning Models, and spatial intelligence for real-time surveillance.",
                  bullets: [
                    "Gain experience in Visual Language Models and Reasoning Models, training them by generating Visual–Question Answer pairs.",
                    "A step towards spatial intelligence by implementing a pipeline that generates Visual Question Answers and Point Clouds using Qualitative and Quantitative Datasets.",
                    "Do comparative study to better understand spatial awareness in real-time monitoring systems for surveillance perspectives."
                  ]
                },
                {
                  role: "AI & ML Trainee",
                  company: "CSIR-CEERI, Pilani, Rajasthan",
                  period: "Jan 2025 – Jun 2025",
                  description: "Conducted advanced research under Dr. Gaurav Purohit focusing on Spiking Neural Networks (SNNs) for energy-efficient AI computing in brain-computer interfaces.",
                  bullets: [
                    "Explored and developed prototype models mimicking neuronal spiking behaviour to reduce power consumption in real-time AI systems.",
                    "Performed a comparative study of SNNs and other existing neural network models like artificial neural networks, implementing and evaluating their performance."
                  ]
                },
                {
                  role: "AI & ML Intern",
                  company: "Siemens Technologies Pvt. Ltd., Bengaluru",
                  period: "Jul 2024 – Aug 2024",
                  description: "Developed a scalable computer vision application utilizing YOLOv8 for real-time multi-object detection and segmentation.",
                  bullets: [
                    "Implemented object tracking with consistent ID assignment to maintain identity across frames, enabling accurate object counting for dynamic scenes such as traffic monitoring and industrial conveyor belts.",
                    "Integrated advanced segmentation techniques using UNet and Mask R-CNN to perform pixel-level object segmentation, improving precision beyond bounding boxes.",
                    "Built custom pipelines with OpenCV for video processing, including frame capture, annotation overlay (bounding boxes, centroids, trails), and saving annotated videos.",
                    "Addressed practical challenges such as overlapping objects, fast-moving scenes, and variable lighting conditions by fine-tuning models and preprocessing frames.",
                    "Demonstrated utility in real-world use cases including surveillance, vehicle counting, and industrial inspection, validating robustness with multiple object categories."
                  ]
                },
                {
                  role: "IT Networking Intern",
                  company: "Cisco Internship",
                  period: "Jun 2023 – Aug 2023",
                  description: "Gained foundational skills in Networking Essentials and Cybersecurity.",
                  bullets: [
                    "Designed and simulated campus network using Cisco Packet Tracer, applying industry best practices.",
                    "Configured and troubleshot network architectures to ensure performance and security compliance."
                  ]
                },
                {
                  role: "Full Stack Web Development Intern",
                  company: "Cosmos Innovation Pvt. Ltd., India",
                  period: "Jan 2022 – Jun 2022",
                  description: "Built front-end components and managed end-to-end client web deployments.",
                  bullets: [
                    "Developed front-end components using HTML, CSS, and JavaScript.",
                    "Built & deployed a client website using WordPress, managing the project end-to-end while improving client collaboration and project management skills."
                  ]
                }
              ].map((exp, i) => (
                <div key={i} className="relative pl-8 border-l-2 border-slate-200">
                  <div className="absolute left-[-7px] top-0 w-3 h-3 rounded-full bg-blue-600 ring-4 ring-white" />
                  <span className="text-xs font-mono text-blue-600 font-semibold mb-1 block">{exp.period}</span>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{exp.role}</h3>
                  <div className="text-base font-medium text-slate-700 mb-3">{exp.company}</div>
                  <p className="text-slate-600 text-sm mb-4 bg-slate-50 p-3 rounded-lg border border-slate-100">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.bullets.map((bullet, j) => (
                      <li key={j} className="text-sm text-slate-600 flex items-start gap-2">
                        <ChevronRight size={16} className="mt-0.5 flex-shrink-0 text-blue-500" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Projects & Research Undertaken */}
        <section id="projects" className="py-20 border-t border-slate-200">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2 text-slate-900">Research & <span className="text-blue-600">Featured Projects</span></h2>
              <p className="text-slate-600">Primary research publications, architectures, and computer vision systems.</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Scalable Multi-Thread Video Analytics Framework",
                period: "Nov 2025 – Present",
                tags: ["Qwen-3VL", "YOLOv8", "ByteTrack", "Zero-Shot VLM", "Spatial Reasoning"],
                desc: "Next-Generation Video Analytics bridging lightweight object detectors with Vision-Language Models.",
                details: "Co-developed an architecture bridging YOLOv8 + ByteTrack with Qwen-3VL via spatially guided prompting. Designed an asynchronous decoupling strategy to resolve throughput mismatch between detection (~54 fps) and VLM inference (0.37 fps). Benchmarked system latency on a 2-Hour live stream (scaling from 1.86s to 15.28s). Authored the research roadmap for extending the pipeline into a Spatial Reasoning Foundation Model integrating egocentric reasoning.",
                icon: <Eye className="text-blue-600" />
              },
              {
                title: "Automatic License Plate Recognition",
                period: "Jul 2024 – Aug 2024",
                tags: ["YOLOv8n", "EasyOCR", "OpenCV", "Python", "NVIDIA A100"],
                desc: "Real-time Computer Vision project for end-to-end plate extraction and text recognition.",
                details: "Built and fine-tuned YOLOv8n on a Roboflow license plate dataset. Developed a full pipeline for data annotation, preprocessing, and augmentation. Integrated EasyOCR for end-to-end extraction. Achieved validation precision (0.979), recall (0.935), and mAP@0.5 (0.964) trained over 8 epochs on NVIDIA A100 GPU. Compact model size (6.2MB) with ~0.5ms/image inference.",
                icon: <Search className="text-indigo-600" />
              },
              {
                title: "Transformer for English-Hindi Translation",
                period: "Mar 2025 – Apr 2025",
                tags: ["PyTorch", "NLP", "Scratch Implementation", "BLEU Score"],
                desc: "Implemented every component of the Transformer architecture from scratch following 'Attention Is All You Need'.",
                details: "Coded layers including multi-head self-attention, position-wise feedforward networks, layer normalization, residual connections, and positional encoding from scratch in PyTorch. Designed encoder and decoder blocks manually. Preprocessed the IIT-Bombay English-Hindi corpus and achieved 0.45 BLEU score.",
                icon: <Layers className="text-blue-600" />
              },
              {
                title: "Network Security End-to-End ML Project",
                period: "June 2025 – July 2025",
                tags: ["MLflow", "FastAPI", "Docker", "AWS S3/EC2", "MongoDB Atlas"],
                desc: "End-to-end ETL pipeline and machine learning architecture for network data analytics.",
                details: "Developed an ETL pipeline extracting data to MongoDB Atlas. Implemented automated data ingestion and drip detection. Trained and optimized Random Forest, AdaBoost, and Gradient Boosting models using MLflow, achieving 99% accuracy. Automated deployment to AWS S3, containerized via Docker, and built CI/CD workflows using GitHub Actions to AWS ECR and EC2.",
                icon: <Network className="text-emerald-600" />
              },
              {
                title: "Spiking Neural Networks (SNN) Research",
                period: "Jan 2025 – Jun 2025",
                tags: ["SNNs", "Neuromorphic AI", "Robotics", "BCI", "Research"],
                desc: "Developing energy-efficient AI mimicking neuronal spiking behavior for real-time systems.",
                details: "Conducted at CSIR-CEERI. Created prototype models mimicking neuronal spiking to reduce power consumption in brain-computer interfaces and robotics. Performed detailed comparative analysis against standard Artificial Neural Networks (ANNs).",
                icon: <Cpu className="text-purple-600" />
              },
              {
                title: "Campus Network Design Simulation",
                period: "Jul 2023 – Aug 2023",
                tags: ["Cisco Packet Tracer", "VLANs", "Subnetting", "Routing Protocols"],
                desc: "Designed a hierarchical, scalable campus network using industry best practices.",
                details: "Applied core networking concepts such as subnetting, VLANs, and routing protocols. Simulated, tested, and troubleshot network connectivity and performance for campus security compliance.",
                icon: <Terminal className="text-slate-600" />
              }
            ].map((project, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -4 }}
                className="bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all rounded-2xl p-8 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 rounded-lg bg-blue-50 w-fit group-hover:bg-blue-100 transition-colors">
                      {project.icon}
                    </div>
                    <span className="text-xs font-mono text-slate-400 font-medium">{project.period}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-slate-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag, j) => (
                      <span key={j} className="text-[11px] font-mono px-2.5 py-0.5 bg-slate-100 rounded-md text-slate-600 font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-slate-800 font-medium text-sm mb-3">{project.desc}</p>
                  <p className="text-sm text-slate-600 mb-6 leading-relaxed">{project.details}</p>
                </div>
                <a href="https://github.com/manshika13" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 hover:gap-3 transition-all pt-4 border-t border-slate-100">
                  View Code / Research <ExternalLink size={14} />
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 border-t border-slate-200">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-slate-900">Technical <span className="text-blue-600">Toolkit</span></h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Comprehensive framework of computer vision pipelines, generative AI libraries, and engineering tools.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Computer Vision",
                icon: <Eye className="text-blue-600" />,
                skills: ["YOLOv8", "OpenCV", "UNet", "Mask R-CNN", "ByteTrack", "Qwen-3VL"]
              },
              {
                title: "AI & ML Frameworks",
                icon: <BrainCircuit className="text-indigo-600" />,
                skills: ["PyTorch", "TensorFlow", "Keras", "Scikit-learn", "SNNs", "Transformers"]
              },
              {
                title: "Gen AI & NLP",
                icon: <Monitor className="text-purple-600" />,
                skills: ["LangChain", "LangGraph", "Vector DB", "LLMs/VLMs", "Reasoning Models"]
              },
              {
                title: "Programming",
                icon: <Code2 className="text-emerald-600" />,
                skills: ["Python", "C", "C++", "Java", "JavaScript"]
              },
              {
                title: "Data Science & MLOps",
                icon: <Database className="text-amber-600" />,
                skills: ["Pandas", "NumPy", "Matplotlib", "MLflow", "DataBricks", "DagsHub"]
              },
              {
                title: "Web & Backend",
                icon: <Terminal className="text-red-600" />,
                skills: ["HTML5", "CSS3", "React.js", "FastAPI", "WordPress"]
              },
              {
                title: "Cloud & Dev Tools",
                icon: <Cloud className="text-sky-600" />,
                skills: ["AWS (EC2/S3/ECR)", "GCP", "Docker", "Git", "HPC", "MongoDB", "MySQL"]
              },
              {
                title: "Systems & OS",
                icon: <FileText className="text-slate-600" />,
                skills: ["Linux", "Windows", "Networking Essentials", "Cybersecurity"]
              }
            ].map((category, i) => (
              <div key={i} className="bg-white border border-slate-200 shadow-sm p-6 rounded-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-slate-50 rounded-lg">{category.icon}</div>
                  <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider">{category.title}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, j) => (
                    <span key={j} className="text-xs px-2.5 py-1 bg-slate-100 rounded-full text-slate-700 font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education, Accomplishments & Certifications */}
        <section className="py-20 border-t border-slate-200">
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <GraduationCap className="text-blue-600" size={28} />
                <h2 className="text-3xl font-bold text-slate-900">Education</h2>
              </div>
              <div className="space-y-8">
                {[
                  {
                    degree: "B.Tech, Computer Science",
                    school: "DCRUST, Murthal",
                    period: "2021 – 2025",
                    result: "First Division - 7.70 CGPA"
                  },
                  {
                    degree: "Senior Secondary",
                    school: "D.A.V. Public School, Ambala",
                    period: "2019 – 2021",
                    result: "First Division - 93%"
                  },
                  {
                    degree: "Secondary",
                    school: "D.A.V. Public School, Ambala",
                    period: "2018 – 2019",
                    result: "First Division - 93.8%"
                  }
                ].map((edu, i) => (
                  <div key={i} className="relative pl-6 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-0.5 before:bg-slate-200">
                    <h4 className="font-bold text-lg text-slate-900">{edu.degree}</h4>
                    <p className="text-slate-600 text-sm">{edu.school}</p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-xs font-mono text-slate-500">{edu.period}</span>
                      <span className="text-xs font-mono font-semibold px-2.5 py-0.5 bg-blue-50 text-blue-700 rounded-md border border-blue-100">{edu.result}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Accomplishments & Certificates */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Award className="text-blue-600" size={28} />
                <h2 className="text-3xl font-bold text-slate-900">Accomplishments</h2>
              </div>
              <div className="grid gap-3 mb-10">
                {[
                  {
                    title: "TechForSociety Hackathon Top 15",
                    desc: "Designed FEED4ME, an Android app for farmers focused on optimizing food systems."
                  },
                  {
                    title: "GATE 2024 Qualified – Computer Science",
                    desc: "Successfully cleared the national-level GATE competitive examination."
                  },
                  {
                    title: "Siemens Scholarship Recipient",
                    desc: "Selected among 200 students across India for the prestigious Siemens Scholarship Program, recognizing academic excellence and technical merit."
                  },
                  {
                    title: "Smart India Hackathon 2023 Participant",
                    desc: "Developed a cybersecurity-based prototype for log analysis."
                  },
                  {
                    title: "JEE MAIN 2021",
                    desc: "Qualified national level competitive exam with 91 percentile."
                  }
                ].map((item, i) => (
                  <div key={i} className="bg-slate-50 border border-slate-200 p-4 rounded-xl text-sm">
                    <div className="font-bold text-slate-900 flex items-center gap-2 mb-1">
                      <ChevronRight size={16} className="text-blue-600 flex-shrink-0" />
                      {item.title}
                    </div>
                    <div className="text-slate-600 pl-6">{item.desc}</div>
                  </div>
                ))}
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-slate-900">
                  <FileText size={20} className="text-blue-600" />
                  Certifications
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Basic Relational Database Design, MySQL",
                    "AWS Certified Cloud Practitioner - Essentials (2020)",
                    "Learning Generative Adversarial Networks (GANs)",
                    "Internet of Things: Concepts & Fundamentals"
                  ].map((cert, i) => (
                    <span key={i} className="text-xs px-3 py-1.5 bg-white rounded-lg text-slate-700 border border-slate-200 shadow-sm font-medium">
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
      <footer className="bg-slate-50 border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Let's Connect & Collaborate</h2>
            <p className="text-slate-600 max-w-sm mx-auto">Always open to research discussions in Computer Vision, Vision-Language Models, and AI engineering.</p>
          </div>
          <div className="flex justify-center gap-6 mb-12">
            <a href="mailto:manshikagarg13@gmail.com" className="p-3 bg-white rounded-2xl hover:bg-blue-50 text-slate-700 hover:text-blue-600 transition-all border border-slate-200 shadow-sm">
              <Mail size={24} />
            </a>
            <a href="https://github.com/manshika13" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-2xl hover:bg-slate-100 text-slate-700 transition-all border border-slate-200 shadow-sm">
              <Github size={24} />
            </a>
            <a href="https://bit.ly/manshika_linkedin" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-2xl hover:bg-blue-50 text-slate-700 hover:text-blue-600 transition-all border border-slate-200 shadow-sm">
              <Linkedin size={24} />
            </a>
          </div>
          <p className="text-xs font-mono text-slate-500">
            &copy; {new Date().getFullYear()} MANSHIKA GARG. RESEARCH & ENGINEERING PORTFOLIO.
          </p>
        </div>
      </footer>
    </div>
  );
}


