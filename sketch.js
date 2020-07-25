function setup(){
  createCanvas(600,600);
  angleMode(DEGREES);
}
function draw(){
  background(0);
  
  let hr = hour();
  let mn = minute();
  let sc = second();
  
  //digital clock
  push();
  textSize(100);
  fill(200,0,200);
  translate(300,250)
  text(hr+":"+mn+":"+sc,-200,300);
  fill(50,100,90);
  ellipse(0,0,350,350);
  pop();

  //analog clock
  translate(300,250);
  rotate(-90);
  strokeWeight(8); 
  noFill();
  stroke(255,0,0);
  let time1 = map(sc,0,60,0,360);
  arc(0,0,300,300,0,time1);

  push();
  rotate(time1)
  stroke(255,0,0);
  line(0,0,110,0);
  pop();

  stroke(0,255,0);
  let time2 = map(mn,0,60,0,360);
  arc(0,0,280,280,0,time2);

  push();
  rotate(time2);
  stroke(0,255,0);
  line(0,0,95,0);
  pop();

  stroke(0,0,255);
  let time3 = map(hr %12,0,12,0,360);
  arc(0,0,260,260,0,time3);

  push();
  rotate(time3);
  stroke(0,0,255);
  line(0,0,60,0);
  pop();

  stroke(255);
  point(0,0);
}