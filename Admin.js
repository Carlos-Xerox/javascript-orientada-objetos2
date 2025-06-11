import User from "./User.js";

class Admin extends User {
    constructor(nome, email, nascimento, role = "admin", ativo = "true") {
        super(nome, email, nascimento, role, ativo)
    }

    criarCurso(nomeCurso, qtdvagas) {
        return `${nomeCurso} criado com ${qtdvagas}.`
    }
}

const novoAdmin = new Admin("Rodrigo", "r@r.com", "2024-01-01")
console.log(novoAdmin);
console.log(novoAdmin.criarCurso('Javascript', 20));