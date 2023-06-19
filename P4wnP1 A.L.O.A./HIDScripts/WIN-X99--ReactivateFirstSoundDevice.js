// WIN-X99--ReactivateFirstSoundDevice.js
// Version: 2023-06-08--001


// Set keyboard layout to German (DE)
layout('DE');
typingSpeed(0,0);


// Reactivate sound settings
press("GUI s");
delay(1000);

type("Soundeinstellungen");
delay(800);

press("RETURN");
delay(2000);


// Selct manage audio devices
for (var i = 1; i <=3; i++) {
  press("TAB");
  delay(1000);
}

press("SPACE");
delay(1000);

// Activate sound
for (var i = 1; i <=2; i++) {
  press("TAB");
  delay(800);

  press("SPACE");
  delay(800);
}

// Close dialog
press("ALT F4");

