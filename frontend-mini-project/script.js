const form = document.getElementById('studentForm');
const nameInput = document.getElementById('name');
const rollInput = document.getElementById('roll');
const studentList = document.getElementById('studentList');
const searchInput = document.getElementById('searchInput');

let students = JSON.parse(localStorage.getItem('students')) || [];

function  renderStudents(data = students) {
    studentList.innerHTML = '';
    data.forEach((student, index) =>  {
        const  tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${student.name}</td>
            <td>${student.roll}</td>
            <td>
                  <button class="btn-delete" data-index="${index}">Delete</button>
            </td>
        `;
        studentList.appendChild(tr);
    });
}

form.addEventListener('submit',  function(e) {
    e.preventDefault();
    
    students.push({
        name: nameInput.value,
        roll: rollInput.value
    });
    
    localStorage.setItem ('students', JSON.stringify(students));
    form.reset();
    renderStudents();
});

studentList.addEventListener('click',  function(e) {
    if (e.target.classList.contains ('btn-delete')) {
        const  index = e.target.getAttribute('data-index');
        students.splice (index, 1);
        localStorage.setItem( 'students',  JSON.stringify(students));
        renderStudents() ;
      }
});

searchInput.addEventListener('input', function(e) {
    const term = e.target.value.toLowerCase();
    const filtered = students.filter(student => 
        student.name.toLowerCase().includes(term) || 
        student.roll.toLowerCase().includes(term)
    );
    renderStudents(filtered);
});

renderStudents();