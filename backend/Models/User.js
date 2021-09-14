const mongoose = require("mongoose");


// SETS UP SCHEMA
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, "You must provide a name."] },
    username: {type: String, required: true, unique: true},
    email: {
      type: String,
      required: true,
      unique: true,
      match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
    },
    image: {type: String, required:[true, "You must provide a image."] },
    password: {type: String, required: true},
    phoneNumber: {type: Number, required:[true, "You must provide a phone number."] },
    completedTask:{type: Number, default: 0},
     role :{type: String ,default:"admin"},
    
    // REFERENCE TO TASKS
    tasks: [ { type: mongoose.Schema.Types.ObjectId, ref: "Task" } ]
 },
  {
    timestamps: true, 

  }
);


userSchema.set("toJSON", {
transform: (doc, ret, opt) => {
  delete ret["password"];
  return ret;
},
});




// CREATES A MODEL 
const User = mongoose.model("User", userSchema);



module.exports = User;