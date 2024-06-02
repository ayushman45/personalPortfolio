"use server"

const mongoose = require('mongoose');
const Request = require('./mongoose'); // Adjust the path as necessary

export const addRequest = (req) => {
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

export const getRequest = (req) => {
    

    try{
        let {email}=JSON.parse(req);

        Request.find({email})
        .then(data=>{
            console.log(data,JSON.stringify({data,success:true}))
            return "abcd";
        })
        .catch(err=>{
            console.log("in err")
            return ({err,success:false});
        })
    }
    catch(err){
        console.log("in err")
        return ({err,success:false});
    }
}

