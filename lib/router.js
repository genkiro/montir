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

Router.route('/success/:_id', function () {
    var order = Orders.findOne({ _id: this.params._id });
    var m = moment(order.requestDateTime);
    order.date = m.format("dddd, Do MMMM YYYY");
    order.time = m.format("H:mm");
    order.services = _.map(order.services, function(svc){ return S(svc).humanize().s; });

    var template;
    if (order.type == 'SCHEDULE') {
        template = 'success_schedule';
    } else if (order.type == 'ON_THE_GO') {
        template = 'success_on_the_go';
    } else if (order.type == 'PICKUP') {
        template = 'success_pickup';
    } else {
        template = 'success_general';
    }

    this.render(template, { data: order });
}, {name:'success'});

Router.route('/somesecretadmininja', {name:'admin'});

