import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const product1 = await prisma.product.create({
    data: { name: "Diamond Ring", price: 999.99 },
  });
  const product2 = await prisma.product.create({
    data: { name: "Gold Necklace", price: 499.50 },
  });
  const product3 = await prisma.product.create({
    data: { name: "Silver Bracelet", price: 199.00 },
  });

  await prisma.order.create({ data: { productId: product1.id } });
  await prisma.order.create({ data: { productId: product2.id } });

  console.log("Seed data inserted");
}

main()
  .then(async () => { await prisma.(); })
  .catch(async (e) => { console.error(e); await prisma.(); process.exit(1); });
