
FlowRouter.route(['/login'],{
    action: function(){
        FlowLayout.render('login');
    }
});

FlowRouter.route(['/','/home'],{
    subscriptions:function(){
        Meteor.subscribe('audio');
    },
    action: function(){
        FlowLayout.render('main',{main:'home'});
        document.getElementById()
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