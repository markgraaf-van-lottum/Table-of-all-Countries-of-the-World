// Постоянные
	let 	filter 		= {
							africa:false,america:false,asia:false,europa:false,oceania:false,
							n0:false,n1:false,n2:false,n3:false,n4:false,n5:false,n6:false,n7:false,
							dwarf:false,tiny:false,verysmall:false,small:false,medium:false,big:false,verybig:false,huge:false },
			body 			= document.querySelector('body'),
			th 			= document.querySelectorAll('th')
			tr 			= document.querySelectorAll('tr'),
			africa 		= document.querySelectorAll('.africa'),
			america 		= document.querySelectorAll('.america'),
			asia 			= document.querySelectorAll('.asia'),
			europa 		= document.querySelectorAll('.europa'),
			oceania 		= document.querySelectorAll('.oceania'),
			n0 			= document.querySelectorAll('.n0'),
			n1 			= document.querySelectorAll('.n1'),
			n2 			= document.querySelectorAll('.n2'),
			n3 			= document.querySelectorAll('.n3'),
			n4 			= document.querySelectorAll('.n4'),
			n5 			= document.querySelectorAll('.n5'),
			n6 			= document.querySelectorAll('.n6'),
			n7 			= document.querySelectorAll('.n7'),
			dwarf 		= document.querySelectorAll('.dwarf'),
			tiny 			= document.querySelectorAll('.tiny'),
			verysmall 	= document.querySelectorAll('.very-small');
			small 		= document.querySelectorAll('.small');
			medium 		= document.querySelectorAll('.medium');
			big 			= document.querySelectorAll('.big');
			verybig 		= document.querySelectorAll('.very-big');
			huge 			= document.querySelectorAll('.huge');

document.querySelector('#continents-all').addEventListener('click',
	function() {
		for (var i = 0; i < tr.length; i++) {tr[i].classList.remove('Continent__ON');};
		body.classList.remove('c__Africa','c__America','c__Asia','c__Europa','c__Oceania');}, false);
document.querySelector('#africa').addEventListener('click',
	function() {for (var i = 0; i < africa.length; i++) {
		africa[i].classList.toggle('Continent__ON'); }
		body.classList.toggle('c__Africa') }, false);
document.querySelector('#america').addEventListener('click',
	function() { for (var i = 0; i < america.length; i++) {
		america[i].classList.toggle('Continent__ON'); }
		body.classList.toggle('c__America') }, false);
document.querySelector('#asia').addEventListener('click',
	function() { for (var i = 0; i < asia.length; i++) {
		asia[i].classList.toggle('Continent__ON'); }
		body.classList.toggle('c__Asia') }, false);
document.querySelector('#europa').addEventListener('click',
	function() { for (var i = 0; i < europa.length; i++) {
		europa[i].classList.toggle('Continent__ON'); }
		body.classList.toggle('c__Europa') }, false);
document.querySelector('#oceania').addEventListener('click',
	function() { for (var i = 0; i < oceania.length; i++) {
		oceania[i].classList.toggle('Continent__ON'); }
		body.classList.toggle('c__Oceania') }, false);
document.querySelector('#naselenie-all').addEventListener('click',
	function() {
		for (var i = 0; i < tr.length; i++) {tr[i].classList.remove('Naselenie__ON');};
		body.classList.remove('n__0','n__1','n__2','n__3','n__4','n__5','n__6','n__7');}, false);
document.querySelector('#n0').addEventListener('click',
	function() { for (var i = 0; i < n0.length; i++) {
		n0[i].classList.toggle('Naselenie__ON'); }
		body.classList.toggle('n__0') }, false);
document.querySelector('#n1').addEventListener('click',
	function() { for (var i = 0; i < n1.length; i++) {
		n1[i].classList.toggle('Naselenie__ON'); }
		body.classList.toggle('n__1') }, false);
document.querySelector('#n2').addEventListener('click',
	function() { for (var i = 0; i < n2.length; i++) {
		n2[i].classList.toggle('Naselenie__ON'); }
		body.classList.toggle('n__2') }, false);
document.querySelector('#n3').addEventListener('click',
	function() { for (var i = 0; i < n3.length; i++) {
		n3[i].classList.toggle('Naselenie__ON'); }
		body.classList.toggle('n__3') }, false);
document.querySelector('#n4').addEventListener('click',
	function() { for (var i = 0; i < n4.length; i++) {
		n4[i].classList.toggle('Naselenie__ON'); }
		body.classList.toggle('n__4') }, false);
document.querySelector('#n5').addEventListener('click',
	function() { for (var i = 0; i < n5.length; i++) {
		n5[i].classList.toggle('Naselenie__ON'); }
		body.classList.toggle('n__5') }, false);
document.querySelector('#n6').addEventListener('click',
	function() { for (var i = 0; i < n6.length; i++) {
		n6[i].classList.toggle('Naselenie__ON'); }
		body.classList.toggle('n__6') }, false);
document.querySelector('#n7').addEventListener('click',
	function() { for (var i = 0; i < n7.length; i++) {
		n7[i].classList.toggle('Naselenie__ON'); }
		body.classList.toggle('n__7') }, false);
document.querySelector('#terra-all').addEventListener('click',
	function() {
		for (var i = 0; i < tr.length; i++) {tr[i].classList.remove('Terra__ON');};
		body.classList.remove('t__Dwarf','t__Tiny','t__Very-small','t__Small','t__Medium','t__Big','t__Very-big','t__Huge');}, false);
document.querySelector('#dwarf').addEventListener('click',
	function() { for (var i = 0; i < dwarf.length; i++) {
		dwarf[i].classList.toggle('Terra__ON'); }
		body.classList.toggle('t__Dwarf') }, false);
document.querySelector('#tiny').addEventListener('click',
	function() { for (var i = 0; i < tiny.length; i++) {
		tiny[i].classList.toggle('Terra__ON'); }
		body.classList.toggle('t__Tiny') }, false);
document.querySelector('#very-small').addEventListener('click',
	function() { for (var i = 0; i < verysmall.length; i++) {
		verysmall[i].classList.toggle('Terra__ON'); }
		body.classList.toggle('t__Very-small') }, false);
document.querySelector('#small').addEventListener('click',
	function() { for (var i = 0; i < small.length; i++) {
		small[i].classList.toggle('Terra__ON'); }
		body.classList.toggle('t__Small') }, false);
document.querySelector('#medium').addEventListener('click',
	function() { for (var i = 0; i < medium.length; i++) {
		medium[i].classList.toggle('Terra__ON'); }
		body.classList.toggle('t__Medium') }, false);
document.querySelector('#big').addEventListener('click',
	function() { for (var i = 0; i < big.length; i++) {
		big[i].classList.toggle('Terra__ON'); }
		body.classList.toggle('t__Big') }, false);
document.querySelector('#very-big').addEventListener('click',
	function() { for (var i = 0; i < verybig.length; i++) {
		verybig[i].classList.toggle('Terra__ON'); }
		body.classList.toggle('t__Very-big') }, false);
document.querySelector('#huge').addEventListener('click',
	function() { for (var i = 0; i < huge.length; i++) {
		huge[i].classList.toggle('Terra__ON'); }
		body.classList.toggle('t__Huge') }, false);


/*  Выделение активных опций  */
.filter [id*="-all"],
.c__Africa 		#africa,
.c__America 	#america,
.c__Asia 		#asia,
.c__Europa 		#europa,
.c__Oceania 	#oceania,
.n__0 			#n0,
.n__1 			#n1,
.n__2 			#n2,
.n__3 			#n3,
.n__4 			#n4,
.n__5 			#n5,
.n__6 			#n6,
.n__7 			#n7,
.t__Dwarf 		#dwarf,
.t__Tiny 		#tiny,
.t__Very-small #very-small,
.t__Small 		#small,
.t__Medium 		#medium,
.t__Big 			#big,
.t__Very-big 	#very-big,
.t__Huge 		#huge {
	color: snow;
	background: #39F;
	border: 1px solid rgba(0, 0, 0, 0.15) !important;
}

[class*="c__"] #continents-all:hover,
[class*="n__"] #naselenie-all:hover,
[class*="t__"] #terra-all:hover {
	border-color: #BBB !important;
}

/* Скрыть отфильтрованные */
[class*="__"] tbody tr {
	display: none;
}

/* Количество фильтров = 1 */
[class*="c__"]:not([class*="n__"]):not([class*="t__"]) .Continent__ON,
[class*="n__"]:not([class*="c__"]):not([class*="t__"]) .Naselenie__ON,
[class*="t__"]:not([class*="n__"]):not([class*="c__"]) .Terra__ON,
/* Количество фильтров = 2 */
[class*="c__"][class*="n__"]:not([class*="t__"]) .Continent__ON.Naselenie__ON,
[class*="n__"][class*="t__"]:not([class*="c__"]) .Naselenie__ON.Terra__ON,
[class*="t__"][class*="c__"]:not([class*="n__"]) .Terra__ON.Continent__ON,
/* Количество фильтров = 3 */
[class*="c__"][class*="n__"][class*="t__"] .Continent__ON.Naselenie__ON.Terra__ON {
	display: table-row;
}





	// else if (n >= 3) {
		for (var i = 0; i < sortedRows.length; i++) 
			{sortedRows[i].cells[n].innerHTML = sortedRows[i].cells[n].innerHTML.replace(/&nbsp;/g, "").replace(/ /g, "");}
		sortedRows.sort((a, b) => b.cells[n].innerHTML - a.cells[n].innerHTML);
		for (var i = 0; i < sortedRows.length; i++) 
			{sortedRows[i].cells[n].innerHTML = sortedRows[i].cells[n].innerHTML.replace(/\B(?=(\d{3})+(?!\d))/g, " ");}
	}
