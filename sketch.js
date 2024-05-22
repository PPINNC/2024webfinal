function setup(){
  createCanvas(800, 600);
  bg = loadImage('../images/Cherry.png');
}

function cdotr(){
  fill(255, 0, 0);
  circle(random(0, 800), random(0, 600), random(3, 30));
}
function cdotg(){
  fill(0, 255, 0);
  circle(random(0, 800), random(0, 600), random(3, 30));
}
function cdotb(){
  fill(0, 0, 255);
  circle(random(0, 800), random(0, 600), random(3, 30));
}

/*let font;
function preload(){
  font=loadFont("");
}*/

let a=0, kx=0, ky=0, state=0, B=[0, 0, 0], b=[0, 0, 0], s=10; //variable

function draw(){
  let x=mouseX, y=mouseY, r=random(0,100);
  //background(72, 209, 204);
  background(bg);
  if(b[0]==B[0] && b[1]==B[1] && b[2]==B[2]){
    do{
      B[0]=floor(random(0,257)); 
      B[1]=floor(random(0,257)); 
      B[2]=floor(random(0,257));
    } while((B[0]+B[1]+B[2])<450 || B[0]>100);
  }
  if(state==1) a+=floor(0.05*r);
  else a=0;
  if(r<600){
    for(let i=0; i<3; i++){
      if(b[i]<B[i]) b[i]++;
      else if(b[i]>B[i]) b[i]--;
    }
  }
  if(kx!=x || ky!=y) state=1; else state=0;
  if(kx<x) kx+=1; else if(kx>x) kx-=1;
  if(ky<y) ky+=1; else if(ky>y) ky-=1; 
  s++; //variable setting
    
  push();
  fill(72, 209, 204);
  if(s>130) s=10;
  strokeWeight(2);
  stroke('red');
  triangle(x, y-20*s, x-10*s*1.732, y+10*s, x+10*s*1.732, y+10*s);
  stroke('orange');
  triangle(x, y-16*s, x-8*s*1.732, y+8*s, x+8*s*1.732, y+8*s);
  stroke('green');
  triangle(x, y-12*s, x-6*s*1.732, y+6*s, x+6*s*1.732, y+6*s);
  stroke('blue');
  triangle(x, y-8*s, x-4*s*1.732, y+4*s, x+4*s*1.732, y+4*s);
  pop();
  
  push();
  translate(x, y);
  for(let i=0; i<50; i++){
    rotate(random(0, 2)*PI);
    line(0, 0, random(50, 200), random(50, 200));
  }
  pop();
  
  push();
  text('B=[', 10, 15); text(B[0], 30, 15); text(',', 50, 15);
  text(B[1], 60, 15); text(',', 80, 15);
  text(B[2], 90, 15); text(']', 110, 15);
  text('b=[', 10, 30); text(b[0], 30, 30); text(',', 50, 30);
  text(b[1], 60, 30); text(',', 80, 30);
  text(b[2], 90, 30); text(']', 110, 30);
  text('a=', 10, 45); text(a, 30, 45);
  text('r=', 10, 60); text(r, 30, 60);
  text('x=', 10, 75); text(x, 30, 75);
  text('y=', 60, 75); text(y, 80, 75);
  text('kx=', 10, 90); text(kx, 30, 90);
  text('ky=', 60, 90); text(ky, 80, 90);
  text('state=', 10, 105); text(state, 45, 105);
  pop(); //information
  
  push();
  textSize(80);
  stroke('yellow');
  strokeWeight(5);
  fill('purple');
  textAlign(CENTER, CENTER);
  textFont("Madimi One");
  text('ALIEN', 400, 80);
  pop(); //title
  
  push();
  stroke('orange');
  strokeWeight(2);
  fill((b[0]+b[1])/2, (b[1]+b[2])/2, (b[0]+b[2])/2);
  rect(x-205, y-40, 30, 90);
  rect(x+175, y-40, 30, 90);
  fill((b[0]+b[2])/2, (b[0]+b[1])/2, (b[1]+b[2])/2);
  triangle(x, y, x-195, y-100, x-195, y+100);
  triangle(x, y, x+195, y-100, x+195, y+100);
  fill(30, 195, 250);
  ellipse(x, y, 350, 400); 
  pop(); //face&ears
  
  push();
  stroke('pink');
  strokeWeight(3);
  fill('darkred');
  arc(x-80, y-29, 125, 100, 1.15*PI, 1.85*PI);
  arc(x-80, y-80, 125, 100, 0.15*PI, 0.85*PI);
  arc(x+80, y-29, 125, 100, 1.15*PI, 1.85*PI);
  arc(x+80, y-80, 125, 100, 0.15*PI, 0.85*PI);
  arc(x-25.5, y-120, 100, 125, -0.35*PI, 0.35*PI);
  arc(x+25.5, y-120, 100, 125, 0.65*PI, 1.35*PI);
  stroke(150,150,150);
  fill(b[0], b[1], b[2]);
  circle(x-80+60*(x-400)/800, y-54+16*(y-300)/600, 30);
  fill(b[2], b[1], b[0]);
  circle(x+80+60*(x-400)/800, y-54+16*(y-300)/600, 30);
  fill(b[1], b[2], b[0]);
  circle(x+16*(x-400)/800, y-120+60*(y-300)/600, 30);
  pop(); //eyes
  
  push();
  fill(30,195,250);
  stroke('darkblue');
  strokeWeight(2);
  if(state && (a%5)<=1){
    line(x-20, y+10, x-20, y+80+r/30);
    line(x+20, y+10, x+20, y+80+r/30);
    arc(x-20, y+100+r/3, 50, 50, 0.15*PI, 1.35*PI);
    arc(x+20, y+100+r/3, 50, 50, -0.35*PI, 0.85*PI);
  }
  else{
    line(x-20, y+10, x-20, y+80);
    line(x+20, y+10, x+20, y+80);
    arc(x-20, y+100, 50, 50, 0.15*PI, 1.35*PI);
    arc(x+20, y+100, 50, 50, -0.35*PI, 0.85*PI);
  }
  pop(); //mouse
  
  push();
  for(let i=0; i<5; i++){
    let x=floor(random(1,4));
    if(x==1) cdotr();
    else if(x==2) cdotg();
    else cdotb();
  }
  pop(); //dots
}