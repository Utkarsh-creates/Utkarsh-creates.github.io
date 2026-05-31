export interface SkillCategory {
  categoryName: string;
  systemCode: string; // Adds to the industrial utility aesthetic
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    categoryName: "Robotics & Simulation",
    systemCode: "ROB_SIM_0x",
    skills: ["ROS2", "Gazebo", "NVIDIA Isaac Sim", "NAV2", "Google Cartographer", "Kinematic Analysis"]
  },
  {
    categoryName: "Computer Vision & Deep Learning",
    systemCode: "CV_DL_0x",
    skills: ["YOLO Model Training", "Edge AI", "Roboflow Integration", "Multi-Device Systems", "Object Tracking"]
  },
  {
    categoryName: "Programming Languages",
    systemCode: "PROG_LANG_0x",
    skills: ["Python", "C++", "TypeScript", "MATLAB", "Scilab"]
  },
  {
    categoryName: "Embedded & Hardware Infrastructure",
    systemCode: "EMB_HW_0x",
    skills: ["ESP32 (FreeRTOS)", "STM32", "NVIDIA Jetson Orin AGX / Nano", "Raspberry Pi 5", "LTspice"]
  },
  {
    categoryName: "CAD, Design & Simulation",
    systemCode: "CAD_RF_0x",
    skills: ["Fusion 360", "KiCAD", "Ansys HFSS (RF/Microwave)", "3D Printing & Fabrication"]
  },
  {
    categoryName: "Creative Production & 3D Art",
    systemCode: "CRT_VFX_0x",
    skills: ["Blender (CGI/VFX)", "Adobe Premiere Pro", "3D Rendering & Environment Compositing", "FL Studio (Music Production)"]
  }
];