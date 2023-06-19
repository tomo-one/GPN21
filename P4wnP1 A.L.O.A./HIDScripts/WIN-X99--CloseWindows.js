// WIN-X99--CloseWindows.js
// Version: 2023-06-08--002


// Set keyboard layout to German (DE)
layout('DE');
typingSpeed(0,0);


// Close used windows
for (var i = 1; i <= 3; i++) {
  press("ALT F4");
  delay(500);
}

