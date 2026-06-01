export interface ContactMetadata {
  title: string;
  systemNode: string;
  description: string;
  formspreeEndpoint: string;
  socials: {
    label: string;
    code: string;
    url: string;
  }[];
}

export const contactData: ContactMetadata = {
  title: "Secure Terminal Link",
  systemNode: "COMMS // NODE_ROUTING",
  description: "Submit a transmission log. Inquiries route directly to a filtered mailbox channel.",
  formspreeEndpoint: process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "https://formspree.io/f/your_unique_id", // Loaded from .env.local
  socials: [
    {
      label: "LINKEDIN // PROFILE_VERIFICATION",
      code: "LN",
      url: "https://linkedin.com/in/your-profile-handle" // Replace with your link
    },
    {
      label: "INSTAGRAM // ART_STUDIO_FEED",
      code: "IG",
      url: "https://instagram.com/your-art-handle" // Replace with your link
    }
  ]
};