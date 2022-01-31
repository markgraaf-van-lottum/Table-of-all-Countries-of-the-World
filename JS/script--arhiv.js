// Фильтры (порядок значений)
filters = {		0		continents_All: 1,
							1		africa: 				0,
							2		america: 				0,
							3		asia: 					0,
							4		europa: 				0,
							5		oceania: 				0,
							6		nas_All: 				1,
							7		nas_0: 					0,
							8		nas_1: 					0,
							9		nas_2: 					0,
							10	nas_3: 					0,
							11	nas_4: 					0,
							12	nas_5: 					0,
							13	nas_6: 					0,
							14	nas_7: 					0,
							15	terra_All: 			1,
							16	dwarf: 					0,
							17	tiny: 					0,
							18	verySmall: 			0,
							19	small: 					0,
							20	medium: 				0,
							21	big: 						0,
							22	veryBig: 				0,
							23	huge: 					0,
};

let c_specific = [
{id: 1, checked: true},
{id: 2, checked: true},
{id: 3, checked: true}
];

let user = c_specific.find(item => item.checked == true);

// 
	document.querySelector('#nasMin').onkeyup = filterNumbers;
	document.querySelector('#nasMax').onkeyup = filterNumbers;
	document.querySelector('#terraMin').onkeyup = filterNumbers;
	document.querySelector('#terraMax').onkeyup = filterNumbers;
	document.querySelector('#allNaselenie').addEventListener('click', handlerFilter, false);
	document.querySelector('#n0').addEventListener('click', handlerFilter, false);
	document.querySelector('#n1').addEventListener('click', handlerFilter, false);
	document.querySelector('#n2').addEventListener('click', handlerFilter, false);
	document.querySelector('#n3').addEventListener('click', handlerFilter, false);
	document.querySelector('#n4').addEventListener('click', handlerFilter, false);
	document.querySelector('#n5').addEventListener('click', handlerFilter, false);
	document.querySelector('#n6').addEventListener('click', handlerFilter, false);
	document.querySelector('#n7').addEventListener('click', handlerFilter, false);
	document.querySelector('#allTerra').addEventListener('click', handlerFilter, false);
	document.querySelector('#dwarf').addEventListener('click', handlerFilter, false);
	document.querySelector('#tiny').addEventListener('click', handlerFilter, false);
	document.querySelector('#verySmall').addEventListener('click', handlerFilter, false);
	document.querySelector('#small').addEventListener('click', handlerFilter, false);
	document.querySelector('#medium').addEventListener('click', handlerFilter, false);
	document.querySelector('#big').addEventListener('click', handlerFilter, false);
	document.querySelector('#veryBig').addEventListener('click', handlerFilter, false);
	document.querySelector('#huge').addEventListener('click', handlerFilter, false);
	document.querySelector('#allContinents').addEventListener('click', handlerFilter, false);

handlerSort 		= function() { clickSort(this.getAttribute('id')) };

function filterTerra() {
	if (Max < 1) {Max = 18000000;}
	for (var i = 1; i < table.rows.length; i++) {
		value = Number(table.rows[i].cells[4].innerHTML.replace(/&nbsp;/g, "").replace(/ /g, ""));
		if (value >= Min && value < Max)
			{table.rows[i].classList.remove('hidden-by-terra');}
		else {table.rows[i].classList.add('hidden-by-terra');} }
}
function clickSort(a) {
	let thIS = document.querySelector('#'+a);
	if (thIS.classList.contains('sorted')) 
		{sorting('reverse');
	thIS.classList.toggle('z-a');}
	else {sorting(a);
		cleanClasses();
		thIS.classList.add('sorted');
		if (a == 'naselenie' || a == 'terra') {thIS.classList.add('z-a');} }
	}

	document.querySelector('#strana').onclick = clickSort;
	document.querySelector('#stolica').onclick = clickSort;
	document.querySelector('#continent').onclick = clickSort;
	document.querySelector('#naselenie').onclick = clickSort;
	document.querySelector('#terra').onclick = clickSort;

	document.querySelector('#allContinents').addEventListener('click', handlerFilter, false);
	document.querySelector('#africa').addEventListener('click', handlerFilter, false);
	document.querySelector('#america').addEventListener('click', handlerFilter, false);
	document.querySelector('#asia').addEventListener('click', handlerFilter, false);
	document.querySelector('#europa').addEventListener('click', handlerFilter, false);
	document.querySelector('#oceania').addEventListener('click', handlerFilter, false);

	// document.querySelector('#strana').addEventListener('click', handlerSort, false);
	// document.querySelector('#stolica').addEventListener('click', handlerSort, false);
	// document.querySelector('#continent').addEventListener('click', handlerSort, false);
	// document.querySelector('#naselenie').addEventListener('click', handlerSort, false);
	// document.querySelector('#terra').addEventListener('click', handlerSort, false);

function filteringOLD() {
	filtered = whenua.filter(X => (
		filters.allContinents || 
		((filters.africa) 	&& X.ct =="Африка") || 
		((filters.america) 	&& X.ct =="Америка") || 
		((filters.asia) 		&& X.ct =="Азия") || 
		((filters.europa) 	&& X.ct =="Европа") || 
		((filters.oceania) 	&& X.ct =="Океания")
		));
	filtered = filtered.filter(X => (
		filters.allNaselenie || 
		((filters.n0) && (X.ns < 100000)) || 
		((filters.n1) && (X.ns > 100000 		&& x.ns < 1000000)) || 
		((filters.n2) && (X.ns > 1000000 		&& x.ns < 5000000)) || 
		((filters.n3) && (X.ns > 5000000 		&& x.ns < 10000000)) || 
		((filters.n4) && (X.ns > 10000000 	&& x.ns < 25000000)) || 
		((filters.n5) && (X.ns > 25000000 	&& x.ns < 50000000)) || 
		((filters.n6) && (X.ns > 50000000 	&& x.ns < 100000000)) || 
		((filters.n7) && (X.ns > 100000000))
		));
	filtered = filtered.filter(X => (
		filters.allTerra || 
		((filters.dwarf) 		&& (X.t <= 2586)) || 
		((filters.tiny) 		&& (X.t > 2586 			&& x.t < 31000)) || 
		((filters.verySmall) && (X.t > 31000 		&& x.t < 125000)) || 
		((filters.small) 		&& (X.t > 125000 		&& x.t < 290000)) || 
		((filters.medium) 	&& (X.t > 290000 		&& x.t < 700000)) || 
		((filters.big) 			&& (X.t > 700000 		&& x.t < 1300000)) || 
		((filters.veryBig) 	&& (X.t > 1300000 	&& x.t < 5000000)) || 
		((filters.huge) 		&& (X.t > 5000000))
		));
	createFilteredTable();
}
function createFilteredTable() {
	if (filtered.length === 0) {
		table.classList.add('empty');
		tbody.innerHTML = '<tr><td>Нет таких стран</td></tr>' }
	else {
		table.classList.remove('empty');
		tbody.innerHTML = filtered.map(X => `
			<tr class="${X.id}">
			<td><p>${X.n}</p></td>
			<td>${X.c}</td>
			<td>${X.ct}</td>
			<td>${X.ns}</td>
			<td>${X.t}</td>
			</tr>`).join(''); }
}
function createTable(a) {
	for (let i = 0; i < a.length; i++) {
		let clone = template.content.cloneNode(true);
		let cells = clone.querySelectorAll('td');
		cells[0].textContent = a[i].n;
		cells[1].textContent = a[i].c;
		cells[2].textContent = a[i].ct;
		cells[3].textContent = a[i].ns.toLocaleString('ru');
		cells[4].textContent = a[i].t.toLocaleString('ru');
		template.parentNode.appendChild(clone);
	};
	template.remove();
}
// <template>
// <tr><td><td><td><td><td>
// </template>

switch (a) {
	case 3: alert( 'Маловато' ); break;
	case 4: alert( 'В точку!' ); break;
	case 5: alert( 'Перебор' ); break;
	default: alert( "Нет таких значений" );
}

if (a === 3) { alert( 'Маловато' ); }
else if (a === 4) { alert( 'В точку!' ); }
else if (a === 5) { alert( 'Перебор' ); }
else { alert( 'Нет таких значений' ); }
