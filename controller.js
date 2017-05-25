$(document).ready(function () {

var questionNumber=0;
var questionBank=new Array();
var stage="#game1";
var stage2=new Object;
var questionLock=false;
var numberOfQuestions;
//var score=0;
var niveau1 = document.getElementsByClassName("niveau1");
var niveau2 = document.getElementsByClassName("niveau2");
//var juisteAntwoorden = [];
var antwoorden=new Array();

var backmusic = document.querySelector('audio');
backmusic.volume = 0.4;

$(".go").on("click", function(){
  $(".home").addClass("onzichtbaar");
  $(".keuzescherm").removeClass("onzichtbaar");
})

getQuestion();

//Vragenlijst niveau 1
function getQuestion(){

	$(".niveau1").on("click", function () {
        console.log('niveau1');
        $(".keuzescherm").addClass("onzichtbaar");
        $(".game").removeClass("onzichtbaar");
        		$.getJSON('activity1.json', function(data) {
        		for(i=0;i<data.quizlist.length;i++){
        			questionBank[i]=new Array;
        			questionBank[i][0]=data.quizlist[i].question;
        			questionBank[i][1]=data.quizlist[i].option1;
        			questionBank[i][2]=data.quizlist[i].option2;
        			questionBank[i][3]=data.quizlist[i].option3;
              questionBank[i][4]=data.quizlist[i].audio;
        		}
        		 numberOfQuestions=questionBank.length;
        		displayQuestion();
        		})//gtjson

              var overzicht = document.getElementsByClassName("overzicht");
              overzicht[0].innerHTML = '<img src=\'img/auto.png\'><img src=\'img/cadeau.png\'><img src=\'img/gieter.png\'><img src=\'img/handdoek.png\'>';

	})

//Vragenlijst niveau 2
  $(".niveau2").on("click", function () {
    console.log('niveau2');
    $(".keuzescherm").addClass("onzichtbaar");
    $(".game").removeClass("onzichtbaar");
		$.getJSON('activity2.json', function(data) {
		for(i=0;i<data.quizlist.length;i++){
			questionBank[i]=new Array;
			questionBank[i][0]=data.quizlist[i].question;
			questionBank[i][1]=data.quizlist[i].option1;
			questionBank[i][2]=data.quizlist[i].option2;
			questionBank[i][3]=data.quizlist[i].option3;
      questionBank[i][4]=data.quizlist[i].audio;
		}
		 numberOfQuestions=questionBank.length;


		displayQuestion();
		})//gtjson

    var overzicht = document.getElementsByClassName("overzicht");
    overzicht[0].innerHTML = '<img src=\'img/camera.png\'><img src=\'img/batterij.png\'><img src=\'img/helicopter.png\'><img src=\'img/cowboy.png\'>';
	})

//Vragenlijst niveau 3
  $(".niveau3").on("click", function () {
    console.log('niveau2');
    $(".keuzescherm").addClass("onzichtbaar");
    $(".game").removeClass("onzichtbaar");
		$.getJSON('activity3.json', function(data) {
		for(i=0;i<data.quizlist.length;i++){
			questionBank[i]=new Array;
			questionBank[i][0]=data.quizlist[i].question;
			questionBank[i][1]=data.quizlist[i].option1;
			questionBank[i][2]=data.quizlist[i].option2;
			questionBank[i][3]=data.quizlist[i].option3;
      questionBank[i][4]=data.quizlist[i].audio;
		}
		 numberOfQuestions=questionBank.length;


		displayQuestion();
		})//gtjson

    var overzicht = document.getElementsByClassName("overzicht");
    overzicht[0].innerHTML = '<img src=\'img/fruitschaal.png\'><img src=\'img/ananas.png\'><img src=\'img/helm.png\'><img src=\'img/koorts.png\'>';
	})
}

//fillDB();

function displayQuestion(){
 var rnd=Math.random()*3;
rnd=Math.ceil(rnd);
 var q1;
 var q2;
 var q3;
 var q4;

if(rnd==1){q1=questionBank[questionNumber][1];q2=questionBank[questionNumber][2];q3=questionBank[questionNumber][3];q4=questionBank[questionNumber][4];}
if(rnd==2){q2=questionBank[questionNumber][1];q3=questionBank[questionNumber][2];q1=questionBank[questionNumber][3];q4=questionBank[questionNumber][4];}
if(rnd==3){q3=questionBank[questionNumber][1];q1=questionBank[questionNumber][2];q2=questionBank[questionNumber][3];q4=questionBank[questionNumber][4];}

 $(stage).append('<div  class="questionText">'+questionBank[questionNumber][0]+'</div><div id="1" class="pix"><img class="wolk" src="img/'+q1+'"></div><div id="2" class="pix"><img class="wolk" src="img/'+q2+'"></div><div id="3" class="pix"><img class="wolk" src="img/'+q3+'"></div><div id="4" class="onzichtbaar pix"><audio controls autoplay><source src="music/Nwoorden/'+q4+'" type="audio/mp3"></audio></div>');

 $('.pix').click(function(){
  //correct answer
  if(this.id==rnd){

  /*  $(this.id).addClass('juist');
    juisteAntwoorden.push('.juist');

    console.log($(this.id).innerhtml); */

   $('#img1').attr('src','woutergroen.png');
   var back = document.querySelector('audio');
   back.volume = 0.2;
   var audio = new Audio('music/goed.mp3');
   audio.play();
   setTimeout(function(){changeQuestion()},1000);
   }
  //wrong answer
  if(this.id!=rnd){
   $('#img1').attr('src','wouteroranje.png');
   var back = document.querySelector('audio');
   back.volume = 0.2;
   var audio = new Audio('music/fout.mp3');
   audio.play();
  }
})

}//display question

	function changeQuestion(){
    $('#img1').attr('src','wouter.png');
    var back = document.querySelector('audio');
    back.volume = 0.4;


		questionNumber++;

	if(stage=="#game1"){stage2="#game1";stage="#game2";}
		else{stage2="#game2";stage="#game1";}

	if(questionNumber<numberOfQuestions){displayQuestion();}else{displayFinalSlide();}

	 $(stage2).animate({"right": "+=800px"},"slow", function() {$(stage2).css('right','-800px');$(stage2).empty();});
	 $(stage).animate({"right": "+=800px"},"slow", function() {questionLock=false;});
	}//change question

	function displayFinalSlide(){

		$(stage).append('<div class="endText">Gefeliciteerd je hebt het heel goed gedaan!<div class="endbutton"><INPUT TYPE="image" class="reload" src="menu.png" onClick="history.go(0)" VALUE="Menu"> <INPUT TYPE="image" class="choice" src="keuze.png" VALUE="Keuzescherm"></div></div>')

    setTimeout(function(){showOverzicht()},1000);
    function showOverzicht(){
        var tekst = document.getElementsByClassName("overzichttekst");
        tekst[0].innerHTML = '<p>De juiste antwoorden</p>';
        $(".overzichttekst").removeClass("onzichtbaar");
        $(".overzicht").removeClass("onzichtbaar");
    }


    $(".choice").on("click", function () {
      //location.reload();
      //window.localStorage.clear();
          console.log('choice');
          $("#game1").html("");
          $("#game2").html("");
          //$("#navContent").trigger('reset');
          //document.getElementById("navContent").reset();
          var questionNumber=0;
          console.log('test');
          $(".keuzescherm").removeClass("onzichtbaar");
          $(".overzicht").addClass("onzichtbaar");
          $(".game").addClass("onzichtbaar");
          $(".home").addClass("onzichtbaar");
  	})

	}//display final slide

	});//doc ready
