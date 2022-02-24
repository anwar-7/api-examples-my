const lodeBuddies = () => {
  fetch('https://randomuser.me/api/?results=5')
    .then((response) => response.json())
    .then((data) => displayBuddies(data));
};
lodeBuddies();

const displayBuddies = (data) => {
  const buddiesDiv = document.getElementById('buddies');
  const buddies = data.results;
  for (const buddy of buddies) {
    console.log(buddy.name);
    const p = document.createElement('p');
    p.innerText = `name: ${buddy.name.title} ${buddy.first} ${buddy.name.last}, ${buddy.email}`;
    buddiesDiv.appendChild(p);
  }
};
