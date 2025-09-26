const form = document.getElementById("login-form");
const togglePassword = document.getElementById("togglePassword");
const passwordField = document.getElementById("password");

// Mostrar/ocultar senha
togglePassword.addEventListener("change", () => {
  passwordField.type = togglePassword.checked ? "text" : "password";
});

// Simulação de login
form.addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = passwordField.value.trim();

  if(email === "" || password === "") {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  console.log("Login enviado:", { email, password });
  alert("Login realizado com sucesso!");
  window.location.href = "/pages/dashboard/unidade.html";
});
