export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  tag: string;
  summary: string;
  sections: {
    heading?: string;
    subheading?: string;
    paragraphs: string[];
    listItems?: string[];
  }[];
  philosophyQuote?: string;
}

export const entryOneData: BlogPost = {
  slug: "building-the-future-manifesto",
  title: "BUILDING_THE_FUTURE: AN ENGINEERING MANIFESTO",
  date: "2026.05.31",
  readTime: "06_MIN_READ",
  tag: "SYSTEM_CORE",
  summary: "An exploration into advanced robotics, embedded hardware loops, edge intelligence, and the core discipline required to transform digital ideas into physical reality.",
  sections: [
    {
      heading: "01_ IDENTITY // ABOUT ME",
      paragraphs: [
        "Hi, I'm Utkarsh Mishra. I'm an Electronics and Instrumentation Engineering student, builder, researcher, entrepreneur, content creator, and lifelong learner who is fascinated by one question: 'How do we build the future?'",
        "Whether it's autonomous vehicles, drones, artificial intelligence, embedded systems, robotics, computer vision, or advanced manufacturing, I'm constantly exploring technologies that have the potential to reshape the world.",
        "Currently, I am pursuing my B.Tech in Electronics and Instrumentation Engineering at SRM Institute of Science and Technology (SRMIST), where I balance academics with a variety of technical, research, and entrepreneurial projects. I believe the best way to learn is by building."
      ]
    },
    {
      heading: "02_ TECHNICAL VECTOR PLOTS // WHAT I DO",
      paragraphs: [
        "Over the years, I've worked across multiple intersecting engineering domains to design hardware and software that can actively manipulate physical spaces."
      ]
    },
    {
      subheading: "A. Artificial Intelligence & Machine Learning",
      paragraphs: [
        "My long-term goal is to develop intelligent systems that can perceive, reason, and interact with the physical world. I enjoy experimenting with AI applications that bridge the gap between software and hardware, particularly in robotics and autonomous navigation."
      ],
      listItems: [
        "Machine Learning Models & Optimization",
        "Deep Learning Network Tuning",
        "Computer Vision & Pattern Recognition",
        "Reinforcement Learning Loops",
        "Transformers and Large Language Models"
      ]
    },
    {
      subheading: "B. Embedded Systems & Electronics",
      paragraphs: [
        "As an electronics student, I spend a significant amount of time working with hardware. I enjoy creating systems where software directly influences physical behavior, from autonomous drones to intelligent devices."
      ],
      listItems: [
        "ESP32 Development & RTOS Environments",
        "Microcontroller Architecture Programming",
        "Sensor Integration & Real-Time Data Acquisition",
        "Distributed IoT Mesh Systems",
        "PCB Design & Layout Configurations",
        "Flight Controllers & Complex Control Loops"
      ]
    },
    {
      subheading: "C. Robotics & Autonomous Systems",
      paragraphs: [
        "One of my strongest interests lies in robotics. I'm fascinated by machines that can navigate autonomously, balance dynamically, perceive their surroundings, and learn through interaction. My projects focus heavily on combining perception networks with physical mechanical nodes."
      ],
      listItems: [
        "Autonomous Vehicles & Kinematics",
        "Drone Hardware Architecture",
        "Robot Perception & Object Tracking Networks",
        "Simulation Environments such as NVIDIA Isaac Sim & Gazebo"
      ]
    },
    {
      subheading: "D. Engineering Design & Manufacturing",
      paragraphs: [
        "I enjoy turning ideas into physical products. I believe engineering becomes truly exciting when purely digital ideas can be transformed into robust, real-world physical objects."
      ],
      listItems: [
        "Fusion 360 CAD Workspace Modeling",
        "Blender CGI & Environmental VFX Compositing",
        "3D Printing, Prototyping & Rapid Manufacturing",
        "Altium Designer PCB Routing Layouts"
      ]
    },
    {
      heading: "03_ OPERATIONAL OVERLAYS // Startups & Research",
      paragraphs: [
        "Alongside engineering, I have a strong entrepreneurial mindset. Having worked in startup and business environments, I've learned that building technology is only one part of the challenge. Understanding people, markets, communication, and execution is equally important. I enjoy solving problems not just as an engineer, but as a builder who wants ideas to reach the real world.",
        "Research is something I take seriously. I aspire to contribute to meaningful technological advancements and publish research that creates a real impact. Some of the areas I want to explore deeply include Artificial General Intelligence, Autonomous Mobility, Aerospace Systems, Human-Machine Interaction, and Future Energy Technologies."
      ]
    },
    {
      heading: "04_ INTERDISCIPLINARY CORES // Beyond Engineering",
      paragraphs: [
        "While technology is a major part of my life, it's not the only thing that defines me. I actively pursue cinematic filmmaking, technical writing, visual storytelling, beatboxing, photography, and 3D art rendering.",
        "Creativity and engineering may appear different on the surface, but I've found that both rely on the exact same foundation: imagination completely backed by execution."
      ]
    },
    {
      heading: "05_ DECADAL TARGETS // LOOKING AHEAD",
      paragraphs: [
        "Over the next decade, my trajectory is targeted at building advanced AI/robotics systems, publishing impactful research, pursuing graduate studies at a world-class university, and contributing to the future of autonomous mobility. Ultimately, I want to spend my life working at the intersection of intelligence, engineering, and innovation."
      ],
      listItems: [
        "Build advanced AI and robotics platforms",
        "Publish impactful, peer-reviewed research documentation",
        "Pursue graduate studies at a world-class university",
        "Work on cutting-edge technologies",
        "Contribute directly to the future of autonomous mobility",
        "Collaborate with ambitious researchers, builders, and innovators"
      ]
    }
  ],
  philosophyQuote: "I don't believe talent is the deciding factor in success. I believe consistency, curiosity, and discipline matter far more. Motivation comes and goes, but discipline remains. Every project, every skill, every achievement starts with showing up repeatedly, even when progress feels slow."
};