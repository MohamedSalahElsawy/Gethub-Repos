// Main Variabels
let theInput = document.querySelector(".get-repos input");
let theBtn = document.querySelector(".get-btn");
let reposData = document.querySelector(".show-data");

theBtn.onclick = function () {
  getRepos();
};
// get repos fun
function getRepos() {
  if (theInput.value == "") {
    reposData.innerHTML = "<span>Please Write Github Username</span>";
  } else {
    fetch(`https://api.github.com/users/${theInput.value}/repos`)
      .then((reponse) => reponse.json())
      .then((repositories) => {
        //empty the container
        reposData.innerHTML = "";
        //loop on repositories
        repositories.forEach((repos) => {
          //   create the main div
          let thediv = document.createElement("div");
          //   create the text
          let repoName = document.createTextNode(repos.name);
          thediv.appendChild(repoName);
          // create the url
          let url = document.createElement("a");
          // create repo url text
          let theUrlText = document.createTextNode("Visit");
          // Append the repo url text to the tag
          url.appendChild(theUrlText);
          // Add the "href"
          url.href = `https://github.com/${theInput.value}/${repos.name}`;
          // set attribute blank
          url.setAttribute("target", "_blank");
          // append url to the div
          thediv.appendChild(url);
          // create ele star
          let star = document.createElement("span");
          let startext = document.createTextNode(
            `Stars ${repos.stargazers_count}`
          );
          star.appendChild(startext);
          thediv.appendChild(star);
          // add class to the div
          thediv.className = "repo-box";
          //   append the main div
          reposData.appendChild(thediv);
        });
      });
  }
}
