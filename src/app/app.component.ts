import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Array-Operation';
  ngOnInit(): void {
    this.test();
  }

  test() {
    interface Student {
      name: string;
      age: number;
      department: string;
      totalMarks: number;
  }
  
  const students: Student[] = [
      { name: "Denil", age: 23, department: "Computer Science", totalMarks: 85 },
      { name: "Sandra", age: 22, department: "Mathematics", totalMarks: 73 },
      { name: "Pranav", age: 21, department: "Physics", totalMarks: 93 },
      { name: "Suchin", age: 19, department: "Biology", totalMarks: 60 }
  ];
  
  function displayStudents(studentArray: Student[]) {
      const tableBody = document.querySelector("#studentTable tbody");
      if (!tableBody) return;
  
      tableBody.innerHTML = "";
      studentArray.forEach(student => {
          const row = document.createElement("tr");
          row.innerHTML = `
              <td>${student.name}</td>
              <td>${student.age}</td>
              <td>${student.department}</td>
              <td>${student.totalMarks}</td>
          `;
          tableBody.appendChild(row);
      });
  }
  
  function sortStudents() {
      const sortField = (document.getElementById("sortField") as HTMLSelectElement).value;
      const sortedStudents = students.slice().sort((a, b) => {
          if (a[sortField] < b[sortField]) return -1;
          if (a[sortField] > b[sortField]) return 1;
          return 0;
      });
      displayStudents(sortedStudents);
  }
  
  function searchStudents() {
      const searchInput = (document.getElementById("searchInput") as HTMLInputElement).value.toLowerCase();
      const foundStudent = students.find(student => student.name.toLowerCase() === searchInput);
      const foundDepartment = students.find(student => student.department.toLowerCase() === searchInput);
      const foundAge = students.find(student => student.age.toString() === searchInput);
      const foundTotalMark = students.find(student => student.totalMarks.toString() === searchInput);
      if (foundStudent) {
          displayStudents([foundStudent]);
      } else if (foundAge) {
          displayStudents([foundAge]);
      } else if (foundTotalMark) {
          displayStudents([foundTotalMark]);
      } else if (foundDepartment) {
          displayStudents([foundDepartment]);
      } else {
          console.log("No matching student found.");
      }
  }
  
  function filterStudents() {
      const markInput = parseInt((document.getElementById("markInput") as HTMLInputElement).value);
      const filteredStudents = students.filter(student => student.totalMarks > markInput);
      displayStudents(filteredStudents);
  }
  
  displayStudents(students);
  
  document.getElementById("sortField")!.addEventListener("change", sortStudents);
  document.getElementById("searchButton")!.addEventListener("click", searchStudents);
  document.getElementById("filterButton")!.addEventListener("click", filterStudents);
  
  }
}
