//the load event is fired when the document window fisnished loading.
//there should be 2 statements in this function.


if (window.name=="Popup") {

    window.onload = function() {
        console.log("inside popup")
        var btn = document.getElementById('btnAddEmail')
        btn.onclick = fAddEmail

        function fAddEmail() {
            alert('test')
        }
    }

} else {

    debugger;
    window.onload = function() {
        //statements
        //find the button element and assign it to varaible btn

        var btn = document.getElementById('btnWindow');

        //create a click event for this button by using the btn.onclick and
        //assign a function fOpenWin to this event

        btn.onclick = fOpenWin

        function fOpenWin() {
            //statements
            //open a new blank window using the window.open() method
            //name it "popup"
            //use width value 500 height 200
            //center new window based on  current screen width and height values
            //modify window.open method to point to hw5_dialog.html file

            window.open("hw5_dialog.html","Popup","top=" + ((screen.availHeight/2) - 100) + ", left=" + ((screen.availWidth/2) - 250) + ", width=500, height=200, menubar=no, status=no")

        }
    }
}


