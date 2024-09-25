
//import the prisma client constructor from the @prisma/client package
import { PrismaClient } from "@prisma/client";


//Create a new instance of the PrismaClient//This instance will be used to interact with the database
const prisma = new PrismaClient();

//Define an async function called main that will be used to interact with the database
//Inside the main function, use the PrismaClient instance to fetch all users from the database
async function main() {
  const users = await prisma.user.findMany();
  console.log(users);
}

//Call the main function and handle any errors that occur
main()

    .then(async () => {
    await prisma.$disconnect();
    })

    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    })
//   .catch((e) => {
//     throw e;
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });

//  Now you can run the script with  ts-node src/index.ts  and you should see the users in the database printed to the console.
//  Conclusion
//  In this article, we have learned how to set up a new project with Prisma and TypeScript. We have also learned how to use the Prisma Client to interact with the database.
//  Prisma is a powerful tool that can help you build scalable and performant applications. It provides a type-safe way to interact with the database and helps you avoid common pitfalls when working with databases.
//  If you want to learn more about Prisma, you can check out the  official documentation.
//  Thanks for reading!
//  Peer Review Contributions by:  Lalithnarayan C
