# Daily Routine Application

This is a simple yet effective Daily Routine application built using React Native and Expo Framework. The app allows users to manage their daily routines with two key features:

- **Today Routine:** Displays the list of tasks for the current day.
- **All Routines:** Lists all routines in chronological order for easy management and tracking.

## Features

- Add, update, delete, and view daily routines.
- View today's routines in a separate tab.
- View all routines sorted by date in chronological order.
- Persistent storage using SQLite to ensure routines are saved even after closing the app.

## Tech Stack

- **Expo:** A framework and platform for universal React applications.
- **React Native:** For building mobile applications.
- **SQLite:** A lightweight database used for local data storage within the app.
- **npm Packages:**
  - `react-native-sqlite-storage` for SQLite database integration.
  - `react-navigation` for handling navigation between screens.
  - Other utility libraries as needed.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/daily-routine-app.git
   cd daily-routine-app
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the application using Expo:

   ```bash
   expo start
   ```

## Usage

### 1. Add a Routine

- Navigate to the **Add Routine** screen.
- Enter the title, description, and time for the routine.
- Save the routine to add it to the database.

### 2. View Today's Routine

- The home screen will automatically display routines for the current day under **Today’s Routine**.

### 3. View All Routines

- All routines can be accessed from the **All Routines** section, sorted in chronological order.

### 4. Edit or Delete a Routine

- Tap on any routine to view details.
- From here, you can either edit the routine or delete it.

## Tech Stack

The following npm packages are required for this project:

- [Expo](https://expo.dev/)
- [React Native](https://reactnative.dev/)
- [SQLite](https://github.com/andpor/react-native-sqlite-storage)
- [React Navigation](https://reactnavigation.org/)

Install them by running:

```bash
npm install react-native-sqlite-storage @react-navigation/native
```

## Roadmap

### Future Features

- Notifications for upcoming routines.
- Search functionality for routines.
- Categorization of routines (e.g., Work, Personal).
- Dark mode support.

## Contributing

Contributions are welcome! If you find any issues or want to add features, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
