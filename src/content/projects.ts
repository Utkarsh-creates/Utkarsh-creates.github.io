export interface ProjectSpecification {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  field: string;
  timeline: string;
  summary: string;
  imagePath: string; // Reads directly from your public/images/projects directory
  githubUrl: string; // Space for your source repositories
  linkedinEmbedUrl?: string; // Conditional video streams
  radarMetrics: { subject: string; value: number }[]; // Replaces the math model
  specifications: ProjectSpecification[];
}

export const projectsData: Project[] = [
  {
    id: "SYS_REF_01",
    title: "Project VIPER",
    field: "4+1 DOF Articulated Robotic Manipulator",
    timeline: "Feb 2026 - Present",
    summary: "A custom-designed 4+1 Degrees of Freedom robotic manipulator built via Fusion 360 and 3D printing. While initial integration explored ROS2 architectures, the operational framework was successfully deployed utilizing a high-performance Python control GUI on a PC communicating directly over serial with an ESP32 microcontroller to execute smooth multi-axis coordinated trajectories.",
    imagePath: "/images/projects/viper_chassis.png", 
    githubUrl: "https://github.com/utkarshmishra72005/project-viper",
    linkedinEmbedUrl: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7458298367035473920?compact=1",
    radarMetrics: [
      { subject: "Embedded C++", value: 90 },
      { subject: "Python GUI", value: 85 },
      { subject: "Kinematics", value: 70 },
      { subject: "3D CAD/Mech", value: 95 },
      { subject: "Serial Comms", value: 90 }
    ],
    specifications: [
      { label: "Execution Core", value: "PC GUI Control Pipeline" },
      { label: "Hardware Node", value: "ESP32 Custom Controller" },
      { label: "Interface Type", value: "Python Tkinter/PyQt Sliders" },
      { label: "Actuator Array", value: "High-Torque Hardware Servos" },
      { label: "Fabrication", value: "Fusion 360 CAD / 3D Printing" }
    ]
  },
  {
    id: "SYS_REF_02",
    title: "Campus Delivery Bot",
    field: "Autonomous Vehicle Logistics System",
    timeline: "Nov 2025 - Present",
    summary: "A heavy-duty autonomous vehicle designed for inter-campus logistics. Features multi-sensor data fusion mapping real-time simultaneous localization and mapping (SLAM) configurations to safely navigate restricted institutional boundaries.",
    imagePath: "/images/projects/delivery_bot.png",
    githubUrl: "https://github.com/utkarshmishra72005/campus-delivery-bot",
    // No LinkedIn video for Campus Bot as requested
    radarMetrics: [
      { subject: "ROS2/Nav2", value: 90 },
      { subject: "SLAM Engine", value: 85 },
      { subject: "Sensor Fusion", value: 80 },
      { subject: "Edge AI Computing", value: 75 },
      { subject: "PCB / Power Hardware", value: 70 }
    ],
    specifications: [
      { label: "Edge Computing", value: "NVIDIA Jetson Nano + STM32" },
      { label: "Navigation Engine", value: "NAV2 Framework Core" },
      { label: "SLAM Pipeline", value: "Google Cartographer Node" },
      { label: "Sensor Array", value: "Lidar + Intel RealSense + IMU" }
    ]
  },
  {
    id: "SYS_REF_03",
    title: "Material Speaks in Spikes",
    field: "Neuromorphic Edge Computing",
    timeline: "Sep 2025 - Oct 2025",
    summary: "Developed a hardware-based Leaky Integrate and Fire (LIF) biological neuron utilizing discrete analog electronic circuits. Accidental acoustic impact sound signatures were captured via a microphone and run through a lightweight k-NN classification algorithm to execute instantaneous edge material matching.",
    imagePath: "/images/projects/neuromorphic_lif.png",
    githubUrl: "https://github.com/utkarshmishra72005/material-spikes",
    linkedinEmbedUrl: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7393937074938195968?compact=1",
    radarMetrics: [
      { subject: "Analog Circuits", value: 95 },
      { subject: "Edge ML (k-NN)", value: 80 },
      { subject: "Acoustic Analysis", value: 85 },
      { subject: "Micro Programming", value: 85 },
      { subject: "Neuromorphic Theory", value: 90 }
    ],
    specifications: [
      { label: "Processing Core", value: "ESP32 Neural Node Subsystem" },
      { label: "Classification", value: "Localized Edge k-NN Array" },
      { label: "Sensor Capture", value: "Analog Microphone Array" },
      { label: "Circuit Profile", value: "Discrete Low-Energy Analog LIF" }
    ]
  },
  {
    id: "SYS_REF_04",
    title: "Multi-Device Air Quality IoT Network",
    field: "Distributed Sensor Informatics",
    timeline: "Apr 2025 - May 2025",
    summary: "Designed and built an environmental mesh monitoring system leveraging multiple microcontrollers. Individual nodes acquire air metrics simultaneously, piping telemetry data straight to a web browser running a custom Three.js environment for virtual room diagnostics.",
    imagePath: "/images/projects/iot_air.png",
    githubUrl: "https://github.com/utkarshmishra72005/multi-device-aqi-iot",
    linkedinEmbedUrl: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7326825056624422912?compact=1",
    radarMetrics: [
      { subject: "IoT / Mesh Webs", value: 95 },
      { subject: "Frontend (Three.js)", value: 80 },
      { subject: "Sensor Calibration", value: 75 },
      { subject: "CAD Chassis Enclosure", value: 85 },
      { subject: "Firmware Dev", value: 85 }
    ],
    specifications: [
      { label: "Sensor Nodes", value: "Multi-Node ESP32 System Setup" },
      { label: "Data Rendering", value: "Three.js 3D Virtual Workspace" },
      { label: "Chassis Design", value: "Fusion 360 Custom Enclosures" },
      { label: "Acquisition Latency", value: "Real-Time Parallel Feeds" }
    ]
  },
  {
    id: "SYS_REF_05",
    title: "2.4GHz Microwave Patch Antenna",
    field: "Radio Frequency Engineering",
    timeline: "Mar 2026 - Apr 2026",
    summary: "Designed and evaluated a high-performance microstrip patch antenna optimized to resonate precisely at 2.4 GHz for standard wireless configurations. Validated frequency curves and impedance matches using advanced electromagnetic field solvers.",
    imagePath: "/images/projects/microwave_antenna.png",
    githubUrl: "https://github.com/utkarshmishra72005/microwave-patch-antenna",
    // No LinkedIn video for Antenna as requested
    radarMetrics: [
      { subject: "RF Simulation", value: 90 },
      { subject: "Impedance Matching", value: 85 },
      { subject: "Substrate Optimization", value: 80 },
      { subject: "EM Field Analysis", value: 85 },
      { subject: "Mathematical Sizing", value: 75 }
    ],
    specifications: [
      { label: "Simulation Engine", value: "Ansys HFSS Solver Core" },
      { label: "Substrate Build", value: "Rogers Substrate Material" },
      { label: "Target Band", value: "2.4 GHz Wireless Resonator" },
      { label: "Verification Profile", value: "Electromagnetic Impedance Wave" }
    ]
  }
];