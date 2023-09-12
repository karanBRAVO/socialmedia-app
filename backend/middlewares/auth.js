const jwt = require('jsonwebtoken');

exports.auth = (req,res,next) => {
    try {
        const token = req.body || req.cookie.token;

        if (!token) {
            return res.status(400).json({
                succsess: false,
                msg: 'token missing'
            });
        }

        const decode = jwt.verify(token);
        if (!decode) {
            return res.status(400).json({
                succsess: false,
                msg: 'unable to verify token'
            });
        }
        req.user = decode;
        next();
    } catch (error) {
        console.log(error);
        res.status(500).json({
            succsess: false,
            msg: 'unable to authenticate user'
        });
    }
}

exports.isAdmin = (req,res,next) => {
    try {
        
    } catch (error) {
        
    }
}