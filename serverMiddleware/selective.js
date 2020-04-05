export default function(req, res, next) {
  console.log(req.originalUrl)
  const spaPaths = ['/spa']
  const staticPaths = ['/']
  // A very simple check
  if (spaPaths.includes(req.originalUrl)) {
    // Will trigger the "traditional SPA mode"
    res.spa = true
  }
  if (staticPaths.includes(req.originalUrl)) {
    // Will trigger the "traditional SPA mode"
    // res. = true
    // console.log(res)
  }
  // Don't forget to call next in all cases!
  // Otherwise, your app will be stuck forever :|
  next()
}
