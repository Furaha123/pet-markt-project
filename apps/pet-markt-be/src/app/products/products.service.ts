import { Injectable } from '@nestjs/common';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { PrismaService } from '../prisma/prisima.service';
import { Product } from '@prisma/client';

@Injectable()
export class ProductsService {

  constructor(private prisma: PrismaService) {
    

  }
  create(createProductInput: CreateProductInput) {
    return 'This action adds a new product';
  }

 findAll() {
  return this.prisma.product.findMany();
}


  findOne(id: string) {
return this.prisma.product.findFirst({
  where: { id}
})  }

searchProducts(searchTerm: string): Promise<Product[]> {
  const lowerCaseSearchTerm = searchTerm.toLowerCase();
  return this.prisma.product.findMany({
    where:{
      OR:[
        { name: { contains: lowerCaseSearchTerm, mode: 'insensitive' } },
        { description: { contains: lowerCaseSearchTerm, mode: 'insensitive' } }
      ]
    }
  })
}

  update(id: number, updateProductInput: UpdateProductInput) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
