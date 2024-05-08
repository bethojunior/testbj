import prismaClient from "../../providers/prisma/prisma.provider";

export default class UserRepository{


  async create(data: any){
    return await prismaClient.prompt.create({
      data
    });
  }

  async list(){
    return await prismaClient.prompt.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });
  }

}