document.addEventListener("DOMContentLoaded", () => {
  const btnEditar = document.getElementById("btn-editar");
  const campos = document.querySelectorAll(".dados-grid input");

  btnEditar.addEventListener("click", () => {
    const isDisabled = campos[0].disabled;
    campos.forEach(c => c.disabled = !isDisabled);
    btnEditar.textContent = isDisabled ? "Salvar Alterações" : "Editar Dados";
    if (!isDisabled) alert("Dados atualizados com sucesso!");
  });

  document.getElementById("btn-seguranca").addEventListener("click", () => {
    const senha = document.getElementById("senha").value;
    const doisfa = document.getElementById("doisfa").value;
    alert("Segurança atualizada!\nSenha: " + (senha ? "Alterada" : "Não alterada") + "\n2FA: " + doisfa);
  });

  document.getElementById("btn-preferencias").addEventListener("click", () => {
    const tema = document.getElementById("tema").value;
    const idioma = document.getElementById("idioma").value;
    const notif = document.getElementById("notif").checked;
    alert(`Preferências salvas!\nTema: ${tema}\nIdioma: ${idioma}\nNotificações: ${notif ? "Sim" : "Não"}`);
  });
});
