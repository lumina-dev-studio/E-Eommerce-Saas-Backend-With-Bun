import { PrismaClient } from '@prisma/client';
import prismaErrorHandler from '../../../error/prismaErrorHandler';


const prisma = new PrismaClient(); // Create a Prisma client instance

//  create navigation
const CreateNavigationDB = async (payload:  any) => {
  const { name, path, icon, parentId }:any = payload;

  try {
   

    const newItem = await prisma.navigationItem.create({
      data: {
        name,
        path,
        icon,
        parentId: parentId || null,
      },
    });
    return newItem;

  } catch (error) {
    const prismaError = prismaErrorHandler(error);
    throw new Error(prismaError?.message || 'Failed to create product.');
  }
};

// crrate logo
const CreateLogoDB = async (payload:  any) => {
  console.log('hekko')

  try {
   

    const newItem = await prisma.logo.create({
      data:payload
    });
    return newItem;

  } catch (error) {
    const prismaError = prismaErrorHandler(error);
    throw new Error(prismaError?.message || 'Failed to create logo.');
  }
};


//  get Category
const getNavigationDB = async () => {
 
  try {
    const product = await prisma.navigationItem.findMany();

    if (!product) {
      throw new Error('Category not found for the provided user ID');
    }

    console.log(product,'jj')

    return product;
  } catch (error:any) {
    throw new Error(`Error fetching Category: ${error?.message}`);
  }
};

//  get Logo
const getLogoDB = async () => {
 
  try {
    const product = await prisma.logo.findMany();

    if (!product) {
      throw new Error('Category not found for the logo user ID');
    }

    console.log(product,'jj')

    return product;
  } catch (error:any) {
    throw new Error(`Error fetching logo: ${error?.message}`);
  }
};





export const StoreThemeServices = {
  
  CreateNavigationDB,
  getNavigationDB,
  CreateLogoDB,
  getLogoDB
  

};
