import luxuryEstateImg from "@assets/httluxuryestate.com_1763176699507.png";
import havilahImg from "@assets/httpshavilahrealestateng.com_1763176733677.png";
import homesGoFastImg from "@assets/httpshomesgofast.com_1763176752904.png";
import immobilienScoutImg from "@assets/httpsimmobilienscout24.de_1763176821027.png";
import jamesEditionImg from "@assets/httpsjamesedition.com_1763176859065.png";
import luxuryRealEstateImg from "@assets/httpsluxuryrealestate.com_1763176879158.png";
import primeLocationImg from "@assets/primelocation.com_1763176906369.png";
import allsoppImg from "@assets/screencapture-allsoppandallsopp-2025-11-13-17_43_24_1763176933075.png";
import anywhereImg from "@assets/screencapture-anywhere-re-2025-11-13-19_54_36_1763177118545.png";
import bhhsImg from "@assets/screencapture-bhhs-2025-11-13-19_36_03_1763177140709.png";
import coldwellImg from "@assets/screencapture-coldwellbanker-2025-11-13-18_35_02 (1)_1763177148547.png";
import compassImg from "@assets/screencapture-compass-2025-11-13-19_16_16_1763177178535.png";
import dubaiPropertiesImg from "@assets/screencapture-dp-ae-2025-11-13-18_14_20_1763177203103.png";
import drivenPropertiesImg from "@assets/screencapture-drivenproperties-dubai-real-estate-developers-nakheel-properties-2025-11-13-18_06_00_1763177273490.png";
import emaarImg from "@assets/screencapture-emaar-2025-11-13-17_52_00_1763177310081.png";
import ellimanImg from "@assets/screencapture-elliman-2025-11-13-20_03_15_1763177310084.png";
import expRealtyImg from "@assets/screencapture-exprealty-2025-11-13-18_49_45_1763177338497.png";
import idealistaImg from "@assets/screencapture-idealista-2025-11-14-18_25_48_1763177470352.png";
import kellerWilliamsImg from "@assets/screencapture-kw-2025-11-13-18_57_27_1763177495507.png";
import puritanImg from "@assets/screencapture-puritan-2025-11-13-09_12_09_1763181076699.png";
import redfinImg from "@assets/screencapture-redfin-2025-11-13-19_22_40_1763181105183.png";
import wildNutritionImg from "@assets/screencapture-wildnutrition-2025-11-13-09_05_03_1763181149249.png";
import remaxImg from "@assets/screencapture-remax-2025-11-13-19_10_55_1763181149250.png";
import solgarImg from "@assets/screencapture-solgar-2025-11-13-09_22_45_1763181149251.png";
import weichertImg from "@assets/screencapture-weichert-2025-11-13-19_48_04_1763181149252.png";
import sothebysImg from "@assets/screencapture-sothebysrealty-eng-2025-11-13-19_30_33_1763181190892.png";

export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  url: string;
  longDescription: string;
  features: string[];
  technologies: string[];
  liveDemo: string;
  sourceCode: string;
}

export const projects: Project[] = [
  {
    title: "LuxuryEstate.com",
    description: "Premium international luxury property marketplace connecting high-net-worth individuals with exclusive estates worldwide.",
    tags: ["Luxury", "International", "Real Estate", "Marketplace"],
    image: luxuryEstateImg,
    url: "/work/0",
    longDescription: "LuxuryEstate.com is a leading international platform specializing in luxury real estate, offering an extensive portfolio of high-end properties across the globe. The platform features advanced search capabilities, detailed property listings with professional photography, and seamless connections between buyers and premium real estate agents.",
    features: ["Luxury property listings", "International coverage", "Advanced search filters", "Professional photography", "Agent connections", "Market insights"],
    technologies: ["React", "Next.js", "Map Integration", "Property APIs", "CRM Systems", "Advanced Search"],
    liveDemo: "https://luxuryestate.com",
    sourceCode: ""
  },
  {
    title: "Hav'i'lah Real Estate",
    description: "Leading Nigerian real estate development company specializing in luxury residential and commercial properties across West Africa.",
    tags: ["Nigeria", "Development", "Luxury", "West Africa"],
    image: havilahImg,
    url: "/work/1",
    longDescription: "Hav'i'lah Real Estate is a premier Nigerian property development company focused on creating modern, sustainable communities. Known for flagship projects like The Isabella, they combine contemporary architecture with green building practices to deliver exceptional living spaces across Nigeria and West Africa.",
    features: ["Luxury developments", "Sustainable design", "Modern architecture", "Investment opportunities", "Project showcases", "Virtual tours"],
    technologies: ["React", "Next.js", "3D Visualization", "CMS Integration", "Property Management", "SEO"],
    liveDemo: "https://havilahrealestateng.com",
    sourceCode: ""
  },
  {
    title: "HomesGoFast",
    description: "International property sales platform connecting agents and owners with buyers worldwide since 2002.",
    tags: ["International", "Property Sales", "Global", "Agents"],
    image: homesGoFastImg,
    url: "/work/2",
    longDescription: "HomesGoFast has been facilitating international property transactions for over two decades, providing a trusted marketplace for buyers seeking properties abroad. The platform specializes in connecting property agents and owners with international buyers, offering comprehensive search tools and multilingual support.",
    features: ["International listings", "Agent network", "Multi-language support", "Property search", "Market analytics", "Buyer resources"],
    technologies: ["React", "Property APIs", "Translation APIs", "Search Engine", "CRM", "Payment Integration"],
    liveDemo: "https://homesgofast.com",
    sourceCode: ""
  },
  {
    title: "ImmobilienScout24",
    description: "Germany's number one real estate portal offering comprehensive property search, valuations, and market insights.",
    tags: ["Germany", "Property Portal", "Valuation", "Market Leader"],
    image: immobilienScoutImg,
    url: "/work/3",
    longDescription: "ImmobilienScout24 is the leading real estate platform in Germany, providing comprehensive services from property search to financing and moving assistance. With advanced filtering, SCHUFA credit checks, and professional valuations, the platform serves millions of users seeking homes, apartments, and commercial properties.",
    features: ["Property search", "SCHUFA credit check", "Property valuation", "Financing options", "Moving services", "Market data"],
    technologies: ["React", "Advanced Search", "Credit API", "Map Integration", "Analytics", "Mobile Apps"],
    liveDemo: "https://immobilienscout24.de",
    sourceCode: ""
  },
  {
    title: "JamesEdition",
    description: "The world's luxury marketplace featuring exceptional real estate, cars, yachts, and collectibles across 120 countries.",
    tags: ["Luxury", "Global Marketplace", "High-End", "Multi-Category"],
    image: jamesEditionImg,
    url: "/work/4",
    longDescription: "JamesEdition is the premier global marketplace for luxury goods, connecting discerning buyers with extraordinary properties and assets. With over 580,000 luxury listings from 21,000+ trusted sellers across 120 countries, the platform offers an unparalleled selection of high-end real estate alongside exclusive automobiles, yachts, and rare collectibles.",
    features: ["Luxury listings", "Global coverage", "Multi-category marketplace", "Verified sellers", "High-quality imagery", "Premium service"],
    technologies: ["React", "Luxury APIs", "Advanced Filtering", "Multi-currency", "High-res Media", "Secure Transactions"],
    liveDemo: "https://jamesedition.com",
    sourceCode: ""
  },
  {
    title: "LuxuryRealEstate.com",
    description: "Exclusive network of luxury real estate professionals showcasing the world's finest properties and estates.",
    tags: ["Luxury", "Network", "Professionals", "Exclusive"],
    image: luxuryRealEstateImg,
    url: "/work/5",
    longDescription: "LuxuryRealEstate.com represents an elite network of luxury real estate professionals worldwide. The platform showcases exceptional properties from the most prestigious locations, offering buyers access to exclusive listings, market intelligence, and connections with top-tier real estate experts.",
    features: ["Exclusive listings", "Professional network", "Market reports", "Property showcases", "Agent connections", "Investment insights"],
    technologies: ["React", "CRM Integration", "Property Management", "Analytics", "Media Management", "SEO"],
    liveDemo: "https://luxuryrealestate.com",
    sourceCode: ""
  },
  {
    title: "PrimeLocation",
    description: "Leading UK property portal helping buyers find and purchase homes with expert guides and market insights.",
    tags: ["UK", "Property Search", "House Prices", "Market Data"],
    image: primeLocationImg,
    url: "/work/6",
    longDescription: "PrimeLocation is a trusted UK property portal offering comprehensive search tools for homes to buy and rent. The platform provides valuable resources including house price data, area guides, property inspiration content, and connections to estate agents across the United Kingdom.",
    features: ["Property search", "House price data", "Area guides", "Agent finder", "Property inspiration", "Commercial properties"],
    technologies: ["React", "UK Property APIs", "Map Integration", "Price Analytics", "CMS", "Search Engine"],
    liveDemo: "https://primelocation.com",
    sourceCode: ""
  },
  {
    title: "Allsopp & Allsopp",
    description: "Dubai's premier real estate agency offering expert property services, market insights, and investment guidance.",
    tags: ["Dubai", "Real Estate Agency", "Investment", "Premium Service"],
    image: allsoppImg,
    url: "/work/7",
    longDescription: "Allsopp & Allsopp is one of Dubai's most established and trusted real estate agencies, providing comprehensive property services including sales, leasing, and property management. With deep market knowledge and a client-focused approach, they guide both local and international investors through Dubai's dynamic property market.",
    features: ["Property listings", "Expert consultation", "Market insights", "Investment advisory", "Property management", "Dubai expertise"],
    technologies: ["React", "Property Management", "CRM", "Virtual Tours", "Analytics", "Client Portal"],
    liveDemo: "https://allsoppandallsopp.com",
    sourceCode: ""
  },
  {
    title: "Anywhere Real Estate",
    description: "Integrated real estate services platform serving the industry with technology, data, and marketing solutions.",
    tags: ["Real Estate Services", "Technology", "Industry Solutions", "Network"],
    image: anywhereImg,
    url: "/work/8",
    longDescription: "Anywhere Real Estate is a comprehensive real estate services company providing technology, marketing, and operational support to some of the industry's most recognized names. The platform offers integrated solutions that empower agents and brokerages to deliver exceptional service throughout the real estate journey.",
    features: ["Industry solutions", "Technology platform", "Marketing services", "Agent support", "Brand integration", "Data analytics"],
    technologies: ["React", "Enterprise Platform", "CRM", "Marketing Automation", "Analytics", "Integration APIs"],
    liveDemo: "https://anywhere.re",
    sourceCode: ""
  },
  {
    title: "BHHS Florida Realty",
    description: "Berkshire Hathaway HomeServices Florida network offering trusted real estate expertise and comprehensive market intelligence.",
    tags: ["Florida", "Berkshire Hathaway", "Trusted Network", "Market Reports"],
    image: bhhsImg,
    url: "/work/9",
    longDescription: "Berkshire Hathaway HomeServices Florida Realty combines the power of a globally recognized brand with local market expertise. The network provides buyers and sellers access to comprehensive property services, market reports, and the trusted reputation of the Berkshire Hathaway name throughout Florida.",
    features: ["Florida properties", "Market reports", "Global network", "Home value estimates", "Agent expertise", "Luxury properties"],
    technologies: ["React", "MLS Integration", "Valuation Tools", "CRM", "Market Analytics", "Mobile Responsive"],
    liveDemo: "https://bhhsfloridarealty.com",
    sourceCode: ""
  },
  {
    title: "Coldwell Banker",
    description: "Global real estate leader with innovative tools like the Move Meter and comprehensive property search capabilities.",
    tags: ["Global", "Innovation", "Technology", "Trusted Brand"],
    image: coldwellImg,
    url: "/work/10",
    longDescription: "Coldwell Banker is a globally recognized real estate brand known for innovation and excellence. Their platform features advanced tools like the Move Meter for personalized home estimates, comprehensive property search, and the Seller's Assurance Program, backed by a network of experienced agents worldwide.",
    features: ["Property search", "Move Meter tool", "Home estimates", "Seller programs", "Global network", "Market insights"],
    technologies: ["React", "AI Valuation", "MLS Integration", "Predictive Analytics", "CRM", "Mobile Apps"],
    liveDemo: "https://coldwellbanker.com",
    sourceCode: ""
  },
  {
    title: "Compass",
    description: "Technology-driven real estate platform offering exclusive listings and innovative tools for modern home buying and selling.",
    tags: ["Technology", "Innovation", "Exclusive Listings", "Modern Platform"],
    image: compassImg,
    url: "/work/11",
    longDescription: "Compass is revolutionizing real estate with cutting-edge technology and exclusive listings. The platform combines sophisticated search tools, neighborhood insights, and Compass Concierge services to streamline the home buying and selling experience with data-driven insights and modern design.",
    features: ["Exclusive listings", "Advanced search", "Neighborhood data", "Concierge service", "Market analytics", "Agent platform"],
    technologies: ["React", "AI Search", "Big Data Analytics", "Map Integration", "CRM", "Mobile First"],
    liveDemo: "https://compass.com",
    sourceCode: ""
  },
  {
    title: "Dubai Properties",
    description: "Leading Dubai real estate developer creating innovative communities and luxury properties across the emirate.",
    tags: ["Dubai", "Developer", "Luxury", "Communities"],
    image: dubaiPropertiesImg,
    url: "/work/12",
    longDescription: "Dubai Properties is a premier real estate development company in Dubai, known for creating iconic residential and commercial communities. Their portfolio includes landmark projects like La Tilia, featuring cutting-edge design, premium amenities, and strategic locations across Dubai's most sought-after areas.",
    features: ["New launches", "Virtual tours", "Project information", "Community features", "Investment opportunities", "Registration portal"],
    technologies: ["React", "360° Tours", "Property Management", "CRM", "3D Visualization", "Booking Systems"],
    liveDemo: "https://dp.ae",
    sourceCode: ""
  },
  {
    title: "Driven Properties - Nakheel",
    description: "Comprehensive resource for Nakheel Properties developments, offering insights into Dubai's iconic master-planned communities.",
    tags: ["Dubai", "Nakheel", "Master-planned", "Developments"],
    image: drivenPropertiesImg,
    url: "/work/13",
    longDescription: "Driven Properties provides detailed information about Nakheel Properties, one of Dubai's most prominent developers known for iconic projects like Palm Jumeirah. The platform offers insights into available properties, community features, investment opportunities, and development updates across Nakheel's master-planned communities.",
    features: ["Developer insights", "Project listings", "Community guides", "Investment analysis", "Market updates", "Property search"],
    technologies: ["React", "Property Database", "CMS", "Analytics", "Map Integration", "Search Tools"],
    liveDemo: "https://drivenproperties.com/dubai/real-estate-developers/nakheel-properties",
    sourceCode: ""
  },
  {
    title: "Emaar Properties",
    description: "Dubai's leading developer of world-class properties, including Burj Khalifa and Dubai Hills Estate developments.",
    tags: ["Dubai", "Developer", "Iconic Projects", "Global Leader"],
    image: emaarImg,
    url: "/work/14",
    longDescription: "Emaar Properties is Dubai's most renowned real estate developer, responsible for iconic landmarks including Burj Khalifa and Dubai Mall. The platform showcases premium residential and commercial properties across Dubai and internationally, featuring cutting-edge developments in prime locations with world-class amenities.",
    features: ["Premium properties", "Iconic developments", "International projects", "Property finder", "Investment options", "Community features"],
    technologies: ["React", "Next.js", "Property Portal", "CRM", "Mobile App", "Virtual Tours"],
    liveDemo: "https://emaar.com",
    sourceCode: ""
  },
  {
    title: "Douglas Elliman",
    description: "Leading luxury real estate brokerage offering exceptional properties and personalized service across premier markets.",
    tags: ["Luxury", "Brokerage", "Premium Markets", "Expertise"],
    image: ellimanImg,
    url: "/work/15",
    longDescription: "Douglas Elliman is one of the largest independent residential real estate brokerages in the United States, specializing in luxury properties. With a presence in premier markets and a team of experienced agents, they offer exclusive listings, market insights, and white-glove service for discerning buyers and sellers.",
    features: ["Luxury listings", "Market expertise", "Agent network", "Property discovery", "Investment guidance", "Concierge service"],
    technologies: ["React", "Luxury Portal", "CRM", "High-res Media", "Analytics", "Agent Tools"],
    liveDemo: "https://elliman.com",
    sourceCode: ""
  },
  {
    title: "eXp Realty",
    description: "Cloud-based real estate brokerage empowering agents with innovative technology and collaborative growth opportunities.",
    tags: ["Cloud-based", "Innovation", "Agent-focused", "Technology"],
    image: expRealtyImg,
    url: "/work/16",
    longDescription: "eXp Realty is a revolutionary cloud-based real estate brokerage that operates virtually, providing agents with cutting-edge technology, training, and collaboration tools. The platform enables agents to grow their business while offering clients access to a vast network of professionals and properties worldwide.",
    features: ["Cloud platform", "Agent collaboration", "Virtual offices", "Training resources", "Revenue sharing", "Global network"],
    technologies: ["React", "Cloud Platform", "Virtual Reality", "CRM", "Collaboration Tools", "Agent Portal"],
    liveDemo: "https://exprealty.com",
    sourceCode: ""
  },
  {
    title: "Idealista",
    description: "Leading property portal in Spain, Portugal, and Italy offering comprehensive real estate search and services.",
    tags: ["Spain", "Portugal", "Italy", "Property Portal"],
    image: idealistaImg,
    url: "/work/17",
    longDescription: "Idealista is the number one real estate portal in Spain, Portugal, and Italy, helping millions of users find their ideal property. The platform offers extensive search capabilities, property valuations, mortgage assistance, and a mobile app for convenient property hunting across Southern Europe.",
    features: ["Property search", "Mortgage assistance", "Property valuation", "Area insights", "Mobile app", "Professional tools"],
    technologies: ["React", "Advanced Search", "Mobile Apps", "Map Integration", "Analytics", "API Platform"],
    liveDemo: "https://idealista.com",
    sourceCode: ""
  },
  {
    title: "Keller Williams",
    description: "World's largest real estate franchise empowering agents to build careers with innovative training and technology.",
    tags: ["Franchise", "Global Network", "Agent Training", "Technology"],
    image: kellerWilliamsImg,
    url: "/work/18",
    longDescription: "Keller Williams is the world's largest real estate technology franchise by agent count, built on a foundation of culture, training, and entrepreneurship. The platform provides comprehensive resources for home buyers and sellers while empowering agents with education, technology, and a collaborative community to grow their business.",
    features: ["Property search", "Agent network", "Training programs", "Technology platform", "Career growth", "Market insights"],
    technologies: ["React", "Agent Platform", "CRM", "Training Systems", "Analytics", "Mobile Solutions"],
    liveDemo: "https://kw.com",
    sourceCode: ""
  },
  {
    title: "Puritan's Pride",
    description: "Trusted American vitamin and supplement brand offering quality products at affordable prices since 1973.",
    tags: ["Health", "Vitamins", "Supplements", "Wellness"],
    image: puritanImg,
    url: "/work/19",
    longDescription: "Puritan's Pride is an American legacy brand that has been providing quality vitamins, supplements, and nutritional products since 1973. Known for their commitment to quality, value, and customer satisfaction, they offer a comprehensive range of health and wellness products backed by rigorous testing and manufacturing standards.",
    features: ["Quality supplements", "Affordable pricing", "Wide product range", "Rewards program", "Health resources", "Third-party testing"],
    technologies: ["React", "E-commerce Platform", "Product Catalog", "Customer Portal", "Subscription System", "Analytics"],
    liveDemo: "https://puritan.com",
    sourceCode: ""
  },
  {
    title: "Redfin",
    description: "Technology-powered real estate brokerage offering full-service agents, lower fees, and data-driven home search tools.",
    tags: ["Real Estate", "Technology", "Brokerage", "Data-driven"],
    image: redfinImg,
    url: "/work/20",
    longDescription: "Redfin is revolutionizing real estate with technology-driven solutions that put customers first. Combining full-service local agents with modern technology, Redfin offers comprehensive home buying and selling services with lower commission fees, instant home valuations, and powerful search tools backed by real-time market data.",
    features: ["Home search", "Redfin agents", "Lower fees", "Instant estimates", "Market insights", "Mobile app"],
    technologies: ["React", "Real-time Data", "Map Integration", "MLS APIs", "Mobile Apps", "AI Valuation"],
    liveDemo: "https://redfin.com",
    sourceCode: ""
  },
  {
    title: "Wild Nutrition",
    description: "Pioneering food-grown supplement brand creating premium, bespoke nutrition solutions rooted in science and nature.",
    tags: ["Health", "Nutrition", "Supplements", "Bespoke"],
    image: wildNutritionImg,
    url: "/work/21",
    longDescription: "Wild Nutrition is a pioneering British brand specializing in food-grown supplements that work in harmony with the body. Founded by nutritional therapist Henrietta Norton, the brand combines cutting-edge nutritional science with natural ingredients to create bespoke supplement formulas tailored to individual health needs and life stages.",
    features: ["Food-grown supplements", "Bespoke formulas", "Expert consultation", "Pregnancy support", "Sustainability focus", "Science-backed"],
    technologies: ["React", "E-commerce", "Consultation Platform", "Product Customization", "Content Management", "Customer Portal"],
    liveDemo: "https://wildnutrition.com",
    sourceCode: ""
  },
  {
    title: "RE/MAX",
    description: "Global real estate franchise network connecting buyers and sellers with experienced agents in local markets worldwide.",
    tags: ["Real Estate", "Global Network", "Franchise", "Local Expertise"],
    image: remaxImg,
    url: "/work/22",
    longDescription: "RE/MAX is one of the world's most recognized real estate brands, with a global network of experienced agents serving local communities. Known for their iconic hot air balloon brand and commitment to professionalism, RE/MAX provides comprehensive real estate services including residential sales, luxury properties, and commercial real estate.",
    features: ["Property search", "Global network", "Local agents", "Luxury properties", "Commercial real estate", "Market expertise"],
    technologies: ["React", "MLS Integration", "Agent Portal", "CRM", "Mobile Solutions", "Map Integration"],
    liveDemo: "https://remax.com",
    sourceCode: ""
  },
  {
    title: "Solgar",
    description: "Gold standard in vitamins and supplements, crafting premium nutritional products since 1947 with uncompromising quality.",
    tags: ["Vitamins", "Supplements", "Quality", "Premium"],
    image: solgarImg,
    url: "/work/23",
    longDescription: "Solgar has set the gold standard in nutritional supplements for over 75 years, maintaining an unwavering commitment to quality, innovation, and scientific research. Every Solgar product is crafted with premium ingredients, rigorous testing protocols, and sustainable practices to deliver optimal nutrition and wellness support.",
    features: ["Premium ingredients", "Quality testing", "Wide product range", "Scientific research", "Sustainable practices", "Expert guidance"],
    technologies: ["React", "E-commerce Platform", "Product Database", "Content Management", "Educational Resources", "Customer Support"],
    liveDemo: "https://solgar.com",
    sourceCode: ""
  },
  {
    title: "Weichert Realtors",
    description: "Established real estate company providing comprehensive property services with local expertise and national reach.",
    tags: ["Real Estate", "Brokerage", "Local Expertise", "National Network"],
    image: weichertImg,
    url: "/work/24",
    longDescription: "Weichert Realtors is a trusted name in real estate with decades of experience serving homebuyers and sellers across America. Combining local market knowledge with national resources, Weichert offers full-service real estate solutions including property search, home selling assistance, mortgage services, and relocation support.",
    features: ["Property listings", "Local agents", "Home valuation", "Mortgage services", "Relocation assistance", "Market insights"],
    technologies: ["React", "MLS Integration", "Valuation Tools", "CRM", "Agent Portal", "Mobile Responsive"],
    liveDemo: "https://weichert.com",
    sourceCode: ""
  },
  {
    title: "Sotheby's International Realty",
    description: "Premier luxury real estate brand offering extraordinary properties and unparalleled service in the world's most desirable locations.",
    tags: ["Luxury", "International", "Prestige", "Exceptional Properties"],
    image: sothebysImg,
    url: "/work/25",
    longDescription: "Sotheby's International Realty represents the pinnacle of luxury real estate, connecting discerning clients with the world's most exceptional properties. Backed by the prestigious Sotheby's auction house heritage, the brand delivers white-glove service, global marketing reach, and access to an exclusive network of high-net-worth individuals.",
    features: ["Luxury estates", "Global network", "Expert agents", "Auction house heritage", "Exclusive marketing", "Concierge service"],
    technologies: ["React", "Luxury Portal", "High-res Media", "Global Network", "CRM", "Virtual Tours"],
    liveDemo: "https://sothebysrealty.com",
    sourceCode: ""
  }
];
