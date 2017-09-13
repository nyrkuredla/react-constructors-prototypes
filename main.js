//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog (name, status, color, hungry, owner) {
  this.name = name;
  this.status = status;
  this.color = color;
  this.hungry = hungry;
  this.owner = owner;
}

// Instances of Dog
// Needed: sadie, moonshine, atticus

let sadie = new Dog ('Sadie', 'normal', 'black', false, 'mason');
let moonshine = new Dog ('Moonshine', 'normal', undefined, true, undefined);
let atticus = new Dog ('Atticus', undefined, undefined, true, undefined);

//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human (cool) {
  this.cool = cool;
  this.feed = function (dog) {
    console.log("fed dog: ", dog)
    dog.hungry = false;
  }
  this.pet = function (dog) {
    console.log("petted dog: ", dog)
    dog.status = 'happy';
  }
}


let julia = new Human(true);
let mason = new Human(false);



// Instances of Human
// Needed: mason, julia
