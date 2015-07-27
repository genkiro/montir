Router.configure({
    layoutTemplate: 'layout'
});

Router.onBeforeAction(function () {
    $('.navbar-nav').find('li').removeClass('active');
    this.next();
});

Router.route('/', {name: 'homepage'});

Router.route('/schedule', function () {
    $('#scheduleNavBar').addClass('active');
    this.render('schedule');
});

Router.route('/onthego', function () {
    $('#onthegoNavBar').addClass('active');
    this.render('onthego');
});

Router.route('/pickup', function () {
    $('#pickupNavBar').addClass('active');
    this.render('pickup');
});

Router.route('/success', {name: 'success'});

Router.route('/somesecretadmininja', {name:'admin'});

