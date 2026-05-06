window.addEventListener("scroll", function(){
    const scroll = window.scrollY;
    document.querySelector(".parallax").style.transform = "translateY(" + scroll * (-1) * 0.15 + "px)";
});

function abrirModal(titulo, imagem, descricao) {
    document.getElementById("modal").style.display = "block";

    document.body.style.overflow = "hidden";

    document.getElementById("titulo-modal").innerText = titulo;
    document.getElementById("descricao-modal").innerText = descricao;
    document.getElementById("modal-img").src = imagem;
}

function fecharModal() {
    document.getElementById("modal").style.display = "none";

    document.body.style.overflow = "auto";
}