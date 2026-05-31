export interface ArtPiece {
  id: string;
  title: string;
  medium: string;
  imagePath: string; // Pointing to public/art/ folder
  description: string;
}

export const artData: ArtPiece[] = [
  {
    id: "ART_001",
    title: "Cinematic Automotive Realism",
    medium: "3D Lighting & Scene Compositing",
    imagePath: "/art/automotive_shadows.png",
    description: "An exploration of dramatic high-contrast lighting arrays on curved industrial geometries. Camera paths, environmental structures, and multi-angle keys executed entirely in Blender."
  },
  {
    id: "ART_002",
    title: "The Isolated Cabin Enclosure",
    medium: "Procedural Landscape Ecosystems",
    imagePath: "/art/cabin_nature.png",
    description: "A deep dive into complex organic asset scattering, using G-Scatter node properties to render dense, photorealistic vegetative foliage and adaptive environmental atmospheric haze."
  },
  {
    id: "ART_003",
    title: "Bellavita Luxury Product Profiles",
    medium: "Non-Destructive Product Design",
    imagePath: "/art/perfume_bottles.png",
    description: "Sleek presentation models built using advanced glass shader refractive physics, non-destructive geometry workflows, and precise commercial studio lighting configurations."
  },
  {
    id: "ART_004",
    title: "Polygonic Livery Configuration",
    medium: "Boeing 777 Aerospace Render",
    imagePath: "/art/boeing_777.png",
    description: "Custom geometric layout and surface texture mapping for an airline livery concept, optimized across expansive structural mechanics inside Blender."
  },
  {
    id: "ART_005",
    title: "Corona Luminescence Profile",
    medium: "High-Speed Atmospheric Volumetrics",
    imagePath: "/art/solar_eclipse.png", // Your solar eclipse .png file
    description: "A high-fidelity solar eclipse simulation crafted entirely inside Blender. Optimized utilizing the Eevee rendering engine pipeline to calculate lightning fast, highly precise light flare vectors and cosmic atmospheric diffusion effects."
  }
];