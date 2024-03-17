
//create a synth and connect it to the main output (your speakers)
let button1
let A, B, C, D, E, F, G, H, I, J
let synth
let player1, player2, player3, player4, player5, player6, player7, player8, player9, player10

function preload() {
	A = loadImage("images/Arpit_100px.png")
  B = loadImage("images/Bombay_100px.png")
  C = loadImage("images/Mandir_100px.png")
  D = loadImage("images/Purush_100px.png")
  E = loadImage("images/Tailor_100px.png")
  F = loadImage("images/Love_100px.png")
  G = loadImage("images/Chandpol_100px.png")
  H = loadImage("images/Bombay_100px.png")
  I = loadImage("images/Bombay_100px.png")
  J = loadImage("images/Bombay_100px.png")

  player1 = new Tone.Player({
    url: "https://tonejs.github.io/audio/berklee/gong_1.mp3",
    loop: true,
    // autostart: true,
  }).toDestination();

  player2 = new Tone.Player({
    url: "https://tonejs.github.io/audio/berklee/gong_1.mp3",
    loop: true,
    // autostart: true,
  }).toDestination();

  player3 = new Tone.Player({
    url: "https://tonejs.github.io/audio/berklee/gong_1.mp3",
    loop: true,
    // autostart: true,
  }).toDestination();

  player4 = new Tone.Player({
    url: "https://tonejs.github.io/audio/berklee/gong_1.mp3",
    loop: true,
    // autostart: true,
  }).toDestination();

  player5 = new Tone.Player({
    url: "https://tonejs.github.io/audio/berklee/gong_1.mp3",
    loop: true,
    // autostart: true,
  }).toDestination();

  player6 = new Tone.Player({
    url: "https://tonejs.github.io/audio/berklee/gong_1.mp3",
    loop: true,
    // autostart: true,
  }).toDestination();

  player7 = new Tone.Player({
    url: "https://tonejs.github.io/audio/berklee/gong_1.mp3",
    loop: true,
    // autostart: true,
  }).toDestination();

  player8 = new Tone.Player({
    url: "https://tonejs.github.io/audio/berklee/gong_1.mp3",
    loop: true,
    // autostart: true,
  }).toDestination();

  player9 = new Tone.Player({
    url: "https://tonejs.github.io/audio/berklee/gong_1.mp3",
    loop: true,
    // autostart: true,
  }).toDestination();

  player10 = new Tone.Player({
    url: "https://tonejs.github.io/audio/berklee/gong_1.mp3",
    loop: true,
    // autostart: true,
  }).toDestination();

}

function setup() {
	createCanvas(windowWidth, windowHeight)
	rectMode(CENTER)
  synthA = new Tone.Synth().toDestination();

}

function draw() {
  // background(255,40)
	// for(i=0;i<10;i++){
	// 	x = map(i,0,9,0,width)
	// }
  // image(B, mouseX,mouseY)
}

function keyReleased() {
	//keycode for 1 
	if(keyCode === 49) {
		image(A, random(width-A.width), random(height-A.height))
    // Tone.start()
    player1.start()    
	}

  //keycode for 2
  if(keyCode === 50){
    image(B, random(width-A.width), random(height-A.height))
    player2.start()    
  }

  //keycode for 3
  if(keyCode === 51){
    image(C, random(width-A.width), random(height-A.height))
    player3.start()    
  }

  //keycode for 4
  if(keyCode === 52){
    image(D, random(width-A.width), random(height-A.height))
    player4.start()    
  }

  //keycode for 5
  if(keyCode === 53){
    image(E, random(width-A.width), random(height-A.height))
    player5.start()    
  }

  //keycode for 6
  if(keyCode === 54){
    image(F, random(width-A.width), random(height-A.height))
    player6.start()    
  }

  //keycode for 7
  if(keyCode === 55){
    image(G, random(width-A.width), random(height-A.height))
    player7.start()    
  }

  //keycode for 8
  if(keyCode === 56){
    image(H, random(width-A.width), random(height-A.height))
    player8.start()    
  }

  //keycode for 9
  if(keyCode === 57){
    image(I, random(width-A.width), random(height-A.height))
    player9.start()    
  }

   //keycode for 0
   if(keyCode === 48){
    image(J, random(width-A.width), random(height-A.height))
    player10.start()    
  }

  if(keyCode == 83){
    player1.stop();
    player2.stop();
    player3.stop();
    player4.stop();
    player5.stop();
    player6.stop();
    player7.stop();
    player8.stop();
    player9.stop();
    player10.stop();
  }
}


			// function playNote() {
			// 	// create a synth
			// 	// play a note from that synth
			// 	synth.triggerAttackRelease("C4", "8n");
			// }


