document.getElementById('recuperar-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  if (!email) {
    alert('Por favor, informe seu e-mail.');
    return;
  }

  // Simulação (futuro: integrar com Supabase Auth)
  alert(`Se o e-mail ${email} estiver cadastrado, enviaremos um link de redefinição.`);

  // Ex.: Supabase (quando integrar)
  // await supabase.auth.resetPasswordForEmail(email, {
  //   redirectTo: `${location.origin}/pages/auth/login.html`
  // });
});
