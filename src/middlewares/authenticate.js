import passport from "passport";

export const authenticate = (req, res, next) => {
    passport.authenticate('jwt', (err, user) => {
        if(err) next(err);
        if(!user) {
            return res.status(401).json({
                message: 'Unauthorised access no token'
            })
        }
        req.user = user;
        next();
    })(req, res, next);
}


/**
 * @DESC Check Role Middleware
 */
export const checkRole = roles => (req, res, next) =>
  !roles.includes(req.user.role)
    ? res.status(401).json("Unauthorized role access")
    : next();
