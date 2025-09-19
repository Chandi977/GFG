// const fetchBtn = document.getElementById("fetchBtn");
// const usernameInput = document.getElementById("username");
// const userCard = document.getElementById("userCard");

// const avatar = document.getElementById("avatar");
// const nameEl = document.getElementById("name");
// const bio = document.getElementById("bio");

// const fullName = document.getElementById("fullName");
// const locationEl = document.getElementById("location");
// const company = document.getElementById("company");
// const email = document.getElementById("email");
// const blog = document.getElementById("blog");
// const created = document.getElementById("created");

// const repos = document.getElementById("repos");
// const followers = document.getElementById("followers");
// const following = document.getElementById("following");
// const repoList = document.getElementById("repoList");

// const error = document.getElementById("error");

// fetchBtn.addEventListener("click", () => {
//   const username = usernameInput.value.trim();
//   if (!username) {
//     error.textContent = "Please enter a username!";
//     userCard.classList.add("hidden");
//     return;
//   }

//   fetch(`https://api.github.com/users/${username}`)
//     .then((res) => {
//       if (!res.ok) throw new Error("User not found");
//       return res.json();
//     })
//     .then((data) => {
//       avatar.src = data.avatar_url;
//       nameEl.textContent = data.login;
//       bio.textContent = data.bio || "No bio available";

//       fullName.textContent = `Full Name: ${data.name || "N/A"}`;
//       locationEl.textContent = `Location: ${data.location || "N/A"}`;
//       company.textContent = `Company: ${data.company || "N/A"}`;
//       email.textContent = `Email: ${data.email || "N/A"}`;
//       blog.textContent = `Blog: ${data.blog || "N/A"}`;
//       created.textContent = `Account Created: ${new Date(
//         data.created_at
//       ).toDateString()}`;

//       repos.textContent = `Repos: ${data.public_repos}`;
//       followers.textContent = `Followers: ${data.followers}`;
//       following.textContent = `Following: ${data.following}`;

//       userCard.classList.remove("hidden");
//       error.textContent = "";

//       fetch(data.repos_url + "?sort=created&per_page=5")
//         .then((res) => res.json())
//         .then((reposData) => {
//           repoList.innerHTML = "";
//           reposData.forEach((repo) => {
//             const li = document.createElement("li");
//             li.innerHTML = `<a href="${repo.html_url}" target="_blank">${repo.name}</a>`;
//             repoList.appendChild(li);
//           });
//         });
//     })
//     .catch((err) => {
//       error.textContent = err.message;
//       userCard.classList.add("hidden");
//     });
// });

const fetchBtn = document.getElementById("fetchBtn");
const usernameInput = document.getElementById("username");
const userCard = document.getElementById("userCard");

const avatar = document.getElementById("avatar");
const nameEl = document.getElementById("name");
const bio = document.getElementById("bio");

const fullName = document.getElementById("fullName");
const locationEl = document.getElementById("location");
const company = document.getElementById("company");
const email = document.getElementById("email");
const blog = document.getElementById("blog");
const created = document.getElementById("created");

const repos = document.getElementById("repos");
const followers = document.getElementById("followers");
const following = document.getElementById("following");
const repoList = document.getElementById("repoList");

const error = document.getElementById("error");

// 🔹 Event listener for Fetch button
fetchBtn.addEventListener("click", async () => {
  const username = usernameInput.value.trim();

  // Check for empty input
  if (!username) {
    error.textContent = "Please enter a username!";
    userCard.classList.add("hidden");
    return;
  }

  try {
    // 🔹 Await GitHub API call for user info
    const res = await fetch(`https://api.github.com/users/${username}`);
    if (!res.ok) throw new Error("User not found");

    const data = await res.json(); // Parse JSON response

    // 🔹 Update UI with user data
    avatar.src = data.avatar_url;
    nameEl.textContent = data.login;
    bio.textContent = data.bio || "No bio available";

    fullName.textContent = `Full Name: ${data.name || "N/A"}`;
    locationEl.textContent = `Location: ${data.location || "N/A"}`;
    company.textContent = `Company: ${data.company || "N/A"}`;
    email.textContent = `Email: ${data.email || "N/A"}`;
    blog.textContent = `Blog: ${data.blog || "N/A"}`;
    created.textContent = `Account Created: ${new Date(
      data.created_at
    ).toDateString()}`;

    repos.textContent = `Repos: ${data.public_repos}`;
    followers.textContent = `Followers: ${data.followers}`;
    following.textContent = `Following: ${data.following}`;

    userCard.classList.remove("hidden");
    error.textContent = "";

    // 🔹 Await second API call for repositories
    const repoRes = await fetch(`${data.repos_url}?sort=created&per_page=5`);
    const reposData = await repoRes.json();

    // 🔹 Render repo list
    repoList.innerHTML = "";
    reposData.forEach((repo) => {
      const li = document.createElement("li");
      li.innerHTML = `<a href="${repo.html_url}" target="_blank">${repo.name}</a>`;
      repoList.appendChild(li);
    });
  } catch (err) {
    // 🔹 Handle errors gracefully
    error.textContent = err.message;
    userCard.classList.add("hidden");
  }
});
