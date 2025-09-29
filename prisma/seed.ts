import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // Create sample products
  await prisma.product.createMany({
    data: [
      { name: "Diamond Ring", price: 1999.99 },
      { name: "Gold Necklace", price: 899.50 },
      { name: "Silver Bracelet", price: 299.00 }
    ]
  });

  // Create one order linked to product 1
  await prisma.order.create({
    data: { productId: 1 }
  });
}

main()
  .then(() => prisma.())
  .catch(err => { console.error(err); prisma.(); });
