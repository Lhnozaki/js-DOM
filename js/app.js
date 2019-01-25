/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Taylor Swift

Find the div with the id of "name1" and replace the n/a with the following:

Tay-Tay*/

var taylor = document.getElementById('name1');
taylor.innerHTML = 'Tay-Tay';

/*2. DJ Khaled

Find the div with the id of "position2" and replace the n/a with the following: 

Project Manager*/

var DJ = document.getElementById('position2');
DJ.innerHTML = 'Project Manager';

/*3. Piko Taro

Find the div with the id of "alias3" and replace the n/a with the following:

Concatenation*/

var piko = document.getElementById('alias3');
piko.innerHTML = 'Concatenation';

/*4. Prince

Find the div with the class name of "profile" and replace the n/a with a verse from your favorite Prince song.*/

var purple = document.getElementsByClassName('profile');
purple[0].innerHTML = "~Purple Rain~";

/*5. Bruce Lee

Find the div with the class name of "profile" and replace the n/a with a quote from the legend himself.*/

var master = document.getElementsByClassName('profile');
master[1].innerHTML = 'Be Water my friend'

/*6. Samuel L Jackson

Find the div with the class name of "alias" and replace the n/a with your favorite character that Sammy portrayed.*/

var mofo = document.getElementsByClassName('alias');
mofo[2].innerHTML = 'Mace Windu';

/*7. David Ige

Create a div element and give it an id of "name7". Inside this div element, give it the contents of "David Ige".

Append this div element to the nameParent div*/

var gov = document.createElement('div');
gov.id = 'name7';
gov.innerHTML = 'David Ige';
var np = document.getElementById('nameParent');
np.appendChild(gov);
 
/*8. The Dos Equis Dude

Create a div element give it an id of "alias8". Inside this div element, give it the contents of "Stay Thirsty My Friends".

Append this div element to the aliasParent div.*/

var dos = document.createElement('div');
dos.id = 'alias8';
dos.innerHTML = 'Stay Thirsty My Friends';
var whoa = document.getElementById('aliasParent');
whoa.appendChild(dos);


//Final Boss
/*9. Create your own profile.*/

var test = document.getElementsByTagName('img');
test[8].id = 'newPhoto';
document.getElementById('newPhoto').src = "https://i.ytimg.com/vi/WujgDSsejNg/maxresdefault.jpg";

var redGuyName = document.createElement('div');
redGuyName.id = 'name9';
redGuyName.innerHTML = "The Kool Aid Guy";
var oh = document.getElementsByClassName('block3 col-sm-4');
oh[2].appendChild(redGuyName);

var redGuyJob = document.createElement('div');
redGuyJob.id = 'position9';
redGuyJob.innerHTML = "I serve Kool Aid.. A Refreshing Kool Beverage!";
oh[2].appendChild(redGuyJob);

var redGuyAlias = document.createElement('div');
redGuyAlias.id = 'alias9';
redGuyAlias.innerHTML = 'The Red King';
oh[2].appendChild(redGuyAlias);

var redGuyBio = document.createElement('div');
redGuyBio.id = 'bio9';
redGuyBio.innerHTML = "OOOHHHHHH YYYEAAAAHHHH!!!!!";
oh[2].appendChild(redGuyBio);