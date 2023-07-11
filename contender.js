// test
const profileData = [
    {
      name: "John Doe",
      country: "USA",
      image: "john-doe.jpg"
    },
    {
      name: "Jane Smith",
      country: "Canada",
      image: "jane-smith.jpg"
    }
  ];
  
  const urlData = [
    {
      name: "John Doe",
      url: "https://example.com/john-doe"
    },
    {
      name: "Jane Smith",
      url: "https://example.com/jane-smith"
    }
  ];
  
  // container
  const profilesContainer = document.getElementById("profiles-container");
  
  profileData.forEach(profile => {
    const { name, country, image } = profile;
  
    // redirect
    const profileUrl = urlData.find(data => data.name === name).url;
  
    // profile element
    const profileElement = document.createElement("div");
    profileElement.className = "profile";
    profileElement.innerHTML = `
      <img src="${image}" alt="${name} Image">
      <h2>${name}</h2>
      <p>${country}</p>
    `;
  
    // click event
    profileElement.addEventListener("click", () => {
      window.location.href = profileUrl;
    });
  
    // container
    profilesContainer.appendChild(profileElement);
  });
  