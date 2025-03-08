const courses = [
    { subject: 'CSE', number: 110, title: 'Introduction to Programming', completed: true },
    { subject: 'WDD', number: 130, title: 'Web Fundamentals', completed: true },
    { subject: 'CSE', number: 111, title: 'Programming with Functions', completed: true },
    { subject: 'CSE', number: 210, title: 'Programming with Classes', completed: false },
    { subject: 'WDD', number: 131, title: 'Dynamic Web Fundamentals', completed: true },
    { subject: 'WDD', number: 231, title: 'Frontend Web Development I', completed: false }
];

const courseList = document.getElementById("course-list");
const filterSelect = document.getElementById("filter");

function renderCourses(filter = "all") {
    courseList.innerHTML = "";

    courses
        .filter(course => 
            filter === "all" ||
            (filter === "completed" && course.completed) ||
            (filter === "incomplete" && !course.completed)
        )
        .forEach((course, index) => {
            const li = document.createElement("li");

            li.innerHTML = `
                <button class="course-btn ${course.completed ? 'completed' : ''}" onclick="toggleCompletion(${index})">
                    ${course.title} (${course.subject} ${course.number})
                </button>
            `;

            courseList.appendChild(li);
        });
}

function toggleCompletion(index) {
    courses[index].completed = !courses[index].completed;
    renderCourses(filterSelect.value);
}

filterSelect.addEventListener("change", () => renderCourses(filterSelect.value));

renderCourses();