import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const products = await prisma.product.findMany({
    include: { orders: true }
  });
  console.log(products);
}

main()
  .then(() => prisma.())
  .catch(err => { console.error(err); prisma.(); });
