// 🔹 Usuários simulados
const usuarios = [
  { email: "Lucas", senha: "1234", perfil: "GESTOR_LOCAL" },
  { email: "Fagner", senha: "1234", perfil: "GESTOR_MASTER" }
];

const form = document.getElementById("login-form");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const user = document.getElementById("user").value.trim();
  const password = document.getElementById("password").value.trim();

  if(user === "" || password === "") {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  // Procura usuário simulado
  const usuario = usuarios.find(u => u.email === user && u.senha === password);

  if(!usuario) {
    alert("Credenciais inválidas");
    return;
  }

  // Redireciona de acordo com o perfil
  if(usuario.perfil === "GESTOR_LOCAL") {
    window.location.href = "/pages/dashboard/unidade.html";
  } else if(usuario.perfil === "GESTOR_MASTER") {
    window.location.href = "/pages/dashboard/corporativo.html";
  }
});
