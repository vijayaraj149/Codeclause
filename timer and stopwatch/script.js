let timerInterval;
let timerSeconds = 0;
let stopwatchInterval;
let stopwatchSeconds = 0;

function parseTimeToSeconds(timeString) {
  const timeArray = timeString.split(':').map(Number);
  if (timeArray.length === 3) {
    const [hours, minutes, seconds] = timeArray;
    return hours * 3600 + minutes * 60 + seconds;
  }
  return 0;
}

function formatTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

// Timer functions
function updateTimer() {
  if (timerSeconds > 0) {
    timerSeconds--;
    document.getElementById('timer').textContent = formatTime(timerSeconds);
  } else {
    stopTimer();
  }
}

function startTimer() {
  if (!timerInterval) {
    const inputTime = document.getElementById('timer').textContent;
    const inputSeconds = parseTimeToSeconds(inputTime);
    if (inputSeconds > 0) {
      timerSeconds = inputSeconds;
      document.getElementById('timer').textContent = formatTime(timerSeconds);
      timerInterval = setInterval(updateTimer, 1000);
    } else {
      alert("Please enter a valid time in the format hh:mm:ss.");
    }
  }
}

function stopTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function resetTimer() {
  stopTimer();
  timerSeconds = 0;
  document.getElementById('timer').textContent = '00:00:00';
}

// Stopwatch functions
function updateStopwatch() {
  stopwatchSeconds++;
  document.getElementById('stopwatch').textContent = formatTime(stopwatchSeconds);
}

function startStopwatch() {
  if (!stopwatchInterval) {
    stopwatchInterval = setInterval(updateStopwatch, 1000);
  }
}

function stopStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchInterval = null;
}

function resetStopwatch() {
  stopStopwatch();
  stopwatchSeconds = 0;
  document.getElementById('stopwatch').textContent = '00:00:00';
}

// Event listeners
document.getElementById('startTimer').addEventListener('click', startTimer);
document.getElementById('stopTimer').addEventListener('click', stopTimer);
document.getElementById('resetTimer').addEventListener('click', resetTimer);

document.getElementById('startStopwatch').addEventListener('click', startStopwatch);
document.getElementById('stopStopwatch').addEventListener('click', stopStopwatch);
document.getElementById('resetStopwatch').addEventListener('click', resetStopwatch);
