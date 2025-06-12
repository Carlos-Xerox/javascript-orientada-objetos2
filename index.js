import User from "./User.js"
import Admin from "./Admin.js"
import Docente from "./Docente.js"

const novoUser = new User("Juliana", "j@j.com", "2024-01-01")
console.log(novoUser.exibirInfos())

const dadosFicticios = User.exibirInfosGenericas('Cassio', 'c@c.com');
console.log(dadosFicticios);
// novoUser.nome = "Julia"
// console.log(novoUser.nome);

// novoUser.#nome = "Márcia"
// console.log(novoUser.exibirInfos());
// console.log(novoUser.nome);

// const novoAdmin = new Admin("Rodrigo", "r@r.com", "2024-01-01")
// console.log(novoAdmin.exibirInfos());
// // console.log(novoAdmin.exibeNome());

// const novaDocente = new Docente("Rosa", "r2@r.com", "2024-01-01")
// console.log(novaDocente.exibirInfos());