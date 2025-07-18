document.getElementById("searchBtn").addEventListener("click", () => {
  const userId = document.getElementById("userIdInput").value;

  if (!userId) {
    alert("Please enter a User ID");
    return;
  }

  // Call API Gateway to fetch specific user by ID
  fetch(
    `https://jbb8jzqftg.execute-api.us-east-1.amazonaws.com/prod/users?userId=${userId}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      const tableBody = document.getElementById("userTableBody");
      tableBody.innerHTML = ""; // Clear any existing rows

      if (data && data.userId) {
        // Adjusted key check
        const row = document.createElement("tr");
        row.innerHTML = `
                <td>${data.userId}</td>
                <td>${data.name}</td>
                <td>${data.age}</td>
                <td>${data.email}</td>
            `;
        tableBody.appendChild(row);
      } else {
        tableBody.innerHTML = `<tr><td colspan="4">No user found with ID ${userId}</td></tr>`;
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      alert("An error occurred while fetching data. Please try again later.");
    });
});
