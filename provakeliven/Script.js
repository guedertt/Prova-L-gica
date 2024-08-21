//cria array
let usuarios = [];

//funcao pra criar usuario
function adicionarUsuario(nome, idade, email) {
    
    if (!nome || !idade || !email) {
        console.log("insira todos os dados corretamente");
        return;
    }
    
    if (idade <= 0) {
        console.log("a idade tem que ser superior a 0");
        return;
    }
    
    const usuario = {
        nome: nome,
        idade: idade,
        email: email
    };

    //coloca no array
    usuarios.push(usuario);
    }

//funcao pra listar e aparecer no console
function listarUsuarios() {
    if (usuarios.length === 0) {
        console.log("nenhum usuario encontrado.");
        return;
    }
    
    console.log("usuarios no sistema:");
    usuarios.forEach((usuario, index) => {
        console.log(`${index + 1}. Nome: ${usuario.nome}, Idade: ${usuario.idade}, Email: ${usuario.email}`);
    });
}


adicionarUsuario("Keliven", 55, "professorakeliven@gmail.com");
adicionarUsuario("Breno", 5, "breno@estudante.sesisenai.com");
listarUsuarios();
