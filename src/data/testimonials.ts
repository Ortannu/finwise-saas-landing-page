import { ITestimonial } from "@/types";
import { siteDetails } from "./siteDetails";

export const testimonials: ITestimonial[] = [
  {
    name: 'Luca Rossi',
    role: 'Shopify Store Owner',
    message: `In 48 hours we had a fully automated chatbot in 3 languages. ${siteDetails.siteName} saved us hours of manual support.`,
    avatar: '/images/testimonial-1.webp',
  },
  {
    name: 'Elena Bianchi',
    role: 'Founder, Digital Agency',
    message: `I use ${siteDetails.siteName} for all my eCommerce clients. It's the fastest AI solution to set up and delivers real results.`,
    avatar: '/images/testimonial-2.webp',
  },
  {
    name: 'David Smith',
    role: 'Product Manager',
    message: `${siteDetails.siteName} helped us reduce support tickets by 60% in the first week. And the analytics are 🔥.`,
    avatar: '/images/testimonial-3.webp',
  },
];
