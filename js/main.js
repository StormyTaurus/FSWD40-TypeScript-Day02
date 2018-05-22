var carInfo = [
    {
        car: 'BMW',
        model: '3',
        year: '2016',
        horsepower: '200',
        image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350" class="img-fluid" alt='
    },
    {
        car: 'Opel',
        model: '3',
        year: '2016',
        horsepower: '200',
        image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350" class="img-fluid" alt='
    }
];
/*
for (var i = 0; i < carInfo.length; i++){

    var car = carInfo[i].car;
    var model = carInfo[i].model;
    var year = carInfo[i].year;
    var horsepower = carInfo[i].horsepower;

    document.getElementById('Info').innerHTML += "Car" +  car + model + year + horsepower;
}

*/
for (var _i = 0, carInfo_1 = carInfo; _i < carInfo_1.length; _i++) {
    var i = carInfo_1[_i];
    document.getElementById("info").innerHTML += "\n\n<div class=\"container blue\">\n\t\t\t<div class=\"row \">\n\t\t\t<div class=\"col-md-3 grey p-2\">\n\t\t\t\n\t\t\t\t<img src=\"" + i.image + "\">\n\t\t\t</div>\n\t\t\t<div class=\"col-md-6 grey p-2 pl-4\">\n\t\t\t\t<h3>" + i.car + "</h3>\n\t\t\t\t<p>" + i.model + "</p>\n\t\t\t\t<p>" + i.year + "</p>\n\t\t\t\t<p>" + i.horsepower + "</p>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-3 grey p-2 pt-4\">\n\t\t\t\t<span class=\"font-weight-bold\"> 50\u20AC </span>\n\t\t\t\t<br>\n\t\t\t\t<br>\n\t\t\t\t<button id=\"contactButton\" class=\"btn\" type=\"\">Contact</button>\n\t\t\t\t\n\t\t\t</div>\n\n\n\t\t</div>\n\t\t</div>\n\n\t\t";
}
