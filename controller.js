$(document).ready(function () {
  game();
function game(){
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
      var vid = document.getElementById("vid");


      var backmusic = document.querySelector('audio');
      backmusic.volume = 0.4;

      /*var end = new Audio('music/einde.mp3');
      end.play();*/
      //STARS function
      particlesJS();

      particlesJS("particles-js", {
        "particles": {
          "number": {
            "value": 90,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#ffffff"
          },
          "shape": {
            "type": "star",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.24463576890600452,
            "random": true,
            "anim": {
              "enable": true,
              "speed": 1,
              "opacity_min": 0,
              "sync": false
            }
          },
          "size": {
            "value": 3,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 4,
              "size_min": 0.3,
              "sync": false
            }
          },
          "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 1,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 600
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": false,
              "mode": "bubble"
            },
            "onclick": {
              "enable": false,
              "mode": "repulse"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 250,
              "size": 0,
              "duration": 2,
              "opacity": 0,
              "speed": 3
            },
            "repulse": {
              "distance": 400,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      });

      //END STARS function

      if(WURFL.form_factor == "Tablet"){
        $("#tablet").removeClass("onzichtbaar");
        $("#tablet").addClass("tabletG");
        var tabletmusic = new Audio('music/backmusic.mp3');
        $(".tabletG").click(function(){
          $("#tablet").attr("src","img/tabletgeluid.png");
          tabletmusic.volume = 0.4;
          tabletmusic.play();
          tabletmusic.loop = true;
        });
    }

      $(".go").on("click", function(){
        $(".home").addClass("onzichtbaar");
        $(".geluid").addClass("onzichtbaar");
        $(".font").addClass("onzichtbaar");
        $(".footer").addClass("onzichtbaar");
        $(".keuzescherm").removeClass("onzichtbaar");
        $(".homeB").removeClass("onzichtbaar");
      })

      $(".uitleg").click(function(){
        $(".video").removeClass("onzichtbaar");
        backmusic.volume = 0.0;
         //document.getElementById('vid')[0].play();
        vid.play();
        console.log('video');
    });

    vid.addEventListener('ended', function(){
      backmusic.volume = 0.4;
        $(".video").addClass("onzichtbaar");
    });

      var fontClicked = false;
      var previousFont=null;

      $(".font").click(function(){
    $("p").toggleClass("schrijffont");
    fontClicked = true;
    console.log('font change');
    if(this===previousFont) {
      //$("p").toggleClass("schrijffont");
      fontClicked = false;
      console.log("fontClicked");
        //alert("You've clicked this element twice.");
    }
    previousFont=this;
    return false;
    });

    //var uitleg1 = document.getElementById("uitleg01");
    //var uitleg1 = new Audio('music/uitleg01.mp3');

    var uitlegClicked = false;
    var previousUitleg=null;
    var uitleg0 = new Audio('music/uitleg.mp3');
    jQuery('#uitleg').click(function(){
      uitleg0.play();
      $("#geluid").attr("src","img/uitlegG.png");
      $("#letter").attr("src","img/uitlegF.png");
      $("#letter").addClass("uitleg1");
      $("#geluid").addClass("uitleg2");
      $('.font').off('click');
      $('.audio').off('click');
      var back = document.querySelector('audio');
      back.volume = 0.0;
      var uitleg1 = new Audio('music/lettertype.mp3');
      $(".uitleg1").click(function(){
        uitleg1.play();
      });
       var uitleg2 = new Audio('music/mettwee.mp3');
       $(".uitleg2").click(function(){
         uitleg2.play();
       });
      uitlegClicked = true
      if(this===previousUitleg) {
        location.reload();
        //uitleg0.src = "";
        /*$("#geluid").attr("src","img/geluid.png");
        $("#letter").attr("src","img/font.png");
        $(".font").removeClass("uitleg1");
        $(".audio").removeClass("uitleg2");*/
          //alert("You've clicked this element twice.");
      }
      previousUitleg=this;
      return false;

    });

    var hasBeenClicked = false;
    var previousTarget=null;
    jQuery('.audio').click(function () {
      console.log('klikgeluid');
      $("#geluid").attr("src","img/geluidN.png");
      $(".wolken1").addClass("onzichtbaar");
      var sterren = document.getElementById('particles-js');
      sterren.style.opacity = "0.9";
      $("body").toggleClass("body2");
      $("p").toggleClass("sterrentekst");
      var sterre = document.getElementsByClassName("sterreH");
      sterre[0].innerHTML = '<img class="swingimage" src=\'sterre.png\'>';
      var audiow = new Audio('music/samenL.mp3');
      audiow.play();
        hasBeenClicked = true;
        if(this===previousTarget) {
          location.reload();
            //alert("You've clicked this element twice.");
        }
        previousTarget=this;
        return false;
    });

    jQuery('#start').click(function () {
      if (hasBeenClicked == false) {
          // The link has been clicked.
          console.log('geluid');
          getQuestion();
          //soundN();
      } else if (hasBeenClicked == true) {
          // The link has not been clicked.
          //hasBeenClicked = true;
          soundN();
          console.log("Ngeluid");

          var sterre = document.getElementsByClassName("sterreK");
          sterre[0].innerHTML = '<img class="swingimage" src=\'sterre.png\'>';
      }
    });

    function soundN(){
        if (hasBeenClicked == true) {
            // The link has been clicked.
            console.log('Ngeluid2');
            getQuestionNSound();
            //sound();
        } else {
            // The link has not been clicked.
            hasBeenClicked = false;
            //sound();
            console.log("geluid");
        }
   }

      //VRAGENLIJST MET GELUID
      //Vragenlijst niveau 1
      function getQuestion(){
      	$(".niveau1").on("click", function () {
              console.log('niveau1');
              $(".keuzescherm").addClass("onzichtbaar");
              $(".game").removeClass("onzichtbaar");
              $(".homeBG").removeClass("onzichtbaar");
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
                    overzicht[0].innerHTML = '<img src=\'img/auto.png\'><img src=\'img/cadeau.png\'><img src=\'img/gieter.png\'><img src=\'img/ijsje.png\'>';

      	})

      //Vragenlijst niveau 2
        $(".niveau2").on("click", function () {
          console.log('niveau2');
          $(".keuzescherm").addClass("onzichtbaar");
          $(".game").removeClass("onzichtbaar");
          $(".homeBG").removeClass("onzichtbaar");
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
          $(".homeBG").removeClass("onzichtbaar");
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
          overzicht[0].innerHTML = '<img src=\'img/fruitschaal.png\'><img src=\'img/ananas.png\'><img src=\'img/helm.png\'><img src=\'img/goudvis.png\'>';
      	})
      }


//VRAGENLIJST ZONDER GELUID
      function getQuestionNSound(){
      	$(".niveau1").on("click", function () {
              console.log('niveau1');
              $(".keuzescherm").addClass("onzichtbaar");
              $(".game").removeClass("onzichtbaar");
              $(".homeBG").removeClass("onzichtbaar");
              		$.getJSON('activity1.json', function(data) {
              		for(i=0;i<data.quizlist.length;i++){
              			questionBank[i]=new Array;
              			questionBank[i][0]=data.quizlist[i].question;
              			questionBank[i][1]=data.quizlist[i].option1;
              			questionBank[i][2]=data.quizlist[i].option2;
              			questionBank[i][3]=data.quizlist[i].option3;
                    //questionBank[i][4]=data.quizlist[i].audio;
              		}
              		 numberOfQuestions=questionBank.length;
              		displayQuestion();
              		})//gtjson

                  var sterre = document.getElementsByClassName("sterre");
                  sterre[0].innerHTML = '<img class="swingimage" id="img2" src=\'sterre.png\'>';

                    var overzicht = document.getElementsByClassName("overzicht");
                    overzicht[0].innerHTML = '<img src=\'img/auto.png\'><img src=\'img/cadeau.png\'><img src=\'img/gieter.png\'><img src=\'img/ijsje.png\'>';

      	})

      //Vragenlijst niveau 2
        $(".niveau2").on("click", function () {
          console.log('niveau2');
          $(".keuzescherm").addClass("onzichtbaar");
          $(".game").removeClass("onzichtbaar");
          $(".homeBG").removeClass("onzichtbaar");
      		$.getJSON('activity2.json', function(data) {
      		for(i=0;i<data.quizlist.length;i++){
      			questionBank[i]=new Array;
      			questionBank[i][0]=data.quizlist[i].question;
      			questionBank[i][1]=data.quizlist[i].option1;
      			questionBank[i][2]=data.quizlist[i].option2;
      			questionBank[i][3]=data.quizlist[i].option3;
            //questionBank[i][4]=data.quizlist[i].audio;
      		}
      		 numberOfQuestions=questionBank.length;


      		displayQuestion();
      		})//gtjson

          var sterre = document.getElementsByClassName("sterre");
          sterre[0].innerHTML = '<img class="swingimage" id="img2" src=\'sterre.png\'>';

          var overzicht = document.getElementsByClassName("overzicht");
          overzicht[0].innerHTML = '<img src=\'img/camera.png\'><img src=\'img/batterij.png\'><img src=\'img/helicopter.png\'><img src=\'img/cowboy.png\'>';
      	})

      //Vragenlijst niveau 3
        $(".niveau3").on("click", function () {
          console.log('niveau2');
          $(".keuzescherm").addClass("onzichtbaar");
          $(".game").removeClass("onzichtbaar");
          $(".homeBG").removeClass("onzichtbaar");
      		$.getJSON('activity3.json', function(data) {
      		for(i=0;i<data.quizlist.length;i++){
      			questionBank[i]=new Array;
      			questionBank[i][0]=data.quizlist[i].question;
      			questionBank[i][1]=data.quizlist[i].option1;
      			questionBank[i][2]=data.quizlist[i].option2;
      			questionBank[i][3]=data.quizlist[i].option3;
            //questionBank[i][4]=data.quizlist[i].audio;
      		}
      		 numberOfQuestions=questionBank.length;


      		displayQuestion();
      		})//gtjson

          var sterre = document.getElementsByClassName("sterre");
          sterre[0].innerHTML = '<img class="swingimage" id="img2" src=\'sterre.png\'>';

          var overzicht = document.getElementsByClassName("overzicht");
          overzicht[0].innerHTML = '<img src=\'img/fruitschaal.png\'><img src=\'img/ananas.png\'><img src=\'img/helm.png\'><img src=\'img/goudvis.png\'>';
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

       $(stage).append('<div  class="questionText"><p>'+questionBank[questionNumber][0]+'</p></div><div id="1" class="pix"><img class="wolk" src="img/'+q1+'"></div><div id="2" class="pix"><img class="wolk" src="img/'+q2+'"></div><div id="3" class="pix"><img class="wolk" src="img/'+q3+'"></div><div id="4" class="onzichtbaar pix"><audio id="word" controls autoplay><source src="music/Nwoorden/'+q4+'" type="audio/mp3"></audio></div>');

       $(".wouter").click(function(){
         var rnd=Math.random()*3;
        rnd=Math.ceil(rnd);
         var q1;
         var q2;
         var q3;
         var q4;

        if(rnd==1){q4=questionBank[questionNumber][4];}
        if(rnd==2){q4=questionBank[questionNumber][4];}
        if(rnd==3){q4=questionBank[questionNumber][4];}
         var woord = document.getElementById('word');
         //woord.volume = 0.4;
         //var woord = document.querySelector('audio');
         //backmusic.volume = 0.4;
         //$(stage).append('<div id="4" class="onzichtbaar pix"><audio controls autoplay><source src="music/Nwoorden/'+q4+'" type="audio/mp3"></audio></div>')
         //var woord = new Audio("music/Nwoorden/'+q4+'");
         woord.play();
         console.log('woord');
     });

       if (hasBeenClicked == false) {

           console.log('gewoon font');
           //soundN();
       } else if (hasBeenClicked == true) {

           $("p").addClass("sterrentekst");
           console.log("wit font");

       }

       if (fontClicked == false) {

           console.log('gewoon font');
           //soundN();
       } else if (fontClicked == true) {

           $("p").addClass("schrijffont");
           console.log("schrijffont");

       }

       $('.pix').click(function(){
        //correct answer
        if(this.id==rnd){
         $('#img1').attr('src','woutergroen.png');
         $('#img2').attr('src','sterreJ.png');
         var back = document.querySelector('audio');
         back.volume = 0.2;
         var audio = new Audio('music/goedgoed.mp3');
         audio.play();
         setTimeout(function(){changeQuestion()},1000);
         }
        //wrong answer
        if(this.id!=rnd){
         $('#img1').attr('src','wouteroranje.png');
         $('#img2').attr('src','sterreF.png');
         var back = document.querySelector('audio');
         back.volume = 0.2;
         var audio = new Audio('music/fout.mp3');
         audio.play();
        }
      })

      }//display question

      	function changeQuestion(){
          $('#img1').attr('src','wouterblauw.png');
          $('#img2').attr('src','sterre.png');
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

      		$(stage).append('<div class="endText"><p>Gefeliciteerd je hebt het heel goed gedaan!<br>Klik hieronder om terug te keren.</p><div class="endbutton"><INPUT TYPE="image" class="reload" src="menu.png" onClick="history.go(0)" VALUE="Menu"> </div></div>')
          //<INPUT TYPE="image" id="keuze" class="choice" src="keuze.png" VALUE="Keuzescherm">
          $(".homeBG").addClass("onzichtbaar");
          $("#img1").removeClass("swingimage");
          $("#img1").addClass("spin");

          if(WURFL.form_factor == "Tablet"){
            $("#img1").removeClass("spin");
            $("#img1").addClass("swingimage");
            
        }

          var end = new Audio('music/einde.mp3');
          end.play();

          if (hasBeenClicked == false) {

              console.log('gewoon font');
              //soundN();
          } else if (hasBeenClicked == true) {

              $("p").addClass("sterrentekst");
              console.log("wit eind font");

          }

          if (fontClicked == false) {

              console.log('gewoon font');
              //soundN();
          } else if (fontClicked == true) {

              $("p").addClass("schrijffont");
              console.log("schrijffont");

          }

          setTimeout(function(){showOverzicht()},1000);
          function showOverzicht(){
              var tekst = document.getElementsByClassName("overzichttekst");
              tekst[0].innerHTML = '<p>De juiste antwoorden</p>';
              $(".overzichttekst").removeClass("onzichtbaar");
              $(".overzicht").removeClass("onzichtbaar");

              if (hasBeenClicked == false) {

                  console.log('gewoon font');
                  //soundN();
              } else if (hasBeenClicked == true) {

                  $("p").addClass("sterrentekst");
                  console.log("wit eind font");

              }

              if (fontClicked == false) {

                  console.log('gewoon font');
                  //soundN();
              } else if (fontClicked == true) {

                  $("p").addClass("schrijffont");
                  console.log("schrijffont");

              }
          }

      	}//display final slide
  }//game function

});//doc ready
