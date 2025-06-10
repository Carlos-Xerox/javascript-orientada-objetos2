const user = {
    nome: 'Juliana',
    email: 'j@j.com',
    nascimento: '2024-01-01',
    role: 'estudante',
    ativo: true, //default
    exibirInfos: function() {
        console.log(this.nome, this.email);
    }
};

const admin = {
    nome: 'Mariana',
    email: 'm@j.com',
    nascimento: '2024-01-01',
    role: 'admin',
    ativo: true, //default
    criarCurso: function() {
        console.log('Curso Criado')
    }
}

Object.setPrototypeOf(admin, user)
admin.criarCurso()
admin.exibirInfos()