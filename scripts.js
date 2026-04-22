// 1. DATA (Boxing Catalog)
const fighters = [
  { name: "Canelo Alvarez", nickname: "Canelo", country: "Mexico", age: 33, weightClass: "Super Middleweight", style: "Counterpuncher", wins: 60, losses: 2, draws: 2, titles: 4, status: "Active", image: "https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQR4ejZrv2qjgB6qmavexs1kW4kl-s4CPVnAD5uONxSIuYiqIcP55VkyOyfLYxx7xrgSfK8kTK0PyHypv9-usfEgv7R0nPzNQkAUsRvFnMiyBzTSI6T3dMYZIZxDKJYJgRNY8PBeic4e407DaG2-dZ1v5qhM.jpg?r=ebf" },
  { name: "Tyson Fury", nickname: "The Gypsy King", country: "UK", age: 35, weightClass: "Heavyweight", style: "Switch-hitter", wins: 34, losses: 0, draws: 1, titles: 1, status: "Active", image: "https://media.newyorker.com/photos/590972812179605b11ad7cae/master/w_640,c_limit/Kelefa-Tyson-Fury-Heavyweight-Champ.jpg" },
  { name: "Naoya Inoue", nickname: "Monster", country: "Japan", age: 30, weightClass: "Super Bantamweight", style: "Aggressive", wins: 26, losses: 0, draws: 0, titles: 4, status: "Active", image: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSToElCMcslxOZtUe4CGFknfqOvAkO4YGrXKR7o1L_-WdegegRd6cfVHusBT8WBPSlbihh2A-N2Fh9o8Gc" },
  { name: "Terence Crawford", nickname: "Bud", country: "USA", age: 36, weightClass: "Welterweight", style: "Switch-hitter", wins: 40, losses: 0, draws: 0, titles: 4, status: "Active", image: "https://static01.nyt.com/images/2023/07/30/multimedia/30boxing-folo1-zgqv/30boxing-folo1-zgqv-mediumSquareAt3X.jpg" },
  { name: "Oleksandr Usyk", nickname: "The Cat", country: "Ukraine", age: 37, weightClass: "Heavyweight", style: "Technical", wins: 21, losses: 0, draws: 0, titles: 3, status: "Active", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyc8Ak-PceipjVtG2m41n3iD_o9de6boN8aL8BtYFWYz6Py8J5hBTXtpxnoNhRBI7x4xHAHiy1AWB82UMW72oUXl8jC42L7GeMIslKVWw&s=10" },
  { name: "Gervonta Davis", nickname: "Tank", country: "USA", age: 29, weightClass: "Lightweight", style: "Southpaw Power", wins: 29, losses: 0, draws: 0, titles: 1, status: "Active", image: "https://i.guim.co.uk/img/media/ccc13ca57c2f5c619817699fe9d35c6ca7f92b51/0_0_5000_3002/master/5000.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=e928d2198dcdb0173d6f4623b28ebbe7" },
  { name: "Floyd Mayweather", nickname: "Money", country: "USA", age: 47, weightClass: "Welterweight", style: "Defensive", wins: 50, losses: 0, draws: 0, titles: 5, status: "Retired", image: "https://i.ytimg.com/vi/RxSZT3rnYNI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCoTlUXkkjt-3PmoVaJ8GTlFQe5lg" },
  { name: "Mike Tyson", nickname: "Iron Mike", country: "USA", age: 57, weightClass: "Heavyweight", style: "Peek-a-boo", wins: 50, losses: 6, draws: 0, titles: 2, status: "Retired", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Mike_Tyson_in_1987_cropped.jpg/250px-Mike_Tyson_in_1987_cropped.jpg" },
  { name: "Manny Pacquiao", nickname: "PacMan", country: "Philippines", age: 45, weightClass: "Welterweight", style: "Volume Puncher", wins: 62, losses: 8, draws: 2, titles: 8, status: "Retired", image: "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1234803218.jpg?c=original" },
  { name: "Artur Beterbiev", nickname: "-", country: "Russia", age: 39, weightClass: "Light Heavyweight", style: "Power Striker", wins: 20, losses: 0, draws: 0, titles: 3, status: "Active", image: "https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0316%2Fr1145498_1296x729_16%2D9.jpg" },
  { name: "Katie Taylor", nickname: "The Bray Bomber", country: "Ireland", age: 37, weightClass: "Lightweight", style: "Technical", wins: 23, losses: 1, draws: 0, titles: 2, status: "Active", image: "https://www.matchroomboxing.com/app/uploads/2020/07/Katie-Taylor_27-10-22_201-2000x1176.jpg" },
  { name: "Shakur Stevenson", nickname: "Sugar", country: "USA", age: 26, weightClass: "Lightweight", style: "Defensive", wins: 21, losses: 0, draws: 0, titles: 3, status: "Active", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4fTWQOGIYcpl0MXLO6jRenwSqqgL487abNg&s" },
  { name: "Dmitry Bivol", nickname: "-", country: "Russia", age: 33, weightClass: "Light Heavyweight", style: "Technical", wins: 22, losses: 0, draws: 0, titles: 1, status: "Active", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ91iOf-Y9eInL7ckh56X-1muBBnN4KHdR6KQ&s" },
  { name: "Vasiliy Lomachenko", nickname: "Loma", country: "Ukraine", age: 36, weightClass: "Lightweight", style: "Technical", wins: 18, losses: 3, draws: 0, titles: 1, status: "Active", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSH8JeNaUUkESyqU31IiVoM8Sehm5-6yCx8w&s" },
  { name: "Bernard Hopkins", nickname: "The Alien", country: "USA", age: 59, weightClass: "Light Heavyweight", style: "Executioner", wins: 55, losses: 8, draws: 2, titles: 2, status: "Retired", image: "https://media.cnn.com/api/v1/images/stellar/prod/111014111727-hopkins-1996-14-10-11.jpg?q=w_3072,h_2048,x_0,y_0,c_fill/h_447" }
];


// 2. STATE (UI Tracking)

let state = {
  searchText: "",
  selectedWeight: "all",
  selectedStatus: "all",
  sortOption: "name-asc"
};

// 3. FUNCTIONS

function populateWeightOptions() {
  const weightSelect = document.getElementById("weight-filter");
  weightSelect.innerHTML = '<option value="all">All weight classes</option>';

  const uniqueWeights = [...new Set(fighters.map(f => f.weightClass))].sort();

  uniqueWeights.forEach(weight => {
    const opt = document.createElement("option");
    opt.value = weight;
    opt.textContent = weight;
    weightSelect.appendChild(opt);
  });
}

function renderCards(dataToRender) {
  const container = document.getElementById("card-container");
  const template = document.getElementById("card-template");
  container.innerHTML = "";

  if (dataToRender.length === 0) {
    container.innerHTML = '<p class="empty-state">No fighters match your current filters.</p>';
    return;
  }

  dataToRender.forEach(f => {
    const clone = template.cloneNode(true);

    clone.removeAttribute("id");
    clone.removeAttribute("hidden");
    clone.classList.remove("template-card");

    const badge = clone.querySelector(".status-badge");
    badge.textContent = f.status;
    badge.style.borderColor = "rgba(255,255,255,0.1)";
    badge.style.color = "#ffffff";

    if (f.status === "Retired") {
      badge.style.borderColor = "rgba(255,255,255,0.3)";
      badge.style.color = "#94a3b8";
    }

    clone.querySelector(".fighter-image").src = f.image;
    clone.querySelector(".fighter-image").alt = `${f.name} Profile`;
    clone.querySelector(".fighter-name").textContent = f.name;
    clone.querySelector(".fighter-nickname").textContent =
      f.nickname !== "-" ? `"${f.nickname}"` : "";
    clone.querySelector(".fighter-record").textContent =
      `${f.wins}-${f.losses}-${f.draws}`;
    clone.querySelector(".fighter-country").textContent = f.country;
    clone.querySelector(".fighter-age").textContent = f.age;
    clone.querySelector(".fighter-weight").textContent = f.weightClass;
    clone.querySelector(".fighter-style").textContent = f.style;
    clone.querySelector(".fighter-titles").textContent = `${f.titles} world titles`;

    container.appendChild(clone);
  });
}

function updateSummary(dataToRender) {
  // Update Hero Section Stats
  document.getElementById("total-fighters").textContent = fighters.length;
  document.getElementById("visible-fighters").textContent = dataToRender.length;
  
  const currentWeights = new Set(dataToRender.map(f => f.weightClass)).size;
  document.getElementById("active-classes").textContent = currentWeights;

  // Update Results Bar Text
  document.getElementById("results-text").textContent = `Showing ${dataToRender.length} fighters`;
}

function getProcessedData() {
  const search = state.searchText.trim().toLowerCase();

  let filtered = fighters.filter(f => {
    const matchesSearch =
      f.name.toLowerCase().includes(search) ||
      f.nickname.toLowerCase().includes(search) ||
      f.country.toLowerCase().includes(search) ||
      f.style.toLowerCase().includes(search) ||
      f.weightClass.toLowerCase().includes(search);

    const matchesWeight =
      state.selectedWeight === "all" || f.weightClass === state.selectedWeight;

    const matchesStatus =
      state.selectedStatus === "all" || f.status === state.selectedStatus;

    return matchesSearch && matchesWeight && matchesStatus;
  });

  filtered.sort((a, b) => {
    switch (state.sortOption) {
      case "name-asc":
        return a.name.localeCompare(b.name);
      case "wins-desc":
        return b.wins - a.wins;
      case "wins-asc":
        return a.wins - b.wins;
      case "age-asc":
        return a.age - b.age;
      case "age-desc":
        return b.age - a.age;
      default:
        return 0;
    }
  });

  return filtered;
}

function refreshCatalog() {
  const data = getProcessedData();
  renderCards(data);
  updateSummary(data);
}

// 4. EVENT LISTENERS

function resetFilters() {
  state = {
    searchText: "",
    selectedWeight: "all",
    selectedStatus: "all",
    sortOption: "name-asc"
  };

  document.getElementById("search-input").value = "";
  document.getElementById("weight-filter").value = "all";
  document.getElementById("status-filter").value = "all";
  document.getElementById("sort-select").value = "name-asc";

  refreshCatalog();
}

document.addEventListener("DOMContentLoaded", () => {
  populateWeightOptions();
  refreshCatalog();

  document.getElementById("search-input").addEventListener("input", (e) => {
    state.searchText = e.target.value;
    refreshCatalog();
  });

  document.getElementById("weight-filter").addEventListener("change", (e) => {
    state.selectedWeight = e.target.value;
    refreshCatalog();
  });

  document.getElementById("status-filter").addEventListener("change", (e) => {
    state.selectedStatus = e.target.value;
    refreshCatalog();
  });

  document.getElementById("sort-select").addEventListener("change", (e) => {
    state.sortOption = e.target.value;
    refreshCatalog();
  });

  document.getElementById("reset-button").addEventListener("click", resetFilters);
});
