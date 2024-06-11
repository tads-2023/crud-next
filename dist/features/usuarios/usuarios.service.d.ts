import { Repository } from 'typeorm';
import { Usuario } from './usuario.entity';
export declare class UsuariosService {
    private usersRepository;
    constructor(usersRepository: Repository<Usuario>);
    criarUsuario(formulario: any): Promise<Usuario>;
    listaUsuarios(): Promise<Usuario[]>;
}
