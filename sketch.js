function setup() {
  createCanvas(400, 100);
  loadJSON("http://api.open-notify.org/astros.json", gotData);
}

function gotData(data) {
  createElement('h1', 'People in space right now');
  for (var i = 0; i < data.people.length; i++) {
    createP(data.people[i].name);
    fill(random(0, 255), random(0, 255), random(0, 255));
    ellipse(random(16, (400 - 16)), random(16, (100 - 16)), 16, 16);
  }
}
