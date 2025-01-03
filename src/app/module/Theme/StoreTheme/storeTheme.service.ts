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

// crrate logo
const CreateLogoDB = async (payload: any) => {
  console.log(payload, 'hellow');

  try {
    // Update the logo record
    const updatedItem = await prisma.logo.update({
      where: { id: payload?.id }, // Ensure `id` exists in the payload
      data: { logoUrl: payload?.logoUrl }, // Update the logoUrl field
    });

    return updatedItem;
  } catch (error) {
    const prismaError = prismaErrorHandler(error); // Assuming prismaErrorHandler is defined
    throw new Error(prismaError?.message || 'Failed to update logo.');
  }
};


//  get Logo
const getLogoDB = async (id:any) => {
 
  console.log(id)
  try {
    const product = await prisma.logo.findFirst({where:{userId:id}});

    console.log(product)

    if (!product) {
      throw new Error('Category not found for the logo user ID');
    }

    console.log(product,'jj')

    return product;
  } catch (error:any) {
    throw new Error(`Error fetching logo: ${error?.message}`);
  }
};


//  create number
const CreateNumberDB = async (payload:  any) => {

  console.log(payload,'www')
  try {
   

    const newItem = await prisma.number.update({
      where: { id: payload?.id }, // Ensure `id` exists in the payload
      data: { number: payload?.number }, // Update the logoUrl field
    });
    return newItem;

  } catch (error) {
    const prismaError = prismaErrorHandler(error);
    throw new Error(prismaError?.message || 'Failed to create number.');
  }
};


//  get Number
const getNumberDB = async (id:any) => {
 
  try {
    const product = await prisma.number.findFirst({where:{userId:id}});

    if (!product) {
      throw new Error('Number not found for the number user ID');
    }

    console.log(product,'jj')

    return product;
  } catch (error:any) {
    throw new Error(`Error fetching lumber: ${error?.message}`);
  }
};


//  create SocialAccount
const CreateSocialDB = async (payload:  any,id:any) => {

  console.log(payload, 'Received payload to create social account');
  try {
   

    

    payload.userId=id

    console.log(payload)
    const newItem = await prisma.socialAccount.create({
    
      data:payload
    });
    return newItem;

  } catch (error) {
    const prismaError = prismaErrorHandler(error);
    throw new Error(prismaError?.message || 'Failed to create number.');
  }
};


//  get SocialAccount
const getSocialAccountDB = async () => {
 
  try {
    const product = await prisma.socialAccount.findMany();

    if (!product) {
      throw new Error('Category not found for the number user ID');
    }

    console.log(product,'jj')

    return product;
  } catch (error:any) {
    throw new Error(`Error fetching lumber: ${error?.message}`);
  }
};

//  create Review
const createProductReviewDB = async (payload:any) => {

  
 
  try {
    const result = await prisma.review.create({data:payload});




    return result;
  } catch (error:any) {
    throw new Error(`Error fetching lumber: ${error?.message}`);
  }
};

//  find Review
const getProductReviewsDB = async (productId:string) => {
  const result = await prisma.review.findMany({
    where: { productId },
    
  });
  return result;
};

export const StoreThemeServices = {
  
  CreateNavigationDB,
  getNavigationDB,
  CreateLogoDB,
  getLogoDB,
  getNumberDB,
  CreateNumberDB,
  CreateSocialDB,
  getSocialAccountDB,
  createProductReviewDB,
  getProductReviewsDB
  

};
