import express from 'express';
import userFunctions from '../data/users.js'; 

const router = express.Router();

// Route for user signup
router.post('/signup', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password are required' });
        }

        const newUser = await userFunctions.createUser(email, password);
        return res.status(201).json({ message: 'User created successfully', userId: newUser.insertedId });
    } catch (error) {
        return res.status(400).json({ error: error.toString() });
    }
});

// Route for user login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password are required' });
        }

        const authenticatedUser = await userFunctions.authenticateUser(email, password);
        return res.status(200).json({ message: 'User authenticated successfully', user: authenticatedUser });
    } catch (error) {
        return res.status(401).json({ error: error.toString() });
    }
});

export default router;
