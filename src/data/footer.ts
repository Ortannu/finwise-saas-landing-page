import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
  subheading: string;
  quickLinks: IMenuItem[];
  email: string;
  telephone: string;
  socials: ISocials;
} = {
  subheading: "Automating customer service for ecommerce and beyond.",
  quickLinks: [
    { text: "Features", url: "#features" },
    { text: "Pricing", url: "#pricing" },
    { text: "FAQ", url: "#faq" },
    { text: "Demo", url: "#demo" },
  ],
  email: 'support@aiorchestrator.io',
  telephone: '+1 (800) 123-4567',
  socials: {
    twitter: 'https://twitter.com/aiorchestrator',
    facebook: 'https://facebook.com/aiorchestrator',
    linkedin: 'https://www.linkedin.com/company/aiorchestrator',
    instagram: 'https://instagram.com/aiorchestrator',
  },
};
