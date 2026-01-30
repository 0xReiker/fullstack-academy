// State management
const state = {
  parties: [],
  selectedParty: null,
};

// API base URL - includes cohort code
const API_URL =
  "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2601-FTB-ET-WEB-FT";

const asyncHandler = (fn) => {
  return async (...args) => {
    const [error, result] = await fn(...args)
      .then((data) => [null, data])
      .catch((err) => [err, null]);

    if (error) {
      console.error("Error:", error);
      return null;
    }
    return result;
  };
};

// Fetch all parties from the API
const fetchParties = asyncHandler(async () => {
  const response = await fetch(`${API_URL}/events`);
  const data = await response.json();
  return data.data;
});

// Fetch a single party by ID
const fetchPartyById = asyncHandler(async (id) => {
  const response = await fetch(`${API_URL}/events/${id}`);
  const data = await response.json();
  return data.data;
});

// Update state with all parties
const loadParties = asyncHandler(async () => {
  state.parties = await fetchParties();
  render();
});

// Update state with selected party
const selectParty = asyncHandler(async (id) => {
  state.selectedParty = await fetchPartyById(id);
  render();
});

// Component: Render the list of parties
function renderPartyList() {
  const $partyList = document.createElement("div");
  $partyList.className = "party-list";

  const $heading = document.createElement("h2");
  $heading.textContent = "Upcoming Parties";
  $partyList.appendChild($heading);

  const $list = document.createElement("ul");
  $list.className = "parties";

  state.parties.forEach((party) => {
    const $listItem = document.createElement("li");
    $listItem.textContent = party.name;
    $listItem.className = "party-item";

    // Highlight selected party
    if (state.selectedParty && state.selectedParty.id === party.id) {
      $listItem.classList.add("selected");
    }

    $listItem.addEventListener("click", () => selectParty(party.id));
    $list.appendChild($listItem);
  });

  $partyList.appendChild($list);
  return $partyList;
}

// Component: Render party details
function renderPartyDetails() {
  const $detailsContainer = document.createElement("div");
  $detailsContainer.className = "party-details";

  if (!state.selectedParty) {
    return $detailsContainer;
  }

  const party = state.selectedParty;

  // Title with party name and ID
  const $heading = document.createElement("h2");
  $heading.textContent = `${party.name} #${party.id}`;
  $detailsContainer.appendChild($heading);

  // Date
  const $date = document.createElement("p");
  const dateObj = new Date(party.date);
  $date.textContent = dateObj.toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  $detailsContainer.appendChild($date);

  // Location
  const $location = document.createElement("p");
  $location.textContent = party.location;
  $location.style.fontStyle = "italic";
  $detailsContainer.appendChild($location);

  // Description
  const $description = document.createElement("p");
  $description.textContent = party.description;
  $description.style.marginTop = "20px";
  $detailsContainer.appendChild($description);

  // Guests section (placeholder for now)
  const $guestsHeading = document.createElement("h3");
  $guestsHeading.textContent = "Guests";
  $guestsHeading.style.marginTop = "30px";
  $detailsContainer.appendChild($guestsHeading);

  const $guestsList = document.createElement("ul");
  // Add some placeholder guests (you can fetch real guests later)
  const placeholderGuests = [
    "Elisabeth Farrell",
    "Casper Rogahn",
    "Gisselle Ziemann",
  ];
  placeholderGuests.forEach((guestName) => {
    const $guestItem = document.createElement("li");
    $guestItem.textContent = guestName;
    $guestsList.appendChild($guestItem);
  });
  $detailsContainer.appendChild($guestsList);

  return $detailsContainer;
}

// Main render function
function render() {
  const $app = document.getElementById("app");
  $app.innerHTML = "";

  const $header = document.createElement("h1");
  $header.textContent = "Party Planner";
  $app.appendChild($header);

  const $container = document.createElement("div");
  $container.className = "container";

  $container.appendChild(renderPartyList());
  $container.appendChild(renderPartyDetails());

  $app.appendChild($container);
}

// Initialize the application
const init = asyncHandler(async () => {
  await loadParties();
});

// Start the application when the DOM is loaded
init();
