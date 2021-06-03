var element=document.getElementById("canvas1")
var images=["mars.jpg","Mars1.jpg","Mars2.jpg","Mars3.jpg","Mars4.jpg","Mars5.jpg"]
var randomnumber=Math.floor(Math.random()*6)
console.log(randomnumber)
var drawing= element.getContext("2d")
var roverwidth=100;
 var roverheight=100;
  var background=images[randomnumber];
   var roverimage="rover.png";
    var roverx=400;
     var rovery=400;
      var backgroundimg;
       var roverimg;
  function add(){
    backgroundimg=new Image();
     backgroundimg.onload=uploadbackgroundimage;
      backgroundimg.src=background;
       roverimg= new Image();
        roverimg.onload=uploadroverimage;
        roverimg.src =roverimage;
  }
  function uploadbackgroundimage(){
      drawing.drawImage(backgroundimg,0,0,element.width,element.height)
  }
  function uploadroverimage(){
      drawing.drawImage(roverimg,roverx,rovery,roverwidth,roverheight)
  }
  window.addEventListener("keydown",downkey)
  function downkey(e){
  if (e.keyCode=='38'){
     uparrow() 
  } 
  if (e.keyCode=='40'){
     downarrow()
  }
  if(e.keyCode=='37'){
      leftarrow()
  }
  if (e.keyCode=='39'){
      rightarrow()
  }
  }
  function uparrow(){
      if(rovery>=0){
        rovery= rovery-10
        uploadbackgroundimage()
        uploadroverimage()
      }
  }
  function downarrow(){
    if(rovery<=700){
      rovery= rovery+10
      uploadbackgroundimage()
      uploadroverimage()
    }
}
function leftarrow(){
    if(roverx>=0){
      roverx= roverx-10
      uploadbackgroundimage()
      uploadroverimage()
    }
}
function rightarrow(){
    if(roverx<=700){
      roverx= roverx+10
      uploadbackgroundimage()
      uploadroverimage()
    }
}

