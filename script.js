document.addEventListener("DOMContentLoaded", function () {
  var friends = ["Alyssa", "Larry", "Amanda", "Thomas", "Phillip"];
  var locations = [
    "kitchen",
    "dining room",
    "bar",
    "basement",
    "attic",
    "swimming pool",
    "billiard room",
    "laundry room",
    "bedroom",
    "hot tub roon",
  ];
  var weapons = [
    "rope",
    "knife",
    "silly string",
    "cat litter",
    "poison frog",
    "coffee pot",
    "pencil",
    "sword",
    "crossbow",
    "dumbell",
    "monkey wrench",
    "baseball bat",
    "soccer ball",
    "lead pipe",
    "bike lock",
    "water gun",
    "beer bottle",
    "hot pocket",
    "slim jim",
    "ninja star",
  ];

  var div = document.createElement("div");
  document.body.appendChild(div);

  function outsideFunc() {
    var h3 = document.createElement("h3");
    h3.textContent = "Accusation " + i;
    h3.id = i;
    h3.addEventListener("click", alertFunc);
    div.appendChild(h3);
    function alertFunc() {
      alert(
        `Accusation ${event.target.id}: I accuse ${friends[event.target.id % friends.length]}, with the ${
          weapons[event.target.id % weapons.length]
        } in the ${locations[event.target.id % locations.length]}.`
      );
    }

    return alertFunc;
  }

  

  for (var i = 1; i <= 100; i++) {
    outsideFunc(i);
  }
});
