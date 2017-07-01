Template.songlist.helpers({
    'songs' :function(){
        return Songs.find({});
    }
});

//currentSongAudio represents that Audio() object
//currentSong represents the Song object file


Template.songlist.events({
    "click button" : function(event){
        var song = Songs.findOne({_id:this._id});
        if (song.isAudio()){
            if (currentSong && !currentSong.paused){
                currentSong.pause();
            }
            currentSong = new Audio(song.url());
            currentSong.play();
        } else {
            console.log("Not an audio file, will not play");
        }
    }
});