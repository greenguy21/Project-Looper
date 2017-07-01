
FlowRouter.route(['/','/home'],{
    subscriptions:function(){
        Meteor.subscribe('audio');
    },
    action: function(){
        FlowLayout.render('main',{main:'home'});
    }
});

FlowRouter.route(['/upload'],{
    subscriptions:function(){
        Meteor.subscribe('audio');
    },
    action: function(){
        FlowLayout.render('main',{main:'upload'});
    }
});