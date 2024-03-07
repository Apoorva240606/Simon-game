$(document).keydown(function(){
    $("h1").text("Press any key to start");
    startgame(1);
});
var arr=[];
var me=0;
var len;
function startgame(n){
    
    $("h1").text("Level "+n);     
        var randomdiv =(Math.floor(Math.random()*4))+1;
        arr[n-1]="c"+randomdiv;
      
       len=n;
        var count=0;
        var j=arr[n-1]
        makesound(j);
       pressedbutton(j);
        

        me=0;
// var id = setInterval(function(){       //use this interval if you want to see all previous button too
//    if(count>=n)
//    {
//     clearInterval(id);
//     }
//     else{
//         var i = arr[count];
//         makesound(i);
//         pressedbutton(i);
        
//     ++count;}
    
// },500);
  me=0;
 
}

$(".container-1").click(function(){

   makesound(this.id);
   pressedbutton(this.id);
   
    var inter=arr[me];
  
    if(this.id==inter)
    {
        me++;
        

    }
    else{
        gameover();
    }
    if(me==len)
    {   setTimeout(function(){
            startgame(++me);
    },500);
        
    }
   
});



function gameover(){
    var audio = new Audio('sounds/wrong.mp3');
                audio.play();
    $("h1").text("game over,Press any key to restart");
     $("body").css("background","red");
     setTimeout(function(){
        $("body").css("background","rgb(9, 9, 52)");
       
    },100);
    for(var k=0;k<len;k++)
    {
        a[k]=0;
    }
    $(document).keydown(function(){
        $("h1").text("Level 1");     
       setTimeout(function(){
         startgame(1);
       },100);
       
        
    });

    
}




function pressedbutton(currentkey){
    
    $("."+currentkey).addClass("pressed");
    var me=setTimeout(function(){
        $("."+currentkey).removeClass("pressed");
      
    },100);
}




function makesound(key){
    switch(key)
        {
            case "c1":
                var audio = new Audio('sounds/red.mp3');
                audio.play();
                break;
            
            case "c2":
                var audio = new Audio('sounds/green.mp3');
                audio.play();
                break;
            case "c3":
                var audio = new Audio('sounds/blue.mp3');
                audio.play();
                break;
            case "c4":
                var audio = new Audio('sounds/yellow.mp3');
                audio.play();
                break;    
            
            default:
                console.log(buttoninnerhtml);
            }


}
