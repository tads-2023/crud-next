import { Repository } from 'typeorm';
import { Usuario } from './usuario.entity';
export declare class UsuariosService {
    private usersRepository;
    constructor(usersRepository: Repository<Usuario>);
    criarUsuario(): Promise<Usuario>;
    listaUsuarios(): Promise<Usuario[]>;
}
