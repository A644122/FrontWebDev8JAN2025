// script.js
const studentForm = document.getElementById("studentForm");
const recordsTable = document
  .getElementById("recordsTable")
  .getElementsByTagName("tbody")[0];
let editIndex = null;

// Sample data (can be replaced with localStorage or a backend)
let students = [];

// Save or update record
studentForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const address = document.getElementById("address").value;
  const attendance = document.getElementById("attendance").value;

  if (editIndex !== null) {
    // Update existing record
    students[editIndex] = { name, address, attendance };
    editIndex = null;
  } else {
    // Add new record
    students.push({ name, address, attendance });
  }

  studentForm.reset();
  renderRecords();
});

// Render records in the table
function renderRecords() {
  recordsTable.innerHTML = "";
  students.forEach((student, index) => {
    const row = recordsTable.insertRow();
    row.innerHTML = `
      <td>${student.name}</td>
      <td>${student.address}</td>
      <td>${student.attendance}</td>
      <td class="actions">
        <button class="edit" onclick="editRecord(${index})">Edit</button>
        <button class="delete" onclick="deleteRecord(${index})">Delete</button>
      </td>
    `;
  });
}

// Edit record
function editRecord(index) {
  const student = students[index];
  document.getElementById("name").value = student.name;
  document.getElementById("address").value = student.address;
  document.getElementById("attendance").value = student.attendance;
  editIndex = index;
}

// Delete record
function deleteRecord(index) {
  students.splice(index, 1);
  renderRecords();
}

// Initial render
renderRecords();
