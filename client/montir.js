console.log('client file');

var handleSubmit = function(err, result) {
  if (err) {
    alertify.error("err: " + err);
  } else {
    Router.go('success', {_id: result});
  }
};

Template.schedule.events({
  'submit form': function (e) {
    e.preventDefault();

    var name = $('#name').val();
    var phone = $('#phone').val();
    var date = $('#date').val();
    var time = $('#time').val();

    Orders.insert({
      type: 'SCHEDULE',
      name: name,
      phone: phone,
      requestDateTime: moment(date + ' ' + time).toDate()
    }, handleSubmit);
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
