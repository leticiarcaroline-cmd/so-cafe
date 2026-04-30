const menuBtn = document.getElementById(“menu-btn”);
const navbar = document.getElementById(“navbar”);

// Abre/fecha menu mobile
menuBtn.addEventListener(“click”, () => {
navbar.classList.toggle(“active”);
});

// Fecha menu ao rolar a página
window.addEventListener(“scroll”, () => {
navbar.classList.remove(“active”);
});

// Smooth scroll nos links do navbar
document.querySelectorAll(’.navbar a’).forEach(link => {
link.addEventListener(‘click’, function (e) {
e.preventDefault();
navbar.classList.remove(“active”); // fecha menu ao clicar
const id = this.getAttribute(‘href’).replace(’#’, ‘’);
const section = document.getElementById(id);
if (section) {
window.scrollTo({
top: section.offsetTop - 70,
behavior: ‘smooth’
});
}
});
});

// Carrega cardápio do JSON
async function carregarMenu() {
try {
const resposta = await fetch(’./cardapio.json’);
const cardapio = await resposta.json();
const menuContainer = document.querySelector(”.menu-container”);

```
if (!menuContainer) return;

menuContainer.innerHTML = "";

cardapio.forEach(cafe => {
  menuContainer.innerHTML += `
    <div class="menu-item">
      <span class="item-name">${cafe.nome}</span>
      <span class="item-price">R$ ${cafe.preco.toFixed(2).replace('.', ',')}</span>
    </div>
  `;
});
```

} catch (err) {
console.error(“Erro ao carregar cardápio:”, err);
}
}

carregarMenu();