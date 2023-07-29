type Country = {
    abbr: string;
    icon: string;
    name: string;
    suggested?: boolean;
  };

const allcountries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    
  ];
  
  const input = document.getElementById("countryInput");
  const countryList = document.getElementById("countryList");
  
  input.addEventListener("input", function() {
    const inputValue = input.value.trim().toLowerCase();
    const filteredCountries = countries.filter(country =>
      country.toLowerCase().startsWith(inputValue)
    );
  
    countryList.innerHTML = "";
    filteredCountries.forEach(country => {
      const listItem = document.createElement("li");
      listItem.textContent = country;
      countryList.appendChild(listItem);
    });
  });
  
  countryList.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
      input.value = event.target.textContent;
      countryList.innerHTML = "";
    }
  });