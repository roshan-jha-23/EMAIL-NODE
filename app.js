const nodemailer=require('nodemailer');
const fs = require('fs'); 

const html=`<h1>hello world</h1>
<p>${new Date()}</p>`
//to embed into the body
//<img src='cid:unique@whatever'>
;
const emails=['xyz@exaple.com','iamsexy@gmail.com']
async function main(){
const transporter=nodemailer.createTransport({
    host:'smtp.gmail.com',
    port:587,
    secure:false,
    auth:{
        user:"jha02305@gmal.com",
        pass:'//your credintail'
    }
});
const pdfAttachment = {
    filename: 'example.pdf', // Set the filename for the attached PDF
    content: fs.createReadStream('./example.pdf'), // Replace with the path to your PDF file
  };
 const info=await transporter.sendMail({
from:'Roshan <jha062305@gmail.com>',
to:emails,//yaha jayega mail okay.
subject:'test email from roshan',
html:html,
attachments: [pdfAttachment],
//attachments:[{
    //filename : "file_name" ,
    //path:'./path.extenson',
    //cid:'unique@hello there.com'
// }]


})
console.log("message sent:"+info.messageId);

}



main()
.catch(e=>console.log(e));