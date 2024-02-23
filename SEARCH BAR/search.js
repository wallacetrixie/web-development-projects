const courses = [
  { id: 1, name: "Course 1", category: "Category A" },
  { id: 2, name: "Course 2", category: "Category B" },
  { id: 3, name: "Advanced Course", category: "Category A" },
  { id: 4, name: "New Course", category: "Category C" },
  { id: 5, name: "Advanced Course", category: "Category A" },
  { id: 6, name: "New Course", category: "Category C" },
  { id: 7, name: "New Course", category: "Category C" },
  { id: 8, name: "Advanced Course", category: "Category A" },
  { id: 9, name: "New Course", category: "Category C" },
  { id: 10, name: "New Course", category: "Category C" },
  { id: 11, name: "New Course", category: "Category C" },
  { id: 12, name: "New Course", category: "Category C" }
];

function filterCourses(searchTerm) {
  const filteredCourses = courses.filter(course =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.category.toLowerCase().includes(searchTerm.toLowerCase())
  );
  showFilteredCourses(filteredCourses);
}

function showFilteredCourses(filteredCourses) {
  const courseList = document.getElementById("courseList");
  courseList.innerHTML = ""; // Clear previous content

  filteredCourses.forEach(course => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <h3>${course.name}</h3>
      <p>Category: ${course.category}</p>
    `;
    courseList.appendChild(card);
  });
}

document.getElementById("searchInput").addEventListener("input", function() {
  filterCourses(this.value);
});
const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});




// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})


const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
	if(window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if(searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
})
