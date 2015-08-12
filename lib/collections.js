Orders = new Mongo.Collection('orders');

var genId = function() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (var i = 0; i < 6; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
};

idForOrders = function () {
    var id,
        iter = 100,
        foundCount;

    do {
        id = genId();
        foundCount = Orders.find({ _id: id}).count();
        iter--;
    } while (foundCount > 0 && iter >= 0);

    // Here, either it's a unique ID or failed to find a unique ID
    if (foundCount == 0) {
        return id;
    } else {
        alertify.error('Waduh, gagal. Websitenya ada masalah nih..');
        throw new Error('CANNOT PRODUCE UNIQUE ID'); // hopefully never invoked
    }
};
