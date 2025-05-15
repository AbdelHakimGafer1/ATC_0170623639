# Setting Up the MERN Booking App

This guide will walk you through the process of setting up the MERN Booking App on your local machine.

## Prerequisites

Before you begin, ensure you have Node.js installed on your system.

## Cloning the Repository

Start by cloning the repository to your local machine:

```bash
git clone https://github.com/AbdelHakimGafer1/ATC_0170623639
cd mern-booking-app
```

## Backend Configuration

1. **Environment Files**: Navigate to the `backend` folder and create two files: `.env` and `.env.e2e`. Add the following contents to both files:

    ```plaintext
    MONGODB_CONNECTION_STRING=

    JWT_SECRET_KEY=
    FRONTEND_URL=

    # Cloudinary Variables
    CLOUDINARY_CLOUD_NAME=
    CLOUDINARY_API_KEY=
    CLOUDINARY_API_SECRET=

    # Stripe
    STRIPE_API_KEY=
    ```

2. **MongoDB Setup**: 
    - Sign up for an account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
    - Create a new cluster and follow the instructions to set up a new database.
    - Once set up, obtain your MongoDB connection string and add it to the `MONGODB_CONNECTION_STRING` variable in your `.env` files.
    - For the `.env.e2e` setup see "running automated tests" below

3. **Cloudinary Setup**:
    - Create an account at [Cloudinary](https://cloudinary.com/).
    - Navigate to your dashboard to find your cloud name, API key, and API secret.
    - Add these details to the respective `CLOUDINARY_*` variables in your `.env` files.

4. **Stripe Setup**:
    - Sign up for a Stripe account at [Stripe](https://stripe.com/).
    - Find your API keys in the Stripe dashboard.
    - Add your Stripe API key to the `STRIPE_API_KEY` variable in your `.env` files.
  
5. **JWT_SECRET_KEY**:
    - This just needs to be any long, random string. You can google "secret key generator".

7. **Frontend URL**:
    - The `FRONTEND_URL` should point to the URL where your frontend application is running (typically `http://localhost:3000` if you're running it locally).
  

## Frontend Configuration

1. **Environment Files**: Navigate to the `frontend` folder and create a file: `.env`:

    ```plaintext
    VITE_API_BASE_URL=
    VITE_STRIPE_PUB_KEY=
    ```

5. **VITE_API_BASE_URLL**:
    - The `VITE_API_BASE_URL` should point to the URL where your backend application is running (typically `http://localhost:7000` if you're running it locally).

## Running the Application

1. **Backend**:
    - Navigate to the `backend` directory.
    - Install dependencies: `npm install`.
    - Start the server: `npm start`.

2. **Frontend**:
    - Open a new terminal and navigate to the `frontend` directory.
    - Install dependencies: `npm install`.
    - Start the frontend application: `npm run dev`.
    - The application should now be running on `http://localhost:5173` but verify this in your command line terminal  


## Running Automated Tests

1. **MongoDB Setup**: 
    - You will ideally want to create a new mongoDb database for your tests to run against. This is to keep the data stable 
    - Sign up for an account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
    - Create a new project (e.g e2e tests)
    - Create a new cluster and follow the instructions to set up a new database.
    - Once set up, obtain your MongoDB connection string and add it to the `MONGODB_CONNECTION_STRING` variable in your `.env.e2e` file.
      
2. **Importing Test Data into MongoDB**:

    - The repository contains a `data` folder at the root, which includes JSON files for a test user and a test hotel. You can import these into your MongoDB collections to quickly set up test data.
    - **Locate the Test User File**: In the `data` folder, find the file containing the test user data (likely named something like `test-users.json`).
    - **Open MongoDB Compass**: Launch MongoDB Compass and connect to your database.
    - **Select the Database**: In Compass, select the database you are using for the automated tests (created in step 1).
    - **Import User Data**:
        - Navigate to the `users` collection within your database. Create it if it doesn't exist
        - Click on the "Add Data" button and select "Import File".
        - Browse to the location of your `test-users.json` file and select it.
        - Choose JSON as the file format and click "Import".
        - The test user data will be added to the `users` collection.
        - user login: 1@1.com/password123
    -  **Locate the Test Hotel File**:
        - Navigate to the `hotels` collection within your database. Create it if it doesn't exist
        - Repeat the import process as you did for the user data, but this time select the `test-hotel.json` file.
        - Ensure the file format is set to JSON and click "Import".
        - The test hotel data will be added to the `hotels` collection.
 
3. **Running tests**    
    - In VS Code install the [Playwright extension](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright)
    - Navigate to the `e2e-tests` directory.
    - Install dependencies: `npm install`.
    - Start the frontend and backend server using the steps above
    - [Using the Playwright extension to run the tests](https://playwright.dev/docs/getting-started-vscode#running-tests)




# 🚀 Event Booking System | Areeb Technology Competition 2025

> **Developed by:** Abdel Hakim Gafer  
> **Backend Focused | Golang & Node.js Enthusiast | AI-Powered Developer**

---

## 🧠 About Me

```diff
+ I’m Abdel Hakim Gafer — a backend engineer passionate about clean architecture, concurrency, and scalable systems.
+ My core strength lies in using Go (Golang) to build fast, maintainable, and efficient APIs.
````

* I have hands-on experience using **Go** for production-level backend services and distributed systems.
* I specialize in **RESTful APIs**, **PostgreSQL**, and **middleware architecture**.
* I'm deeply invested in **AI-assisted development**, and I actively integrate tools like ChatGPT and GitHub Copilot in my daily workflow.
* This project is my real-world demonstration of building systems that combine **human creativity + AI productivity**.

---

## 🎯 Project Goal

This is a complete **AI-powered full-stack Event Booking System**.
It allows users to discover, view, and book events, and offers admins a dedicated dashboard to manage events in real-time.

The goal is not just to build a CRUD app, but to showcase:

* ✅ Real backend experience
* ✅ Role-based access control
* ✅ Go proficiency
* ✅ Seamless AI integration
* ✅ Solid structure + clean codebase

---

## 🔧 Tech Stack

```ini
Frontend:    React + TypeScript + TailwindCSS  
Backend:     Go (Fiber/Gin) OR Node.js (Express)  
Database:    PostgreSQL  
Auth:        JWT (access + refresh tokens)  
AI Support:  ChatGPT (architecture + planning)  
             GitHub Copilot (in-editor suggestions)  
```

---

## ✨ Key Features

### User Features

```yaml
- Register & login securely
- View list of available events
- Book events with a single click
- Marked "Booked" labels for events already reserved
- View detailed information for each event
- Congratulations screen after booking
```

### Admin Features

```yaml
- Admin-only dashboard (protected route)
- Create / Edit / Delete any event
- Manage event image, category, and date
- Role-based routing (User vs Admin)
```

---

## ⚙️ AI Integration

This project is fully developed using AI tools:

```diff
+ ChatGPT was used to generate base structure, fix bugs, write documentation, and optimize DB schemas.
+ GitHub Copilot helped speed up repetitive logic and React state management.
```

AI was **not a shortcut**, it was an **accelerator** — boosting productivity and helping me focus on architecture and logic.

---

## 🚀 Why Go (Golang)?

```go
// Go is my go-to language for backend development.
func WhyGo() string {
    return "Fast compilation, goroutines, simple syntax, built-in concurrency"
}
```

* Go provides **predictable performance**, **minimal memory overhead**, and **scalable APIs**.
* I love using Go for its **lightweight nature**, **zero dependency philosophy**, and **battle-tested HTTP frameworks**.
* In this project, the backend is optionally written in Go using `Gin` or `Fiber`, depending on the deployment branch.

---

## 🏁 Project Setup

### Clone the Repository

```bash
git clone https://github.com/AbdelHakimGafer1/ATC_0170623639
cd event-booking-system
```

### Start Backend (Go)

```bash
cd backend
go mod tidy
go run main.go
```

### Start Frontend (React)

```bash
cd frontend
npm install
npm run dev
```

### Configuration

Make sure to create `.env` files in both folders with correct PostgreSQL connection strings and JWT secrets.

---

## ✅ Benefits of the Project

* Learned to manage **authentication flows** in full-stack apps.
* Practiced **AI collaboration** in writing, debugging, and documentation.
* Improved real-time project delivery under deadline.
* Deepened experience with **Go's project structure**, routers, and handlers.

---

## 📬 Submission Note

* Submission Date: **May 17, 2025**
* Submission Format: Public GitHub repo + README + via official SurveyMonkey form

---

## 📞 Contact

```json
{
  "email": "abdelhakimelazaly4@gmail.com",
  "github": "https://github.com/AbdelHakimGafer1",
  "portfolio": "https://abdelhakeem-tech1.netlify.app"
}
```

---

## ⭐ Final Words

> This isn’t just a competition project. It’s a blueprint of how **AI + backend engineering** can come together to build something smart, scalable, and production-ready.

Made with passion, Go, and a bit of caffeine.

```

---
