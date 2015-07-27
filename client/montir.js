console.log('client file');

Template.schedule.events({
  'submit form': function (e) {
    e.preventDefault();

    var name = $('#name').val();
    var phone = $('#phone').val();
    var date = $('#date').val();
    var time = $('#time').val();

    Orders.insert({
      type: 'ON_OUR_WORKSHOP',
      name: name,
      phone: phone,
      requestDateTime: new Date(date + 'T' + time + ':00')
    }, function(err, result) {
      if (err) {
        alertify.error("err: " + err);
      } else {
        Router.go('success');
      }
    });
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

    Orders.insert({
      type: 'ON_THE_GO',
      name: name,
      bikeType: bikeType,
      phone: phone,
      address: address,
      requestDateTime: new Date(date + 'T' + time + ':00')
    }, function(err, result) {
      if (err) {
        alertify.error("err: " + err);
      } else {
        Router.go('success');
      }
    });
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
      requestDateTime: new Date(date + 'T' + time + ':00')
    }, function(err, result) {
      if (err) {
        alertify.error("err: " + err);
      } else {
        Router.go('success');
      }
    });
  }
});

Template.admin.helpers({
  orders: function() {
    return Orders.find({});
  }
});
