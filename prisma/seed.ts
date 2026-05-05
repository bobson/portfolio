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
        title: "Strong Fit",
        description:
          "A fitness web app built with TanStack Start — file-based routing, server functions, and TanStack Query for data fetching.",
        tags: ["TanStack Start", "TypeScript", "Tailwind CSS", "Vitest"],
        githubUrl: "https://github.com/bobson/strong-fit",
        liveUrl: "https://strong-fit-silk.vercel.app/",
        featured: true,
        order: 1,
      },
      {
        title: "Audiophile E-Commerce",
        description:
          "A Frontend Mentor e-commerce challenge — full cart, checkout flow with form validation, VAT/shipping calc, and localStorage persistence.",
        tags: ["React", "TypeScript", "Vite", "CSS"],
        githubUrl: "https://github.com/bobson/audiophile-ecommerce",
        liveUrl: "https://venerable-stroopwafel-0c3729.netlify.app/",
        featured: true,
        order: 2,
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
