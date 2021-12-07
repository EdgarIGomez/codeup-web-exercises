(function() {
    "use strict";

    // create a circle object
    let circle = {
        radius: 3,

        getArea: function () {
            // TODO: complete this method
            // hint: area = pi * radius^2
                let area = Math.PI * Math.pow(this.radius, 2);

            // TODO: return the proper value
                 return area;
        },
        logInfo: function (doRounding) {
            // TODO: complete this method.
            console.log("Area of a circle with radius: " + this.radius + ", is: ");
            if(doRounding === false){
                return this.getArea();
            }else {
                return Math.round(this.getArea());
            }
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

        }
    };

    // log info about the circle
    console.log("Raw circle information");
    console.log(circle.logInfo(false));
   // console.log(circle.getArea());
    console.log("Circle information rounded to the nearest whole number");
    console.log(circle.logInfo(true));
    //console.log(circle.logInfo(circle.getArea()));
    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.
    circle.radius = 5
    // let circleTwo = {
    //     radius: 5,
    //
    //     getArea: function () {
    //         return Math.PI * Math.pow(this.radius, 2);
    //     },
    //     logInfo: function (doRounding) {
    //         console.log("Area of a circle with radius: " + this.radius + ", is: ");
    //
    //         if(doRounding === false){
    //             return this.getArea();
    //         }else {
    //             return Math.round(this.getArea());
    //         }
    //     }
    // };
    // log info about the circle
    console.log("Raw circle information");
    console.log(circle.logInfo(false));
    //console.log(circleTwo.getArea());
    console.log("Circle information rounded to the nearest whole number");
    console.log(circle.logInfo(true));
    //console.log(circleTwo.logInfo(true));
})();