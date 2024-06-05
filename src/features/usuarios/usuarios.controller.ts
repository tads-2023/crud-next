import { Controller, Get, Post } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { Usuario } from './usuario.entity';

@Controller("/usuarios")
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post()
  criarUsuario(): Promise<Usuario> {
    return this.usuariosService.criarUsuario();
  }

  @Get()
  listaUsuarios(): Promise<Usuario[]> {
    return this.usuariosService.listaUsuarios();
  }
}
