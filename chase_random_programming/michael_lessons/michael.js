// We have a simple object with a clickHandler method that we want to use when a button on the page is clicked

var user = {
    data: [{
        name: "T. Woods",
        age: 37
    }, {
        name: "P. Mickelson",
        age: 43
    }],
    clickHandler: function(event) {
        var randomNum = ((Math.random() * 2 | 0) + 1) - 1;
        // random number between 0 and 1

        // This line is printing a random person's name and age from the data array
        console.log(this.data[randomNum].name + " " + this.data[randomNum].age);
    }
}

// The button is wrapped inside a jQuery $ wrapper, so it is now a jQuery object
// And the output will be undefined because there is no data property on the button object
$("button").click(user.clickHandler);
// Cannot read property '0' of undefined
