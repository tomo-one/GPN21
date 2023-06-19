// WIN-B02--FindUsbDrive.js
// Version: 2023-06-08--001


// Set keyboard layout to German (DE)
layout('DE');
typingSpeed(0,0);
delay(3000);


// Clear screen
type("cls");
press("RETURN");


// Find drive letter and save in Registry
type("for /f %a in (\'wmic volume where Label\^=\"EFI\" get DriveLetter ^| find \":\"\') do reg ADD HKLM /v LiveHackingDrive /t REG_SZ /d \"%a\" /f && set DriveLetter=%a");
press("RETURN");
press("RETURN");
press("RETURN");
delay(500);


// Print drive letter
type("echo DriveLetter is set to %DriveLetter%");
press("RETURN");
