# Copilot Instructions for JS-QuizAPP

Welcome to the JS-QuizAPP codebase! This document provides guidelines for AI coding agents to effectively contribute to this project.

## Project Overview
JS-QuizAPP is a JavaScript-based quiz application that allows users to test their knowledge through multiple-choice questions. The app provides feedback on answers, tracks scores, and offers options to review answers or replay the quiz.

### Key Features
- **Dynamic Question Handling**: Questions are managed in `js/questions.js`. This file contains the structure and content of quiz questions.
- **Interactive UI**: The app uses `index.html` and `style.css` for the user interface, with JavaScript files (`main.js`, `quiz.js`) handling interactivity.
- **Score Tracking**: User scores are calculated and displayed at the end of the quiz.

## Code Structure
- **HTML**: `index.html` defines the structure of the application.
- **CSS**: `style.css` provides styling for the quiz interface.
- **JavaScript**:
  - `main.js`: Handles the main logic of the application.
  - `quiz.js`: Manages quiz functionality.
  - `questions.js`: Contains the quiz questions.

## Developer Workflows
### Running the Application
To run the application locally:
1. Clone the repository.
2. Open `index.html` in a web browser.

### Customizing Questions
To add or modify quiz questions:
1. Open `js/questions.js`.
2. Follow the existing question structure to add new questions.

### Debugging
Use browser developer tools to debug JavaScript code. Console logs are extensively used for tracing execution.

## Project-Specific Conventions
- **Question Format**: Questions in `questions.js` follow a specific JSON-like structure. Ensure new questions adhere to this format.
- **Styling**: Maintain consistency with the existing CSS classes in `style.css`.
- **Error Handling**: Use `try-catch` blocks for critical operations in JavaScript.

## Integration Points
- **External Libraries**: The project uses Bootstrap for styling. Ensure compatibility when modifying styles.
- **Cross-Component Communication**: JavaScript files interact through shared variables and function calls. Avoid introducing global variables unnecessarily.

## Examples
### Adding a New Question
```javascript
{
  question: "What is the capital of France?",
  options: ["Berlin", "Madrid", "Paris", "Rome"],
  answer: "Paris"
}
```

### Styling a Button
```css
button {
  background-color: #023329;
  color: #fff;
  border-radius: 0.5rem;
}
```

## Contribution Guidelines
Refer to the README.md for steps to contribute. Follow the branching and pull request conventions outlined there.

---

For further assistance, consult the README.md or reach out to the project maintainers.