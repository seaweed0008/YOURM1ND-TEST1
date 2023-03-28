// Define the new sections and their corresponding ids
const newSections = [
  { id: 'cool-people', title: 'Cool New People' },
  { id: 'updated-blogs', title: 'Recently Updated Blogs' },
  { id: 'new-forums', title: 'New Forums' }
];

// Function to get the blogs data from the API
async function getBlogs() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  return data;
}

// Function to render the list of blogs
function renderBlogs(blogs) {
  const blogList = document.querySelector('#updated-blogs .list');
  blogList.innerHTML = '';
  blogs.slice(0, 5).forEach(blog => {
    const li = document.createElement('li');
    li.innerHTML = `
      <a href="#" class="title">${blog.title}</a>
      <span class="author">${blog.userId}</span>
    `;
    blogList.appendChild(li);
  });
}

// Function to render the list of forums
function renderForums(forums) {
  const forumList = document.querySelector('#new-forums .list');
  forumList.innerHTML = '';
  forums.slice(0, 5).forEach(forum => {
    const li = document.createElement('li');
    li.innerHTML = `
      <a href="#" class="title">${forum.title}</a>
      <span class="author">${forum.userId}</span>
    `;
    forumList.appendChild(li);
  });
}

// Function to render the list of users
function renderUsers(users) {
  const userList = document.querySelector('#cool-people .list');
  userList.innerHTML = '';
  users.slice(0, 5).forEach(user => {
    const li = document.createElement('li');
    li.innerHTML = `
      <a href="#" class="name">${user.name}</a>
      <span class="location">${user.address.city}, ${user.address.country}</span>
    `;
    userList.appendChild(li);
  });
}

// Add the new sections to the page
newSections.forEach(section => {
  const newSection = document.createElement('section');
  newSection.id = section.id;
  newSection.innerHTML = `
    <h2>${section.title}</h2>
    <ul class="list"></ul>
  `;
  document.body.appendChild(newSection);
});

// Call the functions to get and render the data
getBlogs().then(blogs => renderBlogs(blogs));
getUsers().then(users => renderUsers(users));
getForums().then(forums => renderForums(forums));
