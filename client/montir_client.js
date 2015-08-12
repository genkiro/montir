console.log('client file');

// log sent messages
/*var _send = Meteor.connection._send;
Meteor.connection._send = function (obj) {
  console.log("send", obj);
  _send.call(this, obj);
};*/

// log received messages
/*Meteor.connection._stream.on('message', function (message) {
  console.log("receive", JSON.parse(message));
});*/

var handleSubmit = function(err, result) {
  if (err) {
    var msg = "err: " + err;
    console.log(msg);
    alertify.error(msg);
  } else {
    Router.go('success', {_id: result});
  }
};

Template.homepage.rendered = function () {
  $('nav').css('margin-bottom', 0);
};

Template.homepage.destroyed = function () {
  $('nav').css('margin-bottom', 20);
};

Template.schedule.events({
  'submit form': function (e) {
    e.preventDefault();

    var name = $('#name').val();
    var phone = $('#phone').val();
    var date = $('#date').val();
    var time = $('#time').val();

    var obj = {
      _id: idForOrders(),
      type: 'SCHEDULE',
      name: name,
      phone: phone,
      requestDateTime: moment(date + ' ' + time).toDate()
    };

    Orders.insert(obj, handleSubmit);
  }
});

Template.onthego.events({
  'submit form': function (e) {
    e.preventDefault();

    var name = $('#name').val();
    var bikeType = $('#bikeType').val();
    var phone = $('#phone').val();
    var address = $('#address').val();
    var date = $('#date').val();
    var time = $('#time').val();

    var services = [];

    $("input:checked").each(function(i, el) {
      services.push(el.value);
    });

    Orders.insert({
      _id: idForOrders(),
      type: 'ON_THE_GO',
      name: name,
      bikeType: bikeType,
      phone: phone,
      address: address,
      services: services,
      requestDateTime: moment(date + ' ' + time).toDate()
    }, handleSubmit);
  }
});

Template.pickup.events({
  'submit form': function (e) {
    e.preventDefault();

    var name = $('#name').val();
    var phone = $('#phone').val();
    var address = $('#address').val();
    var date = $('#date').val();
    var time = $('#time').val();

    Orders.insert({
      _id: idForOrders(),
      type: 'PICKUP',
      name: name,
      phone: phone,
      address:address,
      requestDateTime: moment(date + ' ' + time).toDate()
    }, handleSubmit);
  }
});

Template.admin.helpers({
  orders: function() {
    return Orders.find({});
  }
});

Template.selectBikeType.rendered = function () {
  $('#bikeType').selectize({ sortField: 'text' });
};

/*Template.loading.rendered = function() {
  var opts = {
    lines: 13 // The number of lines to draw
    , length: 28 // The length of each line
    , width: 14 // The line thickness
    , radius: 42 // The radius of the inner circle
    , scale: 1 // Scales overall size of the spinner
    , corners: 1 // Corner roundness (0..1)
    , color: '#9b009' // #rgb or #rrggbb or array of colors
    , opacity: 0.25 // Opacity of the lines
    , rotate: 0 // The rotation offset
    , direction: 1 // 1: clockwise, -1: counterclockwise
    , speed: 1 // Rounds per second
    , trail: 60 // Afterglow percentage
    , fps: 20 // Frames per second when using setTimeout() as a fallback for CSS
    , zIndex: 2e9 // The z-index (defaults to 2000000000)
    , className: 'spinner' // The CSS class to assign to the spinner
    , top: '50%' // Top position relative to parent
    , left: '50%' // Left position relative to parent
    , shadow: false // Whether to render a shadow
    , hwaccel: false // Whether to use hardware acceleration
    , position: 'absolute' // Element positioning
  };
  var target = $('.loading');
  var spinner = new Spinner(opts).spin(target);

};*/

/*Template.pickup.rendered = function() {
  console.log('bla');
  var opts = {
    lines: 13 // The number of lines to draw
    , length: 28 // The length of each line
    , width: 14 // The line thickness
    , radius: 42 // The radius of the inner circle
    , scale: 1 // Scales overall size of the spinner
    , corners: 1 // Corner roundness (0..1)
    , color: '#9b0009' // #rgb or #rrggbb or array of colors
    , opacity: 0.25 // Opacity of the lines
    , rotate: 0 // The rotation offset
    , direction: 1 // 1: clockwise, -1: counterclockwise
    , speed: 1 // Rounds per second
    , trail: 60 // Afterglow percentage
    , fps: 20 // Frames per second when using setTimeout() as a fallback for CSS
    , zIndex: 2e9 // The z-index (defaults to 2000000000)
    , className: 'spinner' // The CSS class to assign to the spinner
    , top: '50%' // Top position relative to parent
    , left: '50%' // Left position relative to parent
    , shadow: false // Whether to render a shadow
    , hwaccel: false // Whether to use hardware acceleration
    , position: 'absolute' // Element positioning
  };
  var target = document.getElementById('pikachu');
  console.log(target);
  var spinner = new Spinner(opts).spin(target);

  /!*var spinner = new Spinner(opts).spin();
  document.getElementById('pikachu').appendChild(spinner.el)*!/

};*/

/*
Template.loading.rendered = function() {
  console.log('blading');
  var opts = {
    lines: 13 // The number of lines to draw
    , length: 28 // The length of each line
    , width: 14 // The line thickness
    , radius: 42 // The radius of the inner circle
    , scale: 1 // Scales overall size of the spinner
    , corners: 1 // Corner roundness (0..1)
    , color: '#9b0009' // #rgb or #rrggbb or array of colors
    , opacity: 0.25 // Opacity of the lines
    , rotate: 0 // The rotation offset
    , direction: 1 // 1: clockwise, -1: counterclockwise
    , speed: 1 // Rounds per second
    , trail: 60 // Afterglow percentage
    , fps: 20 // Frames per second when using setTimeout() as a fallback for CSS
    , zIndex: 2e9 // The z-index (defaults to 2000000000)
    , className: 'spinner' // The CSS class to assign to the spinner
    , top: '50%' // Top position relative to parent
    , left: '50%' // Left position relative to parent
    , shadow: false // Whether to render a shadow
    , hwaccel: false // Whether to use hardware acceleration
    , position: 'absolute' // Element positioning
  };
  var target = document.getElementsByClassName('loading');
  console.log(target);
  var spinner = new Spinner(opts).spin(target);

  /!*var spinner = new Spinner(opts).spin();
   document.getElementById('pikachu').appendChild(spinner.el)*!/

};*/
