const github = new Github();
const ui = new UI();

// Search input
const searchUser = document.getElementById("searchUser");

//Search input event listener
searchUser.addEventListener("keyup", getData());

function getData(e) {
  // Get input text
  const userText = searchUser.value;
  if (userText !== "") {
    // Make http call
    github.getUser(userText).then((data) => {
      if (data.profile.message === "Not Found") {
        // Show alert
        ui.showAlert("User not found", "alert alert-danger");
      } else {
        // Show profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    // Clear profile
    ui.clearProfile();
  }
}

const debounce = function (fn, d) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      getData();
    }, d);
  };
};

const betterFunction = debounce(getData, 500);
