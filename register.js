let saloon={
    name:"The Fashion Pet",
    address:{
        street:"Av. Palm",
        number:"262",
        zip:"23456",
        city:"San Diego",
        state:"California"
    },
    hours:{
        open:"9:00 am",
        closed:"5:00 pm"
    },
    pets:[]
}

//name, age, gender, breed, service, owner name, contact phone
function displayInfo(){
    document.getElementById("footer-info").innerHTML=`<p>${saloon.address.street},${saloon.address.number}, ZIP code: ${saloon.address.zip}</p><p>${saloon.address.city},${saloon.address.state}</p>`;
}


function showAlert(){
    alert("This is how many pets are registered: " + saloon.pets.length);
}

function checkInput(variable, id, isValid) {

    if(variable.length<1)
    {
        document.getElementById(id).classList.add("error");
        return false;
    }
    else
    {
        document.getElementById(id).classList.remove("error");
        return true;
    }
}

function getInfo(){
    let isValid = true;

    let petName = document.getElementById("txtPetName").value;
    isValid = checkInput(petName, "txtPetName");

    let age = document.getElementById("nbAge").value;
    isValid = checkInput(age, "nbAge");

    let gender = document.getElementById("dlGender").value;
    isValid = checkInput(gender, "dlGender");

    let breed = document.getElementById("txtBreed").value;
    isValid = checkInput(breed, "txtBreed");

    let service = document.getElementById("dlService").value;
    isValid = checkInput(service, "dlService");

    let ownerName = document.getElementById("txtOwnerName").value
    isValid = checkInput(ownerName, "txtOwnerName");

    let phone = document.getElementById("txtPhone").value;
    isValid = checkInput(phone, "txtPhone");

    if(isValid == true) 
    {
        let pet = new Pet(petName, age, gender, breed, service, ownerName, phone);
        saloon.pets.push(pet);
        console.log(pet);
        document.getElementById("petInfo").reset();
        showPetsCards();    
    }

    //console.log(`${petName} ${age} ${gender} ${breed} ${service} ${ownerName} ${phone}`);
}

let x=0;

function Pet(petName, age, gender, breed, service, owner, phone){
    this.name = petName;
    this.age = age;
    this.gender = gender;
    this.breed = breed;
    this.service = service;
    this.owner = owner;
    this.phone = phone;
    this.id=x++;
}

function showPetsCards(){
    document.getElementById("petList").innerHTML=``;
    for(i = 0; i<saloon.pets.length; i++)
    {
        document.getElementById("petList").innerHTML += createCard(saloon.pets[i]);
    }
}

function createCard(pet){
    return`
    <div id="${pet.id}" class="card my-card">
        <h2>${pet.name}</h2>
        <label>Age: ${pet.age}</label>
        <label>Breed: ${pet.breed}</label>
        <label>Gender: ${pet.gender}</label>
        <label>Service: ${pet.service}</label>
        <label>Owner: ${pet.owner}</label>
        <label>Phone: ${pet.phone}</label>
        <button class="btn btn-danger btn-sm" onclick="removePet(${pet.id});">Delete</button>
  </div>
    `;
}

function removePet(index){
    saloon.pets.forEach(function callback (pet,value) {
        if(index===pet.id){
            console.log("I found it in the position",value);
            saloon.pets.splice(value,1);
        }
    });
    document.getElementById(index).remove();
    console.log("removing pet", index);
}

function searchPet(){
    let searchString=document.getElementById("searchInput").value;   
    
    saloon.pets.forEach(function callback (pet,value) {
        if(searchString.toLowerCase()===pet.name.toLowerCase()){
            document.getElementById(value).classList.add("highlight");
        }
    });

}

function init(){
    displayInfo();
    let scooby=new Pet("Scooby", 50, "Male", "Dane", "Grooming", "Shaggy", "555-555-5555");
    let tom=new Pet("Tom", 10, "Male", "Tabby", "Check-up", "Shaggy", "555-555-5555");
    let jerry=new Pet("Jerry", 15, "Male", "Mouse", "Grooming", "Shaggy", "555-555-5555");
    saloon.pets.push(scooby, tom, jerry);
    showPetsCards();
}

window.onload=init;

//showAlert();

//getInfo();

