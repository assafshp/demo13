# Web Calculator App

## Description

This is a placeholder for your project description. You can expand on this to describe the purpose, features, and target audience of your web calculator application.

## Features

-   **Basic Arithmetic Operations**: Perform addition, subtraction, multiplication, and division.
-   **Clear Functionality**: Reset input and output with a dedicated clear button.
-   **Error Handling**: Displays messages for invalid operations (e.g., division by zero).
-   **Responsive Design**: Adapts to different screen sizes (desktop, tablet, mobile) for optimal viewing.
-   **Keyboard Support**: Use your physical keyboard for number input and operations.

## Getting Started

To run this application locally, follow these steps:

### Prerequisites

Make sure you have Node.js and npm (Node Package Manager) installed on your system.

### Installation

1.  Clone this repository (if applicable, otherwise assume files are in current directory):

    ```bash
    git clone <repository-url>
    cd <project-directory>
    ```

2.  Install project dependencies (for testing):

    ```bash
    npm install
    ```

### Running the Application

To start a local web server and view the calculator in your browser:

```bash
python3 -m http.server 8000
```

Open your web browser and navigate to `http://localhost:8000`.

## Running Tests

To run the unit tests for the calculator's core logic:

```bash
npm test
```

## Development Log

This section outlines the steps taken during the development of this web calculator application:

1.  **Project Initialization**: Created the project directory "demo" and navigated into it.
2.  **Taskmaster Setup**: Initialized Taskmaster (`task-master init`) and reviewed its generated directories (e.g., `cursor/rules`, `PRD.txt`).
3.  **API Keys Configuration**: Configured necessary API keys for Taskmaster operations. Use .ENV.
4.  **MCP Enablement**: Enabled Taskmaster's MCP (Managed Control Plane) for enhanced integration.
5.  **PRD Creation**: Generated a Product Requirements Document (`web_calculator_prd.txt`) based on the provided `example_prd.txt` template for the new web calculator app. prompt: `based on the @example_prd.txt create me a prd document for my new web calcular app`
6.  **PRD Review**: Reviewed the generated PRD for accuracy and completeness.
7.  **Task Generation**: Parsed the PRD to automatically generate development tasks (`task-master parse-prd web_calculator_prd.txt`).
8.  **Task Listing**: Listed the generated tasks to get an overview (`task-master list`).
9.  **Task Detail Review**: Reviewed details for specific tasks (e.g., `task-master show 1`).
10. **Complexity Analysis**: Analyzed project complexity to identify tasks needing further breakdown (`task-master analyze-complexity`).
11. **Complexity Report Review**: Reviewed the detailed complexity report (`task-master complexity-report`).
12. **Task Implementation**: prompt: `Implment all tasks one by one based on task-master task list`
13. **Continued Development**: Continued with implementation steps as guided by the AI agent. 
14. **Task Status Review**: Regularly reviewed task list status throughout the development process (`task-master list`). At the end `run the app`.
15. **Testing Setup**: Added a testing framework (Jest) and implemented unit tests for the calculator's core logic. prompt: `add testing and take care of everything that tests will pass`.
16. **Commit Message Generation**: Created a commit message summarizing all completed work.
17. **Publish to GitHub**: Prepared the project for publishing to GitHub. Publish to Github.
18. Add repository secrets: `ANTHROPIC_API_KEY`, `CLAUDE_GITHUB_TOKEN`
19. Create GitHub workflows directory: `mkdir -p .github/workflows`
20. Create GitHub Actions workflow file: `touch .github/workflows/claude.yml`
21. Create GitHub Actions review workflow file: `touch .github/workflows/claude-review.yml`
22. Create Claude Markdown file: `touch CLAUDE.md`
23. Add content to newly created files.
24. Commit and push to main.
25. Create new branch: `git checkout -b assaf/new-branch`
26. Add intentionally buggy code.
27. Commit and push: `git commit -m "<message>"` and `git push origin <branch-name>`
28. Create pull request.
29. View Claude code actions.
30. Request Claude to review security: `@claude review security`
31. Create new issue for Claude: `new issue -> @claude implement a new UI feature to toggle between dark mode (as it is now to light mode) in a new PR`

## Development Roadmap (Future Enhancements)

Based on the Product Requirements Document, here are some potential future enhancements:

-   Scientific functions (square root, power, trigonometry)
-   Memory functions (M+, M-, MR, MC)
-   Calculation history display
-   Dark mode toggle

## License

This project is licensed under the ISC License.
