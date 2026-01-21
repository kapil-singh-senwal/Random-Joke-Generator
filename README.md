# 🎭 Random Joke Generator

A responsive web application built with **React** and **Vite** that fetches random jokes from an API and maintains a local history.

## 🚀 Features

-   **Random Joke Generation**: Fetches fresh jokes from the Official Joke API
-   **Joke History**: Saves the last 10 jokes with timestamps and categories
-   **Local Storage**: Persistent history that survives browser refreshes
-   **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
-   **Loading States**: Smooth loading animations for better UX
-   **Error Handling**: Graceful fallback when API is unavailable
-   **Duplicate Prevention**: Avoids saving the same joke twice

## 🛠️ Tech Stack

### Frontend

-   **React**: Component-based UI library
-   **Vite**: Fast build tool and development server
-   **CSS3**: Modular component-scoped styling
-   **Hooks**: `useState`, `useEffect` for state and side effects

### API

-   **Official Joke API**: `https://official-joke-api.appspot.com/random_joke`
-   **Response Format**:
    ```json
    {
      "type": "general",
      "setup": "Want to hear a chimney joke?",
      "punchline": "Got stacks of em! First one's on the house",
      "id": 150
    }
    ```

## 📁 Project Structure

The project has been refactored into a modular structure:

```
src/
├── components/          # Reusable UI components
│   ├── Header.jsx       # App title
│   ├── JokeDisplay.jsx  # Shows joke setup/punchline
│   ├── JokeButton.jsx   # Action button
│   └── History.jsx      # History list section
├── hooks/               # Custom React Hooks
│   ├── useJoke.js       # Joke fetching logic
│   └── useHistory.js    # History management logic
├── App.jsx              # Main application layout
├── style.css            # Global variables and layout
└── main.jsx             # Entry point
```

## 🚀 Getting Started

### Prerequisites

-   Node.js installed (v14 or higher recommended)

### Installation & Running

1.  Clone the repository
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the development server:
    ```bash
    npm run dev
    ```
4.  Open the local URL (usually `http://localhost:5173`) in your browser.

## 🔧 Component Architecture

The application is built using a functional component architecture with custom hooks for separation of concerns:

-   **useJoke Hook**: Encapsulates the async logic for fetching jokes and managing loading/error states.
-   **useHistory Hook**: Manages the joke history array and synchronizes it with the browser's LocalStorage.

## 🎨 Design Features

-   **Modular CSS**: Each component has its own dedicated CSS file for better maintainability.
-   **Gradient Background**: Purple-blue gradient for modern appeal
-   **Responsive Layout**: Adaptive design that fits all screen sizes.

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements!

## 📄 License

This project is open source and available under the MIT License.
