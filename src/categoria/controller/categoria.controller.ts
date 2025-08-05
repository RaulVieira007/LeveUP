import { Controller, Get, Post, Body, Param, Put, Delete, ParseIntPipe } from "@nestjs/common";
import { CategoriaService } from "../service/categoria.service";
import { tb_categoria } from "../entity/categoria.entity";

 @Controller('categorias')
 export class CategoriaController {
    constructor(private readonly CategoriaService: CategoriaService) {}

    // GET 
    @Get()
    findAll() {
        return this.CategoriaService.findAll();
    }

    // GET (ID)
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.CategoriaService.findOne(id);
    }

    // Post
    @Post()
    create(@Body() tb_categoria: tb_categoria) {
        return this.CategoriaService.create(tb_categoria);
    }

    // Put
    @Put(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() tb_categoria: tb_categoria) {
        return this.CategoriaService.update(id, tb_categoria);
    }

    // Delete
    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.CategoriaService.remove(id);
    }
 }