// Homework 1
let dog = {
  name: "Rocky",
  kind: "Pitbull",
  speak: function(dogSpeak) {
    return dogSpeak;
  }
}

dog.speak("Hey bro!!!");
console.log(`Dog says: ${dog.speak("Hey bro!!!")}`);

// Homework 2
let book = {
  title: "48 Laws of Power",
  author: "Robert Greene",
  readingStatus: true,
  readBook: function() {
    if(this.readingStatus) {
      return `Already read ${this.title} by ${this.author}.`;
    }
    else {
      return `You still need read ${this.title} by ${this.author}.`;
    }
  }
}

console.log(book.readBook());

