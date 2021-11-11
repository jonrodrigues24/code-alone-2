


function Greeter(name, favoriteColor, favoriteActivity) {
    this.greeting = 'My name is ' + name + ' I like ' + favoriteActivity + '. My favorite color is ' + favoriteColor + '.';
    this.name = name;
    this.favoriteColor = favoriteColor;
    this.favoriteActivity = favoriteActivity;


}



const Jon = new Greeter('Jon', 'Green', 'pizza')
const Batman = new Greeter('Bruce Wayne', 'Black', 'justice')

console.log(Jon.greeting)
console.log(Batman.greeting)
