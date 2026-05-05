import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

async function main() {
  await prisma.project.deleteMany();

  await prisma.project.createMany({
    data: [
      {
        title: "Portfolio Website",
        description:
          "A personal portfolio built with Next.js, Tailwind CSS, TypeScript and PostgreSQL.",
        tags: ["Next.js", "TypeScript", "Tailwind", "PostgreSQL"],
        githubUrl: "https://github.com/yourusername/portfolio",
        liveUrl: "https://yourportfolio.vercel.app",
        featured: true,
        order: 1,
      },
      {
        title: "E-Commerce App",
        description:
          "A full-stack e-commerce platform with cart, auth, and Stripe payments.",
        tags: ["React", "Node.js", "Stripe", "MongoDB"],
        githubUrl: "https://github.com/yourusername/ecommerce",
        liveUrl: "https://myshop.vercel.app",
        featured: true,
        order: 2,
      },
      {
        title: "Weather Dashboard",
        description:
          "A weather app that shows forecasts using the OpenWeather API with charts.",
        tags: ["React", "TypeScript", "REST API", "Chart.js"],
        githubUrl: "https://github.com/yourusername/weather",
        featured: false,
        order: 3,
      },
    ],
  });

  console.log("✅ Database seeded successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
