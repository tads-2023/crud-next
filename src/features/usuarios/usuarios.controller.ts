import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { Usuario } from './usuario.entity';
import { UsuarioDTO } from './usuario.dto';


@Controller("/usuarios")
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post()
  criarUsuario(@Body() usuarioDTO: UsuarioDTO): Promise<Usuario> {
    return this.usuariosService.criarUsuario(usuarioDTO);
  }

  @Get()
  listaUsuarios(): Promise<Usuario[]> {
    return this.usuariosService.listaUsuarios();
  }
}
