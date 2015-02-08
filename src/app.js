var UI = require("ui");
var Vector2 = require("vector2");

var ajax = require("ajax");

var main = new UI.Card({
  title: "Pebble.js",
  icon: "images/menu_icon.png",
  subtitle: "Yay!",
  body: "Press any button."
});

main.show();

main.on("click", "up", function(e) {
  var menu = new UI.Menu({
    sections: [{
      items: [{
        title: "Pebble.js",
        icon: "images/menu_icon.png",
        subtitle: "Can do Menus"
      }, {
        title: "Second Item",
        subtitle: "Subtitle Text"
      }]
    }]
  });
  menu.on("select", function(e) {
    console.log("Selected item #" + e.itemIndex + " of section #" + e.sectionIndex);
    console.log("The item is titled '" + e.item.title + "'");
  });
  menu.show();
});

main.on("click", "select", function(e) {
  var wind = new UI.Window();
  var textfield = new UI.Text({
    position: new Vector2(0, 50),
    size: new Vector2(144, 30),
    font: "gothic-24-bold",
    text: "Text Anywhere!",
    textAlign: "center"
  });
  wind.add(textfield);
  wind.show();
});

main.on("click", "down", function(e) {

  var card = new UI.Card();

  ajax({
      url: "https://rfx.firebaseio.com/.json",
      type: "json"
    },
    function(data) {
      card.body(data.blue);
      card.subtitle("yay");
      card.title("Done");
    }
  );

  card.title("Waiting...");
  card.subtitle("for data...");
  card.body("...");
  card.show();
});
