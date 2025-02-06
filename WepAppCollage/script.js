// script.js
const studentForm = document.getElementById("studentForm");
const recordsTable = document
  .getElementById("recordsTable")
  .getElementsByTagName("tbody")[0];
const resultDetails = document.getElementById("resultDetails");
let editIndex = null;

// Sample data (can be replaced with localStorage or a backend)
let students = [];

// Save or update record
studentForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const rollNumber = document.getElementById("rollNumber").value;
  const department = document.getElementById("department").value;
  const semester = document.getElementById("semester").value;
  const marks = document.getElementById("marks").value;
  const phoneNumber = document.getElementById("phoneNumber").value;
  const city = document.getElementById("city").value;
  const location = document.getElementById("location").value;
  const pincode = document.getElementById("pincode").value;

  const student = {
    name,
    age,
    rollNumber,
    department,
    semester,
    marks,
    phoneNumber,
    city,
    location,
    pincode,
  };

  if (editIndex !== null) {
    // Update existing record
    students[editIndex] = student;
    editIndex = null;
  } else {
    // Add new record
    students.push(student);
  }

  studentForm.reset();
  renderRecords();
  showResult(student);
});

// Render records in the table
function renderRecords() {
  recordsTable.innerHTML = "";
  students.forEach((student, index) => {
    const row = recordsTable.insertRow();
    row.innerHTML = `
      <td>${student.name}</td>
      <td>${student.age}</td>
      <td>${student.rollNumber}</td>
      <td>${student.department}</td>
      <td>${student.semester}</td>
      <td>${student.marks}</td>
      <td>${student.phoneNumber}</td>
      <td>${student.city}</td>
      <td>${student.location}</td>
      <td>${student.pincode}</td>
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
  document.getElementById("age").value = student.age;
  document.getElementById("rollNumber").value = student.rollNumber;
  document.getElementById("department").value = student.department;
  document.getElementById("semester").value = student.semester;
  document.getElementById("marks").value = student.marks;
  document.getElementById("phoneNumber").value = student.phoneNumber;
  document.getElementById("city").value = student.city;
  document.getElementById("location").value = student.location;
  document.getElementById("pincode").value = student.pincode;
  editIndex = index;
}

// Delete record
function deleteRecord(index) {
  students.splice(index, 1);
  renderRecords();
  resultDetails.innerHTML = ""; // Clear result details if deleted
}

// Show result in sidebar
function showResult(student) {
  resultDetails.innerHTML = `
    <p><strong>Name:</strong> ${student.name}</p>
    <p><strong>Roll No:</strong> ${student.rollNumber}</p>
    <p><strong>Department:</strong> ${student.department}</p>
    <p><strong>Semester:</strong> ${student.semester}</p>
    <p><strong>Marks:</strong> ${student.marks}</p>
    <p><strong>City:</strong> ${student.city}</p>
    <p><strong>Location:</strong> ${student.location}</p>
    <p><strong>Pincode:</strong> ${student.pincode}</p>
  `;
}

// Initial render
renderRecords();
