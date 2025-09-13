# Pomodoro App

A sleek and interactive Pomodoro timer application built with HTML, CSS, and JavaScript that helps you implement the Pomodoro technique for improved productivity.

## Features

- **Focus Timer**: 25-minute work sessions
- **Rest Timer**: 5-minute break sessions
- **Play/Pause Functionality**: Control your timer
- **Reset Option**: Restart your current session
- **Dark/Light Mode**: Toggle between themes for comfortable viewing
- **Visual Mode Switching**: Easily switch between work and rest modes
- **Notifications**: SweetAlert2 notifications when sessions complete

## Technologies Used

- **HTML5**: For structure and content
- **Bootstrap 5**: For styling and responsive design
- **Bootstrap Icons**: For UI icons
- **JavaScript**: For application logic and functionality
- **SweetAlert2**: For beautiful notification popups

## Getting Started

### Prerequisites

To run this application, you only need a modern web browser.

### Installation

1. Clone or download this repository
2. Navigate to the project directory
3. Open `index.html` in your web browser

### Usage

1. Select between "Focus" (work) or "Rest" mode using the toggle buttons
2. Click the play button to start the timer
3. Click the play button again to pause the timer
4. Use the reset button to restart the current session
5. Toggle between dark and light mode using the sun/moon switch

## Project Structure

```
pomodoro-app/
├── index.html
├── script/
│   └── script.js
├── style/
│   └── style.css
└── README.md
```

## Customization

You can customize the timer durations by modifying the `startMinute` values in the JavaScript file:
- Focus time: Currently set to 25 minutes
- Rest time: Currently set to 5 minutes

## Browser Support

This application works on all modern browsers that support:
- ES6 JavaScript features
- CSS Flexbox
- Bootstrap 5

## License

This project is open source and available under the [MIT License](LICENSE).