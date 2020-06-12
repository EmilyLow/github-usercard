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

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/



const cards = document.querySelector(".cards");

//Non-stretch input and call
const followersArray = ["emilylow", "tetondan", "dustinmyers", "justsml", "luishrd", "bigknell" ];

//Adding elements to page

followersArray.forEach((person) => {
  const request = axios
  .get("https://api.github.com/users/" + person)
  .then( (result) => {
    //console.log("Result: ", result);
  // console.log(makeCard(result));
    cards.append(makeCard(result));
  })
  .catch((err) => {
    console.log("There was an error: ", err);
  });

});





//Stretch input and call

//Using someone else because I don't have any followers
// const originalPerson = "tetondan";


// let followersArray = [];

// //Requesting original person data

// const originalPersonRequest = axios
// .get("https://api.github.com/users/" + originalPerson)
// .then( (result) => {
//   //console.log(result);
//   //Request followers data
//   const followersRequest = axios
//   .get(result["data"]["followers_url"])
//   .then( (subResult) => {
    
//     followersArray = subResult["data"];
//     console.log(followersArray);
        // let shortFollowArray = [];
        // //Getting first five elements of array, and then grabbing their first names
        // for(let i = 0; i < 5; i++) {
        //   shortFollowArray[i] = followersArray[i]["data"]["username"];
          
        // }
//     //Adding elements to page from array, I believe the error is here, as the array has more than strings
//     // shortFollowArray.forEach((person) => {
//     //   const request = axios
//     //   .get("https://api.github.com/users/" + person)
//     //   .then( (result3) => {
//     //     //console.log("Result: ", result3);
//     //   // console.log(makeCard(result3));
//     //     cards.append(makeCard(result3));
//     //   })
//     //   .catch((err) => {
//     //     console.log("There was an error: ", err);
//     //   });

    
//     // });

//   })
//   .catch((err) => {
//         console.log("There was an error pulling follower data: ", err);
//       });
  

// })
// .catch((err) => {
//   console.log("There was an error pulling original user data: ", err);
// });


// Stretch content ended







function makeCard(input) {

  let cardParent = document.createElement('div');
  cardParent.classList.add("card");
  let profileImg = document.createElement('img');

  let cardInfo = document.createElement('div');
  cardInfo.classList.add("card-info");
  let name = document.createElement('h3');
  name.classList.add("name");
  let username = document.createElement('p');
  username.classList.add("username");
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
  
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);

  profileImg.src = input["data"]["avatar_url"];
  name.textContent = input["data"]["name"];
  username.textContent = input["data"]["login"];
  location.textContent = "Location: " + input["data"]["location"];
  

  profLink.textContent = input["data"]["html_url"];
  console.log(input["data"]["url"]);
  profLink.href = input["data"]["html_url"];

  profile.textContent = "Profile: ";
  //Noteable that I need to appendChild after content is added here, because textContent overrides existing children apparently
  profile.appendChild(profLink);
  
  followers.textContent = "Followers: " + input["data"]["followers"];
  following.textContent = "Following: " + input["data"]["following"];
  bio.textContent = "Bio: " + input["data"]["bio"];

  return cardParent;
}

