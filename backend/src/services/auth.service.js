import bcrypt from 'bcryptjs';
import { generateToken } from '../utils/jwt.utils.js';
import User from '../models/user.model.js';
import {ADMIN_EMAIL} from '../config/env.js';

export const registerUser = async (name, email, password) => {
    const existingUser  = await User.findOne({ email });
    if (existingUser ) {
        throw new Error('User already exists');
    }
    const role = email === ADMIN_EMAIL ? "admin" : "user";
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword, role });
    await user.save();
    const token = generateToken({
        id: user._id,
        role: user.role
    })
    return {user,token};
}

export const loginUser = async (  email, password) => {
    const user = await User.findOne ({ email });
    if (!user) {
        throw new Error('Invalid email or password');
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        throw new Error('Invalid email or password');
    }   
    const token = generateToken({
        id: user._id,
        role: user.role
    })
    return {user,token};
}   
