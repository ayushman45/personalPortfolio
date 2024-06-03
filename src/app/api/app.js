"use server"

const Request = require('./mongoose'); // Adjust the path as necessary

export const addRequest = async(req) => {
    try{
        let {email,url,method,headers,body,title}=JSON.parse(req);

        console.log(JSON.parse(req));

        const newRequest = new Request({
            email,
            url,
            method,
            headers:JSON.stringify(headers), 
            body,
            title
        });

       newRequest.save()
       .then(data=>{
            return Promise.resolve(JSON.stringify(data));
        })
        .catch(err=>{
            return Promise.reject(err);
        })
    }
    catch(err){
        return Promise.reject(err);
    }
}

export const getRequest = async(req) => {
    let temp;
    try{
        let {email}=JSON.parse(req);
        console.log(email)
        let res= await Request.find({email})
        if(res){
            console.log(JSON.stringify({res,success:true}))
            temp=res;
            return JSON.stringify({res,success:true});
        }

        else{
            console.log("else")
            return JSON.stringify({err,success:false});
            
        }

    }

    catch(err){
        console.log("catch")
        return JSON.stringify({err,success:false});
    }

}

