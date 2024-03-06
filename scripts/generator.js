function generateData() {
  let studentlist = [];
  fetch("https://fe-students.onrender.com/api/users")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      for (let student of data.results) {
        let studenttag = document.createElement("li");
        studenttag.id = student.id;
        studenttag.append(student.name);
        studentlist.push(student.name);
        studentsWrapper.append(studenttag);
      }
      console.log(studentlist.length);
      console.log(randomData(studentlist));
    })

    .catch((error) => {
      console.error(error);
    });
}

const studentsWrapper = document.querySelector(".students-wrapper");

generateData();

function buttonSelector() {
  const sidebar = document.querySelector(".sidebar-wrapper");
  if (sidebar.style.display != "block") {
    sidebar.style.display = "block";
  } else {
    sidebar.style.display = "none";
  }
}

function studentGenerator() {
  const students = document.querySelectorAll("li");
  const studentDiv = document.querySelector(".student-display");

  studentDiv.innerText = "";
  const student = Math.floor(Math.random() * students.length);
  studentDiv.append(students[student].innerText);
}
