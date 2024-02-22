// Function to create a single question row
function createQuestionRow(question, index, options) {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${question}</td>` + options.map((option, optionIndex) => `
        <td>
            <input type="radio" name="question${index}" value="${option}" id="q${index}o${optionIndex}">
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
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {};
    for (const [key, value] of formData.entries()) {
        data[key] = value;
    }
    console.log(data);
    // Here you would send the data to the backend
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
    document.getElementById('surveyForm').addEventListener('submit', handleFormSubmission);
  }
  
  // Call the main function after the DOM is fully loaded
  document.addEventListener('DOMContentLoaded', setupQuestionnaire);
  