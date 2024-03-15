// Function to create a single question row
function createQuestionRow(question, index, options) {
    const tr = document.createElement('tr');
    // Add a hidden input to store the question text
    tr.innerHTML = `<td><input type="hidden" name="q${index}" value="${question}">${question}</td>` +
        options.map((option, optionIndex) => `
            <td>
                <input type="radio" name="a${index}" value="${option}" id="q${index}o${optionIndex}">
                <label for="q${index}o${optionIndex}">${option}</label>
            </td>
        `).join('');
    return tr;
}

  
// Function to initialize the questionnaire
function initializeQuestionnaire(questions, options) {
    const surveyTable = document.getElementById('surveyTable');
    questions.forEach((question, index) => {
        const questionRow = createQuestionRow(question, index, options);
        surveyTable.appendChild(questionRow);
    });
}
  
// Function to handle form submission
function handleFormSubmission(event) {
    console.log("Hello");
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {};
    for (const [key, value] of formData.entries()) {
        data[key] = value;
    }
    console.log(data);
    
    // Send the form data to the server
    fetch('http://localhost:3000/submit-answers', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.text())
    .then(data => console.log(data))
    .catch((error) => console.error('Error:', error));

}
  
// Main function to set up the questionnaire
function setupQuestionnaire() {
    const questions = [
        'How does the product look?',
        'How are you feeling today?'
        // ... Add all your questions here
    ];
    const options = ['Strongly Agree', 'Agree', 'Neutral', 'Disagree', 'Strongly Disagree'];
    initializeQuestionnaire(questions, options);
}
  
// Call the main function after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    setupQuestionnaire();
    document.getElementById('surveyForm').addEventListener('submit', handleFormSubmission);
});
  