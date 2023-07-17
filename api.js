function searchUser() {
  const username = document.getElementById("username-input").value;
  const url = `https://api.github.com/users/${username}`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      displayUser(data);
    })
    .catch(error => {
      displayError(error);
    });
}

function displayUser(user) {
  
  const avatarContainer = document.getElementById("avatar-container");
  const infoContainer = document.getElementById("info-container");

  avatarContainer.innerHTML = `<img src="${user.avatar_url}" alt="Avatar">`;
  infoContainer.innerHTML = `
    <p><strong>Name:</strong> ${user.name}</p>
    <p><strong>Bio:</strong> ${user.bio}</p>
    <p><strong>Website:</strong> ${user.blog}</p>
    <p><strong>Company:</strong> ${user.company}</p>
    <p><strong>Location:</strong> ${user.location}</p>
    <p><strong>Username:</strong> ${user.login}</p>
    <p><strong>Followers:</strong> ${user.followers}</p>
    <p><strong>Following:</strong> ${user.following}</p>
    <p><strong>Repos:</strong> ${user.public_repos}</p>
  `;

  document.getElementById("result-container").style.display = "block";
}

function displayError(error) {
  const infoContainer = document.getElementById("info-container");
  infoContainer.innerHTML = `<p class="error">Error: ${error.message}</p>`;
  document.getElementById("result-container").style.display = "block";
}
