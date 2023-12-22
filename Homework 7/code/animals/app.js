let animal = {
    name: "Maylo",
    kind: "Jack Russell Terrier",
    speak: function(message){
        console.log(`This is ${this.name}, he is ${this.kind}, and he says: ${message}`);
    }
};
let dog = animal.speak("hey bro !!!");

// tekstot za pecatanje malce go urediv se nadevam deka e dobro 
