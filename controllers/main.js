const cloudinary = require("../middleware/cloudinary");
const User = require("../models/User");
const Social = require("../models/Socials");
const Notification = require("../models/Notification");

module.exports = {
  getProfile: async (req, res) => { 
    console.log(req.user)
    try {
      const userDetails = await User.findById(req.params.id);
      const connectedUserIds = userDetails.connection;
      const connectionUserDetails = await User.find({ _id: { $in: connectedUserIds } });

      console.log(userDetails)
      res.render("profile.ejs", { userDetails: userDetails, loggedInUser: req.user, connectionUserDetails: connectionUserDetails, });
    } catch (err) {
      console.log(err);
    }
  },
  getCustomizeProfile: async (req, res) => { 
    try {
      res.render("customizeProfile.ejs", { user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  putCustomizeProfile: async (req, res) => {
    let hobbiesArray = []
    let skillsArray = []
    
    try {
      if(req.body.hobbies.length) {
        hobbiesArray = req.body.hobbies.split(',')
      }
      if(req.body.skills.length) {
        skillsArray = req.body.skills.split(',')
      }

      let result = {};
      if (req.file) {
        result = await cloudinary.uploader.upload(req.file.path) 
      }

      await User.findOneAndUpdate(
        { _id: req.user.id },
        {
          profilePicture: result.secure_url ? result.secure_url : '',
          cloudinaryId: result.public_id ? result.public_id : '',
          caption: req.body.caption,
          department: req.body.department,
          hobbies: hobbiesArray,
          skills: skillsArray,
        }
      );
      
      res.redirect("/feed");
    } catch (err) {
      console.log(err);
    }
  },
  getFeed: async (req, res) => {
    try {
      const loggedInUserId = req.user.id;
      const excludedUserIds = [loggedInUserId, ...req.user.connection];

      const feedUsers = await User.find({ _id: { $nin: excludedUserIds } });
      res.render("feed.ejs", { feedUsers: feedUsers, loggedInUser: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  putConnection: async (req, res) => {
    try {
      await User.findByIdAndUpdate(
        { _id: req.user.id },
        { $push: { connection: req.params.id } }, { new: true }, 
        (error, updatedDocument) => {if (error) {
          console.error(error);
          } else {
              console.log('Document updated:', updatedDocument);
          }
      });
      
      await Notification.create({ 
        userId: req.user.id,
        personId: req.params.id, 
      });

      res.redirect(`/feed`);
    } catch (err) {
      console.log(err);
    }
  },
  getNotification: async (req, res) => {
    try {
      const notification = await Notification.find({ userId: { $in: req.user.id } });
      const personIdArray = notification.map(x => x.personId);
      const connectedUserDetails = await User.find({ _id: { $in: personIdArray } });

      console.log(connectedUserDetails)
      res.render("notification.ejs", { notification: notification, loggedInUser: req.user, connectedUserDetails: connectedUserDetails });
    } catch (err) {
      console.log(err);
    }
  },
};
