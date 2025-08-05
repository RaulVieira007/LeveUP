import { Controller, Get, Post, Body, Param, Put, Delete, ParseIntPipe } from "@nestjs/common";
import { JogoService } from "../service/jogo.service";
import { tb_jogo } from "../entity/jogo.entity";

@Controller('jogos')
export class jogoController{
    constructor(private readonly jogoService: JogoService) {}

 // GET /jogos → lista todos os jogos
  @Get()
  findAll() {
    return this.jogoService.findAll();
  }

  // GET /jogos/:id → retorna um jogo por ID
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.jogoService.findOne(id);
  }

  // POST /jogos → cria um novo jogo
  @Post()
  create(@Body() jogo: tb_jogo) {
    return this.jogoService.create(jogo);
  }

  // PUT /jogos/:id → atualiza um jogo existente
  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() jogo: tb_jogo) {
    return this.jogoService.update(id, jogo);
  }

  // DELETE /jogos/:id → deleta um jogo
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.jogoService.remove(id);
  }
}