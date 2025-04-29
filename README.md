# POS Padi Frontend

This is the frontend application for the POS Padi project. It serves both admin and agent users with a responsive UI and integrates with the backend API for managing notifications, authentication, user profiles, and agent operations.

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm or yarn

### Installation

```bash
git clone https://github.com/yourusername/pos-padi-frontend.git
cd pos-padi-frontend
npm install
npm start
```

---

## Tech Stack

- **React.js** – Frontend Framework
- **Redux Toolkit** – State Management
- **React Router** – Routing
- **Axios** – API Requests
- **MUI** – UI Components

---

## Environment Variables

Create a `.env` file in the root directory and add the following:

```env
REACT_APP_API_BASE_URL=https://your-api-url.com/api/v1
REACT_APP_OTHER_SECRET=your-value
```

---

## Folder Structure

```
src/
│
├── App/                  # Store setup and configurations
├── components/           # Reusable components (e.g., CreateNotification)
├── features/             # Redux slices
├── pages/                # Route pages (Admin, Agent, etc.)
├── theme.js              # Theme configurations
├── index.js              # Entry point
└── App.js                # Root app component
```

---

## Contribution

1. Fork the repo
2. Create a new branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m "Add some feature"`
4. Push to your branch: `git push origin feature-name`
5. Open a pull request

---

## Maintainers

- [Lauren Jude](https://github.com/laurenjude/pos-padi-frontend)
- [Frontend INTERNPULSE]

---

## License

This project is for educational and organizational use only.
