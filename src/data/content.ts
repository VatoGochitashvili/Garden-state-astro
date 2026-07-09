import type { Service } from "./services";
import type { Location } from "./locations";

export function generateServiceLocationContent(service: Service, location: Location): {
  h1: string;
  metaTitle: string;
  metaDescription: string;
  paragraphs: string[];
  faqs: Array<{question: string; answer: string}>;
} {
  const h1 = `${service.name} in ${location.name}, NJ | Garden State Locksmith`;
  const metaTitle = `${service.name} in ${location.name}, NJ | Garden State Locksmith`;
  const metaDescription = `Need ${service.name.toLowerCase()} in ${location.name}, NJ? Garden State Locksmith provides fast, reliable, and professional locksmith services in ${location.county}. Call (856) 588-0580 for immediate assistance.`;

  const paragraphs = [
    `When you need professional ${service.name.toLowerCase()} in ${location.name}, NJ, Garden State Locksmith is your trusted local expert. We proudly serve the residents and businesses of ${location.name} and the greater ${location.county} area, offering fast response times and dependable service. Whether it's an emergency or a scheduled appointment, our technicians are equipped to handle all your locksmith needs.`,
    `${service.longDesc} We understand the unique security needs of properties in ${location.name} (ZIP code: ${location.zipCodes[0]}), which is why we offer tailored solutions to ensure your safety and peace of mind. Our team is fully licensed, insured, and committed to delivering the highest quality workmanship.`,
    `Don't settle for less when it comes to your security. Our ${service.name.toLowerCase()} service is delivered by NJ-licensed, background-checked technicians with a typical response time of ${service.responseTime} in the ${location.name} area. You won't be left waiting when you need us most. Contact Garden State Locksmith today to schedule service or request emergency assistance.`
  ];

  const faqs = [
    {
      question: `Do you provide ${service.name.toLowerCase()} in ${location.name}, NJ?`,
      answer: `Yes, we provide professional ${service.name.toLowerCase()} throughout ${location.name} and all surrounding areas in ${location.county}.`
    },
    {
      question: `How fast can you respond to a call in ${location.name}?`,
      answer: `For emergencies, we typically arrive in ${location.name} withpromptly. Our average response time for ${service.name.toLowerCase()} is ${service.responseTime}.`
    },
    {
      question: `Is Garden State Locksmith licensed to serve ${location.name}?`,
      answer: `Yes. All of our technicians are fully NJ state licensed, bonded, and insured. We serve ${location.name} and all surrounding areas in ${location.county} with certified professionals on every call.`
    }
  ];

  return { h1, metaTitle, metaDescription, paragraphs, faqs };
}
