const jwt = require("jsonwebtoken");
const BAdRequestError =require('../errors')

const register = async (req, res) => {
  console.log(req.body);
  res.json(req.body);
};

const Login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
   throw new BAdRequestError("Please Provide username and password")
  }

  const token = jwt.sign({ username }, process.env.JWT_SECRET, {
    expiresIn: "3d",
  });

  res.status(200).json({msg:"user Created",token});
};

const Dashboard = async (req, res) => {


   res
    .status(200)
    .json({
      msg: `Welcome ${req.user.username}` ,
      secret: `This is the screct number`,
    });
 
};

module.exports = { register, Login, Dashboard };
