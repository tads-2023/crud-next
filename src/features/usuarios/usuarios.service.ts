import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './usuario.entity';

@Injectable()
export class UsuariosService {
    constructor(
        @InjectRepository(Usuario)
        private usersRepository: Repository<Usuario>,
    ) {}

    criarUsuario(): Promise<Usuario> {
        const user = new Usuario()
        return this.usersRepository.save(user);
    }

    listaUsuarios(): Promise<Usuario[]> {
        return this.usersRepository.find({});
    }
}
