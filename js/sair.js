document.addEventListener("DOMContentLoaded", () => {
  const btnCancelar = document.getElementById("cancelar");
  const btnConfirmar = document.getElementById("confirmar");

  btnCancelar.addEventListener("click", () => {
    // Volta para o dashboard (ou última página acessada)
    window.location.href = "/pages/dashboard.html";
  });

  btnConfirmar.addEventListener("click", () => {
    // Redireciona para página de login (encerrando sessão)
    alert("Sessão encerrada com sucesso!");
    window.location.href = "/pages/login.html";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const logoutBtn = document.querySelector("#user-dropdown a[href='/logout.html']"); 
  const popup = document.getElementById("popup-logout");
  const btnNao = document.getElementById("popup-nao");
  const btnSim = document.getElementById("popup-sim");

  if (logoutBtn) {
    logoutBtn.addEventListener("click", (e) => {
      e.preventDefault();
      popup.style.display = "block"; // mostra popup
    });
  }

  btnNao.addEventListener("click", () => {
    popup.style.display = "none"; // fecha popup
  });

  btnSim.addEventListener("click", () => {
    popup.style.display = "none";
    window.location.href = "/pages/auth/login.html"; // redireciona login
  });
});
