import { UsuariosService } from './usuarios.service';
import { Usuario } from './usuario.entity';
import { UsuarioDTO } from './usuario.dto';
export declare class UsuariosController {
    private readonly usuariosService;
    constructor(usuariosService: UsuariosService);
    criarUsuario(usuarioDTO: UsuarioDTO): Promise<Usuario>;
    listaUsuarios(): Promise<Usuario[]>;
}
