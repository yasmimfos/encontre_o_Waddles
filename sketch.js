let mabel
let pig
let grama
let arvore
let venceu
let perdeu

const tm = 64
const vel = 64
const arv = 64

let x = 0
let y = 0

let botao

function setup() {
  createCanvas(576, 576);

//carregar as imagens
  
  mabel = loadImage('mabel.png')
  grama = loadImage('grama.png')
  pig = loadImage('waddles.png')
  arvore = loadImage('arvore.png')
  perdeu = loadImage('1.png')
  venceu = loadImage ('2.png')
}

function draw() {
  //delimitar as dimesões do personagem
  background(150, 80, 30);
  if (x < 0){
    x = 0
  }
  if (y < 0){
    y = 0
  }
  if (x > tm*8){
    x = tm*8
  }
  if (y > tm*8){
    y = tm*8
  }
  //colocar a grama
  for (let a = 0; a < 9; a++){
    for (let b = 0; b < 9; b++){
      image(grama, a*tm, b*tm, tm, tm)
    }
  }
  //carregar imagens
  image(pig, tm*7, tm*7, 75, 75)
  image(mabel, x, y, tm, tm)
  
  //colocar as ávores no labirinto
  image(arvore, arv*0, arv*3, tm, tm)
  image(arvore, arv*0, arv*4, tm, tm)
  image(arvore, arv*1, arv*1, tm, tm)
  image(arvore, arv*1, arv*6, tm, tm)
  image(arvore, arv*2, arv*1, tm, tm)
  image(arvore, arv*2, arv*2, tm, tm)
  image(arvore, arv*2, arv*3, tm, tm)
  image(arvore, arv*2, arv*4, tm, tm)
  image(arvore, arv*2, arv*5, tm, tm)
  image(arvore, arv*3, arv*4, tm, tm)
  image(arvore, arv*3, arv*5, tm, tm)
  image(arvore, arv*3, arv*7, tm, tm)
  image(arvore, arv*4, arv*0, tm, tm)
  image(arvore, arv*4, arv*2, tm, tm)
  image(arvore, arv*4, arv*7, tm, tm)
  image(arvore, arv*5, arv*0, tm, tm)
  image(arvore, arv*5, arv*4, tm, tm)
  image(arvore, arv*6, arv*0, tm, tm)
  image(arvore, arv*6, arv*1, tm, tm)
  image(arvore, arv*6, arv*2, tm, tm)
  image(arvore, arv*6, arv*5, tm, tm)
  image(arvore, arv*6, arv*6, tm, tm)
  image(arvore, arv*7, arv*2, tm, tm)
  image(arvore, arv*7, arv*3, tm, tm)
  
  for (let a = 0; a <9; a++){
    image(arvore, a*tm, 512, tm, tm)
  }
  for (let a = 0; a <8; a++){
    image(arvore, 512, a*tm, tm, tm)
  }




  //venceu
  if (x === tm*7 && y === tm*7){
    image(venceu, 0, 0, 576, 576)
    //botao de reiniciar
    botao = createButton('Reiniciar')
    botao.mousePressed(reset)
    noLoop()
  }
    
  //perdeu
 if (x === tm*0 && y === tm*3 ||x === tm*0 && y === tm*4){
    image(perdeu, 0, 0, 576, 576)
    //botao de reiniciar
    botao = createButton('Reiniciar')
    botao.mousePressed(reset)
    noLoop()
}
if (x === tm*1 && y === tm*1 ||x === tm*1 && y === tm*6){
    image(perdeu, 0, 0, 576, 576)
    //botao de reiniciar
    botao = createButton('Reiniciar')
    botao.mousePressed(reset)
    noLoop()
}
if (x === tm*2 && y === tm*1 || x === tm*2 && y === tm*2 ||x === tm*2 && y === tm*3 ||x === tm*2 && y === tm*4){
    image(perdeu, 0, 0, 576, 576)
    //botao de reiniciar
    botao = createButton('Reiniciar')
    botao.mousePressed(reset)
    noLoop()
}
if (x === tm*3 && y === tm*4 ||x === tm*3 && y === tm*5 ||x === tm*3 && y === tm*7){
    image(perdeu, 0, 0, 576, 576)
    //botao de reiniciar
    botao = createButton('Reiniciar')
    botao.mousePressed(reset)
    noLoop()
}

if (x === tm*4 && y === tm*0 ||x === tm*4 && y === tm*2 ||x === tm*4 && y === tm*7 ||x === tm*4 && y === tm*8){
    image(perdeu, 0, 0, 576, 576)
    //botao de reiniciar
    botao = createButton('Reiniciar')
    botao.mousePressed(reset)
    noLoop()
}

if (x === tm*5 && y === tm*0 ||x === tm*5 && y === tm*4 ||x === tm*6 && y === tm*1 ||x === tm*6 && y === tm*2||x === tm*6 && y === tm*5 ||x === tm*6 && y === tm*6){
    image(perdeu, 0, 0, 576, 576)
    //botao de reiniciar
    botao = createButton('Reiniciar')
    botao.mousePressed(reset)
    noLoop()
}

if (x === tm*7 && y === tm*3 ||x === tm*8 && y === tm*0 ||x === tm*8 && y === tm*1 ||x === tm*8 && y === tm*2||x === tm*8 && y === tm*5 ||x === tm*8 && y === tm*6){
    image(perdeu, 0, 0, 576, 576)
    //botao de reiniciar
    botao = createButton('Reiniciar')
    botao.mousePressed(reset)
    noLoop()
}

}
//função pra quando apertar o botão reset
function reset() {
  x = 0
  y = 0
  botao.remove()
  loop()
}
//fazer a mabel andar
function keyPressed(){
  //UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW
  if(keyIsDown(DOWN_ARROW)){
    y += vel
  }
  if(keyIsDown(UP_ARROW)){
    y -= vel
  }
  if(keyIsDown(RIGHT_ARROW)){
    x += vel
  }
  if(keyIsDown(LEFT_ARROW)){
    x -= vel
  }
}

//WASD







