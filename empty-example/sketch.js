var tiles = [];
var palette = ["#4286f4", "#2e60b2", "#5276af", "#6f91c6", "#3485aa", "#5d8ba0", "#3d85a5", "#5eb8e0", "#1f8aba", "#15a8ea", "#1ec2db", "#44cde2", "#22acc1", "#5096a0", "#85d9e5", "0c6399", "#2d6f99", "#5886a3", "#55ccc0", "#35c6b8", "#04a393", "#46d6c7", "#11c485", "#46ce9e", "#69c6a5", "#56b6ce", "#1fd19e", "#16af84", "#1a8ea8", "#086f8e"]
function setup() {
  // put setup code here
  for(var i=0; i<900; i+=30){
    for(var j=0; j<900; j+=30){
      tiles.push(new Tile(i, j));
    }
  }
  createCanvas(900, 900);
  console.log(tiles);
  
}

function draw() {
  background(0, 0, 0);
  tiles.forEach(function(tile) {
    tile.display();
  });
}


function Tile(xcoord, ycoord) {
  this.x = xcoord;
  this.y = ycoord;
  this.color = color('#4286f4');
  this.state = false;
  this.switch = function() {
    this.state = !this.state;
  }
  this.display = function() {
    if(this.state == true){
      noStroke();
      fill(this.color);
      rect(this.x, this.y, 30, 30);
    }
  };
}

function mousePressed() {
  tile = tiles[Math.floor(Math.random()*tiles.length)];
  tile.color = color(palette[Math.floor(Math.random()*palette.length)]);
  tile.switch();
}