const images = document.querySelectorAll('.slide');
const setaAvancar = document.getElementById('seta-avancar');
const setaVoltar = document.getElementById('seta-voltar');

let imagemAtual = 0;

setaAvancar.addEventListener('click', function (){

    if(imagemAtual === images.length - 1 ){
        alert("Gostaria de informá-lo(a), que você chegou no final do nosso catalago de imagens. Aperte a seta para voltar conforme solicitado. Agora, o banner ficará parada por não haver mais imagens.");
        return;
    }
    imagemAtual++;

   esconderImagemAberta();
   mostrarImagemAtual();
   esconderOuMostarAsSetas();
});


setaVoltar.addEventListener('click', function(){
    
    if(imagemAtual === 0){
        alert("Gostaria de informá-lo(a), que você chegou no final do nosso catalago de imagens. Aperte a seta para avançar conforme solicitado. Agora, o banner ficará parada por não haver mais imagens.");
        return;
    }
    imagemAtual--;

    esconderImagemAberta();
    mostrarImagemAtual();
    esconderOuMostarAsSetas();
});

function mostrarImagemAtual() {
    images[imagemAtual].classList.add("mostrar");
};

function esconderOuMostarAsSetas() {

    const naoEhAPrimeiraImage = imagemAtual !== 0;

    if (naoEhAPrimeiraImage) {
        setaVoltar.classList.remove("opacidade");
    } else {
        setaVoltar.classList.add("opacidade");
    }

    const ultimaImagem = imagemAtual === images.length - 1;

    if (ultimaImagem) {
        setaAvancar.classList.add("opacidade");
    } else {
        setaAvancar.classList.remove("opacidade");
    }
};

function esconderImagemAberta() {
    const ImagemAberta = document.querySelector(".mostrar");
    ImagemAberta.classList.remove("mostrar");
};
