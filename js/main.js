(function () {
  var root = document.documentElement;
  var btn = document.getElementById('theme');
  // Sempre abre no modo escuro. A troca vale só para esta visita (nada é salvo).
  function apply(theme) {
    root.setAttribute('data-theme', theme);
    var light = theme === 'light';
    btn.setAttribute('aria-pressed', light ? 'true' : 'false');
    btn.setAttribute('aria-label', light ? 'Alternar para o tema escuro' : 'Alternar para o tema claro');
  }
  btn.addEventListener('click', function () {
    apply(root.getAttribute('data-theme') === 'light' ? 'dark' : 'light');
  });
  document.getElementById('ano').textContent = new Date().getFullYear();
})();
