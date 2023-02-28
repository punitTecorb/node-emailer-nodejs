import nodemailer from 'nodemailer';


function senaMailByMailer(data:any):Promise<any> {
    return new Promise(async (resolve, reject) => {
        try {
            var smtpTransport = nodemailer.createTransport({
                // host: "ssl0.ovh.net",
                // port: 465,
                //service: 'Godaddy',
                host: "smtpout.secureserver.net",
                secureConnection: true,
                port: 465,
                auth: {
                    user: 'Email Id',// Sender mail Id 
                    pass: 'Password'// Mail password
                },
                tls: { rejectUnauthorized: false }
            });
            
            var mailOptions = {
                to: 'Email Id',//Receiver mail Id
                from: 'Email Id',// Send mail Id
                subject: 'Your mail subject',
                html: ''
            };
            smtpTransport.sendMail(mailOptions, function(err:any) {
                if (err) {
                    console.log(err);
                    reject(err);
                }else{
                    resolve({'message':'success'});
                }
            });
        }catch(error){
            console.log(error);
            reject(error);
        }
    });
}

export default {
    senaMailByMailer
} as const;