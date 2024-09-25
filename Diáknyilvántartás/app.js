const students = [
    { name: 'János', age: 18, grades: [5, 4, 4, 5] },
    { name: 'Anna', age: 19, grades: [3, 4, 2, 5] },
    { name: 'Lajos', age: 15, grades: [5, 5, 4, 5] },
    { name: 'Vera', age: 17, grades: [3, 4, 2, 4] }
];

// Diákok listázása:
function displayStudents(filteredStudents = students) {
    const resultList = document.getElementById('result-list');
    resultList.innerHTML = ''; // Clear previous results

    filteredStudents.forEach(student => {
        const li = document.createElement('li');
        li.textContent = `${student.name}, Életkor: ${student.age}, Jegyek: ${student.grades.join(', ')}`;
        resultList.appendChild(li);
    });
}

// Add student
document.getElementById('add-student-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const age = parseInt(document.getElementById('age').value);
    const grades = document.getElementById('grades').value.split(',').map(Number);

    students.push({ name, age, grades });
    displayStudents();
    this.reset();
});

// Filter by age
document.getElementById('filter-age-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const ageFilter = parseInt(document.getElementById('filter-age').value);
    const filteredStudents = students.filter(student => student.age === ageFilter);
    displayStudents(filteredStudents);
    this.reset();
});

// Filter by average grade
document.getElementById('filter-average-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const averageFilter = parseInt(document.getElementById('average').value);
    const filteredStudents = students.filter(student => {
        const average = student.grades.reduce((sum, grade) => sum + grade, 0) / student.grades.length;
        return average > averageFilter;
    });
    displayStudents(filteredStudents);
    this.reset();
});

// Delete student
document.getElementById('delete-student-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const deleteName = document.getElementById('delete-name').value;
    const index = students.findIndex(student => student.name === deleteName);
    
    if (index !== -1) {
        students.splice(index, 1);
        displayStudents();
    } else {
        alert('Diák nem található!');
    }
    this.reset();
});

// Update grades
document.getElementById('update-grades-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const updateName = document.getElementById('update-name').value;
    const newGrades = document.getElementById('update-grades').value.split(',').map(Number);
    const student = students.find(student => student.name === updateName);
    
    if (student) {
        student.grades = newGrades;
        displayStudents();
    } else {
        alert('Diák nem található!');
    }
    this.reset();
});

// Initial display of students
displayStudents();
// Diák hozzáadása a listához:
// Életkor szerinti szűrés:
// Adott átlagtól jobb diákok szűrése:
// Diák törlése:
// Jegyek módosítása:
