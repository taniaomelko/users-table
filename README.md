# Users Table

Demo: https://taniaomelko.github.io/users-table

## Project Overview

A dynamic users table was built using React, Redux, and TypeScript. The table displays a list of users with columns for name, username, email, and phone number. Key features include searching and filtering users by these columns, responsive design, and efficient data fetching.

## Key Components and Features

- **User Interface:** Designed to be visually appealing and responsive, the table maintains a user-friendly interface across different devices and screen resolutions.

- **Search and Filtering:** Each column has an individual search input, allowing users to filter the list by name, username, email, or phone number. The table updates dynamically based on the search criteria.

- **State Management:** Redux Toolkit is used for managing the state of users and filters. The data is fetched from an API, stored in the Redux store, and filtered based on user input.

- **Error Handling:** User-friendly error messages are shown if the data fails to load or if the API request encounters issues.

- **Data Fetching:** Data is fetched using React Query, with caching mechanisms to avoid redundant API calls.

- **Styling:** The project uses Tailwind CSS for styling, ensuring a consistent and modern look across the table and its components.

- **TypeScript:** The project is developed with TypeScript to enhance code quality and provide type safety throughout the application.
