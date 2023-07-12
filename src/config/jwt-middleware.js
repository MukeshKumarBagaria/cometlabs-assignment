import JWT from 'passport-jwt';
import User from '../models/user.js';
import 'dotenv/config'

const JwtStrategy = JWT.Strategy;
const ExtractJwt = JWT.ExtractJwt;

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET
}

export const passportAuth = (passport) => {
    try {
        console.log("inside strategy");;
        passport.use(new JwtStrategy(opts, async (jwt_payload, done) => {
            console.log("req sent to strategy");
            const user = await User.findById(jwt_payload.id);
            if(!user) {
                done(null, false);
            } else {
                done(null, user);
            }
        }));
    } catch(err) {
        console.log(err);
        throw err;
    }
    
}