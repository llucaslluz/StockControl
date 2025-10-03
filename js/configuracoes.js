document.addEventListener("DOMContentLoaded", () => {
  
  document.getElementById("btn-interface").addEventListener("click", () => {
    const tema = document.getElementById("tema").value;
    const idioma = document.getElementById("idioma").value;
    const fuso = document.getElementById("fuso").value;
    alert(`Configurações de Interface salvas!\nTema: ${tema}\nIdioma: ${idioma}\nFuso: ${fuso}`);
  });

  document.getElementById("btn-notif").addEventListener("click", () => {
    const email = document.getElementById("notif-email").checked;
    const alertas = document.getElementById("notif-alertas").checked;
    const aviso = document.getElementById("aviso-epi").value;
    alert(`Notificações atualizadas!\nE-mail: ${email}\nAlertas: ${alertas}\nAviso EPIs: ${aviso}`);
  });

  document.getElementById("btn-seguranca").addEventListener("click", () => {
    const doisfa = document.getElementById("doisfa").value;
    const exp = document.getElementById("exp-sessao").value;
    alert(`Segurança salva!\n2FA: ${doisfa}\nExpiração: ${exp}`);
  });

  document.getElementById("btn-integracoes").addEventListener("click", () => {
    const api = document.getElementById("api-key").value;
    const nfxml = document.getElementById("nf-xml").checked;
    alert(`Integrações salvas!\nAPI: ${api || "Nenhuma"}\nNF XML: ${nfxml ? "Ativado" : "Desativado"}`);
  });

});
