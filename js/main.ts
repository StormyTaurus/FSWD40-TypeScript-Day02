class carInfo
	{
		public car:<string>;
		public model:<number>;
		public year:<number>;
		public horsepower:<number>;
		public image:<string>;

constructor(a, b, c, d, e){




}

list(){`

	<div class="container blue">
			<div class="row ">
			<div class="col-md-3 grey p-2">
			
				<img src="${this.image}">
			</div>
			<div class="col-md-6 grey p-2 pl-4">
				<h3>${this.car}</h3>
				<p>${this.model}</p>
				<p>${this.year}</p>
				<p>${this.horsepower}</p>
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



},

let cars = new carInfo("mbw",2015,2,200,"");

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