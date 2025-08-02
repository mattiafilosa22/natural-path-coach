export default function handler(req, res) {
  const auth = req.headers.authorization;

  if (!auth) {
    res.statusCode = 401;
    res.setHeader('WWW-Authenticate', 'Basic realm="Secure Area"');
    res.end('Auth required');
    return;
  }

  const [scheme, encoded] = auth.split(' ');
  if (scheme !== 'Basic') {
    res.statusCode = 400;
    res.end('Invalid auth scheme');
    return;
  }

  const [user, pass] = Buffer.from(encoded, 'base64').toString().split(':');

  if (user === 'marco' && pass === 'delmoro123') {
    // Accesso consentito → redirect alla home (o alla rotta richiesta)
    res.writeHead(302, { Location: '/' }).end();
  } else {
    res.statusCode = 401;
    res.setHeader('WWW-Authenticate', 'Basic realm="Secure Area"');
    res.end('Access denied');
  }
}
