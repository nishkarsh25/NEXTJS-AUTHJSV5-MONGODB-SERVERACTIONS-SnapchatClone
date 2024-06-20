# NEXTJS-AUTHJSV5-MONGODB-SERVERACTIONS-SnapchatClone

Welcome to the NEXTJS project! This comprehensive guide will walk you through every aspect of this project, including its structure, setup instructions, usage, API endpoints, backend, frontend, contributing guidelines, license information, and how to get in touch for support or inquiries.

## Introduction

This project is a clone of Snapchat built with TypeScript, featuring real-time messaging, image sharing, emoji support, and user authentication. It leverages Next.js for server-side rendering, MongoDB for data storage, and various frontend libraries for enhanced user experience. This repository contains a full-stack web application that mimics the core functionalities of Snapchat. Users can register, log in, and exchange messages with others in real-time. The application supports sending images, emojis, and includes a clear chat feature.


## Features

- **User Authentication**: Secure authentication and authorization using Next.js Auth middleware.
- **Real-time Messaging**: Exchange messages instantly with other users.
- **Image Sharing**: Upload and send images from your device's gallery or camera.
- **Emoji Support**: Incorporates an emoji selector for adding emojis to messages.
- **Responsive Design**: Designed to work seamlessly on both desktop and mobile devices.
- **Clear Chat**: Ability to clear chat history for specific conversations.



## Live Demo

You can try out the live demo of the app [here](https://nextjs-authjsv-5-mongodb-serveractions-snapchat-clone.vercel.app/).

## Folder Structure

```
snapchat-clone/
├── .git/                           # Git repository (if initialized)
├── .github/                        # GitHub Actions workflows (if using GitHub Actions)
├── .next/                          # Next.js build output (automatically generated)
├── auth.ts                         # Authentication configuration (Clerk, NextAuth.js, etc.)
├── middleware.ts                   # Middleware configuration (if applicable)
├── types/                          # TypeScript types
│   └── auth.types.ts               # Types related to authentication
├── components/                     # React components
│   ├── Chat/                       # Chat-related components
│   │   ├── ChatHeader.tsx          # Component for chat header
│   │   ├── ChatInput.tsx           # Component for chat input
│   │   ├── ChatBody.tsx            # Component for displaying chat messages
│   │   └── ...
│   ├── Auth/                       # Authentication components
│   │   ├── Login.tsx               # Login component
│   │   ├── Register.tsx            # Register component
│   │   ├── UserProfile.tsx         # User profile component
│   │   └── ...
│   ├── UI/                         # UI components (buttons, dialogs, forms)
│   │   ├── Button.tsx              # Button component
│   │   ├── Dialog.tsx              # Dialog component
│   │   ├── Input.tsx               # Input component
│   │   ├── Avatar.tsx              # Avatar component
│   │   └── ...
│   └── shared/                     # Shared components
│       └── ProfilePhoto.tsx        # Shared component for user profile photo
├── lib/                            # Backend logic and utilities
│   ├── db.ts                       # Database connection setup (MongoDB, etc.)
│   ├── serveractions.ts            # Server-side actions (API handlers, CRUD operations)
│   ├── utils.ts                    # Utility functions (file handling, data manipulation)
│   ├── emoji.ts                    # Emoji array (constant)
│   ├── userdata.ts                 # User API handlers
│   └── ...
├── models/                         # Data models (Post, User, Message)
│   ├── chat.model.ts               # Chat data model definition
│   ├── user.model.ts               # User data model definition
│   ├── message.model.ts            # Message data model definition
│   └── ...
├── app/                            # Next.js pages and API routes
│   ├── layout.tsx                  # Custom App component (layout, global styles)
│   ├── page.tsx                    # Homepage
│   ├── api/                        # API routes
│   │   ├── chat/                   # Example API routes for posts
│   │   │   ├── getUsers/
│   │   │       ├── route.ts        # API endpoint for getting users
│   │   ├── auth/                   # NextAuth.js authentication API routes
│   │       ├── [...nextauth].ts    # NextAuth.js configuration and callbacks
│   │       └── ...
|   ├── chat/                       
|       │   ├── [id]/
|       │       ├── page.tsx        # Route Render page
|       │       ├── error.tsx       # Error Page for the route
|       │       ├── loading.tsx     # Loading Page for the route
|       ├── layoust.tsx             # Conatins shared elements for its children
|       ├── page.tsx                # Renders chat route page
├── public/                         # Static assets (images, fonts)
│   └── banner.jpg                  # Example banner image
├── styles/                         # CSS styles (or SCSS, Tailwind CSS, etc.)
│   ├── globals.css                 # Global styles (reset, typography)
│   └── Home.module.css             # Component-specific styles (CSS Modules)
├── tests/                          # Test files (unit tests, integration tests)
├── .gitignore                      # Git

```


## GIF's

<img src="https://github.com/nishkarsh25/NEXTJS-AUTHJSV5-MONGODB-SERVERACTIONS-SnapchatClone/blob/main/Screenshots/ss1.gif" alt="Screenshot 1" width="1000"> 


## Technologies Used

- **Next.js 14**: React framework with server-side rendering and routing capabilities.
- **TypeScript**: Adds static typing to JavaScript for improved developer experience and code quality.
- **App Router**: Next.js's built-in routing system for handling client-side navigation and dynamic routing.
- **MongoDB**: NoSQL database used for storing user data, messages, and media.
- **Next.js Auth (v5)**: Middleware for secure authentication and user management.
- **Tailwind CSS**: Utility-first CSS framework for styling components.
- **React Icons**: Library providing icons for user interface elements.
- **React Popover**: Used for displaying the emoji selector popover.
- **Lucide Icons**: Provides loading spinners and other icons.
- **Shadcn UI**: A component library for building user interfaces.


## Getting Started

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/nishkarsh25/NEXTJS-AUTHJSV5-MONGODB-SERVERACTIONS-SnapchatClone.git
   ```
2. Navigate to the project branch:

   ```bash
   git checkout <branch-name>
   ```
   Replace `<branch-name>` with the name of the branch you want to checkout.
   

3. Run the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## API Endpoints

### Authentication
- **Register User**
  - **Endpoint:** `POST /api/auth/register`
  - **Description:** Registers a new user with email and password.
  - **Request Body:** `{ email: string, password: string }`
  - **Response:** `{ success: boolean, message?: string, user?: UserData }`

- **Login User**
  - **Endpoint:** `POST /api/auth/login`
  - **Description:** Logs in an existing user with email and password.
  - **Request Body:** `{ email: string, password: string }`
  - **Response:** `{ success: boolean, message?: string, user?: UserData, token?: string }`

- **Logout User**
  - **Endpoint:** `POST /api/auth/logout`
  - **Description:** Logs out the currently authenticated user.
  - **Authorization:** Bearer token in headers.
  - **Response:** `{ success: boolean, message?: string }`

### User Management
- **Get User Profile**
  - **Endpoint:** `GET /api/user/profile`
  - **Description:** Retrieves the profile information of the authenticated user.
  - **Authorization:** Bearer token in headers.
  - **Response:** `{ success: boolean, message?: string, user?: UserData }`

- **Update User Profile**
  - **Endpoint:** `PUT /api/user/profile`
  - **Description:** Updates the profile information of the authenticated user.
  - **Authorization:** Bearer token in headers.
  - **Request Body:** `{ fullname?: string, profilePhoto?: string, bio?: string }`
  - **Response:** `{ success: boolean, message?: string, user?: UserData }`

### Chat Management
- **Get Chat Messages**
  - **Endpoint:** `GET /api/chat/messages/:userId`
  - **Description:** Retrieves chat messages between the authenticated user and the specified `userId`.
  - **Authorization:** Bearer token in headers.
  - **Response:** `{ success: boolean, message?: string, messages?: MessageData[] }`

- **Send Text Message**
  - **Endpoint:** `POST /api/chat/messages/:userId`
  - **Description:** Sends a text message to the specified `userId`.
  - **Authorization:** Bearer token in headers.
  - **Request Body:** `{ content: string, messageType: 'text' }`
  - **Response:** `{ success: boolean, message?: string, message?: MessageData }`

- **Send Image Message**
  - **Endpoint:** `POST /api/chat/messages/:userId`
  - **Description:** Sends an image message to the specified `userId`.
  - **Authorization:** Bearer token in headers.
  - **Request Body:** `{ content: string (base64 encoded image), messageType: 'image' }`
  - **Response:** `{ success: boolean, message?: string, message?: MessageData }`

- **Delete Chat Messages**
  - **Endpoint:** `DELETE /api/chat/messages/:userId`
  - **Description:** Deletes all chat messages between the authenticated user and the specified `userId`.
  - **Authorization:** Bearer token in headers.
  - **Response:** `{ success: boolean, message?: string }`




## Server Actions

### Authentication Actions

**Register User**
- **Description:** Handles registration of a new user with email and password.
- **Implementation:** Validates user input, hashes password for security, and stores user data in MongoDB.

**Login User**
- **Description:** Authenticates a user based on provided email and password.
- **Implementation:** Verifies credentials, generates a JWT (JSON Web Token) for subsequent requests, and stores the token securely.

**Logout User**
- **Description:** Terminates the user session and invalidates the JWT.
- **Implementation:** Clears the stored JWT or revokes it from the client side, ensuring the user is logged out.

### User Profile Actions

**Get User Profile**
- **Description:** Retrieves the profile information of the authenticated user.
- **Implementation:** Fetches user data from the database based on the authenticated user's ID.

**Update User Profile**
- **Description:** Allows the authenticated user to update their profile details.
- **Implementation:** Updates specific fields in the user document in the database, such as fullname, profile photo, and bio.

### Chat Actions

**Get Chat Messages**
- **Description:** Retrieves chat messages between the authenticated user and another user.
- **Implementation:** Queries the database for messages associated with both users and returns them.

**Send Text Message**
- **Description:** Sends a text message from the authenticated user to another user.
- **Implementation:** Stores the text message in the database, associating it with both users for future retrieval.

**Send Image Message**
- **Description:** Sends an image message from the authenticated user to another user.
- **Implementation:** Stores the image data (typically as base64 or file reference) in the database, linking it to both users for display and retrieval.

**Delete Chat Messages**
- **Description:** Deletes all chat messages between the authenticated user and another user.
- **Implementation:** Removes all message records associated with both users from the database, effectively clearing their chat history.

---

### Notes:
- **MongoDB**: Used as the database to store user information, chat messages, and other relevant data.
- **JWT**: Employed for secure authentication and authorization between the client and server.
- **Server-Side Operations**: Ensure that server actions are validated, authenticated, and authorized to maintain data integrity and security.

This section outlines the server-side actions of your Snapchat clone project, covering authentication (register, login, logout), user profile management (fetching and updating profiles), and chat management (retrieving messages, sending text/images, and deleting messages). Each action description provides an overview of its purpose and how it's implemented without delving into specific code details. Adjust actions as per your project's specific requirements and design considerations.



## Usage

### Authentication
- **Register**: Create a new account by filling out the registration form with your email and password.
- **Log In**: Use your registered credentials to log in and access the application.

### Chat Page
- **Start a Chat**: Navigate to `/chat/:userId` in your browser's address bar, where `:userId` is the unique identifier of the user you want to chat with.
- **View Chat History**: Once in the chat page, view your existing conversation history with the selected user.

### Sending Messages
- **Text Messages**: Type your message in the input field provided and press "Enter" or click the "Send Snap" button to send it.
- **Message Status**: Messages sent will display with indicators showing whether they are sent, delivered, or read.

### Sending Images
- **Upload Images**: Click the camera icon located in the chat input area to upload images from your device.
- **Image Preview**: Before sending, you can preview the image and confirm by clicking "Send Snap".

### Sending Emojis
- **Emoji Support**: Click the emoji button (smiley face icon) in the chat input area to open the emoji popover.
- **Select Emojis**: Browse through various emojis, click on an emoji to insert it into your message.

### Clear Chat
- **Delete Conversation**: In the chat header, click "Clear Chat" to permanently delete all messages and clear the conversation history with the current user.
- **Confirmation**: A confirmation dialog may appear to confirm your intention before proceeding with clearing the chat.

### Error Handling
- **Network Issues**: In case of network problems or server unavailability, appropriate error messages will be displayed to notify users.
- **Feedback**: Error messages provide feedback on actions such as failed message delivery or server errors.

### User Experience
- **Responsive Design**: The application is designed to be responsive, ensuring a consistent user experience across various devices and screen sizes.
- **Accessibility**: Considerations are made for accessibility, including keyboard navigation and screen reader compatibility.

### Additional Features
- **Notifications**: Receive notifications for new messages and other relevant events if implemented.
- **Profile Settings**: Access and update user profile settings such as profile photo, username, or bio if available.

### Support
- For any questions or issues, please refer to the project's documentation or contact support through designated channels.




## Contributing

Contributions to this project are highly appreciated! Whether you discover bugs, have feature requests, or wish to contribute improvements, your input is valuable. Here's how you can contribute:

- **Report Issues:** If you encounter any bugs or issues while using MyCalculatorApp, please open an issue on the GitHub repository. Be sure to provide detailed information about the problem and steps to reproduce it.

- **Submit Pull Requests:** If you have enhancements or fixes to propose, feel free to submit a pull request. Contributions that improve the functionality, usability, or performance of this app are welcomed and encouraged.

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. **Fork the Repository**.
2. **Create a New Branch** (`git checkout -b feature/your-feature-name`).
3. **Make Your Changes**.
4. **Commit Your Changes** (`git commit -am 'Add some feature'`).
5. **Push to the Branch** (`git push origin feature/your-feature-name`).
6. **Create a New Pull Request**.

## License

This project is licensed under the [The 3-Clause BSD License](LICENSE).Feel free to explore, modify, and contribute to this project as you see fit. Your feedback and contributions are greatly appreciated! 🚀✨


## Acknowledgments

This project is made possible by the contributions and support of various individuals and communities. Special thanks to:

- **Tailwind CSS Team:** For developing Tailwind CSS, a versatile CSS framework that simplifies web development and enhances user interfaces.
  
- **Open Source Community:** For fostering collaboration, innovation, and the sharing of knowledge, which enriches projects like My Form Validation and makes them accessible to all.



## Credits

This project uses the following open-source technologies and libraries:

- [Next.js](https://nextjs.org/): A React framework for server-side rendering and static site generation.
  
- [Auth JS v5](https://authjs.dev/getting-started/typescript): Auth.js is a complete open-source authentication solution for Next.js applications.

- [TypeScript](https://www.typescriptlang.org/): A typed superset of JavaScript that compiles to plain JavaScript.
  
- [Shadcn UI](https://ui.shadcn.com/): A component library for building user interfaces.
  
- [React](https://reactjs.org/): A JavaScript library for building user interfaces.
  
- [Lucide Icons](https://lucide.dev/): Icon library used for theme toggle icons (Sun and Moon).

- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework used for responsive and customizable styling.

- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas): Cloud-based MongoDB database service.

- [Render](https://render.com/): Cloud platform for deploying and scaling web applications and APIs.


Each of these technologies and libraries plays a crucial role in the functionality and design of the Blog App. Please visit their respective websites or repositories to learn more about how they can be used in your projects.


## Author

- **Nishkarsh Gupta**
  - GitHub: [nishkarsh25](https://github.com/nishkash25)
  - Email: bm21btech11016@gmail.com



