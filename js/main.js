var carInfo = /** @class */ (function () {
    function carInfo(car, model, year, horsepower, image) {
        this.car = car;
        this.model = model;
        this.year = year;
        this.horsepower = horsepower;
        this.image = image;
    }
    carInfo.prototype.list = function () {
        document.getElementById('info').innerHTML = "\n\n\t\t<div class=\"container blue\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-3 grey\">\t\n\t\t\t\t\t<img src=\"" + this.image + "\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-4 grey\">\n\t\t\t\t\t<h3>" + this.car + "</h3>\n\t\t\t\t\t<p>" + this.model + "</p>\n\t\t\t\t\t<p>" + this.year + "</p>\n\t\t\t\t\t<p>" + this.horsepower + "</p>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-3 grey pt-4\">\n\t\t\t\t\t<span class=\"font-weight-bold\"> 50\u20AC </span>\n\t\t\t\t\t<br>\n\t\t\t\t\t<br>\n\t\t\t\t\t<button id=\"contactButton\" class=\"btn\" type=\"\">Contact</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t";
    };
    return carInfo;
}());
;
var cars = new carInfo('bmw', 2015, 2, 200, 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350" class="img-fluid"');
cars.list();
// 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350" class="img-fluid" alt='
/*
for (var i = 0; i < carInfo.length; i++){

    var car = carInfo[i].car;
    var model = carInfo[i].model;
    var year = carInfo[i].year;
    var horsepower = carInfo[i].horsepower;

    document.getElementById('Info').innerHTML += "Car" +  car + model + year + horsepower;
}

*/
/*
for(let i of carInfo){
document.getElementById("info").innerHTML += `

<div class="container blue">
            <div class="row ">
            <div class="col-md-3 grey p-2">
            
                <img src="${i.image}">
            </div>
            <div class="col-md-6 grey p-2 pl-4">
                <h3>${i.car}</h3>
                <p>${i.model}</p>
                <p>${i.year}</p>
                <p>${i.horsepower}</p>
            </div>
            <div class="col-md-3 grey p-2 pt-4">
                <span class="font-weight-bold"> 50€ </span>
                <br>
                <br>
                <button id="contactButton" class="btn" type="">Contact</button>
                
            </div>


        </div>
        </div>

        `;

}

*/ 
