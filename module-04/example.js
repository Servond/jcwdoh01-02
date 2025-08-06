class Bird {
  fly() {
    console.log("terbang");
  }
}

class Beo extends Bird {
  fly() {
    console.log("burung beo bisa terbang");
  }
}

class Pinguin extends Bird {
  fly() {
    console.log("Tidak bisa terbang");
  }
}

const newBeo = new Beo();
newBeo.fly();

const newBird = new Bird();
newBird.fly();

const newPinguin = new Pinguin();
newPinguin.fly();
