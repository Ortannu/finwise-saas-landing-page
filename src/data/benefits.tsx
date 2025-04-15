import { FiCpu, FiGlobe, FiZap, FiMessageCircle, FiMonitor, FiBarChart2, FiShield, FiUsers } from "react-icons/fi";
import { IBenefit } from "@/types";

export const benefits: IBenefit[] = [
  {
    title: "Multilingual AI Support",
    description:
      "Our chatbot understands and responds in 100+ languages, providing global customer support instantly.",
    bullets: [
      {
        title: "Google Translate API",
        description: "Automatic language detection and translation.",
        icon: <FiGlobe size={26} />,
      },
      {
        title: "GPT-powered Responses",
        description: "Smart replies powered by OpenAI to keep your support smooth.",
        icon: <FiCpu size={26} />,
      },
      {
        title: "Seamless Human Escalation",
        description: "Hand off to a real agent when needed.",
        icon: <FiUsers size={26} />,
      },
    ],
    imageSrc: "/images/chatbot-languages.webp",
  },
  {
    title: "Complete Dashboard",
    description:
      "Track leads, usage, referrals and more from a powerful admin dashboard.",
    bullets: [
      {
        title: "Lead Tracking",
        description: "Capture and follow every potential client.",
        icon: <FiBarChart2 size={26} />,
      },
      {
        title: "Referral Insights",
        description: "Monitor affiliate performance in real time.",
        icon: <FiMonitor size={26} />,
      },
      {
        title: "Invoice Exports",
        description: "Generate and export invoices with one click.",
        icon: <FiMessageCircle size={26} />,
      },
    ],
    imageSrc: "/images/dashboard-mockup.webp",
  },
  {
    title: "Easy & Secure Integration",
    description:
      "Paste one line of code into Shopify or your website and launch your chatbot in minutes.",
    bullets: [
      {
        title: "1-Line Setup",
        description: "No dev required. Just paste and go.",
        icon: <FiZap size={26} />,
      },
      {
        title: "Secure by Design",
        description: "Built with security best practices in mind.",
        icon: <FiShield size={26} />,
      },
      {
        title: "Multitenant Ready",
        description: "Each customer gets their own isolated chatbot instance.",
        icon: <FiUsers size={26} />,
      },
    ],
    imageSrc: "/images/integration-mockup.webp",
  },
];
