
//create a synth and connect it to the main output (your speakers)
let button1
let A, B
let synth
let player1

function preload() {
	A = loadImage("images/Arpit_100px.png")
  B = loadImage("images/Bombay_100px.png")
   player1 = new Tone.Player({
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

  if(keyCode === 50){
    image(B, random(width-A.width), random(height-A.height))
    player1.start()    
  }

  if(keyCode == 83){
    player1.stop();
  }
}


			// function playNote() {
			// 	// create a synth
			// 	// play a note from that synth
			// 	synth.triggerAttackRelease("C4", "8n");
			// }


