const nodemailer=require("nodemailer")
const transporter=nodemailer.createTransport({
    service:"Gmail",
    auth:{
        user:"divyajyothimuttamsetti@gmail.com",
        pass:"gkdqbrvqharvjbjz"
    }
})
module.exports=transporter