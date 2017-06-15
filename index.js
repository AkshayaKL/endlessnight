var canvas=document.getElementById("mycanvas");
var ctx=canvas.getContext("2d");
var mazex;
var mazey;
var i;
var man=document.getElementById("man");
var manx;
var many;
var foodx,foody;
var villain2=document.getElementById("villain2");
var trial=1;
var fire=new Image();
var comment=[];
for(i=1;i<10;i++)
comment[i]=0;
fire.src="fire.png";
var movingright;
var movingleft;
var movingup;
var movingdown;
var score;
var bombx;
var bomby;
var food=new Image();
food.src="food.png"; 
var bomb=new Image();
var spaceshoot;
bomb.src="bomb.png";
var seconds;
var maxcoins;
var x,y,yes,coinx,coiny,coin;
var level=1;
var gamer;
var levels={lev1x:" ",lev1y:" "};
var coinsound=document.getElementById("coinsound");
var villain=document.getElementById("villain");
var villainx=360;
var villainy=360;
var alive=true;
var dvx=2;
var dvy=2;
var bgm=document.getElementById("bgm");
window.onload=function()
{bgm.play();
bgm.loop=true;
};
levels.lev1x=[];
levels.lev1y=[];
document.addEventListener("keydown",play,false);

        
function play(e)
{
if((e.keyCode==80)&&(trial==1))
{preload();
actualgame();
document.getElementById("commentbox").innerHTML="You are in this task all alone"
trial++;}
}
var status="Failed";
document.addEventListener("keydown",movement,false);
document.addEventListener("keydown",bombplacing,false);
function drawman()
{
{ctx.drawImage(man,manx,many,40,40);}
}
function drawvillain()
{


if(manx>villainx)
villainx+=level;
else
villainx-=level;
if(many>villainy)
villainy+=level;
else
villainy-=level;
ctx.drawImage(villain,villainx,villainy,40,40);
}
var firey=360;
var firex=0;
function drawvillain2()
{
ctx.drawImage(villain2,0,360,40,40);
ctx.drawImage(fire,0,firey,40,40);
if(firey>=60)
firey-=2;
else
firey=360;

}

function drawgrid()
{
 for(i=0;i<10;i++)
  {
    ctx.beginPath();
    ctx.moveTo(mazex,0);
    ctx.lineTo(mazex,400);
    ctx.strokeStyle="black";
    ctx.stroke();
    ctx.closePath();
    mazex+=40;
  }
for(i=0;i<10;i++)
  {
    ctx.beginPath();
    ctx.moveTo(0,mazey);
    ctx.lineTo(400,mazey);
    ctx.stroke();
    ctx.closePath();
    
    mazey+=40;
  }
mazex=40;
mazey=40;
}
                      function preload()
                       {
 foodx=360;
 foody=360;
 mazex=40;
 mazey=40;
 i;
 man=document.getElementById("man");
 manx=0;
 many=0;

 movingright=true;
 movingleft=true;
 movingup=true;
 movingdown=true;
 alive=true;
 score=0;
 bombx;
 bomby;
 bomb=new Image();
 spaceshoot=0;
bomb.src="bomb.png";
 seconds=0;
 maxcoins=0;
 x,y,yes,coinx,coiny,coin;
 
 gamer;





 x=[];
 y=[];
for(i=0;i<40;i++)
  {
    x[i]=Math.ceil(((Math.random()*8)+0))*40;
    y[i]=Math.ceil(((Math.random()*8)+0))*40; 
       
  }
 yes=[];
 coinx=[];
 coiny=[];
 coin=document.getElementById("coin");

{
for(i=0;i<10;i++)
{
coinx[i]=Math.ceil(((Math.random()*8)+0))*40;
    coiny[i]=Math.ceil(((Math.random()*8)+0))*40;
for(var p=0;p<50;p++)
{ if(((x[p]==coinx[i])&&(y[p]==coiny[i])))

      {
yes[i]=true;
break;
}
else 
yes[i]=false;

}

}

}
for(i=0;i<10;i++)
{
if(!(yes[i]))
{

maxcoins++;
}
}
}

function drawwall()
{
ctx.fillStyle="black";
     for(i=0;i<40;i++)
       ctx.fillRect(x[i],y[i],40,40);
    }

function drawcoin()
{
for(i=0;i<10;i++)
{
if(!(yes[i]))
{
ctx.drawImage(coin,coinx[i]+5,coiny[i]+5,20,20);

}
}
}

function movement(e) 
{


if(e.keyCode==37)
{
      for(i=0;i<50;i++)
              {
                  if(((manx-40==x[i])&&(many==y[i]))||(manx==0)||(seconds>=15)||(maxcoins<=score)||(!alive))
                    {movingleft=false;
                      break;}
                  else
                    {movingleft=true;}
               }    
                          if(movingleft)
                                {
                                   manx-=40;
                                      drawman();
                                 }
                 }

if(e.keyCode==38)
{
      for(i=0;i<50;i++)
              {
                  if(((many-40==y[i])&&(manx==x[i]))||(many==0)||(seconds>=15)||(maxcoins<=score)||(!alive))
                    {movingup=false;
                      break;}
                  else
                    {movingup=true;}
               }    
                          if(movingup)
                                {
                                   many-=40;
                                      drawman();
                                 }
                 }

if(e.keyCode==40)
{
      for(i=0;i<50;i++)
              {
                  if(((many+40==y[i])&&(manx==x[i]))||(many+40>=400)||(seconds>=15)||(maxcoins<=score)||(!alive))
                    {movingdown=false;
                      break;}
                  else
                    {movingdown=true;}
               }    
                          if(movingdown)
                                {
                                   many+=40;
                                      drawman();
                                 }
                 }

if(e.keyCode==39)
{
          for(i=0;i<50;i++)
           {
            if(((manx+40==x[i])&&(many==y[i]))||(manx+40>=400)||(seconds>=15)||(maxcoins<=score)||(!alive))
               {movingright=false;
                      break;}
            else
               {movingright=true;}


            }
                 if(movingright)
                      {
                         manx+=40;
                           drawman();
                      }
}



}
function  bombplacing(e)
{if((e.keyCode==66)&&(spaceshoot==0))
{
ctx.drawImage(bomb,manx,many,30,30);
ctx.clearRect(manx+40,many,40,40);

for(i=0;i<50;i++)
{
if((x[i]==manx+40)&&(y[i]==many))
{
x[i]=401;
y[i]=401;
}
}
ctx.clearRect(manx-40,many,40,40);
for(i=0;i<50;i++)
{
if((x[i]==manx-40)&&(y[i]==many))
{
x[i]=401;
y[i]=401;
}
spaceshoot++;
}
ctx.clearRect(manx,many+40,40,40);
for(i=0;i<50;i++)
{
if((x[i]==manx)&&(y[i]==many+40))
{
x[i]=401;
y[i]=401;
}
}
ctx.clearRect(manx,many-40,40,40);

for(i=0;i<50;i++)
{
if((x[i]==manx)&&(y[i]==many-40))
{
x[i]=401;
y[i]=401;
}
}

}
}



function game()
{
ctx.clearRect(0,0,canvas.width,canvas.height);
drawman();
drawwall();
drawgrid();
drawcoin();
ctx.fillStyle="Red";
if(level>=2)drawvillain();

if(level>=4)drawvillain2();



if((level==1)&&(comment[1]==0))
{
document.getElementById("commentbox").innerHTML+="<br><br>   This seems like an easy piece of cake..<br> just some coins here and there  ";
comment[1]=comment[1]+1;
}
if((level==2)&&(comment[2]==0))
{
document.getElementById("commentbox").innerHTML+="<br>I could see someone coming towards me..scary.. not really..He looks funny..Boss has stupid taste you know..Okay,he has a sword and he's chasing me..I should get scared and run away..coz being brave is not worth my life<br>"
comment[2]++;
} 
if((level==3)&&(comment[3]==0))
{
document.getElementById("commentbox").innerHTML="<br>This little flying guy seems to pick speed with each level";
comment[3]++;
}
if((level==4)&&(comment[4]==0))
{
document.getElementById("commentbox").innerHTML+="<br>Okey..there is this guy with a hood now.<br>.terrible sense of fashion makes him a less convincing villain<br>..Coz his hood drops over his eyes..<br>I can pass right through him but the fire he throws is the dangerous part<br>";
comment[4]++;
}


for(i=0;i<10;i++)
{
if ((coinx[i]==manx)&&(coiny[i]==many))
{coinsound.play();
 coinx[i]=401;
 coiny[i]=401;
 score++;
 document.getElementById("score").innerHTML=score;
}
}
if((seconds==15)||(score==maxcoins))
{
clearInterval(gamer);
ctx.font="30px Arial";
ctx.fillStyle="red";
ctx.fillText("Level over",canvas.width/2,canvas.height/2,100,100);
if(score==maxcoins)
{ 
status="Passed";
ctx.fillText(status,canvas.width/2+40,canvas.height/2+40);
ctx.fillText(score,canvas.width/2+80,canvas.height/2+80);

level++;
document.getElementById(level).disabled=false;
document.getElementById(level).onclick=function()
{
preload();
actualgame();
document.getElementById(level).onclick=null;
} 
}

else
{status="Failed";
ctx.fillText(status,canvas.width/2+40,canvas.height/2+40);

ctx.fillText(score,canvas.width/2+80,canvas.height/2+80);
document.getElementById(level).onclick=function()
{
preload();
actualgame();
}
}
}
else if((level>=2)&&((Math.abs(manx-villainx)<5)&&(Math.abs(many-villainy)<5)))
{
 clearInterval(gamer);
 ctx.font="oblique 50px Tahoma"
 alive=false;
 ctx.fillText("You got killed :)",canvas.width/2,canvas.height/2,100,100);
clearInterval(timing);
}
else if((level>=4)&&((Math.abs(manx-firex)<5)&&(Math.abs(many-firey)<5)))
{
 clearInterval(gamer);
 ctx.font="oblique 50px Tahoma"
 alive=false;
 ctx.fillText("You got killed :)",canvas.width/2,canvas.height/2,100,100);
clearInterval(timing);
}
if(level>=10)
 {ctx.fillText("You owe a promotion",200,200,100,100);
  document.getElementById("commentbox").innerHTML="You wake up from your dream and surprisingly your sitting in the manager desk that you have longed for all this while..Probably it's not a dream..Even through the walls..you can see your boss smirking.. and some coins jingling in your pocket";
  
}

}

var timing=setInterval(timer,1000);
function timer()
{
if(seconds<15)
seconds++;
document.getElementById("time").innerHTML=seconds;
}
function actualgame()
{
gamer=setInterval(game,100);
}
document.getElementById("restart").onclick=function(){
location.reload();}
function drawfood()
{
ctx.drawImage(food,foodx,foody,40,40);
}
