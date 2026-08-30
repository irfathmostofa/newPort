import school from "../assets/proeject-image/school.jpeg";
import ecomerce from "../assets/proeject-image/ecomerce.png";
import doc from "../assets/proeject-image/doc.jpg";
import somekoron from "../assets/proeject-image/somekoron.png";
import worklopedia from "../assets/proeject-image/worklopedia.png";
import rentManagement from "../assets/proeject-image/rent.png";
import restaurantSystem from "../assets/proeject-image/restrurent.png";

export const productsArray = [
  {
    id: 1,
    name: "School Management System",
    category: "Education ERP",
    tagline: "Complete digitized school administration",
    image: school,
    shortDescription:
      "An all-in-one school ERP that manages academics, HR, transport, library, attendance, and fee collection from a single dashboard.",
    description:
      "A comprehensive school management platform that digitizes and streamlines every aspect of educational administration. Successfully deployed in multiple schools, it unifies academics, staff management, transport tracking, library operations, and fee collection with integrated payment gateways and real-time notifications — so administrators, teachers, parents, and students stay in sync.",
    features: [
      "Complete academic management with attendance and grading",
      "HR module for staff management and payroll",
      "Transport tracking with route optimization",
      "Library management with digital cataloging",
      "Integrated payment gateways (SSLCommerz, amayPay, Islami Bank)",
      "Role-based dashboards for admin, teacher, parent & student",
      "Automated workflow for administrative tasks",
      "Real-time alerts and notifications system",
    ],
    technologies: [
      "React.js",
      "Node.js",
      "Nest.js",
      "GraphQL",
      "PostgreSQL",
      "Firebase",
    ],
    bestFor:
      "Schools, colleges, coaching centers, and educational institutions that want to replace manual administration with a single digital platform.",
  },
  {
    id: 2,
    name: "E-commerce & POS Solution",
    category: "Retail & E-commerce",
    tagline: "Online store and point-of-sale in one system",
    image: ecomerce,
    shortDescription:
      "A sophisticated inventory and point-of-sale system integrated with an e-commerce storefront, built for high-volume retail operations.",
    description:
      "A complete retail commerce platform that combines an online storefront with a powerful in-store point-of-sale system. Real-time inventory syncs across both channels, orders flow seamlessly from cart to fulfillment, and an advanced admin dashboard gives complete operational control — with transactional integrity and optimized query performance for high-volume businesses.",
    features: [
      "Real-time inventory tracking and updates across channels",
      "Integrated order management and fulfillment",
      "Advanced admin dashboard for POS operations",
      "Product catalog and stock management",
      "Sales analytics and performance reporting",
      "Transactional integrity with PostgreSQL",
      "Optimized query performance for high-volume operations",
    ],
    technologies: ["TypeScript", "Node.js", "Fastify", "PostgreSQL"],
    bestFor:
      "Retailers, distributors, and e-commerce businesses that need both an online store and a reliable in-store POS under one roof.",
  },
  {
    id: 3,
    name: "Appointment System",
    category: "Healthcare",
    tagline: "Patient-centric appointment booking platform",
    image: doc,
    shortDescription:
      "Simplifies healthcare booking with dynamic doctor availability, real-time confirmations, and automated reminders that reduce no-shows.",
    description:
      "A patient-centric scheduling platform designed to improve the healthcare booking experience. It features dynamic availability management, real-time appointment confirmations, automated reminder notifications, and full patient history tracking — all organized by department. Powered by Firebase Cloud Messaging, it keeps patients and staff informed at every step, reducing no-shows and improving engagement.",
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
    bestFor:
      "Hospitals, clinics, and healthcare providers looking to reduce no-shows and streamline patient booking.",
  },

  {
    id: 5,
    name: "Project Management Platform",
    category: "Business Operations",
    tagline: "From quotation to completion, all in one place",
    image: somekoron,
    shortDescription:
      "An all-in-one project management software for agencies that streamlines quoting, project tracking, accounts, and resource allocation.",
    description:
      "An end-to-end project management platform designed for agencies to streamline operations from quotation to completion. It features comprehensive project tracking, accounts management, income and expense tracking, bank transaction management, resource allocation, task management, supplier coordination, and real-time progress monitoring — giving leadership full financial transparency and timely project delivery.",
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
    bestFor:
      "Digital agencies and service businesses that juggle multiple projects and want tighter control over timelines and finances.",
  },
  {
    id: 6,
    name: "Rent Management SaaS",
    category: "Property Management",
    tagline: "Multi-tenant rent management for property owners",
    image: rentManagement,
    shortDescription:
      "A multi-tenant SaaS that helps property owners manage apartment and cottage rentals — invoicing, dynamic rent, tenant history, and reporting from one dashboard.",
    description:
      "A multi-tenant rent management platform built for property owners managing apartment and cottage rentals at scale. It handles invoicing, dynamic rent calculation, multi-channel tenant messaging, tenant history tracking, and detailed reporting — with a 14-day free trial for new owners. A dedicated super admin panel gives full oversight across all owners on the platform, complete with an audit log for accountability.",
    features: [
      "Multi-tenant architecture for multiple property owners",
      "Automated invoicing and dynamic rent calculation",
      "Multi-channel messaging with tenants",
      "Tenant history and rental record tracking",
      "Owner reporting dashboard",
      "14-day free trial with paid monthly subscription",
      "Super admin panel with cross-owner monitoring",
      "Built-in audit logging for platform oversight",
    ],
    technologies: ["React.js (Vite)", "Supabase", "PostgreSQL"],
    bestFor:
      "Property owners and small property management companies managing multiple apartment or cottage rentals who need billing, communication, and reporting in one place.",
  },
  {
    id: 7,
    name: "Restaurant Management System",
    category: "Food & Beverage",
    tagline: "Admin, order-taking, and customer ordering in one platform",
    image: restaurantSystem,
    shortDescription:
      "A complete restaurant operations suite covering admin management, in-house order-taking, and a customer-facing website — with multi-branch support built in.",
    description:
      "A full restaurant management platform built around three connected portals: an Admin Portal for menu, table, reservation, staff, and sales management; an Order-Taking Portal for fast table and takeaway ordering with live kitchen tracking and billing; and a Customer Website for menu browsing and table reservations. Multi-branch support is built in from day one, so each location can run its own independent menu and pricing under a single system.",
    features: [
      "Menu, category, and pricing management with availability toggles",
      "Table management with live status tracking",
      "Reservation management with calendar view and approvals",
      "Staff accounts with role-based access",
      "Live order monitoring across all tables",
      "Order-taking with kitchen ticketing and billing at counter",
      "Customer-facing menu browsing and table reservations",
      "Multi-branch support with independent menus per location",
      "Sales reporting (daily/weekly/monthly, best-sellers)",
    ],
    technologies: ["React.js (Vite)", "Tailwind CSS", "Supabase"],
    bestFor:
      "Restaurants and multi-branch food businesses that want one system covering back-of-house management, order-taking, and customer-facing reservations.",
  },
];
