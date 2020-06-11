//Question: Why were the steps out of order? Is order in this code important? Like, was it important that the card maker was at the end, after the array and GET request?




/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

//Should I be making this a promise? A promise isn't actually mentioned in the instructions anywhre but maybe its implied?

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

const followersArray = [];

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

const cards = document.querySelector(".cards");

const request = axios
.get("https://api.github.com/users/emilylow")
.then( (result) => {
  console.log("Result: ", result);
  console.log(makeCard(result));

})
.catch((err) => {
  console.log("There was an error: ", err);
});

function makeCard(input) {

  let cardParent = document.createElement('div');
  let profileImg = document.createElement('img');

  let cardInfo = document.createElement('div');
  let name = document.createElement('h3');
  let username = document.createElement('p');
  let location = document.createElement('p');
  let profile = document.createElement('p');
  let profLink = document.createElement('a');
  let followers = document.createElement('p');
  let following = document.createElement('p');
  let bio = document.createElement('p');
  
  
  cardParent.appendChild(profileImg);
  cardParent.appendChild(cardInfo);

  cardInfo.appendChild(name);
  cardInfo.appendChild(username);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  //Unsure about this line
  profile.appendChild(profLink);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);

  name.textContent = input["data"]["name"];
  username.textContent = input["data"]["login"];
  location.textContent = "Location: " + input["data"]["location"];
  profile.textContent = "Profile:";
  //Is this right?
  profLink.src = input["data"]["url"];
  followers.textContent = "Followers: " + input["data"]["followers"];
  following.textContent = "Following: " + input["data"]["following"];
  bio.textContent = "Bio: " + input["data"]["bio"];

  return cardParent;
}



/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
