var player1='<img src="x_image.png" alt="">' ;
var player2= '<img src="o_image.png" alt="">' ;
var scoreNode1 = document.querySelector("div.p1") ;
var scoreNode2 = document.querySelector("div.p2") ;
var tour=0;
var score1=0;
var score2=0;
var NowinnerC=0;
var pl1_name="player 1";
var pl2_name="player 2";
//players Name
var pl1 = window.prompt("Hi player1 could you print your name ?","");
var pl2 = window.prompt("Hi player2 could you print your name ?","");
if(pl1!=null)
{
    pl1=pl1.toUpperCase();
    pl1=pl1.replace(/\s+/g," ");
}
if(pl2!=null)
{
    pl2=pl2.toUpperCase();
    pl2=pl2.replace(/\s+/g," ");
}

if(pl1!=null && pl1!="" && pl1!=" ")
{
    pl1_name=pl1;
    document.querySelector("div.p1").children[0].innerHTML = pl1_name + " : ";
    
   
}
if(pl2!=null &&  pl2!="" && pl2!=" ")
{
    pl2_name=pl2;
    document.querySelector("div.p2").children[0].innerHTML = pl2_name + " : ";
    
}
//chose the random player
random_player();
// random who will play the first 
function random_player()
{
    if(Math.random()<0.5)
    {
        tour=0;
        alert("the player 1 : " + pl1_name + " will play the first" );
    }
    else
    {
        tour=1;
        alert("the player 2 : " + pl2_name + " will play the first" );
    }
}



//detect winner
var ele_tr = document.getElementsByTagName('tr');
var winner = "";
var conter1 = 0; 
var conter2 = 0; 
  
    
    /////-----------Add X or O--------------
function fct_add(e)
{
    
    var item = e.target ;
    
    
    if(tour==0)
    {
        item.innerHTML = player1 ;
        // console.log("hy");
        tour=1;
        item.removeAttribute("onclick");
       

    }
    else if(tour==1)
    {
       
        item.innerHTML = player2 ;
        tour=0;
        item.removeAttribute("onclick");
            
    }
   
    detect_winner();
}
// detect winner 
function detect_winner()
{
    //------detect line--------
    
    // console.log(String(ele_tr[0].children[0].innerHTML) == player2);
  lop1 : for(var i=0 ; i<3 ;i++)
   {
    for(var j=0 ; j<3 ;j++)
    {
        if(String(ele_tr[i].children[j].innerHTML) == player1)
        {
            ++conter1;
            
        }
        else if(String(ele_tr[i].children[j].innerHTML) == player2)
        {
            ++conter2;
            
        }
        if(conter1==3)
        {
            winner = player1; 
            break lop1 ;
            
        }
        else if(conter2==3)
        {
            winner = player2; 
            break lop1 ;
            
        }
        
    }
    conter1=0;
    conter2=0;
   }
   
    //-----detect col-----
    if(winner=="")
    {
    conter1=0;
    conter2=0;
    lop2 : for(var i=0 ; i<3 ;i++)
    {
     for(var j=0 ; j<3 ;j++)
     {
         if(String(ele_tr[j].children[i].innerHTML) == player1)
         {
             ++conter1;
             
         }
         else if(String(ele_tr[j].children[i].innerHTML) == player2)
         {
             ++conter2;
             
         }
         if(conter1==3)
         {
             winner = player1; 
             break lop2 ;
             
         }
         else if(conter2==3)
         {
             winner = player2; 
             break lop2 ;
             
         }
         
     }
     conter1=0;
     conter2=0;
    }    
    }
    



    //detect diagonal
    diagonalwinner(player1);
    diagonalwinner(player2);
    


    //show the winner
    showthewinner();
}


//detect diagonal

function diagonalwinner(player)
{
    if(String(ele_tr[0].children[0].innerHTML) == player && String(ele_tr[1].children[1].innerHTML) == player && String(ele_tr[2].children[2].innerHTML) == player)
    {
        winner = player;
        
    }
    else if(String(ele_tr[2].children[0].innerHTML) == player && String(ele_tr[1].children[1].innerHTML) == player && String(ele_tr[0].children[2].innerHTML) == player)
    {
        winner = player; 
        
    }

}

function showthewinner()
{
    //show the winner
    if(winner==player1)
    {
        
        
        scoreNode1.childNodes[3].nodeValue = "   votre score est : " + ++score1 ;
        setTimeout(function(){alert("The winner is the player 1 : " + pl1_name + " Congratulation 🎉🎂🎁😍😍 " )},500);
        setTimeout(fin_competition ,800);
       
        //winner last game        
        var cmt = document.querySelector("div.lastwinner").innerHTML="The winner of the last game is the player 1 : <strong class='p1_name'>" + pl1_name + "</strong> Congratulation 🎉🎂🎁😍😍" ;
         
        //add undeline
        add_underline(cmt);

        
       
             
    }
    else if(winner==player2)
    {
        
        
        scoreNode2.childNodes[3].nodeValue = "   votre score est : " + ++score2 ;
        setTimeout(function(){alert("The winner is the player 2 : " + pl2_name + " Congratulation 🎉🎂🎁😍😍" ); },500); 
        setTimeout(fin_competition ,800);
        
        //winner last game
        var cmt = document.querySelector("div.lastwinner").innerHTML = "The winner of the last game is the player 2 : <strong class='p2_name'>" + pl2_name + "</strong> Congratulation 🎉🎂🎁😍😍" ;

        //add undeline
        add_underline(cmt);
                
        
    }
    else
    {
        var count_NoW = 0;  
        var Nowinner = document.getElementsByTagName("tr") ;
        
        for(var i=0 ; i<3 ;i++)
        {
            for(var j=0 ; j<3 ;j++)
            {
                if(Nowinner[i].children[j].getAttribute('onclick')==null)
                {
                    count_NoW++;
                }
            }
        }
        if(count_NoW==9)
        {
            setTimeout(function(){alert("There is No Winner 😑😑😑 ")},500);
            //winner last game
            var cmt = document.querySelector("div.lastwinner").innerHTML = "No winner in the last game 😑😑😑" ;
           
            //add undeline
            add_underline(cmt);
            
            //fin compitition
            setTimeout(fin_competition ,800);
         
        }
    }
}



function fin_competition()
{
    var ele_reload = document.getElementsByTagName("tr") ;
    for(var i=0 ; i<3 ;i++)
        {
            for(var j=1 ; j<6 ;j+=2)
            {
                ele_reload[i].childNodes[j].setAttribute('onclick','fct_add(event)');
                ele_reload[i].childNodes[j].innerHTML="";
                
            }
        }
    conter1=0;
    conter2=0;
    winner="";
    random_player();
    
    

}

function add_underline(cmt)
{
    // console.log(document.querySelector('body').children[1].className);
    if(document.querySelector('body').children[1].tagName !="HR")
    {
        var ref = document.querySelector('div.pl');
        var ele_hr = document.createElement('hr');
        ele_hr.setAttribute('class','underline3');
        ele_hr.style.width = cmt.length * 5.3 + "px" ;
        ref.after(ele_hr);
    }
    
}
