function fFileValidate() {

    var txt = document.getElementById("txtFilePath")

    //subgroup end contains: jpg, jpeg, png, bmp: /jpg (jgp|jpeg|png|bmp)$
    //pattern needs to break string by ".": /([^.]+)/g
    //pattern needs to be case-insensitive: /i
    var regexTestPattern = /\.(jgp|jpeg|png|bmp)$/i;

    if (regexTestPattern.test(txt.value)) {
        alert("i'm finally beginning to grasp the basics of web development stuff :)\nthis is awesome...\nthank you professor kremer")
        //this is interesting. only if the method returns true, the submission proceeds.
        //which means form "action" attribute is returned (like file name) using the
        //get method.
        return true;
    } else {
        alert("this file you uploaded: " + txt.value + " is invalid")
        alert("but you should still give aarti_sharma 100% :)")
        return false;
    }

}

function fQueryString() {
    var strQueryString = location.search
    var decodedStr = decodeURIComponent(strQueryString)
    alert("decoded Location = " + decodedStr)
    //string replace with regex
    //pattern needs to start with an escaped ?: \?
    //pattern needs to end with =: =/
    //and any characters in between: [...]
    var strQueryString2 = decodedStr.replace(/\?[...]=/,"")
    alert("final location: " + strQueryString2)

}
