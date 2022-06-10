const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const usersRoutes = require('./routes/users')
const authRoutes = require('./routes/auth')
const { notFound, errorHandler } = require('./middleware/errorMiddleware')

dotenv.config()

connectDB();

const app = express();

app.use(express.json())

app.get('/', (req, res) => {
    res.send('API is running...')
})

app.use('/api/users', usersRoutes)
app.use('/api/auth', authRoutes)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running on port ${PORT}`))