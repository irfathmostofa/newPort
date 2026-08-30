import node from "../assets/custom-icons/node.png";
import express from "../assets/custom-icons/express.png";
import mongo from "../assets/custom-icons/mongo.png";
import php from "../assets/custom-icons/php.png";
import sql from "../assets/custom-icons/sql.png";
import firebase from "../assets/custom-icons/firebase.png";
import js from "../assets/custom-icons/js.png";
import css from "../assets/custom-icons/css.png";
import react from "../assets/custom-icons/react.png";
import next from "../assets/custom-icons/next.png";
import vue from "../assets/custom-icons/vue.png";
import html from "../assets/custom-icons/html.png";
import tailwind from "../assets/custom-icons/tailwind.png";
import bootstrap from "../assets/custom-icons/bootstrap.png";
import oracle from "../assets/custom-icons/Oracle.png";
import types from "../assets/custom-icons/typescript.png";
import fastify from "../assets/custom-icons/fastify.png";
import drizzle from "../assets/custom-icons/drizzle.png";
import prisma from "../assets/custom-icons/prisma.png";
import graphql from "../assets/custom-icons/GraphQL.png";
import nest from "../assets/custom-icons/Nest.js.png";

// CDN Icon URLs for new technologies
const CDN_ICONS = {
  supabase:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
  aws: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
  docker:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  gitlab:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
  github:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  bitbucket:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg",
  angular:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
  svelte:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg",
  redux:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  jest: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
  cypress:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cypressio/cypressio-original.svg",
  webpack:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg",
  vite: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
  kubernetes:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
  terraform:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg",
  nginx:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
  redis:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  postgresql:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  mysql:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  rabbitmq:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rabbitmq/rabbitmq-original.svg",
  kafka:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg",
  solidjs:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidjs/solidjs-original.svg",
  zustand:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", // Fallback
};

// Helper to add CDN icons to the list
export const SkillsArray = [
  // ====== JavaScript & TypeScript ======
  {
    skill: types,
    proficiency: "100%",
  },
  {
    skill: js,
    proficiency: "100%",
  },

  // ====== Frontend Frameworks & Libraries ======
  {
    skill: react,
    proficiency: "100%",
  },
  {
    skill: next,
    proficiency: "100%",
  },
  {
    skill: vue,
    proficiency: "100%",
  },
  {
    skill: CDN_ICONS.angular,
    proficiency: "70%",
  },
  // {
  //   skill: CDN_ICONS.svelte,
  //   proficiency: "60%",
  // },
  // {
  //   skill: CDN_ICONS.solidjs,
  //   proficiency: "50%",
  // },

  // ====== State Management ======
  {
    skill: CDN_ICONS.redux,
    proficiency: "90%",
  },
  // {
  //   skill: CDN_ICONS.zustand,
  //   proficiency: "85%",
  // },

  // ====== Styling ======
  {
    skill: tailwind,
    proficiency: "100%",
  },
  {
    skill: bootstrap,
    proficiency: "100%",
  },
  {
    skill: css,
    proficiency: "100%",
  },
  {
    skill: html,
    proficiency: "100%",
  },

  // ====== Backend Technologies ======
  {
    skill: node,
    proficiency: "100%",
  },
  {
    skill: express,
    proficiency: "100%",
  },
  {
    skill: fastify,
    proficiency: "100%",
  },
  {
    skill: nest,
    proficiency: "100%",
  },
  {
    skill: php,
    proficiency: "100%",
  },

  // ====== Databases ======
  {
    skill: mongo,
    proficiency: "100%",
  },
  {
    skill: CDN_ICONS.postgresql,
    proficiency: "95%",
  },
  {
    skill: CDN_ICONS.mysql,
    proficiency: "90%",
  },
  {
    skill: oracle,
    proficiency: "60%",
  },
  {
    skill: sql,
    proficiency: "100%",
  },

  // ====== ORMs & Query Builders ======
  {
    skill: prisma,
    proficiency: "100%",
  },
  {
    skill: drizzle,
    proficiency: "100%",
  },

  // ====== BaaS & Supabase ======
  {
    skill: CDN_ICONS.supabase,
    proficiency: "85%",
  },
  {
    skill: firebase,
    proficiency: "100%",
  },

  // ====== API & Integration ======
  {
    skill: graphql,
    proficiency: "100%",
  },
  {
    skill: CDN_ICONS.rabbitmq,
    proficiency: "70%",
  },
  {
    skill: CDN_ICONS.kafka,
    proficiency: "60%",
  },

  // ====== Cloud & DevOps ======
  {
    skill: CDN_ICONS.aws,
    proficiency: "75%",
  },
  {
    skill: CDN_ICONS.docker,
    proficiency: "80%",
  },
  {
    skill: CDN_ICONS.kubernetes,
    proficiency: "65%",
  },
  {
    skill: CDN_ICONS.nginx,
    proficiency: "70%",
  },

  // ====== Caching ======
  {
    skill: CDN_ICONS.redis,
    proficiency: "70%",
  },

  // ====== Version Control ======
  {
    skill: CDN_ICONS.git,
    proficiency: "100%",
  },
  {
    skill: CDN_ICONS.gitlab,
    proficiency: "85%",
  },
  {
    skill: CDN_ICONS.github,
    proficiency: "100%",
  },
  {
    skill: CDN_ICONS.bitbucket,
    proficiency: "75%",
  },

  // ====== Testing ======
  {
    skill: CDN_ICONS.jest,
    proficiency: "80%",
  },
  {
    skill: CDN_ICONS.cypress,
    proficiency: "70%",
  },

  // ====== Build Tools & Bundlers ======
  {
    skill: CDN_ICONS.webpack,
    proficiency: "75%",
  },
  {
    skill: CDN_ICONS.vite,
    proficiency: "90%",
  },

  // IDE/Tools
  // {
  //   skill: vs,
  //   proficiency: "100%",
  // },
];
