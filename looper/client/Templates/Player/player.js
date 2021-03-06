/*player.js
    Contains event handlers and helpers for the 'audioplayer' template
*/

Template.player.helpers({
    currSongName: function(){
        console.log("accessed");
        return Session.get("currentSongName");
    }
}),
Template.player.events({
    "click [id='playbutton']" : function(e){
        console.log("play pressed");
        if (currentSong){
            if (currentSong.paused){
                currentSong.play();
            } else {
                currentSong.pause();
            }
        } else {
            console.log("No song selected");
        }
    }
});