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
    
    sessionSetting.innerHTML = 25;
    breakSetting.innerHTML =5;
    
    // timer settings adjustment functions
    sessionUp.onclick = function() {
        sessionSetting.innerHTML++;
        changeTimer();
    };
    
    sessionDown.onclick = function() {
        sessionSetting.innerHTML--;
        changeTimer();
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
        let minutes = sessionSetting.innerHTML;
        
    };
    
    function resetTimer() {
        
    };
    
    function pauseTimer() {
        
    };
    
    function stopTimer() {
        
    };
});
