//Publications: Audio

Meteor.publish("audio", function(){
    return Songs.find(); 
});