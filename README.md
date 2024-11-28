# Uni-connect: Connecting Students

Uni-connect is a full-stack web application designed to connect students with each other. It provides a platform for students to connect based on their interests, courses, and other relevant factors, fostering collaboration and networking within the student community.

[Link to Uni-connect](https://uni-connect-r3bia6s1l-obi-sammys-projects.vercel.app/)


## Features

- **User Authentication:** Secure user registration and login functionality.
- **Profile Creation:** Students can create and customize their profiles, showcasing their hobbies and skills.
- **Search and Filters:** Students can search for others based on interests, department, or other criteria.
- **User Interactions:** Features like connecting with other students and being able to interact with them through their social media handles.
- **Responsive Design:** Mobile-friendly layout for seamless usage on different devices.

## Technologies Used

- **Front-end:** EJS, SCSS and we are currently integrating React.js
- **Back-end:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Authentication:** Passport
- **Deployment:** Vercel, Cloudinary for storing images

## Installation

1. Clone the repository: `git clone https://github.com/obi-sammy/uni-connect-app.git`
2. Navigate to the project directory: `cd uni-connect-app`
3. Install dependencies: `npm install`
4. Set up environment variables which are database connection, cloudinary secrets (CLOUD_NAME, API_KEY and API_SECRET) and PORT in a `.env` file.
5. Start the development server: `npm run dev`

## Usage

- Visit the deployed app at [Link to Uni-connect](https://uni-connect-r3bia6s1l-obi-sammys-projects.vercel.app/)
- Register a new account or log in with existing credentials.
- Create and customize your profile.
- Search for other students and connect with them.

## Areas of Improvement

While Uni-connect provides valuable features for connecting students, there are several areas where the application could be improved:

- [x] Change server hosting service from Cyclic to another hosting service
- [x] Make app responsive on all screen sizes.
- [ ] Make the search field functional.
- [ ] Add googleAuth and make the forgort password functional.
- [x] Protect the '/' route from users already logged in.
- [ ] Handle the frontend using React.
- [ ] Refactor code.
- [x] Add comments where necessary.
- [ ] Add the user's social media accounts in his/her profile so other users can connect with them.
- [ ] Make it possible for user's to edit their profile.
- [ ] Add a feature where user can accept and reject connections.
## Contributing

Contributions are welcome! If you have any ideas for new features, improvements, or bug fixes, please feel free to submit a pull request or open an issue.
