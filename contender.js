// Sample data
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
  
  // Create profiles and append to the container
  const profilesContainer = document.getElementById("profiles-container");
  
  profileData.forEach(profile => {
    const { name, country, image } = profile;
  
    // Find the corresponding URL for the profile
    const profileUrl = urlData.find(data => data.name === name).url;
  
    // Create the profile element
    const profileElement = document.createElement("div");
    profileElement.className = "profile";
    profileElement.innerHTML = `
      <img src="${image}" alt="${name} Image">
      <h2>${name}</h2>
      <p>${country}</p>
    `;
  
    // Handle click event to redirect to the URL
    profileElement.addEventListener("click", () => {
      window.location.href = profileUrl;
    });
  
    // Append the profile element to the container
    profilesContainer.appendChild(profileElement);
  });
  