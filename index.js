const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  await prisma.product.create({
    data: {
      title: "The Lean Startup",
      price: 29,
      promo: 2,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg",
    },
  });

  const allProducts = await prisma.product.findMany();
  console.log(allProducts);
  return allProducts;
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
