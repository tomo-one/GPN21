// A00--MouseAndKeyboardDemo.js
// Version: 2023-06-08--001


// Set keyboard layout to German (DE)
layout('de');			// DE keyboard layout
typingSpeed(50,80)		// Wait 50ms between key strokes + an additional random value between 0ms and 80ms

press("GUI r");
delay(500);
type("notepad\n")
delay(1000);
type("\n\n");
type("    Welcome to this short P4wnP1 demo.\n\n");
type("    Let's start - WATCH THE MOUSE ...\n\n");
delay(500);

type("    Hello from P4wnP1!\n\n");
for (var i = 1; i < 2; i++) {
  type("    Run " + i + ":\n");
  type("    Moving mouse right ...");
  moveStepped(500,0);
  type("    and left\n");
  moveStepped(-500,0);
}
type("\n\n")

type("    Let's type fast !!!!!!!\n")
typingSpeed(0,0);
for (var i = 2; i < 5; i++) {
  type("    Run " + i + ":\n");
  type("    Moving mouse right ...");
  moveStepped(500,0);
  type("    and left\n");
  moveStepped(-500,0);
}

type("\n\n");
type("    End of Demo. Notepad will be closed in ...\n\n");
for (var i = 3; i > 1; i--) {
  type("      " + i + " seconds\n");
  delay(1000);
}

type("\n    closing ...");
press("ALT F4");
delay(500);
press("TAB");
delay(500);
press("ENTER");

