Cenas = {};

//Cenas (States) do jogo
Cenas.GameOver = function(){ };  
Cenas.GamePlay = function(){ };  
Cenas.Instrucoes = function(){ }; 
Cenas.Menu = function(){ }; 
Cenas.Preload = function(){ }; 


var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'game-div', { preload: preload, create: create});

function preload() {
this.load.image('preloadBar', 'imgs/preload_bar.png');
}

function create() {
game.state.start('Preload');
}


