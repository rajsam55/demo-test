import { MediaType } from "@/src/generated/prisma/browser";
import prisma from "./prisma";








export const postSelect = {
  id: true,
  title : true,
  imageUrl: true,  
  mediaType: true,  
  userId :true,  
  url : true,  
  createdAt: true,
  updatedAt : true,  
  price : true,
  
  
  
  
} as const;

/** Two parallel queries run via Promise.all — one round-trip */
export async function getHomePosts() {
  const [imageDocs, textDocs] = await Promise.all([

    

  

    prisma.post.findMany({

      where: ({ mediaType: MediaType.IMAGE } as any),
      
      select: postSelect,
    }),

    prisma.post.findMany({


     where :   ({ mediaType: MediaType.TEXT } as any),
      
      
      select: postSelect,
    }),

    


  ]);



  return {textDocs, imageDocs };

}


/** Type inference from the Prisma select shape */
export type PostItem = Awaited<
  ReturnType<typeof prisma.post.findMany>>[number]

  

