
//var c = [0, 0, 0, 0, 1, 0];
//var c = [0, 0, 0]
var c = [0, 0, 1, 0, 0, 1, 0]
//var c = [0, 0, 0, 0, 0]
//var c = [0, 0, 1, 0, 0, 0, 0, 1, 0, 0]

function jumpingOnClouds(c) {

    var counter = 0;
    var thunderclouds = []

    for (let i = 0; i < (c.length); i++) {
        if ((c[i] == 0)) {
            if (c[i+2] != null) {
                if (thunderclouds[0] == i) {
                    //console.log("skipping this index of thundercloud");
                    thunderclouds.pop();
                } else if ((c[i+1] == 0 && c[i+2] == 0)) {
                    thunderclouds.push(i + 1);
                    counter++;
                    //console.log("c[i+1] == 0 && c[i+2] == 0")
                } else if ((c[i+1] == 0 && c[i+2] == 1) || (c[i+1] == 1 && c[i+2] == 0)) {
                    counter++;
                    //console.log("(c[i+1] == 0 && c[i+2] == 1) || (c[i+1] == 1 && c[i+2] == 0)")
                }
            } else if ((c[i+2] == null) && c[i+1] != null) {
                if (c[i] == 0) {
                    if (thunderclouds[0] == i) {
                        thunderclouds.pop();
                    } else if (c[i] == 1) {
                        //console.log("1 at last")
                    }
                }
            } else if ((c[i+2] == null) && c[i+1] == null) {
                counter++;
            }

        } else if (c[i] == 1) {
            //console.log("c[i] == 1 so i am a thundercloud actually")
        } else {
            //console.log("check this");
        }
    }

    console.log(counter)
    return counter;
}

jumpingOnClouds(c);

// document.addEventListener("DOMContentLoaded", (event) => {
//     console.log("hello world")
// });