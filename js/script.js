// PROMĚNNÉ
let generator = generatorCisel();
var pole = [];
var recording = false;
var playing = false;

var millisec = 0;
var seconds = 0;
var timer;

// ZVUKY
// HI-HAT
var hihat1 = new Audio('sounds/HIHAT_1.mp3');
var hihat2 = new Audio('sounds/HIHAT_2.mp3');
var hihat3 = new Audio('sounds/HIHAT_3.mp3');

// HI-HAT OPENED
var hihatOpen1 = new Audio('sounds/HIHAT_O_1.mp3');
var hihatOpen2 = new Audio('sounds/HIHAT_O_2.mp3');
var hihatOpen3 = new Audio('sounds/HIHAT_O_3.mp3');

// SNARE
var snare1 = new Audio('sounds/SNARE_1.mp3');
var snare2 = new Audio('sounds/SNARE_2.mp3');
var snare3 = new Audio('sounds/SNARE_3.mp3');

// RIM
var rimshot1 = new Audio('sounds/RIMSHOT_1.mp3');
var rimshot2 = new Audio('sounds/RIMSHOT_2.mp3');
var rimshot3 = new Audio('sounds/RIMSHOT_3.mp3');

// KICK
var kick1 = new Audio('sounds/KICK_1.mp3');
var kick2 = new Audio('sounds/KICK_2.mp3');
var kick3 = new Audio('sounds/KICK_3.mp3');

// TOM ONE
var tomOne1 = new Audio('sounds/TOM1_1.mp3');
var tomOne2 = new Audio('sounds/TOM1_2.mp3');
var tomOne3 = new Audio('sounds/TOM1_3.mp3');

// TOM TWO
var tomTwo1 = new Audio('sounds/TOM2_1.mp3');
var tomTwo2 = new Audio('sounds/TOM2_2.mp3');
var tomTwo3 = new Audio('sounds/TOM2_3.mp3');

// FLOOR TOM
var floorTom1 = new Audio('sounds/FLOOR_1.mp3');
var floorTom2 = new Audio('sounds/FLOOR_2.mp3');
var floorTom3 = new Audio('sounds/FLOOR_3.mp3');

// CRASH
var crash1 = new Audio('sounds/CRASH_1.mp3');
var crash2 = new Audio('sounds/CRASH_2.mp3');
var crash3 = new Audio('sounds/CRASH_3.mp3');

// SPLASH
var splash1 = new Audio('sounds/SPLASH_1.mp3');
var splash2 = new Audio('sounds/SPLASH_2.mp3');
var splash3 = new Audio('sounds/SPLASH_3.mp3');

// RIDE
var ride1 = new Audio('sounds/RIDE_1.mp3');
var ride2 = new Audio('sounds/RIDE_2.mp3');
var ride3 = new Audio('sounds/RIDE_3.mp3');
// KONEC ZVUKŮ

/*
███████ ███████ ████████ ████████ ██ ███    ██  ██████  ███████
██      ██         ██       ██    ██ ████   ██ ██       ██
███████ █████      ██       ██    ██ ██ ██  ██ ██   ███ ███████
     ██ ██         ██       ██    ██ ██  ██ ██ ██    ██      ██
███████ ███████    ██       ██    ██ ██   ████  ██████  ███████
*/


// HI-HAT TOGGLE
let hihatIsClosed = true;
var classHihatToggle = document.getElementById("hihatToggle");

classHihatToggle.style.background = "white";

function hihatToggle() {
  if (hihatIsClosed == true) {
    classHihatToggle.style.background = "white";
    hihatIsClosed = false;
  } else if (hihatIsClosed == false) {
    classHihatToggle.style.background = "orange";
    hihatIsClosed = true;
  }
}

// RIM TOGGLE
let rimOn = true;
var classRimToggle = document.getElementById("rimToggle");

classRimToggle.style.background = "white";

function rimToggle() {
  if (rimOn == true) {
    classRimToggle.style.background = "white";
    rimOn = false;
  } else if (rimOn == false) {
    classRimToggle.style.background = "orange";
    rimOn = true;
  }
}


// GENERÁTOR
function* generatorCisel(num = Infinity) {
  let rozsah = 3;
  for (let i = 0; i < num; i += 1) {
    yield(i % 3 + 1);
  }
}


/*
███████ ██    ██ ███    ██ ██   ██  ██████ ███████
██      ██    ██ ████   ██ ██  ██  ██      ██
█████   ██    ██ ██ ██  ██ █████   ██      █████
██      ██    ██ ██  ██ ██ ██  ██  ██      ██
██       ██████  ██   ████ ██   ██  ██████ ███████
*/


const hihat = () => {

  let nahodne = generator.next().value;
  hihat1.pause();
  hihat1.currentTime = 0;
  hihat2.pause();
  hihat2.currentTime = 0;
  hihat3.pause();
  hihat3.currentTime = 0;
  hihatOpen1.pause();
  hihatOpen1.currentTime = 0;
  hihatOpen2.pause();
  hihatOpen2.currentTime = 0;
  hihatOpen3.pause();
  hihatOpen3.currentTime = 0;
  //console.log(nahodne);

  if (classHihatToggle.style.background == "white") {
    if (recording) {
      stoptimer();
      pole.push(millisec);
      pole.push("HIHAT");
      resettimer();
      starttimer();
    }

    if (nahodne == 1) {
      hihat1.play();
    } else if (nahodne == 2) {
      hihat2.play();
    } else if (nahodne == 3) {
      hihat3.play();
    }
  } else if (classHihatToggle.style.background == "orange") {
    if (recording) {
      stoptimer();
      pole.push(millisec);
      pole.push("HIHAT-OPENED");
      resettimer();
      starttimer();
    }

    if (nahodne == 1) {
      hihatOpen1.play();
    } else if (nahodne == 2) {
      hihatOpen2.play();
    } else if (nahodne == 3) {
      hihatOpen3.play();
    }
  }

}

const hihatOpened = () => {

  hihatOpen1.pause();
  hihatOpen1.currentTime = 0;
  hihatOpen2.pause();
  hihatOpen2.currentTime = 0;
  hihatOpen3.pause();
  hihatOpen3.currentTime = 0;
  //console.log(nahodne);

  if (nahodne == 1) {
    hihatOpen1.play();
  } else if (nahodne == 2) {
    hihatOpen2.play();
  } else if (nahodne == 3) {
    hihatOpen3.play();
  }

}

const snare = () => {

  let nahodne = generator.next().value;
  snare1.pause();
  snare1.currentTime = 0;
  snare2.pause();
  snare2.currentTime = 0;
  snare3.pause();
  snare3.currentTime = 0;
  rimshot1.pause();
  rimshot1.currentTime = 0;
  rimshot2.pause();
  rimshot2.currentTime = 0;
  rimshot3.pause();
  rimshot3.currentTime = 0;
  //console.log(nahodne);

  if (classRimToggle.style.background == "white") {
    if (recording) {
      stoptimer();
      pole.push(millisec);
      pole.push("SNARE");
      resettimer();
      starttimer();
    }

    if (nahodne == 1) {
      snare1.play();
    } else if (nahodne == 2) {
      snare2.play();
    } else if (nahodne == 3) {
      snare3.play();
    }
  } else if (classRimToggle.style.background == "orange") {
    if (recording) {
      stoptimer();
      pole.push(millisec);
      pole.push("RIM");
      resettimer();
      starttimer();
    }

    if (nahodne == 1) {
      rimshot1.play();
    } else if (nahodne == 2) {
      rimshot2.play();
    } else if (nahodne == 3) {
      rimshot3.play();
    }
  }

}

const rimShot = () => {

  rimshot1.pause();
  rimshot1.currentTime = 0;
  rimshot2.pause();
  rimshot2.currentTime = 0;
  rimshot3.pause();
  rimshot3.currentTime = 0;
  //console.log(nahodne);

  if (nahodne == 1) {
    rimshot1.play();
  } else if (nahodne == 2) {
    rimshot2.play();
  } else if (nahodne == 3) {
    rimshot3.play();
  }

}

const kick = () => {
  if (recording) {
    stoptimer();
    pole.push(millisec);
    pole.push("KICK");
    resettimer();
    starttimer();
  }

  let nahodne = generator.next().value;
  kick1.pause();
  kick1.currentTime = 0;
  kick2.pause();
  kick2.currentTime = 0;
  kick3.pause();
  kick3.currentTime = 0;
  //console.log(nahodne);

  if (nahodne == 1) {
    kick1.play();
  } else if (nahodne == 2) {
    kick2.play();
  } else if (nahodne == 3) {
    kick3.play();
  }
}

const tomone = () => {
  if (recording) {
    stoptimer();
    pole.push(millisec);
    pole.push("TOMONE");
    resettimer();
    starttimer();
  }

  let nahodne = generator.next().value;
  tomOne1.pause();
  tomOne1.currentTime = 0;
  tomOne2.pause();
  tomOne2.currentTime = 0;
  tomOne3.pause();
  tomOne3.currentTime = 0;
  //console.log(nahodne);

  if (nahodne == 1) {
    tomOne1.play();
  } else if (nahodne == 2) {
    tomOne2.play();
  } else if (nahodne == 3) {
    tomOne3.play();
  }
}

const tomtwo = () => {
  if (recording) {
    stoptimer();
    pole.push(millisec);
    pole.push("TOMTWO");
    resettimer();
    starttimer();
  }

  let nahodne = generator.next().value;
  tomTwo1.pause();
  tomTwo1.currentTime = 0;
  tomTwo2.pause();
  tomTwo2.currentTime = 0;
  tomTwo3.pause();
  tomTwo3.currentTime = 0;
  //console.log(nahodne);

  if (nahodne == 1) {
    tomTwo1.play();
  } else if (nahodne == 2) {
    tomTwo2.play();
  } else if (nahodne == 3) {
    tomTwo3.play();
  }
}

const floor = () => {
  if (recording) {
    stoptimer();
    pole.push(millisec);
    pole.push("FLOOR");
    resettimer();
    starttimer();
  }

  let nahodne = generator.next().value;
  floorTom1.pause();
  floorTom1.currentTime = 0;
  floorTom2.pause();
  floorTom2.currentTime = 0;
  floorTom3.pause();
  floorTom3.currentTime = 0;
  //console.log(nahodne);

  if (nahodne == 1) {
    floorTom1.play();
  } else if (nahodne == 2) {
    floorTom2.play();
  } else if (nahodne == 3) {
    floorTom3.play();
  }
}

const crash = () => {
  if (recording) {
    stoptimer();
    pole.push(millisec);
    pole.push("CRASH");
    resettimer();
    starttimer();
  }

  let nahodne = generator.next().value;
  crash1.pause();
  crash1.currentTime = 0;
  crash2.pause();
  crash2.currentTime = 0;
  crash3.pause();
  crash3.currentTime = 0;
  //console.log(nahodne);

  if (nahodne == 1) {
    crash1.play();
  } else if (nahodne == 2) {
    crash2.play();
  } else if (nahodne == 3) {
    crash3.play();
  }
}

const splash = () => {
  if (recording) {
    stoptimer();
    pole.push(millisec);
    pole.push("SPLASH");
    resettimer();
    starttimer();
  }

  let nahodne = generator.next().value;
  splash1.pause();
  splash1.currentTime = 0;
  splash2.pause();
  splash2.currentTime = 0;
  splash3.pause();
  splash3.currentTime = 0;
  //console.log(nahodne);

  if (nahodne == 1) {
    splash1.play();
  } else if (nahodne == 2) {
    splash2.play();
  } else if (nahodne == 3) {
    splash3.play();
  }
}

const ride = () => {
  if (recording) {
    stoptimer();
    pole.push(millisec);
    pole.push("RIDE");
    resettimer();
    starttimer();
  }

  let nahodne = generator.next().value;
  ride1.pause();
  ride1.currentTime = 0;
  ride2.pause();
  ride2.currentTime = 0;
  ride3.pause();
  ride3.currentTime = 0;
  //console.log(nahodne);

  if (nahodne == 1) {
    ride1.play();
  } else if (nahodne == 2) {
    ride2.play();
  } else if (nahodne == 3) {
    ride3.play();
  }
}


/*
██      ██ ███████ ████████ ███████ ███    ██ ███████ ██████
██      ██ ██         ██    ██      ████   ██ ██      ██   ██
██      ██ ███████    ██    █████   ██ ██  ██ █████   ██████
██      ██      ██    ██    ██      ██  ██ ██ ██      ██   ██
███████ ██ ███████    ██    ███████ ██   ████ ███████ ██   ██
*/


window.addEventListener("keydown", checkKeyPressed, false);
window.addEventListener("keyup", checkKeyReleased, false);

function checkKeyReleased(e) {
  document.getElementById("hihat").style.background = "white";
  document.getElementById("snare").style.background = "white";
  document.getElementById("kick").style.background = "white";
  document.getElementById("tomone").style.background = "white";
  document.getElementById("tomtwo").style.background = "white";
  document.getElementById("floor").style.background = "white";
  document.getElementById("crash").style.background = "white";
  document.getElementById("splash").style.background = "white";
  document.getElementById("ride").style.background = "white";
}

function checkKeyPressed(e) {

  if (e.keyCode == "97" || e.keyCode == "49") {
    // alert("The '1' key is pressed.");
    hihat();
    document.getElementById("hihat").style.background = "orange";
  }
  if (e.keyCode == "98" || e.keyCode == "50") {
    // alert("The '2' key is pressed.");
    snare();
    document.getElementById("snare").style.background = "orange";
  }
  if (e.keyCode == "99" || e.keyCode == "51") {
    // alert("The '3' key is pressed.");
    kick();
    document.getElementById("kick").style.background = "orange";
  }
  if (e.keyCode == "100" || e.keyCode == "52") {
    // alert("The '4' key is pressed.");
    tomone();
    document.getElementById("tomone").style.background = "orange";
  }
  if (e.keyCode == "101" || e.keyCode == "53") {
    // alert("The '5' key is pressed.");
    tomtwo();
    document.getElementById("tomtwo").style.background = "orange";
  }
  if (e.keyCode == "102" || e.keyCode == "54") {
    // alert("The '6' key is pressed.");
    floor();
    document.getElementById("floor").style.background = "orange";
  }
  if (e.keyCode == "103" || e.keyCode == "55") {
    // alert("The '7' key is pressed.");
    crash();
    document.getElementById("crash").style.background = "orange";
  }
  if (e.keyCode == "104" || e.keyCode == "56") {
    // alert("The '8' key is pressed.");
    splash();
    document.getElementById("splash").style.background = "orange";
  }
  if (e.keyCode == "105" || e.keyCode == "57") {
    // alert("The '9' key is pressed.");
    ride();
    document.getElementById("ride").style.background = "orange";
  }
  if (e.keyCode == "109") {
    hihatToggle();
  }
  if (e.keyCode == "107") {
    rimToggle();
  }

}


/*
███████ ███████ ████████ ████████ ██ ███    ██  ██████  ███████
██      ██         ██       ██    ██ ████   ██ ██       ██
███████ █████      ██       ██    ██ ██ ██  ██ ██   ███ ███████
     ██ ██         ██       ██    ██ ██  ██ ██ ██    ██      ██
███████ ███████    ██       ██    ██ ██   ████  ██████  ███████
*/




// jQUERY BUTTONCHANGE
$(document).ready(() => {
  $("#recordButton").click(() => {
    $(".recordButtonIMG").attr("src", ($(".recordButtonIMG").attr("src") == "images/recordButtonBlack.png") ? "images/recordButtonRed.png" : "images/recordButtonBlack.png");
    $(".recordLI").text($(".recordLI").text() == 'Record' ? 'Stop Recording' : 'Record');
  });
  $("#playButton").click(() => {
    $(".playButtonIMG").attr("src", ($(".playButtonIMG").attr("src") == "images/playButton.png") ? "images/pauseButton.png" : "images/playButton.png");
    $(".playLI").text($(".playLI").text() == 'Play' ? 'Pause' : 'Play');
  });
});

//TIMER
function display() {

  if (millisec < 0) {
    millisec = 0;
  } else
    millisec += 1;
  document.d.d2.value = millisec;
  timer = setTimeout("display()", 100);
}

function starttimer() {

  if (timer > 0) {
    return;
  }
  display();
}

function stoptimer() {
  clearTimeout(timer);
  timer = 0;
}

function startstoptimer() {
  if (timer > 0) {
    clearTimeout(timer);
    timer = 0;
  } else {
    display();
  }
}

function resettimer() {
  stoptimer();
  millisec = 0;
  seconds = 0;
}

// RECORDING
const emptyPole = () => {
  pole = [];
}

function record() {
  recording = !recording;

  if (recording) {
    emptyPole();
    starttimer();
  } else {
    stoptimer();
    resettimer();
  }
  console.log(pole);
}

// PLAY
const playPause = () => {
  playing = !playing;

  if (playing) {
    var prvni = true;
    let delay;
    let pockej;
    var nastroj;

    for (let i = 0; i < pole.length; i++) {
      //alert('Hodnota na indexu [' + i + '] je: [' + pole[i] + ']');

      if (prvni) {
        delay = pole[i];
        pockej = delay * 1000;
        console.log(pockej);
        prvni = false;
      } else {
        nastroj = pole[i];
        console.log(nastroj);
        prvni = true;
      }

      switch (nastroj) {
        case "HIHAT":
          setTimeout(hihat(), pockej);
          break;
        case "HIHAT-OPENED":
          setTimeout(hihatOpened(), pockej);
          break;
        case "RIM":
          setTimeout(rimShot(), pockej);
          break;
        case "SNARE":
          setTimeout(snare(), pockej);
          break;
        case "KICK":
          setTimeout(kick(), pockej);
          break;
        case "TOMONE":
          setTimeout(tomone(), pockej);
          break;
        case "TOMTWO":
          setTimeout(tomtwo(), pockej);
          break;
        case "FLOOR":
          setTimeout(floor(), pockej);
          break;
        case "CRASH":
          setTimeout(crash(), pockej);
          break;
        case "SPLASH":
          setTimeout(splash(), pockej);
          break;
        case "RIDE":
          setTimeout(ride(), pockej);
          break;
        default:
          break;
      }

    }

  }


}


/*
████████ ██ ██████  ██    ██
   ██    ██ ██   ██  ██  ██
   ██    ██ ██████    ████
   ██    ██ ██         ██
   ██    ██ ██         ██
*/


// jQUERY SLIDE-UP
$(document).ready(() => {
  $(".showButton").click(() => {
    $("#myTips").slideToggle();
    $("#ksLogo").slideToggle();
    $(".showButton").text($(".showButton").text() == 'Show Tips' ? 'Hide Tips' : 'Show Tips');
  });
  $("#previousORnext").click(() => {
    $(".guidescreen").slideToggle();
    $(".displayPadscreen").slideToggle();
    $(".settings").slideToggle();
    $("#previousORnext").text($("#previousORnext").text() == 'Next' ? 'Previous' : 'Next');
  });
});



// TEXT FILL
var promenna = -1;

const textFill = () => {
  var tipyPole = [
    'We recommend you to use this Drumpad on Numeric Keypad.',
    'To open or close hi-hat press " + ".',
    'To switch between Snare an Rim press " - ".',
    'This game is based on sounds, so we recommend you to turn your volume loud.',
    'Use headphones for better experience.',
    'Have you tried hovering on the DRUMPAD sign?',
    'I am so sorry, but the recording function does not work yet. :-('
  ];

  var randomNumber = Math.floor(Math.random() * tipyPole.length);

  if (promenna == -1) {
    promenna = randomNumber;
  } else {
    while (promenna == randomNumber) {
      randomNumber = Math.floor(Math.random() * tipyPole.length);
    }
    promenna = randomNumber;
  }

  document.getElementById("fillTip").innerHTML = tipyPole[randomNumber];
}
