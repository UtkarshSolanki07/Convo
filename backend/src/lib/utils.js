import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
  const {JWT_SECRET}=process.env;
  if (!JWT_SECRET) {
    console.error("JWT_SECRET environment variable is required");
    process.exit(1);
  }

  const token = jwt.sign({ userId },JWT_SECRET, {
    expiresIn: "7d",
  });
  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "development" ? false : true,
  });
  return token;
};
