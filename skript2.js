var Books=[
{
	title:'Norwegian Wood',
	author:'Haruki Murakami',
	publisher: 'Kodengha',
	year: 1998,
  description:`When 30-something Toru Watanabe hears a fragment of the titular Beatles track after a long airplane flight,\
  his memories are returned to his days as a young student and his love affair with the beautiful but damaged Naoko.\
  Toru walks beside Naoko for the last time in the snow-blanketed woods surrounding the mental institution where she is undergoing intensive therapy.\
  Shortly afterwards Naoko commits suicide in that frozen landscape, and while Toru's life continues, a part of him remains forever wandering in winter.`
},
 {
   title:'Onaj kojeg nema',
 	author:'Mehmed Djedović',
 	publisher: 'Svjetlost-Sarajevo',
 	year:2006,
  description: `The one who does not have is interesting and a drinking book that in a humorous way speaks of serious things, creates a life in its enchanting diversity, is read in one breath and is full of sentences that can be underlined and quoted, which are the characteristics of large books from the feathers excellent writers.
The reader who leaves the books of Mehmed Dedovic on a multiple win, this time has got an interesting and skillfully written book, a book that is readable, but calls to return to her and think about what we read. Đedović writes in the tradition of the best Bosnian-Herzegovinian storytellers; as each of the stories in the book shows that Salko lives, so this book is proof that Bosnia's narrative Bosnia continues to live and that it will live.
Roman in stories The one with no collection of interconnected stories whose connective thread is the character of Salke, a man about whom the main characters of certain stories speak, which some even obsess with, and that they are not even sure whether Salko exists or has ever existed. He is, therefore, the one from the title of the book, the one he does not have.
In this book, Đedović is a writer of spirit and wit, he is a true storyteller, master of detail, a modern sublimate of the good sides of Bosnia and Herzegovina urban and rural.
With this novel, some new girls and boys could love books and start reading them more than before, and that's what we need, perhaps more than ever.`
},
{
	title:'Little Princ',
	author:'Antoine Saint Exupery',
	publisher: 'Starworld',
	year:1965,
	description:`When the French writer Antonie de Saint-Exupery received an offer to write something for children,\
	 he was already somehow a well-known writer. However, his literary work was modest and did not draw any special attention of the readership and criticism.\
	 It was only when he wrote the allegorical story of the Little Prince and published it in 1940, he entered children's literature as an unavoidable writer,\
	 as well as in almost all school programs around the world. In a short time, the Little Prince experienced countless editions and printed in hundreds of thousands of copies.\
	 It is believed that the Little Prince is the number of editions in almost all languages ​​of the world, the only book that has reached the publishing phenomenon of sacred books of the Bible and the Koran.\
	  Little Prince is a book for children, which is intended for adults. And no one could say who reads this book more: children or adults.`
},
{
	title:'The Betsy',
	author:'Harold Robbins',
	publisher:'American Dream',
	year:1969,
	description:` Angelo Perino lives life on the bleeding edge of speed and success—a race car driver of humble origins who dominates on and off the track.\
	 Loren Hardeman is the ruthless patriarch of an auto empire, fighting to keep his family from self-destructing under the weight of its own greed and decadence. \
	 The two men, bound by their passionate vision as well as their charismatic power over women,\
	 come together to create the world’s fastest, most advanced automobile, “The Betsy”—named after Hardeman’s great-granddaughter, who has captured Perino’s heart.
   Their creation threatens to disrupt the industry, whose power brokers are determined to prevent it no matter the cost.\
   This pits Hardeman’s own grandson, the company’s current CEO, against him, revealing the depths to which Hardeman went to build his empire—including murder,\
	 incestuous adultery and organized crime. As the family feud escalates, Perino makes his move to conquer Hardeman’s empire as well as his great-granddaughter.
   This novel from master storyteller Harold Robbins pulls back the curtain on the glittering world of fame, fortune, and passion at the height of the auto industry,\
   giving a look into the world that is now shown to be full of scandal and product recalls.`
},
{
	title:'Interview with a Vampire',
	author:'Anne Rice',
	publisher:'Divine Word',
	year: 1989,
	description:`Here are the confessions of a vampire. Hypnotic, shocking, and chillingly erotic,\
	 this is a novel of mesmerizing beauty and astonishing force—a story of danger and flight,\
	 of love and loss, of suspense and resolution, and of the extraordinary power of the senses.\
	 It is a novel only Anne Rice could write.`
},
{
	title:'BlackOut',
	author:'Marc Elsberg',
	publisher:'German pride',
	year: 2002,
	description:`The novel starts with a collapse of electrical grids across Europe, plunging the population into darkness and disaster.\
	The prolonged electricity cut causes major problems: no more petrol, no telephone, no food in supermarkets, no cash machines working, nuclear disasters, etc.\
	A former computer hacker and IT professional tries to find out the root cause for this.\
	While doing so he himself becomes a hunted person as officials find suspicious e-mails sent from his laptop and think that he is involved.`
}
];
var message='';
var trazena;
var trazi;
function getBook(Book){
	var report ='Title: '+ Book.title +'<br>Author: '+ Book.author + '<br>Publisher: '+ Book.publisher + '<br>Year: '+ Book.year+'<br>Description: '+Book.description;
	return document.getElementById('opis').innerHTML=report;
}

function displeyDesBook1(){
  var descd=document.querySelector('#lista');
  descd.addEventListener('click',function(){
  return getBook(Books[0]);
  });
}
addEventListener('load',displeyDesBook1);


function displeyDesBook2(){
  var descd=document.querySelector('#lista2');
  descd.addEventListener('click',function(){
  return getBook(Books[1]);
  });
}
addEventListener('load',displeyDesBook2);

function displeyDesBook3(){
  var descd=document.querySelector('#lista3');
  descd.addEventListener('click',function(){
  return getBook(Books[2]);
  });
}
addEventListener('load',displeyDesBook3);

function displeyDesBook4(){
  var descd=document.querySelector('#kn2');
  descd.addEventListener('click',function(){
  return getBook(Books[3]);
  });
}
addEventListener('load',displeyDesBook4);

function displeyDesBook5(){
  var descd=document.querySelector('#kn3');
  descd.addEventListener('click',function(){
  return getBook(Books[4]);
  });
}
addEventListener('load',displeyDesBook5);


function CapFirstEl(Book) {
	var res=Book.title;
	res.charAt(0).toUpperCase()+res.slice(1);
	return res;

}


function DispleyBook(){
	 trazi=document.getElementById('bksch').value;
for(var i = 0;i < Books.length; i++){
	trazena=Books[i];
	if (trazi===trazena.title.toLowerCase() || trazi===CapFirstEl(trazena)) {
		message = getBook(trazena);
		document.getElementById('opis').innerHTML=message;
	}
}
}


/*Mladić Artem preživio je nuklearnu kataklizmu i s nekoliko tisuća sugrađana živi duboko ispod površine zemlje – u razgranatoj mreži stanica i pruga moskovskog Metroa.
Premda je život na njegovoj stanici, VDNG-u, prilično dobro organiziran, ljudi počinju nestajati, a opakog neprijatelja – mutante crne – teško se može savladati.
Artem se naizgled ne odlikuje naročitom hrabrošću, međutim od tajanstvenoga Huntera dobiva izuzetno važan zadatak: od VDNG-a mora doći do srca Metroa, legendarnog Polisa,
 kako bi upozorio na probleme s kojima se njegova stanica suočava te pronašao rješenje koje će spasiti mnoge živote. U svojoj potrazi mladić će proputovati čitav Metro, a probit će se i na površinu, u ruševine grada gdje je život potpuno izobličen radijacijom.
Nastao kao internetski eksperiment Dmitrija Gluhovskog, Metro 2033. brzo je privukao čak dva milijuna ruskih čitatelja, a kad je izdan kao knjiga, samo u Rusiji prodan je u gotovo pola milijuna primjeraka.
Ovaj znanstvenofantastični roman u kojem izraženo mjesto imaju društvena kritika i politička satira postao je svjetski hit zahvaljujući prijevodima na više od dvadeset jezika.
Prema njemu je nastala i istoimena vrlo popularna videoigrica.*/






















  //
