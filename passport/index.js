
import passport from 'passport'
import GoogleStrategy from 'passport-google-oauth20'
import keys from '../config/keys'
import  mongoose from 'mongoose'
import User from '../models/user'
export const googleOauth = new GoogleStrategy(
    {
        clientID: keys.googleClientId,
        clientSecret: keys.googleClientSecret,
        callbackURL: 'http://localhost:8081/auth/google/callback',
        passRequestToCallback: true
    }, 
        async (request, accessToken, refreshToken, profile, done) => {
            const googleId = profile.id
            const user = await User.findOne({"googleId" : googleId})
            console.log("-----------------------")
            console.log(user)
            console.log("-----------------------")
            console.log(profile)
            console.log("-----------------------")

             if (user == null) {
                const newUser = new User({
                  googleId : googleId,
                  username: profile.displayName,
                  email: profile._json.name,
                  imageUrl: profile._json.picture
                })

                newUser.save()    
            }

              
            done(null, {})
        }
)
export const googleScope = passport.authenticate('google', { scope: [ 'https://www.googleapis.com/auth/plus.login',
  	  'https://www.googleapis.com/auth/plus.profile.emails.read' ]})
  	  
export const googleCallback = passport.authenticate('google', { 
    failureRedirect: 'http://localhost:8081', 
    session: false 
})

export const googleRedirect = (req, res) => {
  res.redirect(`http://localhost:3000/`);
  }