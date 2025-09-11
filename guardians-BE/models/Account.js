const mongoose = require("mongoose");

// Hàm sinh id 6 số ngẫu nhiên
async function generateUniqueId(Account) {
  let unique = false;
  let newId;
  while (!unique) {
    newId = Math.floor(100000 + Math.random() * 900000); // random 6 số
    const existing = await Account.findOne({ id: newId });
    if (!existing) unique = true;
  }
  return newId;
}

const AccountSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
  },
  fullName: { type: String, required: true },
  dob: { type: Date, required: true },
  phone: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isAdult: { type: Boolean, required: true }
}, { timestamps: true });

// Middleware auto gán id 6 số
AccountSchema.pre("save", async function (next) {
  if (!this.id) {
    this.id = await generateUniqueId(this.constructor);
  }
  next();
});

module.exports = mongoose.model("Account", AccountSchema);
