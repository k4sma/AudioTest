var play;
var record;

play = $("#play");
record = $("#record");

play.on("click", function(){
    if($(this).hasClass("fa-play")){

        $(this).removeClass("fa-play");
        $(this).addClass("fa-pause");

        playSound();

    } else if($(this).hasClass("fa-pause")){

        $(this).removeClass("fa-pause");
        $(this).addClass("fa-play");

        stopPlaying();
    }
});

record.on("click", function(){
    if($(this).hasClass("fa-microphone")){

        $(this).removeClass("fa-microphone");
        $(this).addClass("fa-stop");

        recordSound();

    } else if($(this).hasClass("fa-stop")){

        $(this).removeClass("fa-stop");
        $(this).addClass("fa-microphone");

        stopRecording();
    }
});

