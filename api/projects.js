module.exports = function handler(req, res) {
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.setHeader('Allow', 'GET, HEAD');
    return res.status(405).json({ error: 'Method not allowed' });
  }
  res.setHeader('Cache-Control', 'public, max-age=300, s-maxage=3600');
  const projects = [
    { name: 'MyEye', github: 'https://github.com/nabhay/myeye', website: null },
    { name: 'LoadBalancer', github: 'https://github.com/nabhay/LoadBalancer', website: null }
  ];
  if (req.method === 'HEAD') return res.status(200).end();
  return res.status(200).json({ projects });
};
