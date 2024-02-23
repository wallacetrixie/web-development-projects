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





if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}


window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})



const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
	if(this.checked) {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}
})
// Define the courses array
const courses = [
    { id: 1, name: "Python programming", category: "Programming" },
    { id: 2, name: "Data Science", category: "Programming" },
    { id: 3, name: "Introduction to machine learning", category: "Programming" },
    { id: 4, name: "Web development", category: "Programming" },
    { id: 5, name: "Database Management", category: "Programming" },
    { id: 6, name: "The C language", category: "Programming" },
    { id: 7, name: "Cyber Security", category: "Programming" },
    { id: 8, name: "Operating Systems", category: "Programming" }
];

// Function to filter courses based on search term
function filterCourses(searchTerm) {
    return courses.filter(course =>
        course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (course.category && course.category.toLowerCase().includes(searchTerm.toLowerCase()))
    );
}

// Get references to search elements
const searchInput = document.getElementById('search');
const searchForm = document.getElementById('searchForm');

// Add event listener for form submission
searchForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission behavior
    const searchTerm = searchInput.value.trim(); // Get the search term from input field
    const filteredCourses = filterCourses(searchTerm); // Filter courses based on search term
    console.log(filteredCourses); // You can handle filtered courses as needed, such as displaying them on the page
});

