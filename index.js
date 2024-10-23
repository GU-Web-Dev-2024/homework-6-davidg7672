/*
    David Sosa
    CPSC 332 - Web Development
    Homework 6 - JQuery
    Last Modified: October 22, 2024
*/
$(document).ready(function () {
    var seconds = "00";
    var tens = "00";
    let animationInterval;

    var $displayTens = $("#tens");
    var $displaySeconds = $("#seconds");
    var $startButton = $("#button-start");
    var $stopButton = $("#button-stop");
    var $resetButton = $("#button-reset");
    var interval;

    $(".wrapper").css({
        display: "flex",
        "flex-direction": "column",
        "align-items": "center",
        "justify-contents": "center",
        "background-color": "aquamarine",
        padding: "29px",
        "border-radius": "15px",
        border: "10px solid",
        "border-image-slice": 1,
        "border-image-source":
            "linear-gradient(45deg, #ff6b6b, #feca57, #48dbfb, #1dd1a1)",
        "box-shadow": "5px 10px 25px lightgray",
    });

    $(".wrapper > *").css({
        "text-align": "center",
        width: "50%",
    });

    $("h1, h2").css({
        "font-family": "'Bebas Neue', sans-serif",
        "letter-spacing": "2px",
    });

    $("p, span").css({
        "font-family": "'Roboto Mono', monospace",
        "font-size": "24px",
    });

    // modifying buttons
    let $myButtons = $("button");
    $myButtons.addClass("button");
    $myButtons.css({
        "background-color": "lightblue",
        margin: "5px",
        padding: "10px 20px",
        border: "none",
        "border-radius": "5px",
        cursor: "pointer",
        "font-size": "16px",
        "box-shadow": "10px 5px 5px lightgray",
    });

    $myButtons.hover(
        function () {
            $(this).css({
                "background-color": "#ff9999",
                "box-shadow": "10px 10px 20px lightgray",
            });
        },
        function () {
            $(this).css({
                "background-color": "lightblue",
                "box-shadow": "10px 5px 5px lightgray",
            });
        }
    );

    let $myParagraph = $("p");
    $myParagraph.attr("id", "timer");
    $myParagraph.addClass("timer-background");
    $myParagraph.css({
        "background-color": "yellow",
        "box-shadow": "10px 5px 5px lightgray",
        border: "2px solid black",
        transition: "opacity 0.3s ease",
    });

    $startButton.on("click", function () {
        $myParagraph.css("background-color", "green");
        clearInterval(interval);
        interval = setInterval(startTimer, 10);
        backgroundAnimation();
    });

    $stopButton.on("click", function () {
        if (tens === "00" && seconds === "00") {
            return;
        }
        $myParagraph.css("background-color", "#F67280");
        clearInterval(interval);
        stopAnimation();
    });

    $resetButton.on("click", function () {
        $myParagraph.css("background-color", "yellow");
        clearInterval(interval);
        tens = "00";
        seconds = "00";
        $displayTens.text(tens);
        $displaySeconds.text(seconds);
        stopAnimation();
    });

    function startTimer() {
        tens++;

        if (tens < 9) {
            $displayTens.text("0" + tens);
        }

        if (tens > 9) {
            $displayTens.text(tens);
        }

        if (tens > 99) {
            console.log("seconds");
            seconds++;
            $displaySeconds.text("0" + seconds);
            tens = 0;
            $displayTens.text("00");
        }

        if (seconds > 9) {
            $displaySeconds.text(seconds);
        }
    }

    let $timer = $(".timer-background");

    function backgroundAnimation() {
        let opacity = 1.0;
        let increment = -0.06;
        animationInterval = setInterval(function () {
            opacity += increment;
            if (opacity <= 0.8 || opacity >= 1.0) {
                increment = -increment;
            }
            $timer.css("opacity", opacity);
        }, 100);
    }

    function stopAnimation() {
        clearInterval(animationInterval);
        $timer.css("opacity", 1.0);
    }
});
