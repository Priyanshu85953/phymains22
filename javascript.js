// javascript.js

let totalMinutes = 181; // 120 minutes
let timeLeft = totalMinutes * 60; // Convert minutes to seconds
let timerId;
let timerKey = 'PHYMAINS22'; // Unique key for the 120-min timer

// Check if there is a saved time in localStorage
if (localStorage.getItem(timerKey)) {
    timeLeft = parseInt(localStorage.getItem(timerKey), 10);
}

// Function to start the timer
function startTimer() {
    timerId = setInterval(function() {
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;

        // Display the timer
        document.getElementById('time_left').innerHTML = `Time Left: ${minutes}m ${seconds < 10 ? '0' : ''}${seconds}s`;

        // Save the time left in localStorage every second
        localStorage.setItem(timerKey, timeLeft);

        if (timeLeft <= 0) {
            clearInterval(timerId);
            autoSubmit();
            localStorage.removeItem(timerKey); // Clear storage after submission
        }

        timeLeft--;
    }, 1000);
}

// Function to stop the timer and submit
function stopTimer() {
    clearInterval(timerId);
    localStorage.removeItem(timerKey); // Remove time when the test is submitted
}

// Function to handle auto submission
function autoSubmit() {
    alert("Time is over! Submitting the test automatically.");
    document.getElementById('submit').click(); // Simulate click on submit button
}

// Start the timer when the page loads
window.onload = startTimer;

// Stop the timer on submit button click
document.getElementById('submit').onclick = function() {
    stopTimer();
};


// Login handler (assuming there's a login form)
function handleLogin(event) {
    event.preventDefault(); // Prevent form submission

    const userId = document.getElementById('userId').value;
    const password = document.getElementById('password').value;

    // Basic validation to check if the fields are filled
    if (userId === "" || password === "") {
        alert("Please fill in both the ID and Password.");
        return false;
    }

    // Object with valid usernames and their respective passwords
    const validCredentials = {
        "ARYAN01": "ARYAN01",
        "SAMPAUL01": "SAMPAUL01",
        "ARZOO01": "ARZOO01",
        "ANSH01": "ANSH01",
        "VINEET01": "VINEET01",
        "CHINMAY01": "CHINMAY01",
        // "jee02": "124",
        "jee03": "125",
        "jee04": "126"

    };

    // Check if the entered username exists in the object and if the password matches
    if (validCredentials[userId] && validCredentials[userId] === password) {
        // If login is successful
        window.location.href = "exam.html"; // Redirect to another page
    } else {
        // If login fails
        alert("Invalid Username or Password. Hands'up, you are going to arrested!");
    }

    return false;
}

document.addEventListener('DOMContentLoaded', function () {
    let currentSection = "phySec1"; // Default section
    let quizSubmitted = false; // Track whether the quiz has been submitted

    const sectionData = {
        phySec1: [],
        phySec2: []
        // chemSec1: [],
        // chemSec2: [],
        // mathsSec1: [],
        // mathsSec2: []
        // bioSec1: []
    };
    
    // Function to generate URLs based on question number
    function generateUrl(section, questionNumber) {
        return `https://firebasestorage.googleapis.com/v0/b/mentorsmantratestportal1.appspot.com/o/${section}%2F${questionNumber}.jpeg?alt=media`;
    }
    
    // Populate phySec1
    for (let i = 1; i <= 20; i++) {
        sectionData.phySec1.push({
            questionNumber: i,
            url
            //  : i === 2 
            //    ? "https://firebasestorage.googleapis.com/v0/b/mentorsmantratestportal1.appspot.com/o/WPE%20%2B%20CIRCULAR%20MAINS%20TEST%2FCOM%20ADV%20QUES%2F1.jpeg?alt=media&token=e7d8978a-7339-4eb2-b791-bf7c5f205686"
            //   : i === 3 
            //  ? "https://firebasestorage.googleapis.com/v0/b/mentorsmantratestportal1.appspot.com/o/WPE%20%2B%20CIRCULAR%20MAINS%20TEST%2FCOM%20ADV%20QUES%2F2.jpeg?alt=media&token=a2768062-ab05-4fca-9ceb-b229c4d090ba"
            //  : i === 15 
            //  ? "https://firebasestorage.googleapis.com/v0/b/mentorsmantratestportal1.appspot.com/o/WPE%20%2B%20CIRCULAR%20MAINS%20TEST%2FCOM%20ADV%20QUES%2F5.jpeg?alt=media&token=90d1cb20-cd1c-453a-9a6e-8b44c56a9201"
            : generateUrl('phymains22', i),  // Default URL for other questions
            options
            // : i === 1 ? ["3", "6", "9", "12"]
            // : i === 2 ? ["1", "3", "5", "7"]
            // : i === 12 ? ["1", "4", "5", "2"]
            // : i === 4 ? ["4", "2", "6", "5"]
            // : i === 7 ? ["6", "5", "3", "1"]
            // : i === 13 ? ["2π√mk1/k2", "2π√m/(k1+k2)", "2π√m/(k1k2)", "2π√m/(k1-k2)"]
            // : i === 3 ? ["6.7", "10", "3.3", "3.4"]
            // : i === 4 ? ["15N", "100N", "2N", "20N"]
            // : i === 19 ? ["10", "10.6", "25", "20"]
            : ["A", "B", "C", "D"], // Custom options for question 2
            correctAnswer: [/*1*/ "D",
                /*2*/ "D",
                /*3*/ "A",
                /*4*/ "B",
                /*5*/ "A",
                /*6*/ "D",
                /*7*/ "D",
                /*8*/ "A",
                /*9*/ "A",
                /*10*/ "A",
                /*11*/ "A",
                /*12*/ "A",
                /*13*/ "A",
                /*14*/ "A",
                /*15*/ "D",
                /*16*/ "C",
                /*17*/ "A",
                /*18*/ "A",
                /*19*/ "D",
                /*20*/ "C"




                ][i - 1]  // Adjust correct answers as needed
        });
    }
    
    // Populate phySec2
    const phySec2CorrectAnswers = [
          /*1*/ 3,
        /*2*/ 60,
        /*3*/ 23,
        /*4*/ 20,
        /*5*/ 6];
    for (let i = 21; i <= 25; i++) {
        sectionData.phySec2.push({
            questionNumber: i,
            url: generateUrl('phymains22', i),
            correctAnswer: phySec2CorrectAnswers[i - 21] // Adjusting the index to start from 0
        });
    }
    
//     // // Populate chemSec1
//     for (let i = 1; i <= 13; i++) {
//         sectionData.chemSec1.push({
//             questionNumber: i,    
//              url
//             //  : i === 2 
//             //    ? "https://firebasestorage.googleapis.com/v0/b/mentorsmantratestportal1.appspot.com/o/WPE%20%2B%20CIRCULAR%20MAINS%20TEST%2FCOM%20ADV%20QUES%2F1.jpeg?alt=media&token=e7d8978a-7339-4eb2-b791-bf7c5f205686"
//             //   : i === 3 
//             //  ? "https://firebasestorage.googleapis.com/v0/b/mentorsmantratestportal1.appspot.com/o/WPE%20%2B%20CIRCULAR%20MAINS%20TEST%2FCOM%20ADV%20QUES%2F2.jpeg?alt=media&token=a2768062-ab05-4fca-9ceb-b229c4d090ba"
//             //  : i === 15 
//             //  ? "https://firebasestorage.googleapis.com/v0/b/mentorsmantratestportal1.appspot.com/o/WPE%20%2B%20CIRCULAR%20MAINS%20TEST%2FCOM%20ADV%20QUES%2F5.jpeg?alt=media&token=90d1cb20-cd1c-453a-9a6e-8b44c56a9201"
//             : generateUrl('', i),  // Default URL for other questions
//             options
//             // : i === 3 ? ["(III)>(II)>(I)=(IV)>(V)=(VI)", "(III)>(I)>(II)=(IV)>(V)=(VI)", "(III)>(II)>(I)=(IV)>(V)=(VI)", "(III)>(I)>(IV)>(V)>(II)>(VI)"]
//             // : i === 15 ? ["(a)-(I), (b)-(II), (c)-(III), (d)-(IV)", "(a)-(IV), (b)-(I), (c)-(II), (d)-(III)", "(a)-(II), (b)-(I), (c)-(IV), (d)-(III)", "(a)-(II), (b)-(I), (c)-(III), (d)-(IV)"]
//             // : i === 18 ? ["1", "2", "3", "4"]
//             // : i === 10 ? ["(1)", "(2)", "(3)", "(4)"]
//             : ["A", "B", "C", "D"], // Custom options for question 2
//             correctAnswer: [
//                 /*1*/ "D",
// /*2*/ "B",
// /*3*/ "A",
// /*4*/ "C",
// /*5*/ "C",
// /*6*/ "D",
// /*7*/ "B",
// /*8*/ "A",
// /*9*/ "B",
// /*10*/ "A",
// /*11*/ "B",
// /*12*/ "B",
// /*13*/ "C"
//                 // /*14*/ "D",
//                 // /*15*/ "(a)-(II), (b)-(I), (c)-(IV), (d)-(III)",
//                 // /*16*/ "A",
//                 // /*17*/ "B",
//                 // /*18*/ "4",
//                 // /*19*/ "A",
//                 // /*20*/ "C",
//                             ][i - 1] // Adjust correct answers as needed
//         });
//     }

//     //     // Populate chemSec2
//         const chemSec2CorrectAnswers = [
//             /*1*/ 8,
//             /*2*/ 8,
//             /*3*/ 3,
//             /*4*/ 4,
//             /*5*/ 1];
//         for (let i = 14; i <= 18; i++) {
//             sectionData.chemSec2.push({
//                 questionNumber: i,
//                 url: generateUrl('', i),
//                 correctAnswer: chemSec2CorrectAnswers[i - 21] // Adjusting the index to start from 0
//             });
//         }
//         // Populate mathsSec1
//     for (let i = 1; i <= 13; i++) {
//         sectionData.mathsSec1.push({
//             questionNumber: i,
//             url: generateUrl('', i),
//             options
//             // : i === 5 ? ["(1)", "(2)", "(3)", "(4)"]
//             : i === 10 ? ["P-4, Q-6, R-2, S-1", "P-1, Q-4, R-3, S-2", "P-4, Q-6, R-5, S-2", "P-4, Q-2, R-3, S-1"] 
//             :["A", "B", "C", "D"],
//             correctAnswer: [
// /*1*/ "A",
// /*2*/ "P-4, Q-6, R-5, S-2",
// /*3*/ "A",
// /*4*/ "D",
// /*5*/ "C",
// /*6*/ "D",
// /*7*/ "C",
// /*8*/ "A",
// /*9*/ "C",
// /*10*/ "A",
// /*11*/ "D",
// /*12*/ "D",
// /*13*/ "C"
// // /*14*/ "C",
// // /*15*/ "B",
// // /*16*/ "C",
// // /*17*/ "D",
// // /*18*/ "B",
// // /*19*/ "C",
// // /*20*/ "A"


//             ][i - 1]  // Adjust correct answers as needed
//         });
//     }
    
//      // Populate mathsSec2
//     const mathsSec2CorrectAnswers = [
//         /*1*/ 24,
//         /*2*/ 31650,
//         /*3*/ 100,
//         /*4*/ 23.8,
//         /*5*/ 77];
//     for (let i = 14; i <= 18; i++) {
//         sectionData.mathsSec2.push({
//             questionNumber: i,
//             url: generateUrl('', i),
//             correctAnswer: mathsSec2CorrectAnswers[i - 21] // Adjusting the index to start from 0
//         });
//         }
//     for (let i = 1; i <= 15; i++) {
//         sectionData.bioSec1.push({
//             questionNumber: i,
//             url: generateUrl('BIO%20IAT%20TEST%2020', i),
//             options: ["A", "B", "C", "D"],
//             correctAnswer: [
//                /*1*/ "C",
// /*2*/ "D",
// /*3*/ "C",
// /*4*/ "A",
// /*5*/ "B",
// /*6*/ "A",
// /*7*/ "B",
// /*8*/ "B",
// /*9*/ "C",
// /*10*/ "A",
// /*11*/ "A",
// /*12*/ "B",
// /*13*/ "C",
// /*14*/ "D",
// /*15*/ "C"

//                 ][i - 1]  // Adjust correct answers as needed
//         });
//     }
    

    const sectionQuestionIndex = {
        phySec1: 0,
        phySec2: 0
        // chemSec1: 0,
        // chemSec2: 0,
        // mathsSec1: 0,
        // mathsSec2: 0
        // bioSec1: 0
    };

    const selectedAnswers = {};
    const markedForReview = {}; // New object to track marked for review
    const isVisited = {};
    const smarkedForReview = {};
    let nselectedAnswers=0;
    let nmarkedForReview=0;
    let nisVisited=0;
    let nsmarkedForReview=0;

    const saveButton = document.getElementById('favourite');
    const saveAndNextButton = document.getElementById('next');
    const smarkforreviewAndNextButton = document.getElementById('smfran');
    const markforreviewAndNextButton = document.getElementById('mfran');
    const clearResponseButton = document.getElementById('cr');
    const previousButton = document.getElementById('previous');
    const unsNextButton = document.getElementById('next_u');


    const submitButton = document.getElementById('submit'); // Assuming there's a submit button

    saveButton.addEventListener('click', saveCurrentQuestion);
    saveAndNextButton.addEventListener('click', saveAndNextQuestion);
    markforreviewAndNextButton.addEventListener('click', markforreviewAndNextQuestion);
    smarkforreviewAndNextButton.addEventListener('click', smarkforreviewAndNextQuestion);
    clearResponseButton.addEventListener('click', clearResponse);
    previousButton.addEventListener('click', goToPreviousQuestion);
    unsNextButton.addEventListener('click', goToNextQuestion);
    submitButton.addEventListener('click', submitQuiz);

    function saveCurrentQuestion() {
        if (currentSection.includes("Sec2")) {
            // For Section 2, save numerical answer
            const numericalAnswer = document.getElementById('numerical-answer').value;
    
            if (numericalAnswer) {
                if (!selectedAnswers[currentSection]) {
                    selectedAnswers[currentSection] = {};
                }
                if(!selectedAnswers[currentSection][sectionQuestionIndex[currentSection]]){
                    nselectedAnswers++;
                }
                selectedAnswers[currentSection][sectionQuestionIndex[currentSection]] = numericalAnswer;
            }
            
        } else {
            // For Section 1, save MCQ answers as before
            const selectedOption = document.querySelector(`input[name="option${sectionQuestionIndex[currentSection]}"]:checked`);
    
            if (selectedOption) {
                if (!selectedAnswers[currentSection]) {
                    selectedAnswers[currentSection] = {};
                }
                if(!selectedAnswers[currentSection][sectionQuestionIndex[currentSection]]){
                    nselectedAnswers++;
                }
                selectedAnswers[currentSection][sectionQuestionIndex[currentSection]] = selectedOption.value;
            }
        }
    
        updatePaletteItems();
    }
    

    function markforreviewAndNextQuestion() {
        // Initialize the review tracking for the current section if not already done
        if (!markedForReview[currentSection]) {
            markedForReview[currentSection] = {};
        }
        
        // Set the current question as marked for review
        if(!markedForReview[currentSection][sectionQuestionIndex[currentSection]]){
            nmarkedForReview++;
        }
        markedForReview[currentSection][sectionQuestionIndex[currentSection]] = true;
        
        
        updatePaletteItems(); // Update the palette to reflect the change
        
        goToNextQuestion();
    }

    function smarkforreviewAndNextQuestion(){
        saveCurrentQuestion();

        if (!smarkedForReview[currentSection]) {
            smarkedForReview[currentSection] = {};
        }
        
        // Set the current question as marked for review
        if(!smarkedForReview[currentSection][sectionQuestionIndex[currentSection]]){
            nsmarkedForReview++;
        }
        smarkedForReview[currentSection][sectionQuestionIndex[currentSection]] = true;
        
        updatePaletteItems(); // Update the palette to reflect the change
        
        goToNextQuestion();
    }

    function saveAndNextQuestion() {
        saveCurrentQuestion();

        if (!markedForReview[currentSection]) {
            markedForReview[currentSection] = {};
        }
        if (!smarkedForReview[currentSection]) {
            smarkedForReview[currentSection] = {};
        }
        if(markedForReview[currentSection][sectionQuestionIndex[currentSection]]){
            nmarkedForReview--;
        }
        markedForReview[currentSection][sectionQuestionIndex[currentSection]] = false;
        if(smarkedForReview[currentSection][sectionQuestionIndex[currentSection]]){
            smarkedForReview[currentSection][sectionQuestionIndex[currentSection]] = true;
        }
        
        goToNextQuestion();
    }

    function goToNextQuestion() {
        const currentIndex = sectionQuestionIndex[currentSection];
        if (currentIndex < sectionData[currentSection].length - 1) {
            sectionQuestionIndex[currentSection]++;
            updateQuestionDisplay();
            updatePaletteItems(); // Update palette colors
        } else {
            const nextSection = getNextSection();
            if (nextSection) {
                switchSection(nextSection);
            }
        }
    }

    function goToPreviousQuestion() {
        const currentIndex = sectionQuestionIndex[currentSection];
        if (currentIndex > 0) {
            sectionQuestionIndex[currentSection]--;
            updateQuestionDisplay();
            updatePaletteItems(); // Update palette colors
        }
    }

    function clearResponse() {
        // Clear selected option for the current question
        document.querySelectorAll(`input[name="option${sectionQuestionIndex[currentSection]}"]`).forEach(input => {
            input.checked = false; // Uncheck the radio buttons
        });
        
        if (selectedAnswers[currentSection]) {
            if(selectedAnswers[currentSection][sectionQuestionIndex[currentSection]]){
                nselectedAnswers--;
            }
            selectedAnswers[currentSection][sectionQuestionIndex[currentSection]] = null; // Clear the selected answer
        }
        
        // Update the palette items to reflect the cleared state
        updatePaletteItems();
        status();
    }

    function updateQuestionDisplay() {
        
        const currentQuestionData = sectionData[currentSection][sectionQuestionIndex[currentSection]];
        const questionImage = document.getElementById('q1');
    
        // Update the image source
        questionImage.src = currentQuestionData.url;
    
        // Reset any previously applied inline styles
        questionImage.style.height = "";
        questionImage.style.width = "";
    
        // Apply specific dimensions for Phy Sec 1, Q15
        if (currentSection === "phySec2" && sectionQuestionIndex[currentSection] === 1) { // Index starts from 0
            questionImage.style.height = "400px"; // Custom height
            questionImage.style.width = "400px"; // Custom width
        } else if (currentSection.includes("Sec2")) {
            // Numerical question
            questionImage.classList.add('numerical-image');
            questionImage.classList.remove('mcq-image');
        } else {
            // MCQ question
            questionImage.classList.add('mcq-image');
            questionImage.classList.remove('numerical-image');
        }
    
        document.getElementById('question-title').textContent = `Question no. ${sectionQuestionIndex[currentSection] + 1}`;
        const optionsContainer = document.querySelector('.answers');
        optionsContainer.innerHTML = "";  // Clear previous content
    
        if (currentSection.includes("Sec2")) {
            // For Section 2, show a numerical input field
            const inputField = document.createElement('input');
            inputField.type = 'number';
            inputField.id = 'numerical-answer';
            inputField.style.width = "200px";
            inputField.style.height = "40px";
            inputField.placeholder = 'Enter your answer';
    
            if (selectedAnswers[currentSection] && selectedAnswers[currentSection][sectionQuestionIndex[currentSection]] !== undefined) {
                inputField.value = selectedAnswers[currentSection][sectionQuestionIndex[currentSection]];
            }
    
            optionsContainer.appendChild(inputField);
        } else {
            // For Section 1, display MCQs as usual
            currentQuestionData.options.forEach((option, index) => {
                const label = document.createElement('label');
                label.innerHTML = `<input type="radio" name="option${sectionQuestionIndex[currentSection]}" value="${option}"> ${option}`;
                optionsContainer.appendChild(label);
            });
    
            if (selectedAnswers[currentSection] && selectedAnswers[currentSection][sectionQuestionIndex[currentSection]] !== undefined) {
                const selectedValue = selectedAnswers[currentSection][sectionQuestionIndex[currentSection]];
                const selectedInput = document.querySelector(`input[name="option${sectionQuestionIndex[currentSection]}"][value="${selectedValue}"]`);
                if (selectedInput) {
                    selectedInput.checked = true;
                }
            }
        }

        // Initialize the review tracking for the current section if not already done
        if (!isVisited[currentSection]) {
            isVisited[currentSection] = {};
        }

        // Increment `nisVisited` only if the question was not previously visited
    if (!isVisited[currentSection][sectionQuestionIndex[currentSection]]) {
        isVisited[currentSection][sectionQuestionIndex[currentSection]] = true;
        nisVisited++;
    }
        if (quizSubmitted) {
            showResults();  // Show results after submission
        }
    
        updatePaletteItems();
        status();
    }
    
    function switchSection(section) {
        if (sectionData.hasOwnProperty(section)) {
            currentSection = section;
            updateQuestionDisplay();
            updateSectionColors(); // Change color when switching sections
        } else {
            console.error("Section not found: " + section);
        }
    }

    function getNextSection() {
        const sectionNames = ["phySec1","phySec2"];
        const currentIndex = sectionNames.indexOf(currentSection);
        if (currentIndex < sectionNames.length - 1) {
            return sectionNames[currentIndex + 1];
        }
        return null;
    }

    function updatePaletteItems() {
        const paletteList = document.getElementById('palette-list');
        paletteList.innerHTML = ""; // Clear existing palette items
    
        sectionData[currentSection].forEach((_, index) => {
            const paletteItem = document.createElement('div');
            paletteItem.className = 'nv_item';
            paletteItem.id = `btn${index + 1}`;
            paletteItem.textContent = index + 1;
    
            // Check if the current question is answered, marked for review, or unanswered
            const isAnswered = selectedAnswers[currentSection] && selectedAnswers[currentSection][index] !== undefined && selectedAnswers[currentSection][index] !== null;
            const isMarkedForReview = markedForReview[currentSection] && markedForReview[currentSection][index];
            const ivisit = isVisited[currentSection] && isVisited[currentSection][index];
            const issMarkedForReview = smarkedForReview[currentSection] && smarkedForReview[currentSection][index];

            // Determine the color of the palette item
            if (selectedAnswers[currentSection] && selectedAnswers[currentSection][index] === null) {
                paletteItem.style.backgroundPosition = '-57px -6px'
            }



            if (isMarkedForReview) {
                if (isAnswered) {
                    // Mix of blue and green (e.g., teal)
                    paletteItem.style.backgroundPosition = '-66px -178px';
                } else {
                    // Blue for marked for review without an answer
                    paletteItem.style.backgroundPosition = '-108px -1px';
                }
            } else {
                if (isAnswered) {
                    // Green for answered
                    paletteItem.style.backgroundPosition = '-4px -5px';
                } else {
                    if(ivisit){
                        paletteItem.style.backgroundPosition = '-57px -6px';
                    }else{
                        paletteItem.style.backgroundPosition = '-157px -4px';
                    }

                }
            }
            if(issMarkedForReview){
                paletteItem.style.backgroundPosition = '-66px -178px';
            }
    
            // Add a click event listener to update the current question
            paletteItem.addEventListener('click', () => {
                sectionQuestionIndex[currentSection] = index;
                updateQuestionDisplay();
            });
    
            paletteList.appendChild(paletteItem);
        });
    }
    
    function status() {
        // Calculate the number of not answered questions
        const notAnswered = 25 - ((25-nisVisited) + nmarkedForReview + nsmarkedForReview + nselectedAnswers);
    
        // Update the status display in the sidebar
        document.querySelector('.just_51').textContent = nselectedAnswers;       // Answered
        document.querySelector('.just_52').textContent = notAnswered;           // Not Answered
        document.querySelector('.just_53').textContent = 25 - nisVisited;       // Not Visited
        document.querySelector('.just_54').textContent = nmarkedForReview;      // Marked for Review
        document.querySelector('.just_55').textContent = nsmarkedForReview;     // Marked for Answer for Review
    }
    


    function updateSectionColors() {
        const sections = document.querySelectorAll('.section_unselected, .section_selected');

        sections.forEach((section) => {
            section.classList.remove('section_selected');
            section.classList.add('section_unselected');
        });

        // Find the corresponding section element and apply 'section_selected'
        const sectionIndex = Object.keys(sectionData).indexOf(currentSection);
        if (sectionIndex !== -1) {
            sections[sectionIndex].classList.remove('section_unselected');
            sections[sectionIndex].classList.add('section_selected');
        }
    }

    function showResults() {
        const currentQuestionData = sectionData[currentSection][sectionQuestionIndex[currentSection]];
        const correctAnswer = currentQuestionData.correctAnswer;
    
        if (currentSection.includes("Sec2")) {
            // Handle numerical answers for Section 2
            const userAnswer = document.getElementById('numerical-answer').value.trim(); // Get user's answer and trim spaces
    
            if (userAnswer) {
                if (parseFloat(userAnswer) === correctAnswer) {
                    // Correct answer, show in green
                    document.getElementById('numerical-answer').style.border = "2px solid green";
                } else {
                    // Incorrect answer, show in red
                    document.getElementById('numerical-answer').style.border = "2px solid red";
                }
            }
        } else {
            // Handle MCQs for Section 1
            const options = document.querySelectorAll(`input[name="option${sectionQuestionIndex[currentSection]}"]`);
    
            options.forEach(option => {
                const parentLabel = option.parentElement;
                if (option.value === correctAnswer) {
                    parentLabel.style.border = "2px solid green"; // Correct answer in green
                } else if (option.checked) {
                    parentLabel.style.border = "2px solid red"; // Incorrect answer in red
                }
            });
        }
    }
    

    function calculateMarks() {
        let totalMarks = 0;
        let sectionMarks = {};
    
        Object.keys(sectionData).forEach(section => {
            let sectionTotal = 0;
            sectionData[section].forEach((question, index) => {
                const correctAnswer = question.correctAnswer;
                const userAnswer = selectedAnswers[section] ? selectedAnswers[section][index] : null;
    
                if (section.includes("Sec2")) {
                    // Handle numerical answers
                    if (parseFloat(userAnswer) === correctAnswer) {
                        sectionTotal += 3;  // +4 for correct answer
                    } else if (userAnswer) {
                        sectionTotal -= 1;  // -1 for incorrect answer
                    }
                } else {
                    // Handle MCQ answers
                    if (userAnswer === correctAnswer) {
                        sectionTotal += 4;  // +4 for correct answer
                    } else if (userAnswer) {
                        sectionTotal -= 1;  // -1 for incorrect answer
                    }
                }
            });
            sectionMarks[section] = sectionTotal;
            totalMarks += sectionTotal;
        });
    
        return { totalMarks, sectionMarks };
    }
    

    function submitQuiz() {
        quizSubmitted = true;
        showResults(); // Show results for the current question
    
        // Calculate marks and stats
        const { totalMarks, sectionMarks } = calculateMarks();
        // Prepare message for the email (HTML with <br>)
        let alertMessage = `Quiz submitted! Your final score is ${totalMarks} marks.\n\nSection-wise marks:\n`;
        let DetailMessage = `Quiz submitted! Your final score is ${totalMarks} marks.\n\n`;
        // Calculate attempted (visited), correct, and not attempted questions
        let totalAttempted = nisVisited; // Visited questions are considered attempted
        let totalCorrect = 0;
        let totalNotAttempted = 25 - nisVisited; // Assuming a total of 75 questions
        const sectionStats = {};
    
        Object.keys(sectionData).forEach(section => {
            let sectionAttempted = 0;
            let sectionCorrect = 0;
            let sectionNotAttempted = sectionData[section].length;
    
            sectionData[section].forEach((question, index) => {
                const correctAnswer = question.correctAnswer;
                const userAnswer = selectedAnswers[section] ? selectedAnswers[section][index] : null;
    
                if (isVisited[section] && isVisited[section][index]) {
                    sectionAttempted++;
                    sectionNotAttempted--;
    
                    if (section.includes("Sec2")) {
                        // Numerical answers
                        if (parseFloat(userAnswer) === correctAnswer) {
                            sectionCorrect++;
                        }
                    } else {
                        // MCQ answers
                        if (userAnswer === correctAnswer) {
                            sectionCorrect++;
                        }
                    }
                }
            });
    
            sectionStats[section] = {
                attempted: sectionAttempted,
                correct: sectionCorrect,
                notAttempted: sectionNotAttempted,
            };
    
            totalCorrect += sectionCorrect;
        });
    
        // Prepare email content
        let emailMessage = `<strong>Quiz submitted!</strong><br>`;
        emailMessage += `<strong>Total Attempted:</strong> ${totalAttempted}<br>`;
        emailMessage += `<strong>Total Correct:</strong> ${totalCorrect}<br>`;
        emailMessage += `<strong>Total Not Attempted:</strong> ${totalNotAttempted}<br><br>`;
        emailMessage += `<strong>Section-wise Details:</strong><br>`;
        DetailMessage += 'No. of attempt\n'
    
        Object.keys(sectionStats).forEach(section => {
            const stats = sectionStats[section];
            emailMessage += `<strong>${section}:</strong> Attempted: ${stats.attempted}, Correct: ${stats.correct}, Not Attempted: ${stats.notAttempted}<br>`;
            DetailMessage += `${section}${stats.attempted}, Correct: ${stats.correct}, Not Attempted: ${stats.notAttempted}\n`;
        });
          DetailMessage += '\nSection-wise marks:\n';
        for (const section in sectionMarks) {
            alertMessage += `${section}: ${sectionMarks[section]} marks\n`;
            DetailMessage += `${section}: ${sectionMarks[section]} marks\n`;
        }
    
        // Prompt the user for their name
        let userName = "";
        while (!userName) {
            userName = prompt("Please enter your Email ID (This is required):");
        }
    
        // Add user details
        emailMessage = `<strong>Name:</strong> ${userName}<br><br>` + emailMessage;
        alertMessage = `Name: ${userName}\n\n` + alertMessage;
        DetailMessage = `Name: ${userName}\n\n` + DetailMessage;

         // Add correct answers and selected answers to the email body
         emailMessage += `<br><br><strong>Selected Answers:</strong><br>`;
         alertMessage += `\n\nSelected Answers:\n`;
         DetailMessage += `\n\nSelected Answers:\n`;
         
         Object.keys(sectionData).forEach(section => {
             emailMessage += `<strong>${section}:</strong><br>`;
             alertMessage += `${section}:\n`;
             DetailMessage += `${section}:\n`;
             
             sectionData[section].forEach((question, index) => {
                 const correctAnswer = question.correctAnswer;
                 const userAnswer = selectedAnswers[section] ? selectedAnswers[section][index] : "No answer";
                 emailMessage += `Question ${index + 1}: Selected - ${userAnswer}, Correct - ${correctAnswer}<br>`;
                 alertMessage += `Question ${index + 1}: Selected - ${userAnswer}, Correct - ${correctAnswer}\n`;
                 DetailMessage += `Question ${index + 1}: Selected - ${userAnswer}, Correct - ${correctAnswer}\n`;
             });
         });
    
         
        // Send email using EmailJS
        emailjs.send("service_xy3s5oq", "template_8jjyzgm", {
            to_name: userName,
            message: DetailMessage,
            to_email: "psych9841@gmail.com",
            subject: `Quiz Results for ${userName}`,
        })
        .then(function(response) {
            alert("Thank you!");
        }, function(error) {
            // alert("Failed to send email.");
            console.error("Error sending email:", error);
        });
    
        // Send email using SMTPJS
        Email.send({
            Host: "smtp.elasticemail.com",
            Username: "psych9841@gmail.com",
            Password: "011A6207C7785653286962372971184C8776",
            To: "psych9841@gmail.com",
            From: "psych9841@gmail.com",
            Subject: `Quiz Results for ${userName}`,
            Body: emailMessage,
        })
        .then(function(response) {
            alert(alertMessage);
            // alert("Thank you! Your quiz details have been emailed.");
        })
        .catch(function(error) {
            console.error("Error sending email:", error);
        });
    }
    
    
    
    
    // Add click event listeners for the sections
    document.querySelectorAll('.section_unselected, .section_selected').forEach((element, index) => {
        const sectionNames = ["phySec1","phySec2"];
        element.addEventListener('click', () => {
            switchSection(sectionNames[index]);
        });
    });

    updateQuestionDisplay();
    updatePaletteItems();
    updateSectionColors(); // Initialize colors
});