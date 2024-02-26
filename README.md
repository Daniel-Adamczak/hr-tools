# G# HR Tools Application

HR Tools is a web application developed with React, designed to simplify human resources management tasks. This project leverages the power of React for the frontend and uses JSON Server as a mock backend to simulate a full-fledged application environment.

## Features

- **Employee Management**: View, add, edit, and delete employee records.
- **Sorting and Filtering**: Easily sort and filter through the employee list for better data management.
- **Responsive Design**: Crafted with Styled Components for a responsive layout that adapts to any screen size.

## Getting Started

Follow these steps to get the application running on your local machine:

### Prerequisites

- Node.js installed on your system
- Git for cloning the repository

### Installation

1. Clone the repository to your local machine:

    ```bash
    git clone https://your-repository-url.git
    cd hr-tools
    ```

2. Install the necessary dependencies:

    ```bash
    npm install
    ```

3. Start the JSON Server to mock the backend:

    ```bash
    npx json-server --watch db.json --port 3001
    ```

Make sure you have a `db.json` file in your project root containing the initial data schema.

## Available Scripts

Within the project directory, you can run several commands:

### `npm start`

This command runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will automatically reload if you make edits.

### `npm test`

Launches the test runner in the interactive watch mode. For more information, see the [Create React App documentation on running tests](https://facebook.github.io/create-react-app/docs/running-tests).

### `npm run build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run eject`

**Note**: This is a one-way operation. Once you `eject`, there's no going back! If you're not satisfied with the build tool and the configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

## Technologies

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Styled Components**: Utilized for styling the application.
- **React Router**: For navigation between different pages of the app.
- **JSON Server**: Simulates a REST API with zero coding.
- **Jest & React Testing Library**: For unit and integration testing.
- **Cypress**: For end-to-end testing.

## Learn More

- To learn React, check out the [React documentation](https://reactjs.org/).
- For JSON Server, visit [GitHub - typicode/json-server](https://github.com/typicode/json-server).

## Contributing

Contributions are welcome! Please feel free to submit a pull request to improve the application.

## License

This project is open-sourced under the MIT License.
