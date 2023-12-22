let book = {
    title: ["The Robots of Dawn", "Mockingjay: The Final Book of The Hunger Games"],
    author: ["Isaac Asimov", "Suzanne Collins"],
    readingStatus: [true, false],
    displayInfo: function(){
        if(this.readingStatus[0]){
            console.log(`Already read ${this.title[0]} by ${this.author[1]}`);
        }else{
            console.log(`You still need to read ${this.title[1]} by ${this.author[1]}`);
        }
    }
};
book.displayInfo();


    