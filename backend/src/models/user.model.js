import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, maxlength: [15, "Username cannot exceed 15 characters"], required: true },
    email: { type: String, required: true, unique: true, match: [/.+\@.+\../, "Please enter a valid email"] },
    password: { type: String, required: true },
    role: { type: String, enum: ["user", "admin"], default: "user" },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
