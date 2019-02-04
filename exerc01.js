var Books=[
{
	title:'Norwegian Wood',
	author:'Haruki Murakami',
	publisher: 'Kodengha',
	year: 1998,
	getTtl: function () {
		return title;
	}
},
{
	title:'Little Princ',
	author:'Antoine Saint Exupery',
	publisher: 'Starworld',
	year:1965
},
{
	title:'The Betsy',
	author:'Harold Robbins',
	publisher:'American Dream',
	year:1969
},
{
	title:'Interview with a Vampire',
	author:'Anne Rice',
	publisher:'Divine Word',
	year: 1989
},
{
	title:'BlackOut',
	author:'Marc Elsberg',
	publisher:'German pride',
	year: 2002
},
];
var message='';
var trazena;
var trazi;
function CapFirstEl(Book) {
	var res=Book.title;
	res.charAt(0).toUpperCase()+res.slice(1);
	return res;

}


function getBook (Book) {
	var report=console.log('Title: '+ Book.title +'\nAuthor: '+ Book.author + '\nPublisher: '+ Book.publisher + '\nYear: '+ Book.year);
	return report;
}

function DispleyBook(trazi){ 
for(var i = 0;i < Books.length; i++){
	trazena=Books[i];
	if (trazi===trazena.title.toLowerCase() || trazi===CapFirstEl(trazena)) {
		message = getBook(trazena);
		console.log(message);
	}
}
}
