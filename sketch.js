let mabel
let pig
let grama
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
  venceu = loadImage ('venceu.png')
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
  

  //venceu
  if (x === tm*7 && y === tm*7){
    image(venceu, 100,100, 400, 400)
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







