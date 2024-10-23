// Function to search by PIN Code
function searchByPincode() {
  const pincode = document.getElementById("pincodeInput").value;
  const resultsSection = document.getElementById("results");
  resultsSection.innerHTML = ""; // Clear previous results

  if (pincode === "") {
    alert("Please enter a valid Postal PIN Code");
    return;
  }

  fetch(`https://api.postalpincode.in/pincode/${pincode}`)
    .then((response) => response.json())
    .then((data) => {
      displayResults(data, resultsSection);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

// Function to search by Post Office Branch Name
function searchByBranchName() {
  const branchName = document.getElementById("branchNameInput").value;
  const resultsSection = document.getElementById("results");
  resultsSection.innerHTML = ""; // Clear previous results

  if (branchName === "") {
    alert("Please enter a valid Post Office Branch Name");
    return;
  }

  fetch(`https://api.postalpincode.in/postoffice/${branchName}`)
    .then((response) => response.json())
    .then((data) => {
      displayResults(data, resultsSection);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

// Function to display the results
function displayResults(data, resultsSection) {
  data.forEach((entry) => {
    if (entry.Status === "Success" && entry.PostOffice) {
      entry.PostOffice.forEach((office) => {
        const div = document.createElement("div");
        div.classList.add("post-office");
        div.innerHTML = `
                <h1>Name : ${office.Name}</h1>
                <p>Pincode : ${office.Pincode}</p>
                <p>Branch Type : ${office.BranchType}</p>
                <p>Delivery Status : ${office.DeliveryStatus}</p>
                <p>Circle : ${office.Circle}</p>
                <p>District : ${office.District}</p>
                <p>Division: ${office.Division}</p>
                <p>Region: ${office.Region}</p>
                <p>State : ${office.State}</p>
                <p>Country : ${office.Country}</p>

                `;
        resultsSection.appendChild(div);
      });
    } else {
      const errorDiv = document.createElement("div");
      errorDiv.textContent = "No records found or an error occurred.";
      resultsSection.appendChild(errorDiv);
    }
  });
}
