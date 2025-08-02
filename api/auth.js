export default function handler(req, res) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    res.statusCode = 401;
    res.setHeader('WWW-Authenticate', 'Basic realm="Protected"');
    res.end('Authentication required');
    return;
  }

  const [scheme, encoded] = authHeader.split(' ');
  if (scheme !== 'Basic') {
    res.statusCode = 400;
    res.end('Invalid auth scheme');
    return;
  }

  const decoded = Buffer.from(encoded, 'base64').toString();
  const [username, password] = decoded.split(':');

  if (username === 'marco' && password === 'delmoro123') {
    // Password corretta → lascia passare
    return res.status(200).end();
  }

  // Password errata
  res.statusCode = 401;
  res.setHeader('WWW-Authenticate', 'Basic realm="Protected"');
  res.end('Access denied');
}
