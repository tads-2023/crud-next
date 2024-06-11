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

    criarUsuario(formulario): Promise<Usuario> {
        const user = new Usuario();
        user.cpf = formulario.cpf;
        user.idade = formulario.idade;
        user.nome = formulario.nome;
        user.ra = formulario.ra
        return this.usersRepository.save(user);
    }

    listaUsuarios(): Promise<Usuario[]> {
        return this.usersRepository.find({});
    }
}
