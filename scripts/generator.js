function generateData() {
  fetch("https://fe-students.onrender.com/api/users")
    .then((res) => res.json())
    .then((data) => {
      for (let student of data.results) {
        let studentTag = document.createElement("li");
        studentTag.id = student.id;
        studentTag.innerText = student.name;
        studentsWrapper.append(studentTag);
      }
    })

    .catch((error) => console.error(error));
}

function buttonSelector() {
  const sidebar = document.querySelector(".sidebar-wrapper");
  sidebar.style.display != "none"
    ? (sidebar.style.display = "none")
    : (sidebar.style.display = "block");
}

function studentGenerator() {
  const students = document.querySelectorAll("li");
  const studentDiv = document.querySelector(".student-display");

  studentDiv.innerText = "";
  const student = Math.floor(Math.random() * students.length);
  studentDiv.innerText = students[student].innerText;
}

const studentsWrapper = document.querySelector(".students-wrapper");

generateData();
