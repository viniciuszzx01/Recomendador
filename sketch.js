let campoIdade;
let campoFantasia;
let campoComedia;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoComedia = createCheckbox("Gosta de comedia?");
}
function draw() {
  background("white");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeComedia = campoComedia.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeComedia);
  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}
function geraRecomendacao(idade, gostaDeFantasia, gostaDeComedia) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "Norbit ";
    } else {
      if (idade >= 12) {
        if(gostaDeFantasia || gostaDeComedia) {
          return "Fantasia 2000 ";          
        } else{
         return "Se Enlouquecer, Não se Apaixone";
        }
      } else {
        if (gostaDeFantasia) {
          return "Heavy Metal: Universo em Fantasia";
        } else {
          return "O Rei da Comédia";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "Música e Fantasia ";
    } else {
      return "Os Verdadeiros Reis da Comédia";
    }
  }
}
