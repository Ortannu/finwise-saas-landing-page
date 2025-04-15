import { IPricing } from "@/types";

export const tiers: IPricing[] = [
  {
    name: 'Starter',
    price: 49,
    features: [
      '10k messages per month',
      'Single chatbot with full AI features',
      'Basic dashboard',
      'Email support',
    ],
  },
  {
    name: 'Pro',
    price: 119,
    features: [
      '50k messages',
      'Multichannel (Shopify + HTML)',
      'Advanced dashboard + analytics',
      'Priority support',
      'Referral system included',
    ],
  },
  {
    name: 'Business',
    price: 249,
    features: [
      'Unlimited usage',
      'API export + full customization',
      'Team & client management',
      'Dedicated support manager',
      'White-label option',
    ],
  },
];
