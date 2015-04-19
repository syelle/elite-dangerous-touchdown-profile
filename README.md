# elite-dangerous-touchdown-profile

This is a configuration profile for the [TouchDown Web Server](http://desrat.lightning-bolt.net/TouchDown/) for use when playing [Elite:Dangerous](https://www.elitedangerous.com/).

## Installing & using this profile
- [Download TouchDown](http://desrat.lightning-bolt.net/TouchDown/viewforum.php?f=10&sid=57de7efe5188a2af74d1a7e43f7a7687) on the computer that will also be running Elite: Dangerous, and then run the "WebServer.exe" file. A UI should pop up that allows you to configure the web server.
- [Download the zip file for this profile](https://github.com/syelle/elite-dangerous-touchdown-profile/archive/master.zip) & extract the zip files.
- In the extracted files, copy everything from the folder that contains "index.html". Depending on how you extracted the zip file, you may have to open 1 or 2 folders called "elite-dangerous-touchdown-profile" to get to that folder.
- Paste the files you just copied into "Data/Docs" in the TouchDown files.
- In the TouchDown Web Server UI, change "Profile Page" to the name of the layout you want to use. See below screenshots to see what functions each profile contains.
- Click "Start Server" inside the TouchDown UI.
- In the TouchDown UI, make a note of the value in "IP Address".
- On your tablet, phone, or other touchscreen device, make sure you are connected to the same network as the computer running Elite: Dangerous. Then, open a web browser, enter the IP address in the URL bar, and submit the URL. The Elite: Dangerous UI should load on the screen.
 
From here, you can test the UI by poking buttons on your device. You should see values popping up in the log inside the TouchDown UI on your computer. If so, everything is working correctly! All you need to do now is go into the control settings of Elite: Dangerous and set your keybinds as you would buttons on your keyboard.

## Available layouts

### index.html
![Screenshot of syelle's power-management-heavy Elite:Dangerous profile for TouchDown](https://raw.githubusercontent.com/syelle/elite-dangerous-touchdown-profile/master/images/screenshot.png)

### index-targeting.html
![Screenshot of syelle's targeting-heavy Elite:Dangerous profile for TouchDown](https://raw.githubusercontent.com/syelle/elite-dangerous-touchdown-profile/master/images/screenshot-targeting.png)

## Credits
This profile was based off of a profile created by [reddit user andywade84](http://www.reddit.com/user/andywade84):
- [Profile code](https://onedrive.live.com/redir?resid=C5EEF26522725D2!35946&authkey=!ADhaQ5XJvPq8Q1g&ithint=folder%2chtml)
- [Reddit thread](http://www.reddit.com/comments/2iduq9)
- [Video](https://www.youtube.com/watch?v=FcGTCG_xDTQ&feature=youtu.be)

The code in this profile makes use of the following external assets:

- ["Beep" sound by Efecto Fundador (Freesound.org)](https://www.freesound.org/people/Efecto%20Fundador/sounds/195929/) - Used as audio feedback for button presses
- [Elite:Dangerous favicon.ico](https://www.elitedangerous.com/) - I used the favicon from the Elite:Dangerous website as both a favicon and a homepage icon on this project.
- [Foundation: CSS Framework](http://foundation.zurb.com/) - Allows for rapid UI development on small projects
- [howler.js](https://github.com/goldfire/howler.js/) - Used for playing audio using modern browser functionality
- [normalize.css](http://necolas.github.io/normalize.css/) - Used to achieve better cross-browser consistency
