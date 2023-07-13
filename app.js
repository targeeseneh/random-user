// // Function to update the user profile cards with new data
// function updateProfileCards(users) {
//     const userCards = document.querySelectorAll('.user-card');
  
//     userCards.forEach((card, index) => {
//       const user = users[index];
//       const userImage = card.querySelector('.user-image');
//       const userName = card.querySelector('.user-name');
//       const userGender = card.querySelector('.user-gender');
//       const userCountry = card.querySelector('.user-country');
//       const userNationality = card.querySelector('.user-nationality');
//       const userEmail = card.querySelector('.user-email');
//       const userDOB = card.querySelector('.user-dob');
  
//       userImage.src = user.picture.large;
//       userName.textContent = `${user.name.first} ${user.name.last}`;
//       userGender.textContent = user.gender;
//       userCountry.textContent = user.location.country;
//       userNationality.textContent = user.nat;
//       userEmail.textContent = user.email;
//       userDOB.textContent = new Date(user.dob.date).toLocaleDateString();
//     });
//   }
  
//   // Function to handle the "Generate Users" button click event
//   function handleGenerateUsers() {
//     fetch('https://randomuser.me/api/?results=3')
//       .then(response => response.json())
//       .then(data => {
//         const users = data.results;
//         updateProfileCards(users);
//       })
//       .catch(error => {
//         console.log('Error generating users:', error);
//       });
//   }
  
//   // Event listener for the "Generate Users" button
//   const generateBtn = document.getElementById('generate-btn');
//   generateBtn.addEventListener('click', handleGenerateUsers);

//   setInterval(generateUsers, 3000);
  
// generate_btn.addEventListener("click", function(){
//     img_ele.src = "./img.jpg"

//     fetch("https://randomuser.me/")
//     .then(function(res){
//         return res.json()
//     })
//     .then(function(res){
//         img_ele.src = res.message;
//     })

// });
const generateBtn = document.getElementById("generate-btn");
const userCards = document.querySelector(".user-cards");

generateBtn.addEventListener("click", generateUsers);

function generateUsers() {
  fetch("https://randomuser.me/api/?results=3")
    .then((response) => response.json())
    .then((data) => {
      const users = data.results;
      displayUsers(users);
    })
    .catch((error) => console.log(error));
}

function displayUsers(users) {
  userCards.innerHTML = "";

  users.forEach((user) => {
    const card = document.createElement("div");
    card.classList.add("user-card");

    const image = document.createElement("img");
    image.classList.add("user-image");
    image.src = user.picture.large;
    image.alt = "User Image";

    const userInfo = document.createElement("div");
    userInfo.classList.add("user-info");

    const name = document.createElement("p");
    name.classList.add("user-name");
    name.textContent = `${user.name.title} ${user.name.first} ${user.name.last}`;

    const gender = document.createElement("p");
    gender.classList.add("user-gender");
    gender.textContent = `Gender: ${user.gender}`;

    const country = document.createElement("p");
    country.classList.add("user-country");
    country.textContent = `Country: ${user.location.country}`;

    const nationality = document.createElement("p");
    nationality.classList.add("user-nationality");
    nationality.textContent = `Nationality: ${user.nat}`;

    const email = document.createElement("p");
    email.classList.add("user-email");
    email.textContent = `Email: ${user.email}`;

    const dob = document.createElement("p");
    dob.classList.add("user-dob");
    dob.textContent = `DOB: ${new Date(user.dob.date).toLocaleDateString()}`;

    userInfo.appendChild(name);
    userInfo.appendChild(gender);
    userInfo.appendChild(country);
    userInfo.appendChild(nationality);
    userInfo.appendChild(email);
    userInfo.appendChild(dob);

    card.appendChild(image);
    card.appendChild(userInfo);

    userCards.appendChild(card);
  });
}

// Generate users initially
generateUsers();

// Change users every 3 seconds
setInterval(generateUsers, 3000);
