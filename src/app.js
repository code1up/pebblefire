var UI = require("ui");
var Vector2 = require("vector2");

var ajax = require("ajax");

var setColor = function (rgb) {
  var success = function (data) {
    console.log("AJAX SUCCEEDED");
  };

  var failure = function (error) {
    console.log("AJAX ERROR: " + error);
  };

  var options = {
    url: "https://rfx.firebaseio.com/sphero/",
    type: "json",
    method: "PUT",
    data: rgb
  };

  ajax(options, success, failure);
};

var main = new UI.Card({
  title: " PebbleFire",
  icon: "images/menu_icon.png",
  subtitle: "RFX",
  body: "UP = red, SELECT = green, DOWN = red"
});

main.show();

main.on("click", "up", function (e) {
  setColor({
    colors: {
      red: 255,
      green: 0,
      blue: 0
    }
  });
});

main.on("click", "select", function (e) {
  setColor({
    colors: {
      red: 0,
      green: 255,
      blue: 0
    }
  });
});

main.on("click", "down", function (e) {
  setColor({
    colors: {
      red: 0,
      green: 0,
      blue: 255
    }
  });
});
