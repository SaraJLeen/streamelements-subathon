# streamelements-subathon
Simple, barebones subathon widget for StreamElements by [Saralene](https://saralene.tv).
Simply displays the current number based on the ratios of input provided.

## Installation
1. Log into the [StreamElements website](https://streamelements.com/).
1. In the side menu, click `Streaming Tools`, then `My Overlays`.
1. Create a `New Overlay` at a size of your liking.
1. Near the bottom left corner of the overlay editor, click the `+` symbol.
1. Click on `Static/Custom`, then on `Custom Widget`.
1. Click `Open Editor` on the left sidebar.
1. In the `HTML` tab, replace everything with the contents of [the repository's html file](https://raw.githubusercontent.com/SaraJLeen/streamelements-subathon/refs/heads/main/subathon.html).
1. In the `CSS` tab, replace everything with the contents of [the repository's css file](https://raw.githubusercontent.com/SaraJLeen/streamelements-subathon/refs/heads/main/subathon.css).
1. In the `JS` tab, replace everything with the contents of [the repository's js file](https://raw.githubusercontent.com/SaraJLeen/streamelements-subathon/refs/heads/main/subathon.js).
1. In the `Fields` tab, replace everything in there with the contents of [the repository's fields file](https://raw.githubusercontent.com/SaraJLeen/streamelements-subathon/refs/heads/main/subathon.json).
1. Click on `Done`.
1. Edit the configuration to your liking on the left.
1. Click on `Save` when done editing.
1. Click on the "chain" icon to get the link for your widget.

## Other instructions
This widget is based off of the "Goal" data in StreamElements.
To reset everything to 0, first click on the monitor-with-cog icon near the top-right of the Overlay Editor.
Then go to Goals, and click on Reset Goals.
This should be the only circumstance under which the goals get reset.
PLEASE remember to do this before starting any subathon, since it's the only way to make sure your baseline data is reset.

Please note that changing the numbers in the "Goal" data manually for test purposes will not immediately update the widget.
Send any test event via the Emulate button in the corner, or refresh the Overlay Editor, to see any changes you manually make in that section.
I promise that it always updates properly when these numbers change live through events.
For some reason, editing the "Goal" numbers in the Overlay Editor does not send a session update event.

In the widget's settings, the numbers provided are the ratio at which the number will go up.
Default is 1 sub = $3 tip = 300 bits, but you can adjust this as you like.
If you don't want tips or bits to count toward the number, set them to 0.

This is the most barebones widget I could have made, aside for the basic configuration I've added to it.
Please use it or modify it freely.
I'm aware it could be much better coded.
I just wanted the simplest, most plainly reliable widget possible, so that's what I made.