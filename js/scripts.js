// Your student information
const studentId = "200556299";
const studentName = "Laxit Sompura";

// Function to dynamically add student information to the navbar
function addStudentInfo() {
    const navbar = document.querySelector('.navbar');
    const studentInfo = document.createElement('div');
    studentInfo.classList.add('student-info');
    studentInfo.textContent = `Student ID: ${studentId} | Name: ${studentName}`;
    navbar.appendChild(studentInfo);
}

// Function to fetch a random Chuck Norris joke
function fetchChuckNorrisJoke() {
    fetch('https://api.chucknorris.io/jokes/random')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const jokeElement = document.getElementById("chuck-norris-joke");
            jokeElement.textContent = data.value;
        })
        .catch(error => console.error("Error fetching Chuck Norris joke:", error));
}
const apiKey = "sL1itxuLnby8TleYDCSsoGKbw0p2tNoK";

// Function to fetch a random funny GIF from Giphy API and display it
function fetchAndDisplayRandomFunnyGif() {
    fetch(`https://api.giphy.com/v1/tags/related/funny?api_key=sL1itxuLnby8TleYDCSsoGKbw0p2tNoK`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Get the GIF URL from the response data
            const gifUrl = data.data.image_url;
            
            // Create an <img> element
            const gifElement = document.createElement("img");
            gifElement.src = gifUrl;
            gifElement.alt = "Funny GIF";
            gifElement.classList.add("funny-gif");
            
            // Append the <img> element to the document body
            document.body.appendChild(gifElement);
        })
        .catch(error => console.error("Error fetching random funny GIF:", error));
}



// Call functions when the page loads
window.onload = function() {
    addStudentInfo();
    fetchChuckNorrisJoke();
    fetchAndDisplayRandomFunnyGif();
};
