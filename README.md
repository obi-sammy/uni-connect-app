# Uni-connect: Connecting Students

Uni-connect is a full-stack web application designed to connect students with each other. It provides a platform for students to connect based on their interests, courses, and other relevant factors, fostering collaboration and networking within the student community.

![Uni-connect Screenshot](screenshot.png) <!-- Replace with an actual screenshot of your app -->

## Features

- **User Authentication:** Secure user registration and login functionality.
- **Profile Creation:** Students can create and customize their profiles, showcasing their hobbies and skills.
- **Search and Filters:** Students can search for others based on interests, department, or other criteria.
- **User Interactions:** Features like connecting with other students and being able to interact with them through their social media handles.
- **Responsive Design:** Mobile-friendly layout for seamless usage on different devices.

## Technologies Used

- **Front-end:** EJS, SCSS, JavaScript
- **Back-end:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Authentication:** Passport
- **Deployment:** Heroku, Cloudinary for storing images

## Installation

1. Clone the repository: `git clone https://github.com/obi-sammy/uni-connect-app.git`
2. Navigate to the project directory: `cd uni-connect-app`
3. Install dependencies: `npm install`
4. Set up environment variables which are database connection, cloudinary secrets (CLOUD_NAME, API_KEY and API_SECRET) and PORT in a `.env` file.
5. Start the development server: `npm run dev`

## Usage

- Visit the deployed app at [https://uni-connect-app.herokuapp.com/](https://uni-connect-app.herokuapp.com/)
- Register a new account or log in with existing credentials.
- Create and customize your profile.
- Search for other students and connect with them.

## Areas of Improvement

While Uni-connect provides valuable features for connecting students, there are several areas where the application could be improved:

1. **Enhanced Matching Algorithm:** Develop a more sophisticated algorithm for suggesting potential connections based on shared interests, courses, and other factors.
2. **Notifications:** Implement a notification system to alert users about new messages, connection requests, and updates to their connections.
3. **User Experience:** Continuously refine the user interface and user experience to ensure intuitive navigation and engagement.
4. **Performance Optimization:** Optimize the application's performance, especially when dealing with a large number of users and messages.
5. **Privacy Controls:** Add options for users to control the visibility of their profiles and personal information.

## Contributing

Contributions are welcome! If you have any ideas for new features, improvements, or bug fixes, please feel free to submit a pull request or open an issue.
