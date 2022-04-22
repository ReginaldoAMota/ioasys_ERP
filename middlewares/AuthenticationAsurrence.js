
import pkg from 'jsonwebtoken';
const { verify, decode } = pkg;

const AccessMiddleware = (auth, { req, res, next }
) => {

  const authHeader = req.headers.authorization
  if (!authHeader) return res.status(401).send({ error: 'you need to pass a user token' });

  const [, token] = authHeader.split(' ')

  try {
    const decoded = verify(token, process.env.JWTSECRET)
    const company = decoded.company
    const access = decoded.access
    req.company = company
    if (auth.includes(access)) {
      next()
    } else {
      res.status(401).send({ error: 'You do not have permission for that' });
    }
  } catch (e) {
    res.send({ error: 'Login failed! Check authentication credentials' })
  }


}

export default AccessMiddleware
