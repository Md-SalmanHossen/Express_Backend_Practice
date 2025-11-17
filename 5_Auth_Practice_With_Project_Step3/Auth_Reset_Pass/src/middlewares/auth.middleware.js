import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
    try {
        let token = req.headers['token'];

        if (!token) {
            return res.status(401).json({
                success: false,
                message: 'Authentication failed: No token provided.'
            });
        }

        // Handle common "Bearer Token" format if present
        if (token.startsWith('Bearer ')) {
            token = token.slice(7, token.length);
        }

        const decodedPayload = jwt.verify(token, process.env.JWT_SECRET);
        req.body.userId = decodedPayload.userId;

        next();

    } catch (error) {
        res.status(401).json({
            success: false,
            message: "Unauthorized or internal error",
            error: error.message
        });
    }
};

export default authMiddleware;
