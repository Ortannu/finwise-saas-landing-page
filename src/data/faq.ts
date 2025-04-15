import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const faqs: IFAQ[] = [
  {
    question: `Does ${siteDetails.siteName} support multiple languages?`,
    answer:
      'Yes, our AI chatbot supports 100+ languages using Google Translate API.',
  },
  {
    question: 'Can I integrate it in my Shopify store?',
    answer: 'Absolutely. You can paste one line of code into your Shopify theme.',
  },
  {
    question: 'Can I track my leads and messages?',
    answer: 'Yes, everything is tracked in your real-time dashboard.',
  },
  {
    question: 'Is setup difficult?',
    answer: 'No dev skills needed. You can launch in 3 minutes.',
  },
  {
    question: 'Do you offer a free trial?',
    answer: 'Yes. Every plan comes with a 3-day free trial and full access.',
  },
];
