// ---------- SIDEBAR (accordion) ----------
document.querySelectorAll('.has-sub').forEach(item => {
  item.addEventListener('click', e => {
    e.preventDefault();

    const parent = item.parentElement;
    const submenu = parent.querySelector('.submenu');

    // Fecha todos os outros submenus
    document.querySelectorAll('.submenu').forEach(s => {
      if (s !== submenu) s.style.display = 'none';
    });

    // Abre/fecha o submenu clicado
    if (submenu) {
      const isOpen = submenu.style.display === 'flex';
      submenu.style.display = isOpen ? 'none' : 'flex';
    }
  });
});


// ---------- TOPBAR (dropdowns: 🔔 ❔ 👤) ----------
(function () {
  function closeAllDropdowns() {
    document.querySelectorAll('.dropdown').forEach(d => d.style.display = 'none');
  }

  function setupDropdown(buttonId, dropdownId) {
    const btn = document.getElementById(buttonId);
    const dropdown = document.getElementById(dropdownId);
    if (!btn || !dropdown) return;

    // Abre/fecha o dropdown ao clicar
    btn.addEventListener('click', (e) => {
      e.stopPropagation(); // evita fechar imediatamente
      const isOpen = dropdown.style.display === 'block';
      closeAllDropdowns();
      dropdown.style.display = isOpen ? 'none' : 'block';
    });

    // Clicar dentro do dropdown não fecha
    dropdown.addEventListener('click', (e) => e.stopPropagation());
  }

  // Ativa os 3 dropdowns
  setupDropdown('notif-btn', 'notif-dropdown');
  setupDropdown('help-btn', 'help-dropdown');
  setupDropdown('user-btn', 'user-dropdown');

  // Clique fora fecha todos
  document.addEventListener('click', closeAllDropdowns);
})();


// ---------- BADGE DE NOTIFICAÇÕES ----------
function setNotificationCount(count) {
  const badge = document.getElementById('notif-badge');
  if (!badge) return;

  if (count > 0) {
    badge.textContent = count;
    badge.style.display = 'inline-block';
  } else {
    badge.style.display = 'none'; // esconde se não houver notificações
  }
}

// Exemplo inicial
setNotificationCount(3);
