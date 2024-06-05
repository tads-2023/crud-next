import { UsuariosService } from './usuarios.service';
import { Usuario } from './usuario.entity';
export declare class UsuariosController {
    private readonly usuariosService;
    constructor(usuariosService: UsuariosService);
    criarUsuario(): Promise<Usuario>;
    listaUsuarios(): Promise<Usuario[]>;
}
