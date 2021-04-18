/*
STEP 1: using axios, send a GET request to the following URL
(replacing the placeholder with your Github name):
https://api.github.com/users/<your name>
*/
import axios from 'axios'
axios.get(`https://api.github.com/users/MasonMuhlestein`)
.then(res => {
  console.log(res)
  const ref = res.data
  const cards = document.querySelector('.cards')
  cards.appendChild(makeCard(ref))
}) 
.catch(err => {
  console.log(err)
})


/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/



const followersArray = [
    "tetondan",
    "dustinmyers",
    "justsml",
    "luishrd",
    "bigknell",
];

followersArray.forEach(followers => {
  axios.get(`https://api.github.com/users/${followers}`)
    .then(res => {
      const ref = res.data
      const cards = document.querySelector('.cards')
      cards.appendChild(makeCard(ref))
    })
    .catch(err => {
      console.log(err);
    })




})
/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:
    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function makeCard(arg) {
  axios.get(arg)
  console.log(arg)
//============================================//
//creating tags for the elements//
  const userCard = document.createElement('div');
  const image = document.createElement('img');
  const infoCard = document.createElement('div');
  const Name = document.createElement('h3');
  const userName = document.createElement('p');
  const Location = document.createElement('p');
  const Profile = document.createElement('p');
  const gitLink = document.createElement('a');
  const Followers = document.createElement('p');
  const Following = document.createElement('p');
  const bioInfo = document.createElement('p');
//===========================================//
//Data//
  image.src = arg.avatar_url;
  Name.textContent = arg.name;
  userName.textContent = arg.login;
  Location.textContent = `Location: ${arg.Location}`;
  Profile.textContent = `profile:`
  gitLink.href = arg.html_url;
  gitLink.textContent = arg.html_url
  Followers.textContent = `Followers: ${arg.followers}`
  Following.textContent = `Following: ${arg.following}`
  bioInfo.textContent = `Bio: ${arg.bio}`

//===============================================//
//adding classes//
  userCard.classList.add('card')
  infoCard.classList.add('card-info');
  Name.classList.add('name');
  userName.classList.add('username');
//=====================================//
//creating a heirarchy//

  userCard.appendChild(image);
  userCard.appendChild(infoCard);

  infoCard.appendChild(Name);
  infoCard.appendChild(userName);
  infoCard.appendChild(Location);
  infoCard.appendChild(Profile);
  Profile.appendChild(gitLink);
  infoCard.appendChild(Followers);
  infoCard.appendChild(Following);
  infoCard.appendChild(bioInfo);
//======================================//
// return usercard becuase its the parent and will return everything else //

return userCard;
}
 makeCard(res);
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
