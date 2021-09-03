/* CREATE TABLE DOGTABLE name breed age likesTreats ;
 */
dataModel = [
  {
    name: "Lilly",
    breed: "Blue Heeler/Beagle Mix",
    age: 2,
    likesTreats: true
  }
  ,{
    name: "Teddy",
    breed: "Chihuahua/Shih Tzu Mix",
    age: 5,
    likesTreats: true
  }
  ,{
    name: "Rocky",
    breed: "Corgie/Australian Shepherd Mix",
    age: 1,
    likesTreats: true
  }
]

/* INSERT INTO DOGTABLE DOG;
   step 2
 */
let athletic_dog = {};     // = new Object();
athletic_dog.name         = "AirBud";
athletic_dog.breed        = "Golden Retriever";
athletic_dog.age          = "3";
athletic_dog.likesTreats = true;
dataModel.push(athletic_dog);

/* DELETE FROM DOGTABLE WHERE DOG=dog;
 */
function removeDog(dog) {
  let dogIndex = dataModel.indexOf(dog);
  dataModel.splice(dogIndex, 1);
  renderDogList();
}


/* INSERT INTO DOGTABLE DOG;
   use the user input to build a dog object, 
*/
function onSubmitDog (event) {
  event.preventDefault(); // If the fields are incomplete, do not clear them
  // A CSS selector as a string to identify which HTML element we want
  let nameInput     =   document.querySelector("#name_input");
  let breedInput    =   document.querySelector("#breed_input");
  let ageInput    =    document.querySelector("#age_input");
  let treatsCheckbox = document.querySelector("#treats_input");
  let name      =      nameInput.value;
  let breed = breedInput.value;
  let age = ageInput.value;
  let likesTreats = treatsCheckbox.checked;
  if (name === "" || breed === "" || age === "") {
    alert("Please fill out all of the fields!");
    return 0;  // Exit the function early if the above condition is true.
  }
  dog ={};     // = new Object();
  dog.name = name;
  dog.breed = breed;
  dog.age = age;
  dog.likesTreats = likesTreats;
  dataModel.push(dog);  // store it
  
  renderDogList();  // we should render the dog list on the page again.
  nameInput.value        = "";   // clear input forms
  breedInput.value       = "";
  ageInput.value         = "";
  treatsCheckbox.checked = false;
}

let button = document.querySelector("#submit_button");
button.addEventListener("click", onSubmitDog);

/*
 */
function renderDogList() {
  let ulTag = document.querySelector("#dog_list");
  ulTag.innerHTML = "";    // Delete everything inside ul 
                          // including elements  
  
              /* RENDER "NO DOGS!" WHEN THERES NO DOGS ON LISTS */

            // if the array is empty, return "NO DOGS YET! 🙂"//

if (dataModel.length === 0) {
  newLiTag = document.createElement("li");
  newLiTag.innerHTML = '<h3>NO DOGS YET 🙂</h3>';
  ulTag.append(newLiTag);
  return false;
} 
  
                          for(let d of dataModel){
    lambda = document.createElement("li"); // create a list item
    lambda.innerHTML = `${d.name}! A ${d.age} year old ${d.breed}${(d.likesTreats?" who likes treats":"")}. `;
        // assign text of that element
    
    button = document.createElement("button");  //code dealing with the button
    button.innerHTML="Send Home";
    button.addEventListener("click", function(e){removeDog(d);})
    lambda.append(button);
    
    ulTag.append(lambda); //append li to ul
  }
}


// The page loads, to render the dog list for the very first time.
renderDogList();