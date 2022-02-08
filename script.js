document.addEventListener("DOMContentLoaded", function () {
  var friends = ["friend1", "friend2", "friend3", "friend4", "friend5"];
  var locations = [
    "location1",
    "location2",
    "location3",
    "location4",
    "location5",
    "location6",
    "location7",
    "location8",
    "location9",
    "location10",
  ];
  var weapons = [
    "weapon1",
    "weapon2",
    "weapon3",
    "weapon4",
    "weapon5",
    "weapon6",
    "weapon7",
    "weapon8",
    "weapon9",
    "weapon10",
    "weapon11",
    "weapon12",
    "weapon13",
    "weapon14",
    "weapon15",
    "weapon16",
    "weapon17",
    "weapon18",
    "weapon19",
    "weapon20",
  ];

  var div = document.createElement("div");
  document.body.appendChild(div);

  function displayAcc() {
    for (var i = 1; i <= 100; i++) {
      console.log(
        `Accusation ${i}: I accuse ${friends[i % friends.length]}, with the ${
          weapons[i % weapons.length]
        } in the ${locations[i % locations.length]}.`
      );

      var h3 = document.createElement("h3");
      h3.textContent = "Accusation " + i;
      h3.id = "acc" + i;
      h3.addEventListener("click", );
      
      div.appendChild(h3);
    }
    
  }
  var myFunc = displayAcc();

  // function run() {
  //   console.log(
  //     `Accusation ${i}: I accuse ${friends[i % friends.length]}, with the ${
  //       weapons[i % weapons.length]
  //     } in the ${locations[i % locations.length]}.`
  //   );
  // };
  // function makeFunc() {
  //   for (var i = 1; i <= 100; i++) {
  //     var h3 = document.createElement("h3");
  //     h3.textContent = "Accusation " + i;
  //     h3.id = "acc" + i;
  //     // h3.addEventListener("click", displayAcc);
  //     div.appendChild(h3);
});

// for (var i = 1; i <= 100; i++) {
//   var h3 = document.createElement("h3");
//   h3.addEventListener("click", myFunc);
//   h3.textContent = "Accusation " + i;
//   h3.id = "acc" + i;

//   div.appendChild(h3);
// }
