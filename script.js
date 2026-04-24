const menuBtn = document.getElementById("menu-btn");
const navbar = document.getElementById("navbar");

console.log(menuBtn);
console.log(navbar);

menuBtn.addEventListener("click", () => {
  console.log("clicou");
  navbar.classList.toggle("active");
});
document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', function(e){
        e.preventDefault();

        const id = this.getAttribute('data-link');
        const section = document.getElementById(id);

        section.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
function irParaEndereco() {
  document.getElementById("endereco").scrollIntoView({
    behavior: "smooth"
  });
}

function irParaContato() {
  document.getElementById("contato").scrollIntoView({
    behavior: "smooth"
  });
}

let navbar = document.querySelector('.navbar');

// Isso aqui é o que você já tinha (MANTÉM)
document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
}

// Isso aqui é o que você está ACRESCENTANDO (NOVO)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70, // Ajusta para não cobrir o título da seção
                behavior: 'smooth'
            });
        }
    });
});