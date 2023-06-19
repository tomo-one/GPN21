// WIN-A01--DisableFirstSoundDevice.js
// Version: 2023-06-08--002


// Set keyboard layout to German (DE)
layout('de');
typingSpeed(0,0);


for (var i = 1; i <= 2; i++) {
// Navigate to sound settings
press("GUI s");
delay(1000);

type("Soundeinstellungen");
delay(700);

press("RETURN");
delay(3000);


// Select manage audio devices
for (var i = 1; i <=5; i++) {
  press("TAB");
  delay(1000);
}

press("SPACE");
delay(1000);


// Deactivate sound
press("TAB");
delay(1000);

press("SPACE");
delay(1000);

press("TAB");
delay(1000);

press("TAB");
delay(1000);

press("SPACE");
delay(1000);


// Close dialog
press("ALT F4");
}
