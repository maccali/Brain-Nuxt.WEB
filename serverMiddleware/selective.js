export default function(req, res, next) {
  const spaPaths = ['/spa']
  // A very simple check
  if (spaPaths.includes(req.originalUrl)) {
    // Will trigger the "traditional SPA mode"
    res.spa = true
  }
  // Don't forget to call next in all cases!
  // Otherwise, your app will be stuck forever :|
  next()
}
