let sliderNas = document.querySelector('#slider--naselenie'),
		sliderTerra = document.querySelector('#slider--terra'),
		nas_Min = document.querySelector('#nas_Min'),
		nas_Max = document.querySelector('#nas_Max'),
		terra_Min = document.querySelector('#terra_Min'),
		terra_Max = document.querySelector('#terra_Max'),
		defaultFormatter = {
			to: function (value) { return value === undefined ? "" : value.toLocaleString('ru'); },
			from: function (value) { return Number(value.replace(/&nbsp;/g, "").replace(/ /g, "")); }
		};

noUiSlider.create(sliderNas, {
	connect: true,
	behaviour: 'tap',
	start: [10000, 1000000000],
	range: {
		'min': [0, 5000],
		'10%': [100000, 100000],
		'20%': [1000000, 1000000],
		'30%': [10000000, 5000000],
		'40%': [100000000, 10000000],
		'50%': [150000000, 50000000],
		'80%': [500000000, 500000000],
		'max': [1500000000]
	}
});

sliderNas.noUiSlider.on('update', function (values, handle) {
	nas_Min.value = values[0];
	nas_Max.value = values[1];
});

nas_Min.addEventListener('change', function () {
	sliderNas.noUiSlider.set([this.value, null]);
});
nas_Max.addEventListener('change', function () {
	sliderNas.noUiSlider.set([null, this.value]);
});

nas_Min.onkeyup = function () {
	this.value = this.value.replace(/[^\d]/g, '').replace(/\B(?=(?:\d{3})+(?!\d))/g, ' ')
};
nas_Max.onkeyup = function () {
	this.value = this.value.replace(/[^\d]/g, '').replace(/\B(?=(?:\d{3})+(?!\d))/g, ' ')
};

