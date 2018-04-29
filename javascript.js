$(document).ready(function() {
    // define the visual numbers which will be changed as buttons are pressed
    const sessionSetting = document.getElementById('sessionSetting');
    const breakSetting = document.getElementById('breakSetting');
    const sessionTimer = document.getElementById('sessionTimer');
    
    // define the buttons which will allow the user to interact with the clock
    //upper container
    const sessionUp = document.getElementById('sessionUp');
    const sessionDown = document.getElementById('sessionDown');
    const breakDown = document.getElementById('breakDown');
    const breakUp = document.getElementById('breakUp');
    //lower container
    const startButton = document.getElementById('startButton');
    const resetButton = document.getElementById('resetButton');
    const pauseButton = document.getElementById('pauseButton');
    const stopButton = document.getElementById('stopButton');
    
    let inter;
    let rounds = breakSetting.innerHTML;
    
    sessionSetting.innerHTML = 25;
    breakSetting.innerHTML = 5;
    
    // timer settings adjustment functions
    sessionUp.onclick = function() {
        if (sessionSetting.innerHTML < 59) {
            sessionSetting.innerHTML++;
            changeTimer();
        } else {
            window.alert('The timer cannot be set above 60 minutes!');
        }
    };
    
    sessionDown.onclick = function() {
        if (sessionSetting.innerHTML > 1) {
            sessionSetting.innerHTML--;
            changeTimer();
        } else {
            window.alert('The timer cannot be set to a negative number of minutes!');
        }
    };
    
    function changeTimer() {
        sessionTimer.innerHTML = sessionSetting.innerHTML + ':00';
    }
    
    breakUp.onclick = function() {
        breakSetting.innerHTML++;
    };
    
    breakDown.onclick = function() {
        breakSetting.innerHTML--;
    };
    
    // timer manipulation functions
    startButton.onclick = function() {
        disableStartButton();
        let timeRemaining = sessionTimer.innerHTML.split(':');
            let fiveMinutes = (timeRemaining[0] * 60) + parseInt(timeRemaining[1]),
                display = sessionTimer;
        startTimer(fiveMinutes, display);
    };
    
    
    function resetTimer() {
        clearInterval(inter);
        sessionTimer.innerHTML = sessionSetting.innerHTML + ':00';
        startButton.style.pointerEvents = '';
    };
    
    resetButton.onclick = resetTimer;
    stopButton.onclick = resetTimer;
    
    pauseButton.onclick = function () {
        enableStartButton();
        clearInterval(inter);
    };

    function startTimer(duration, display) {
        var start = Date.now(),
            diff,
            minutes,
            seconds;
        function timer() {
            // get the number of seconds that have elapsed since 
            // startTimer() was called
            diff = duration - (((Date.now() - start) / 1000) | 0);

            // does the same job as parseInt truncates the float
            minutes = (diff / 60) | 0;
            seconds = (diff % 60) | 0;
            
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = minutes + ":" + seconds; 

            if (diff <= 0) {
                // add one second so that the count down starts at the full duration
                // example 05:00 not 04:59
                start = Date.now() + 1000;
            }
        };
        // we don't want to wait a full second before the timer starts
        timer();
        inter = setInterval(timer, 1000);
        }
    
    function disableStartButton() {
        startButton.style.pointerEvents = 'none';
    };
    
    function enableStartButton() {
        startButton.style.pointerEvents = '';
    };
    
});
