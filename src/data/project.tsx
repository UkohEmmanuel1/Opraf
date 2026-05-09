import { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: "the-meridian-residences",
    status: "Completed",
    category: "Construction",
    title: "The Meridian Residences",
    location: "Victoria Island, Lagos",
    summary: "A 42-unit luxury residential development setting new standards for urban living.",
    image: "@/assets/Ayilara_1.jpeg",
    content: `
      The Meridian Residences stands as a testament to architectural excellence in the heart of Victoria Island. 
      This 42-unit luxury development was designed with the modern professional in mind, blending 
      sleek minimalist aesthetics with high-end functional living.

      Each unit features floor-to-ceiling windows, smart-home automation, and premium marble finishes. 
      Residents enjoy exclusive access to an infinity pool overlooking the Lagos skyline, a private 
      fitness center, and 24-hour concierge services. Completed in 2023, it remains one of the 
      most sought-after addresses in the city.
    `
  },
  {
    id: "lekki-commercial-hub",
    status: "Available",
    category: "Property Listing",
    title: "Lekki Commercial Hub",
    location: "Lekki Phase 1, Lagos",
    summary: "Grade-A office spaces designed for innovation and corporate excellence.",
    image: "@/assets/lekki_hub.jpeg",
    content: `
      Strategic positioning is everything in business. The Lekki Commercial Hub offers 
      world-class Grade-A office spaces at the gateway of Lekki Phase 1. Designed to 
      foster productivity, the hub features flexible open-plan layouts that can be 
      customized to fit corporate needs.

      With high-speed fiber-optic connectivity, 100% power backup, and a LEED-certified 
      energy system, this hub is the ideal launchpad for tech giants and financial 
      institutions looking to establish a presence in Lagos' fastest-growing corridor.
    `
  },
  {
    id: "ikoyi-penthouse-collection",
    status: "Available",
    category: "Property Listing",
    title: "Ikoyi Penthouse Collection",
    location: "Ikoyi, Lagos",
    summary: "Exclusive waterfront penthouses offering unparalleled privacy and panoramic views.",
    image: "@/assets/ikoyi_penthouse.jpeg",
    content: `
      Experience the peak of luxury with the Ikoyi Penthouse Collection. These 
      limited-edition waterfront residences offer a lifestyle of quiet sophistication. 
      Each penthouse is accessed via a private elevator and opens into a massive 
      living area with 360-degree views of the Lagos Lagoon.

      Signature features include expansive wrap-around terraces, a temperature-controlled 
      wine cellar, and a master suite that rivals the world’s finest hotels. This is 
      where privacy meets panoramic beauty.
    `
  },
  {
    id: "abuja-central-mall",
    status: "In Progress",
    category: "Construction",
    title: "Abuja Central Mall",
    location: "Central Business District, Abuja",
    summary: "A 35,000 sqm mixed-use development destined to be the capital's premier destination.",
    image: "@/assets/abuja_mall.jpeg",
    content: `
      Currently under construction, the Abuja Central Mall is set to redefine the 
      retail landscape of the nation's capital. Spanning 35,000 sqm, this mixed-use 
      masterpiece will house international retail brands, a multi-screen cinema, 
      and premium office towers.

      The project incorporates sustainable building practices, including solar power 
      integration and advanced water recycling systems. Once completed, it will serve 
      as a central hub for commerce, leisure, and community interaction in the 
      Abuja CBD.
    `
  }
];