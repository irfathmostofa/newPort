import worklopedia from "../assets/proeject-image/worklopedia.png";
import amanah from "../assets/proeject-image/amanah.jpg";
import itphone from "../assets/proeject-image/itphone.jpg";
import safa from "../assets/proeject-image/safa.jpg";
import voltech from "../assets/proeject-image/voltech.jpg";
import sensor from "../assets/proeject-image/sensor.jpg";
import school from "../assets/proeject-image/school.jpeg";
import flydocx from "../assets/proeject-image/flydocx.jpeg";
import doc from "../assets/proeject-image/doc.jpg";
import somekoron from "../assets/proeject-image/somekoron.png";
import ecomerce from "../assets/proeject-image/ecomerce.png";

export const projectsArray = [
  {
    id: 1,
    name: "Worklopedia",
    featured: true,
    image: worklopedia,
    description:
      "A comprehensive professional networking platform that revolutionizes how professionals share and validate workplace experiences. The platform combines anonymous peer reviews, real-time communication, and blog publishing with robust verification systems for compensation data and job experience.",
    tags: ["Social Network", "Professional Platform", "Real-time Chat"],
    features: [
      "Anonymous user rating and review system",
      "Real-time chat and messaging capabilities",
      "Professional blog publishing platform",
      "Verified compensation and experience data",
      "Credibility scoring algorithm",
      "Advanced user authentication and privacy controls",
    ],
    technologies: ["React", "Node.js", "MongoDB", "Socket.io", "JWT"],
  },
  {
    id: 2,
    name: "School ERP Solution",
    featured: true,
    image: school,
    description:
      "A comprehensive school management platform that digitizes and streamlines all aspects of educational administration. Successfully deployed in two schools, the system manages academics, HR, transport, library, and fee collection with integrated payment gateways and real-time notifications.",
    tags: ["ERP System", "Education", "Full Stack"],
    features: [
      "Complete academic management with attendance and grading",
      "HR module for staff management and payroll",
      "Transport tracking with route optimization",
      "Library management with digital cataloging",
      "Integrated payment gateways (SSLCommerz, amayPay, Islami Bank)",
      "Real-time alerts and notifications system",
      "Automated workflow for administrative tasks",
    ],
    technologies: [
      "React.js",
      "Node.js",
      "Nest.js",
      "GraphQL",
      "PostgreSQL",
      "Firebase",
      "Multer",
    ],
  },
  {
    id: 3,
    name: "FlyDocx - Travel Agency Management",

    image: flydocx,
    description:
      "A complete travel agency management solution that centralizes all operational activities including customer management, agent coordination, vendor relationships, accounts, and staff management. The platform ensures data integrity and provides comprehensive tools for agency growth and efficiency.",
    tags: ["Travel Management", "ERP System", "Full Stack"],
    features: [
      "Complete customer and agent management system",
      "Vendor management with payment tracking",
      "Flexible payment history and service billing",
      "Vendor payable with transparency features",
      "Daily expense recording and management",
      "Business performance reports and analytics",
      "Staff management and coordination tools",
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MySQL", "JWT"],
  },
  {
    id: 4,
    name: "Someekoron - Project Management Platform",
    image: somekoron,
    description:
      "An all-in-one project management software designed for agencies to streamline operations from quotation to completion. The platform features comprehensive project tracking, accounts management, resource allocation, and supplier coordination to ensure timely project delivery and financial transparency.",
    tags: ["Project Management", "ERP", "Business Software"],
    features: [
      "End-to-end project planning from quotation to completion",
      "Purchase Order and Invoice generation",
      "Income and expense tracking system",
      "Bank transaction management",
      "In-house and project resource allocation",
      "Project task management and deadline tracking",
      "Supplier management and coordination",
      "Real-time project progress monitoring",
    ],
    technologies: ["Vue.js", "Node.js", "Express.js", "MySQL"],
  },
  {
    id: 5,
    name: "Family Planning System",
    description:
      "A government-commissioned platform designed to manage and track family planning initiatives across multiple administrative levels. The system features secure role-based access control and enables real-time data tracking for regional health programs with comprehensive performance reporting.",
    tags: ["Government Project", "Healthcare", "Backend Development"],
    features: [
      "Secure RESTful APIs with JWT authentication",
      "Hierarchical role-based access control system",
      "Scalable MySQL database architecture",
      "Regional data management and aggregation",
      "Real-time data tracking and synchronization",
      "Multi-level performance reporting dashboard",
      "Administrative workflow automation",
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "MySQL",
      "JWT",
      "Firebase",
      "Multer",
    ],
  },
  {
    id: 6,
    name: "E-commerce Inventory & POS System",
    featured: true,
    image: ecomerce,
    description:
      "A sophisticated inventory and point-of-sale system seamlessly integrated with an e-commerce platform. Features real-time stock management, order processing, and an advanced admin dashboard for complete operational control with optimized database performance.",
    tags: ["E-commerce", "POS System", "Inventory Management"],
    features: [
      "Real-time inventory tracking and updates",
      "Integrated order management system",
      "Advanced Admin Dashboard for POS operations",
      "Product catalog and stock management",
      "Order fulfillment and tracking system",
      "Transactional integrity with PostgreSQL",
      "Optimized query performance for high-volume operations",
    ],
    technologies: ["TypeScript", "Node.js", "Fastify", "PostgreSQL"],
  },
  {
    id: 7,
    name: "Hospital Appointment System",
    image: doc,
    description:
      "A patient-centric appointment scheduling platform that simplifies the healthcare booking experience. The system features dynamic availability management, real-time notifications, and seamless appointment confirmations to improve patient engagement and reduce no-shows.",
    tags: ["Healthcare", "Appointment System", "Full Stack"],
    features: [
      "Patient-friendly appointment scheduling interface",
      "Dynamic doctor availability management",
      "Real-time appointment confirmations",
      "Firebase Cloud Messaging integration",
      "Automated reminder notifications",
      "Patient history and appointment tracking",
      "Multi-department scheduling support",
    ],
    technologies: ["Vue.js", "Node.js", "Express.js", "Firebase"],
  },
  {
    id: 8,
    name: "Amanah Matrimony",
    image: amanah,
    description:
      "Bangladesh's premier online matrimonial service, serving the Muslim community since 2015. The platform provides a trusted space for Bangladeshi and Bangladeshi-origin Muslims to find compatible life partners, with inclusive features that welcome all Muslim backgrounds regardless of sect, ethnicity, or profession.",
    tags: ["Matrimonial", "Community Service", "Bangladesh"],
    features: [
      "Comprehensive user profile system",
      "Advanced matching algorithms",
      "Privacy-focused communication tools",
      "Family involvement features",
      "Verified profile badges",
      "Multi-language support (Bengali & English)",
    ],
    technologies: ["React", "Express.js", "MySQL"],
  },
  {
    id: 9,
    name: "Iqbal & Tareq Mobile Phones LLC",
    image: itphone,
    description:
      "A leading international mobile communications wholesaler established in 2005. Starting as a family business, the company has evolved into a globally recognized distributor of premium mobile communication products, serving customers worldwide with reliable sourcing and exceptional service.",
    tags: ["E-commerce", "B2B Platform", "International Trade"],
    features: [
      "Global supplier network management",
      "B2B ordering and inventory system",
      "Multi-currency support",
      "International shipping integration",
      "Product catalog with 1000+ items",
      "Real-time pricing and availability",
    ],
    technologies: ["Next.js", "Node.js", "MySQL"],
  },
  {
    id: 10,
    name: "SAFA Fashion House",
    image: safa,
    description:
      "A dynamic one-stop apparel sourcing and supply solution specializing in woven, knitwear, and sweater manufacturing. Based in Bangladesh, SAFA Fashion House bridges the gap between international fashion brands and quality manufacturing facilities.",
    tags: ["Fashion", "Manufacturing", "Supply Chain"],
    features: [
      "Complete sourcing management system",
      "Quality control tracking",
      "Production timeline management",
      "Sample approval workflow",
      "Vendor relationship management",
      "Export documentation system",
    ],
    technologies: ["Wordpress"],
  },
  {
    id: 11,
    name: "Voltec Engineering Limited",
    image: voltech,
    description:
      "A premier supplier of industrial automation and control equipment, specializing in AC drive systems, low voltage systems, tank gauging systems, and electrical instruments. Serving major industries including food & beverages, steel, pharmaceuticals, and power generation with cutting-edge automation solutions.",
    tags: ["Industrial Automation", "B2B", "Engineering"],
    features: [
      "Industrial product catalog system",
      "Technical specification database",
      "Project quote management",
      "Installation tracking system",
      "After-sales service portal",
      "Industry-specific solution configurator",
    ],
    technologies: ["Wordpress"],
  },
  {
    id: 12,
    name: "SENSOR MART",
    image: sensor,
    description:
      "A specialized division of Voltec Engineering Limited, dedicated to providing comprehensive sensor and measurement solutions. SENSOR MART combines the trusted legacy of its parent company with innovative approaches to sensor technology, offering excellence in product quality and customer satisfaction.",
    tags: ["Sensors", "Measurement Systems", "Industrial IoT"],
    features: [
      "Sensor specification search engine",
      "Technical comparison tools",
      "Integration guides and documentation",
      "Calibration service scheduling",
      "IoT sensor data visualization",
      "Custom sensor configuration",
    ],
    technologies: ["Wordpress"],
  },
];
