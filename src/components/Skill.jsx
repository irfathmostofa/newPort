import { motion } from "framer-motion";
import { useState } from "react";
import { SkillsArray } from "../Content/SkillsArray";

export const Skill = ({ directionLeft }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Get skill name from URL or use fallback
  const getSkillName = (url) => {
    if (!url) return "Unknown";

    // Extract name from URL
    const fileName = url.split("/").pop();
    const name = fileName.split(".")[0];

    // Clean up the name
    return name
      .replace(/-/g, " ")
      .replace(/oracle/i, "Oracle")
      .replace(/mysql/i, "MySQL")
      .replace(/postgresql/i, "PostgreSQL")
      .replace(/mongodb/i, "MongoDB")
      .replace(/express/i, "Express")
      .replace(/nestjs/i, "NestJS")
      .replace(/graphql/i, "GraphQL")
      .replace(/tailwindcss/i, "Tailwind CSS")
      .replace(/typescript/i, "TypeScript")
      .replace(/javascript/i, "JavaScript")
      .replace(/amazonwebservices/i, "AWS")
      .replace(/kubernetes/i, "Kubernetes")
      .replace(/terraform/i, "Terraform")
      .replace(/docker/i, "Docker")
      .replace(/redis/i, "Redis")
      .replace(/rabbitmq/i, "RabbitMQ")
      .replace(/apachekafka/i, "Kafka")
      .replace(/firebase/i, "Firebase")
      .replace(/supabase/i, "Supabase")
      .replace(/prisma/i, "Prisma")
      .replace(/drizzle/i, "Drizzle")
      .replace(/fastify/i, "Fastify")
      .replace(/angularjs/i, "Angular")
      .replace(/vuejs/i, "Vue.js")
      .replace(/svelte/i, "Svelte")
      .replace(/solidjs/i, "SolidJS")
      .replace(/redux/i, "Redux")
      .replace(/zustand/i, "Zustand")
      .replace(/jest/i, "Jest")
      .replace(/cypressio/i, "Cypress")
      .replace(/webpack/i, "Webpack")
      .replace(/vitejs/i, "Vite")
      .replace(/bitbucket/i, "Bitbucket")
      .replace(/gitlab/i, "GitLab")
      .replace(/github/i, "GitHub")
      .replace(/git/i, "Git")
      .replace(/nginx/i, "Nginx")
      .replace(/bootstrap/i, "Bootstrap")
      .replace(/css3/i, "CSS")
      .replace(/html5/i, "HTML")
      .replace(/nodejs/i, "Node.js")
      .replace(/react/i, "React")
      .replace(/nextjs/i, "Next.js")
      .replace(/php/i, "PHP")
      .replace(/_/g, " ")
      .replace(/\./g, " ")
      .trim()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <>
      {SkillsArray.map((item, index) => {
        const skillName = getSkillName(item.skill);

        return (
          <div
            className="group relative flex cursor-pointer"
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <motion.img
              initial={{ opacity: 0, scale: 0.8, x: directionLeft ? -40 : 40 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              src={item.skill}
              alt={skillName}
              className="rounded-full border border-gray-500 object-cover w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-200 ease-in-out bg-gray-800/30 p-1"
              onError={(e) => {
                // Fallback if image fails to load
                e.target.src =
                  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='%23333'/%3E%3Ctext x='50' y='50' text-anchor='middle' dy='.3em' fill='%23F7AB0A' font-size='14' font-family='sans-serif'%3E" +
                  skillName.substring(0, 3) +
                  "%3C/text%3E%3C/svg%3E";
              }}
            />

            {/* Hover overlay with proficiency */}
            <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white rounded-full w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 xl:w-28 xl:h-28 z-10">
              <div className="flex items-center justify-center h-full">
                <p className="text-sm sm:text-lg md:text-2xl font-bold text-black opacity-100">
                  {item.proficiency}
                </p>
              </div>
            </div>

            {/* Tooltip */}
            <div
              className={`
              absolute -bottom-12 left-1/2 transform -translate-x-1/2 
              px-3 py-1.5 rounded-md bg-gray-900 border border-gray-700 
              text-xs sm:text-sm font-medium text-white whitespace-nowrap
              transition-all duration-200 z-20
              ${hoveredIndex === index ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
            `}
            >
              {skillName}
              {/* Tooltip arrow */}
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 border-l border-t border-gray-700 rotate-45"></div>
            </div>
          </div>
        );
      })}
    </>
  );
};
