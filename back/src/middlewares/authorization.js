import jwt from 'jsonwebtoken';

export const authorizationMiddleware = async (request, response, next) => {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({ error: "No token provided" });
  }

  const authHeaderSplitted = authHeader.split(" ");

  if (authHeaderSplitted.length !== 2) {
    return response.status(401).json({ error: "Invalid token" });
  }

  const [scheme, token] = authHeaderSplitted;

  if (!/^Bearer$/i.test(scheme)) {
    return response.status(401).json({ error: "Invalid token" });
  }

  jwt.verify(token, process.env.JWT_HASH_SECRET, (err, decoded) => {
    if (err) return response.status(401).json({ error: "Invalid token" });
    request.userId = decoded.id;
  });

  return next();
};