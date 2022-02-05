'use strict';
// Постоянные
	const d 		= document,
				table = d.querySelector('table'),
				cont	= d.querySelectorAll('.filter--continent input'),
				hs		= d.querySelectorAll('.filter--hemisphere input'),
				nas		= d.querySelectorAll('.filter--naselenie .filter__options-container input'),
				terra	= d.querySelectorAll('.filter--terra .filter__options-container input'),
				TRs 	= table.rows;

function createTable() {
	d.querySelector('tbody').innerHTML = whenua.map(X => `
		<tr class="${X[0]} ${X[6]} ${X[7]}">
		<td><p>${X[1]}</p></td>
		<td>${X[2]}</td>
		<td>${X[3]}</td>
		<td>${X[4].toLocaleString('ru')}</td>
		<td>${X[5].toLocaleString('ru')}</td>
		</tr>`).join('');
	let nmbrs = '';
	for (let i = 1; i < TRs.length; i++) { nmbrs = nmbrs+i+' '; }
	d.querySelector('nmbrs').setAttribute('n', nmbrs);
}
function TRquantity() {
	if (table.querySelector('.empty-table'))
		table.querySelector('.empty-table').remove();

	let TR_quantity = d.querySelectorAll('tbody tr:not([class*="hidden"])');
	d.querySelector('.TR-quantity').innerHTML = TR_quantity.length;
	if (d.querySelector('.first-TR'))
		d.querySelector('.first-TR').classList.remove('first-TR');
	if (d.querySelector('.last-TR'))
		d.querySelector('.last-TR').classList.remove('last-TR');
	if (TR_quantity.length > 0) {
		d.querySelector('main').classList.remove('quantity-null');

		TR_quantity[0].classList.add('first-TR');
		TR_quantity[TR_quantity.length - 1].classList.add('last-TR');
	} else {
		d.querySelector('main').classList.add('quantity-null');
		table.tBodies[0].insertAdjacentHTML('afterbegin', '<tr class="empty-table"><td>Нет таких стран</td><td></td><td></td><td></td><td></td></tr>');
	}
}
function clickSort() {
	let COL = this.getAttribute('id'),
			CLS = this.classList;
	if (CLS.contains('sorted')) {
		sorting('reverse');
		CLS.toggle('z-a');
	}
	else {
		sorting(COL);
		for (let i = 0; i < 5; i++) {d.querySelectorAll('th')[i].className = ''};
		CLS.add('sorted');
		if (COL == 'naselenie' || COL == 'terra') {CLS.add('z-a');} 
	}
	TRquantity();
}
function sorting(COL) {
	let sortedRows = Array.from(d.querySelectorAll('tbody>tr'));
	if (COL === 'reverse') {sortedRows.reverse();}
	else if (COL === 'naselenie' || COL === 'terra') {
		if (COL === 'naselenie') { COL = 3 }
		if (COL === 'terra') { COL = 4 }
		for (let i = 0; i < sortedRows.length; i++) 
			{sortedRows[i].cells[COL].innerHTML = sortedRows[i].cells[COL].innerHTML.replace(/&nbsp;/g, "").replace(/ /g, "");}
		sortedRows.sort((a, b) => b.cells[COL].innerHTML - a.cells[COL].innerHTML);
		for (let i = 0; i < sortedRows.length; i++) 
			{sortedRows[i].cells[COL].innerHTML = sortedRows[i].cells[COL].innerHTML.replace(/\B(?=(\d{3})+(?!\d))/g, " ");} }
	else {
		if (COL === 'strana') { COL = 0 }
		if (COL === 'stolica') { COL = 1 }
		if (COL === 'continent') { COL = 2 }
		sortedRows.sort((a, b) => a.cells[COL].innerHTML.toLowerCase() > b.cells[COL].innerHTML.toLowerCase() ? 1 : -1 ); }
	d.querySelector('tbody').append(...sortedRows);
}
function filterState() {
	console.log('1');
	if (c_all.checked && hs_all.checked && n_all.checked && t_all.checked)
		table_filter__clean.classList.add('hidden')
	else
		table_filter__clean.classList.remove('hidden')
}
// function filterClean() {
// 		console.log(c_all.checked,hs_all.checked,n_all.checked,t_all.checked);
// 	filterContinent('clean');
// 	filterHemisphere('clean');
// 	filterNaselenie('clean');
// 	filterTerra('clean');
// 		console.log(c_all.checked,hs_all.checked,n_all.checked,t_all.checked);
// 	filterState();
// }
function filterContinent(a) {
	if ((this && this.getAttribute('id') == 'c_all') || a == 'clean') {
		cont[0].checked = 1;
		cont[1].checked = cont[2].checked = cont[3].checked = cont[4].checked = cont[5].checked = cont[6].checked = 0;
	}
	if (cont[1].checked || cont[2].checked || cont[3].checked || cont[4].checked || cont[5].checked || cont[6].checked)
				cont[0].checked = 0;
	else 	cont[0].checked = 1;

	for (let i = 1; i < TRs.length; i++) {
		let C = TRs[i].cells[2].innerHTML,
				TRclass = TRs[i].classList;
		if (
			cont[0].checked 																		|| 
			(cont[1].checked && C.includes('Австралия'))				||
			(cont[2].checked && C.includes('Африка')) 					||
			(cont[3].checked && C.includes('Азия')) 						||
			(cont[4].checked && C.includes('Европа'))						||
			(cont[5].checked && C.includes('Северная Америка'))	||
			(cont[6].checked && C.includes('Южная Америка'))
			 )	{TRclass.remove('hiddenByCont');}
		else 	{TRclass.add('hiddenByCont');}
	}
	TRquantity();
}
function filterHemisphere(a) {
	let ID;
	if (this) {
		ID = this.getAttribute('id');
	} else if (a == 'clean' || ID == 'hs_all') {
		hs[0].checked = 1;
		hs[1].checked = hs[2].checked = hs[3].checked = hs[4].checked = hs[5].checked = hs[6].checked = 0;
		console.log(c_all.checked,hs_all.checked,n_all.checked,t_all.checked);
		ID = '';
	}
	// if (ID == 'hs_all') {
	// 	hs[1].checked = hs[2].checked = hs[3].checked = hs[4].checked = hs[5].checked = hs[6].checked = 0;
	// 	console.log(c_all.checked,hs_all.checked,n_all.checked,t_all.checked);
	// }
	else if (ID == 'lat_north') hs[2].checked = 0;
	else if (ID == 'lat_south') hs[1].checked = 0;
	else if (ID == 'long_west') hs[5].checked = 0;
	else if (ID == 'long_east') hs[4].checked = 0;

	if (hs[1].checked || hs[2].checked || hs[3].checked || hs[4].checked || hs[5].checked || hs[6].checked) 
				hs[0].checked = 0;
	else 	hs[0].checked = 1;

	for (let i = 1; i < TRs.length; i++) {
		let TRclass = TRs[i].classList;

		if (hs[0].checked) {
			TRclass.remove('hiddenByLatitude','hiddenByLongitude');
		}
		else if (ID.includes('lat_')) {
			if (
				!hs[1].checked && !hs[2].checked && !hs[3].checked ||
				(hs[1].checked && TRclass.contains('n')) ||
				(hs[2].checked && TRclass.contains('s')) ||
				(hs[3].checked && TRclass.contains('ns'))
				)		{TRclass.remove('hiddenByLatitude');}
			else 	{TRclass.add('hiddenByLatitude');}
		}
		else if (ID.includes('long_')) {
			if (
				!hs[4].checked && !hs[5].checked && !hs[6].checked ||
				(hs[4].checked && TRclass.contains('w')) ||
				(hs[5].checked && TRclass.contains('e')) ||
				(hs[6].checked && (TRclass.contains('we')||TRclass.contains('RUS')))
				)		{TRclass.remove('hiddenByLongitude');}
			else 	{TRclass.add('hiddenByLongitude');}
		}
	}
	TRquantity();
}
function filterNaselenie(a) {
	let MIN, MAX;
	if (nas[0].checked) {
		MIN = MAX = '';
	} else if (nas[1].checked) {
		MIN = 0;
		MAX = 100000;
	} else if (nas[2].checked) {
		MIN = 100000;
		MAX = 1000000;
	} else if (nas[3].checked) {
		MIN = 1000000;
		MAX = 5000000;
	} else if (nas[4].checked) {
		MIN = 5000000;
		MAX = 10000000;
	} else if (nas[5].checked) {
		MIN = 10000000;
		MAX = 25000000;
	} else if (nas[6].checked) {
		MIN = 25000000;
		MAX = 50000000;
	} else if (nas[7].checked) {
		MIN = 50000000;
		MAX = 100000000;
	} else if (nas[8].checked) {
		MIN = 100000000;
		MAX = '';
	}

	nas_Min.value = String(MIN).replace(/\B(?=(?:\d{3})+(?!\d))/g, ' ');
	nas_Max.value = String(MAX).replace(/\B(?=(?:\d{3})+(?!\d))/g, ' ');
	if (MIN == '')
		MIN = 0;
	nas_Min__slider.value = MIN;
	if (MAX == '')
		MAX = 1500000000;
	nas_Max__slider.value = MAX;

	filterByValue('nas_');
}
function filterTerra(a) {
	let MIN, MAX;
	if (terra[0].checked) {
		MIN = MAX = '';
		} else if (terra[1].checked) {
			MIN = 0;
			MAX = 2586;
		} else if (terra[2].checked) {
			MIN = 2586;
			MAX = 31000;
		} else if (terra[3].checked) {
			MIN = 31000;
			MAX = 125000;
		} else if (terra[4].checked) {
			MIN = 125000;
			MAX = 290000;
		} else if (terra[5].checked) {
			MIN = 290000;
			MAX = 700000;
		} else if (terra[6].checked) {
			MIN = 700000;
			MAX = 1300000;
		} else if (terra[7].checked) {
			MIN = 1300000;
			MAX = 5000000;
		} else if (terra[8].checked) {
			MIN = 5000000;
			MAX = '';
	}

	terra_Min.value = String(MIN).replace(/\B(?=(?:\d{3})+(?!\d))/g, ' ');
	terra_Max.value = String(MAX).replace(/\B(?=(?:\d{3})+(?!\d))/g, ' ');
	if (MIN == '')
		MIN = 0;
	terra_Min__slider.value = MIN;
	if (MAX == '')
		MAX = 18000000;
	terra_Max__slider.value = MAX;

	filterByValue('');
}
function filterByValue(ID) {
	let MIN, MAX, CLASS, C, value;
	if (this) {
		ID = this.getAttribute('id');

		if (this.value.replace(/&nbsp;/g, "").replace(/ /g, "") * 0 != 0) {
			this.parentNode.classList.add('invalid');
			return;
		}
		else this.parentNode.classList.remove('invalid');
	}

	if (ID.includes('nas')) {
		MIN = nas_Min.value.replace(/&nbsp;/g, "").replace(/ /g, "");
		MAX = nas_Max.value.replace(/&nbsp;/g, "").replace(/ /g, "");

		// value<->radio sync
			if 		(MIN != '' || MAX != '') 
						nas[0].checked = 0;
			if 		((MIN == '' || MIN == '0') && (MAX == '' || MAX == '1500000000')) 
						nas[0].checked = 1;
			if 		(MIN != '0' || MAX != '100000') 
						nas[1].checked = 0;
			else 	nas[1].checked = 1;
			if 		(MIN != '100000' || MAX != '1000000') 
						nas[2].checked = 0;
			else 	nas[2].checked = 1;
			if 		(MIN != '1000000' || MAX != '5000000') 
						nas[3].checked = 0;
			else 	nas[3].checked = 1;
			if 		(MIN != '5000000' || MAX != '10000000') 
						nas[4].checked = 0;
			else 	nas[4].checked = 1;
			if 		(MIN != '10000000' || MAX != '25000000') 
						nas[5].checked = 0;
			else 	nas[5].checked = 1;
			if 		(MIN != '25000000' || MAX != '50000000') 
						nas[6].checked = 0;
			else 	nas[6].checked = 1;
			if 		(MIN != '50000000' || MAX != '100000000') 
						nas[7].checked = 0;
			else 	nas[7].checked = 1;
			if 		(MIN != '100000000' || MAX != '')
						nas[8].checked = 0;
			else 	nas[8].checked = 1;
			if 		(MIN == '100000000' && MAX == '1500000000')
						nas[8].checked = 1;

		CLASS = 'hiddenByNas';
		C = 3;
	}
	else {
		MIN = terra_Min.value.replace(/&nbsp;/g, "").replace(/ /g, "");
		MAX = terra_Max.value.replace(/&nbsp;/g, "").replace(/ /g, "");

		// value<->radio sync
			if 		(MIN != '' || MAX != '') 
						terra[0].checked = 0;
			if 		((MIN == '' || MIN == '0') && (MAX == '' || MAX == '18000000')) 
						terra[0].checked = 1;
			if 		(MIN != '0' || MAX != '2586') 
						terra[1].checked = 0;
			else 	terra[1].checked = 1;
			if 		(MIN != '2586' || MAX != '31000') 
						terra[2].checked = 0;
			else 	terra[2].checked = 1;
			if 		(MIN != '31000' || MAX != '125000') 
						terra[3].checked = 0;
			else 	terra[3].checked = 1;
			if 		(MIN != '125000' || MAX != '290000') 
						terra[4].checked = 0;
			else 	terra[4].checked = 1;
			if 		(MIN != '290000' || MAX != '700000') 
						terra[5].checked = 0;
			else 	terra[5].checked = 1;
			if 		(MIN != '700000' || MAX != '1300000') 
						terra[6].checked = 0;
			else 	terra[6].checked = 1;
			if 		(MIN != '1300000' || MAX != '5000000') 
						terra[7].checked = 0;
			else 	terra[7].checked = 1;
			if 		(MIN != '5000000' || MAX != '')
						terra[8].checked = 0;
			else 	terra[8].checked = 1;
			if 		(MIN == '5000000' && MAX == '18000000')
						terra[8].checked = 1;

		CLASS = 'hiddenByTerra';
		C = 4;
	}

	if (MAX == '') {MAX = 1500000000;}
	for (let i = 1; i < TRs.length; i++) {
		if (nas_mln.checked || terra_kilo.checked) {
			value = Number(TRs[i].cells[C].getAttribute('prev_value').replace(/&nbsp;/g, "").replace(/ /g, ""));
		} else {
				value = Number(TRs[i].cells[C].innerHTML.replace(/&nbsp;/g, "").replace(/ /g, ""));
			}
		if (value >= MIN && value <= MAX) 
					TRs[i].classList.remove(CLASS);
		else 	TRs[i].classList.add(CLASS);
	}
	if (this) {
		this.value = this.value.replace(/ /g, "").replace(/\B(?=(?:\d{3})+(?!\d))/g, ' ');
	} else if (ID.includes('Min')) {
		d.querySelector('#'+ID).value = MIN.replace(/ /g, "").replace(/\B(?=(?:\d{3})+(?!\d))/g, ' ');
	} else if (ID.includes('Max') && d.querySelector('#'+ID).value > 0) {
		d.querySelector('#'+ID).value = MAX.replace(/ /g, "").replace(/\B(?=(?:\d{3})+(?!\d))/g, ' ');
	}

	longValue();
	TRquantity();
}
function shortValuesNasTerra() {
	let COL;
	if (this.getAttribute('id').includes('nas'))
		COL = 3;
	if (this.getAttribute('id').includes('terra'))
		COL = 4;

	if (this.checked) {
		for (let i = 1; i < TRs.length; i++) {
			let CELL = TRs[i].cells[COL],
					CELLvalue = CELL.innerHTML.replace(/&nbsp;/g, "").replace(/ /g, "");;
			CELL.setAttribute('prev_value', CELL.innerHTML);

			if (nas_mln.checked) {
				if (CELLvalue > 1000000000) {
					CELL.innerHTML = (CELLvalue/1000000).toFixed().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
				} else if (CELLvalue > 1000000 || CELLvalue < 5000) {
					CELL.innerHTML = (CELLvalue/1000000).toFixed();
				} else if (CELLvalue > 50000) {
					CELL.innerHTML = (CELLvalue/1000000).toFixed(1);
				} else if (CELLvalue == 0) {
				} else {
					CELL.innerHTML = (CELLvalue/1000000).toFixed(2);
				}
				if (CELLvalue < 5000 && CELLvalue > 0) {
					CELL.classList.add('approximately');
				}
			}
			if (terra_kilo.checked) {
				if (CELLvalue > 1000000) {
					CELL.innerHTML = (CELLvalue/1000).toFixed().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
				} else if (CELLvalue > 1000) {
					CELL.innerHTML = (CELLvalue/1000).toFixed();
				} else {
					CELL.innerHTML = (CELLvalue/1000).toFixed(1);
				}
			}
		}
	} else {
		for (let i = 1; i < TRs.length; i++) {
			let CELL = TRs[i].cells[COL],
					currentValue = CELL.innerHTML;
			CELL.innerHTML = CELL.getAttribute('prev_value');
			CELL.setAttribute('prev_value', currentValue);
			CELL.classList.remove('approximately');
		}
	}
}
function longValue() {
	let input = d.querySelectorAll('.filter--naselenie .input-wrap input');
	for (let i = 0; i < input.length; i++) {
		if (input[i].value.length > 10)
			input[i].parentNode.classList.add('long-value');
		else
			input[i].parentNode.classList.remove('long-value');
	}
}
function slider() {
	let param = this.getAttribute('id').split('__', 1).toString();
	if (param.includes('nas')) {
		if (this.value > 300000000) this.step = 100000000;
		else if (this.value > 100000000 && this.value <= 300000000) this.step = 50000000;
		else if (this.value > 30000000 && this.value <= 100000000) this.step = 10000000;
		else if (this.value > 10000000 && this.value <= 30000000) this.step = 5000000;
		else if (this.value > 1000000 && this.value <= 10000000) this.step = 1000000;
		else if (this.value > 0 && this.value <= 1000000) this.step = 100000;
	}
	else {
		if (this.value > 2000000) this.step = 1000000;
		else if (this.value > 500000 && this.value <= 2000000) this.step = 100000;
		else if (this.value > 200000 && this.value <= 500000) this.step = 50000;
		else if (this.value > 100000 && this.value <= 200000) this.step = 20000;
		else if (this.value > 30000 && this.value <= 100000) this.step = 10000;
		else if (this.value > 0 && this.value <= 30000) this.step = 1000;
	}
	
	d.querySelector('#'+param).value = this.value;

	thumbPositionCorrection(this);
	filterByValue(param);
}
function tableSearch() {
	console.log('1');
	let regPhrase = new RegExp(table_search.value, 'i'),
			flag = false;
	for (let i = 1; i < TRs.length; i++) {
		flag = false;
		for (let j = 0; j < 2; j++) {
			flag = regPhrase.test(TRs[i].cells[j].innerHTML);
			if (flag) break;
		}
		if (flag) 
			{TRs[i].classList.remove('hiddenBySearch');}
		else {TRs[i].classList.add('hiddenBySearch');}
	}
	TRquantity();
}
function thumbPositionCorrection(element) {
	if (element.value == element.max)
				element.classList.add('thumb-max');
	else 	element.classList.remove('thumb-max');
	if (element.value == element.min)
				element.classList.add('thumb-min');
	else 	element.classList.remove('thumb-min');
}

d.querySelectorAll('.filter--continent input').forEach((element) => 
	{element.onclick = filterContinent;});
d.querySelectorAll('.filter--hemisphere input').forEach((element) => 
	{element.onclick = filterHemisphere;});
d.querySelectorAll('.filter--naselenie .filter__options-container input').forEach((element) => 
	{element.onclick = filterNaselenie;});
d.querySelectorAll('.filter--terra .filter__options-container input').forEach((element) => 
	{element.onclick = filterTerra;});
d.querySelectorAll('.filter--by-value input').forEach((element) => 
	{element.oninput = filterByValue;});
d.querySelectorAll('.filter__label').forEach((element) => 
	{element.onclick = function() {this.parentNode.classList.toggle('filter--collapsed');}});
d.querySelectorAll('[type="range"]').forEach((element) => 
	{element.oninput = slider;
	thumbPositionCorrection(element);});
d.querySelectorAll('th').forEach((element) => 
	{element.onclick = clickSort;});
table_search.oninput = tableSearch;
nas_mln.onclick = shortValuesNasTerra;
terra_kilo.onclick = shortValuesNasTerra;
// table_filter__clean.onclick = filterClean;
// d.querySelector('.table-filter__container').oninput = filterState;
settings_visibility.onclick = function () {d.querySelector('.table-filter__settings').classList.toggle('shown');};

createTable();
sorting('strana');
TRquantity();
