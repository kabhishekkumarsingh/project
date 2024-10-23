// Arrays to store students and attendance records
let students = [];
let attendanceRecords = [];

// Function to add a student
document.getElementById("studentForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let studentId = document.getElementById("studentId").value;
    let studentName = document.getElementById("studentName").value;
    let studentRoll = document.getElementById("studentRoll").value;

    let student = { id: studentId, name: studentName, rollNumber: studentRoll };
    students.push(student);

    // Clear the form fields
    document.getElementById("studentId").value = '';
    document.getElementById("studentName").value = '';
    document.getElementById("studentRoll").value = '';

    displayStudents();
});

// Function to display students in the table
function displayStudents() {
    let studentTableBody = document.querySelector("#studentTable tbody");
    studentTableBody.innerHTML = ''; // Clear the table

    students.forEach(student => {
        let row = document.createElement("tr");

        row.innerHTML = `
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.rollNumber}</td>
        `;

        studentTableBody.appendChild(row);
    });
}

// Function to mark attendance
document.getElementById("attendanceForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let studentId = document.getElementById("attendStudentId").value;
    let date = document.getElementById("attendanceDate").value;
    let status = document.getElementById("attendanceStatus").value;

    let attendance = { studentId: studentId, date: date, status: status };
    attendanceRecords.push(attendance);

    // Clear the form fields
    document.getElementById("attendStudentId").value = '';
    document.getElementById("attendanceDate").value = '';
    document.getElementById("attendanceStatus").value = '';

    displayAttendance();
});

// Function to display attendance records in the table
function displayAttendance() {
    let attendanceTableBody = document.querySelector("#attendanceTable tbody");
    attendanceTableBody.innerHTML = ''; // Clear the table

    attendanceRecords.forEach(record => {
        let row = document.createElement("tr");

        row.innerHTML = `
            <td>${record.studentId}</td>
            <td>${record.date}</td>
            <td>${record.status}</td>
        `;

        attendanceTableBody.appendChild(row);
    });
}
