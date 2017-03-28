/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Replace the n/a with the following:
Tay-Tay*/

var changeTay = document.getElementById("name1");
changeTay.innerHTML = "Tay-Tay";


/*2. Replace the n/a with the following: 
Project Manager*/

var changeKhaled = document.getElementById("position2");
changeKhaled.innerHTML = "Project Manager";


/*3. Replace the n/a with the following:
Concatenation*/

var changePiko = document.getElementById("alias3");
changePiko.innerHTML = "Concatenation";

/*4. Replace the n/a for Snoop with the gangsta lorem ipsum*/

var changeSnoop = document.getElementsByClassName("profile")[0];
changeSnoop.innerHTML = "Lorizzle ipsizzle dolizzle cool amizzle, pizzle adipiscing yo mamma. Boom shackalack sapien velit, pizzle volutpizzle, suscipit hizzle, sure vizzle, doggy. Gangsta eget tortor. Sed i saw beyonces tizzles and my pizzle went crizzle. My shizz funky fresh dolor dapibus turpis tempizzle ghetto. Maurizzle crunk nibh et shit. Away away tellivizzle. Pellentesque eleifend rhoncizzle stuff. In fo shizzle mah nizzle fo rizzle, mah home g-dizzle daahng dawg stuff dictumst. Shiznit dapibizzle. Fo shizzle i saw beyonces tizzles and my pizzle went crizzle tellivizzle, pretizzle bizzle, mattizzle shizznit, eleifend bizzle, nunc. Rizzle suscipizzle. Integer sempizzle sizzle phat shizzlin dizzle.";

/*5. Relace the n/a for Samuel L Jackson with his lorem ipsum*/

var changeSammy = document.getElementsByClassName("profile")[2];
changeSammy.innerHTML = "My money's in that office, right? If she start giving me some bullshit about it ain't there, and we got to go someplace else and get it, I'm gonna shoot you in the head then and there. Then I'm gonna shoot that bitch in the kneecaps, find out where my goddamn money is. She gonna tell me too. Hey, look at me when I'm talking to you, motherfucker. You listen: we go in there, and that nigga Winston or anybody else is in there, you the first motherfucker to get shot. You understand?"

/*6. Create a div element for Chuck Norris and give it an id of "name7". Inside this div element, give it the contents of "Chuck Norris".
Append this div element to the nameBox div*/

 var changeChuck = document.createElement("div");
changeChuck.id = "name7";
changeChuck.innerHTML = "Chuck Norris";
nameBox.appendChild(changeChuck);

/*7. Create a div element for Grimmace and give it an id of "alias8". Inside this div element, give it the contents of "The Purple Monster".
Append this div element to the aliasBox div.*/

var changeGrim = document.createElement("div");
changeGrim.id = "alias8";
changeGrim.innerHTML = "The Purple Monster";
aliasBox.appendChild(changeGrim);


//Final Boss
/*8. Create your own profile.*/

var image =document.getElementsByClassName("block3 col-sm-4")[2].innerHTML = "<img src=https://images-na.ssl-images-amazon.com/images/G/01/img15/pet-products/small-tiles/23695_pets_vertical_store_dogs_small_tile_8._CB312176604_.jpg>";


var myName = document.createElement("div");
myName.id = "name9";
myName.innerHTML = "Kelsie";
document.getElementsByClassName("block3 col-sm-4")[2].appendChild(myName);

var myPosition = document.createElement("div");
myPosition.id = "position9";
myPosition.innerHTML = "Confused Coder";
document.getElementsByClassName("block3 col-sm-4")[2].appendChild(myPosition);

var myAlias = document.createElement("div");
myAlias.id = "alias9";
myAlias.innerHTML = "Kels";
document.getElementsByClassName("block3 col-sm-4")[2].appendChild(myAlias);

var myBio = document.createElement("div");
myBio.id = "bio9";
myBio.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod est accusantium commodi, ut blanditiis illum unde. Temporibus beatae sit nisi nesciunt doloribus, ipsa ullam dolorem illum modi vero provident inventore!'
document.getElementsByClassName("block3 col-sm-4")[2].appendChild(myBio);