import express from "express"
import path from "path"

// Loading the environment port with default fallbacks
const HTTP_PORT = process.env.PORT || 3003

/*
 * API endpoints
 */
const app = express()
// mount static frontend to express
app.use(express.static(path.join(__dirname, "..", "public")))
app.get(/^\/(?!api).*/, (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "dist", "index.html"))
})

// Start the app
app.listen(HTTP_PORT, () => {
    console.log(`Listening on port ${HTTP_PORT}`)
})
