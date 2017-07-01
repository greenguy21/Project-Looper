Template.upload.events({
    "change [id='songUploader']": function(event, template){
        FS.Utility.eachFile(event,function(file){
            Songs.insert(file, function(err, fileObj){
                //Inserted new file into
                console.log(fileObj, fileObj._id);
            });
        });
    }
});
