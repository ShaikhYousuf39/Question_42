"use strict";
// const magician:string[] = ["David Blaine","Criss Angel","Harry Houdini"]
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}
// show_magicians(magician)
const magicians2 = ["David Blaine", "Criss Angel", "Harry Houdini"];
make_great(magicians2);
show_magicians(magicians2);
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + ` the great`;
    }
}
