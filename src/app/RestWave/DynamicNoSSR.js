"use client"

import "./styles.css"

import React, { useEffect, useState } from 'react';

import SignInButton from "../Components/SignInButton";
import { addRequest, getRequest } from "../api/app";

const curlToCodeOptions =["fetch","jQuery","XHR","axios"]

function RestWave() {
    const [method, setMethod] = useState('GET');
    const [url, setUrl] = useState('');
    const [headers, setHeaders] = useState([{ key: '', value: '' }]);
    const [body, setBody] = useState('');
    const [output, setOutput] = useState(null);
    const [user, setUser] = useState(null);
    const [requests, setRequests] = useState([]);
    const [ctcOp,setCtcOp] = useState('fetch');

    const [code,setCode] = useState('')

    useEffect(()=>{
        if(typeof window !== 'undefined'){
            const user=window.localStorage.getItem('firebase-restwave-token');
            if(user){
                setUser(JSON.parse(user));
            }
        }

    },[])

    const convertToFetch = () => {
        let headersString = '';

        headers.forEach((header) => {
            if (header.key && header.value) {
                headersString += `'${header.key}': '${header.value}',\n`;
            }
        });

        let fetchCode = `fetch('${url}', {\n`;
        fetchCode += `  method: '${method}',\n`;
        fetchCode += `  headers: {\n`;
        fetchCode += headersString;
        fetchCode += `  },\n`;

        if (!['GET', 'HEAD', 'TRACE', 'CONNECT'].includes(method)) {
            fetchCode += `  body: '${body}',\n`;
        }

        fetchCode += `})\n`;
        fetchCode += `  .then(response => response.json())\n`;
        fetchCode += `  .then(data => console.log(data))\n`;
        fetchCode += `  .catch(error => console.error('Error:', error));`;

        return fetchCode;

    }

    const convertToJQuery = () => {
        let headersString = '';

        headers.forEach((header) => {
            if (header.key && header.value) {
                headersString += `'${header.key}': '${header.value}',\n`;
            }
        });

        let jQueryCode = `$.ajax({\n`;
        jQueryCode += `  method: '${method}',\n`;
        jQueryCode += `  url: '${url}',\n`;
        jQueryCode += `  headers: {\n`;
        jQueryCode += headersString;
        jQueryCode += `  },\n`;

        if (!['GET', 'HEAD', 'TRACE', 'CONNECT'].includes(method)) {
            jQueryCode += `  data: '${body}',\n`;
        }

        jQueryCode += `})\n`;
        jQueryCode += `  .done(function(data) {\n`;
        jQueryCode += `    console.log(data);\n`;
        jQueryCode += `  })\n`;
        jQueryCode += `  .fail(function(jqXHR, textStatus) {\n`;
        jQueryCode += `    console.log( "Request failed: " + textStatus );\n`;
        jQueryCode += `  });`;

        return jQueryCode;

    }

    const convertToXHR = () => {
        let headersString = '';
        let bodyString = '';
        let xhrString = '';

        headers.forEach((header) => {
            if (header.key && header.value) {
                headersString += `'${header.key}': '${header.value}',\n`;
            }
        });

        if (!['GET', 'HEAD', 'TRACE', 'CONNECT'].includes(method)) {
            bodyString = `data: '${body}',\n`;
        }

        xhrString += `var xhr = new XMLHttpRequest();\n`;
        xhrString += `xhr.open('${method}', '${url}');\n`;
        xhrString += `xhr.setRequestHeader('Content-Type', 'application/json');\n`;
        xhrString += `xhr.setRequestHeader('Accept', 'application/json');\n`;
        xhrString += `xhr.setRequestHeader('Access-Control-Allow-Origin', '*');\n`;
        xhrString += `xhr.setRequestHeader('Access-Control-Allow-Credentials', 'true');\n`;
        xhrString += `xhr.setRequestHeader('Access-Control-Allow-Headers', 'Content-Type');\n`;
        xhrString += `xhr.setRequestHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');\n`;

        xhrString += `xhr.onreadystatechange = function() {\n`;
        xhrString += `  if (this.readyState === 4) {\n`;
        xhrString += `    console.log(this.responseText);\n`;
        xhrString += `  }\n`;
        xhrString += `};\n`;
        xhrString += `xhr.send(${bodyString});`;

        return xhrString;

    }

    const convertToAxios = () => {
        let headersString = '';
        let bodyString = '';
        let axiosString = '';

        headers.forEach((header) => {
            if (header.key && header.value) {
                headersString += `'${header.key}': '${header.value}',\n`;
            }
        });

        if (!['GET', 'HEAD', 'TRACE', 'CONNECT'].includes(method)) {
            bodyString = `data: '${body}',\n`;
        }

        axiosString += `axios({\n`;
        axiosString += `  method: '${method}',\n`;
        axiosString += `  url: '${url}',\n`;
        axiosString += `  headers: {\n`;
        axiosString += headersString;
        axiosString += `  },\n`;

        if (!['GET', 'HEAD', 'TRACE', 'CONNECT'].includes(method)) {
            axiosString += `  data: '${body}',\n`;
        }
        axiosString += `})\n`;
        axiosString += `  .then(function (response) {\n`;
        axiosString += `    console.log(response);\n`;
        axiosString += `  })\n`;

        axiosString += `  .catch(function (error) {\n`;
        axiosString += `    console.log(error);\n`;
        axiosString += `  });`;

        return axiosString;

    }

    useEffect(()=>{
        if(url && method && headers && body && ctcOp && user && user.email){
            if(ctcOp==='fetch'){
                setCode(convertToFetch());
            }
            else if(ctcOp==='jQuery'){
                setCode(convertToJQuery());
            }
            else if(ctcOp==='XHR'){
                setCode(convertToXHR());
            }
            else if(ctcOp==='axios'){
                setCode(convertToAxios());
            }
            else{
                setCode('')
            }

        }

        else{
            setCode('')
        }
        

    },[ctcOp,headers,method,body,url])

    const getReq = async(email)=>{
        const res=await getRequest(JSON.stringify({email}))
        if(JSON.parse(res).success){
            setRequests(JSON.parse(res).res);
        }
    }

    useEffect(()=>{
        if(user && user.email){
            getReq(user.email);
        }

    },[user])

    const handleMethodChange = (e) => {
        setMethod(e.target.value);
    };

    const handleUrlChange = (e) => {
        setUrl(e.target.value);
    };

    const handleBodyChange = (e) => {
        setBody(e.target.value);
    };

    const handleHeaderChange = (index, field, value) => {
        const newHeaders = [...headers];
        newHeaders[index][field] = value;
        setHeaders(newHeaders);
    };

    const addHeader = () => {
        setHeaders([...headers, { key: '', value: '' }]);
    };

    const deleteHeader = (index) => {
        setHeaders(headers.filter((_, i) => i !== index));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const getHeaders = () => {
            let obj = {};
            for (let ob of headers) {
                if (ob.key && ob.value) {
                    obj[ob.key] = ob.value;
                }
            }
            return obj;
        };

        const requestOptions = {
            method,
            headers: getHeaders(),
            body: ['GET', 'HEAD', 'TRACE', 'CONNECT'].includes(method) ? null : body,
        };

        fetch(url, requestOptions)
            .then(response => response.json())
            .then(data => setOutput(data))
            .catch(error => console.error('Error:', error));
    };

    const handleCurlImport = () => {
        const curlCommand = prompt('Paste your cURL command here:');
        if (curlCommand) {
            parseCurlCommand(curlCommand);
        }
    };

    const handleSave = () => {
        if(!user){
            alert("Login before saving your request");
        }

        if(!url ){
            alert("At least endpoint URL is required to save")
            return;
        }

        let title= prompt("Enter a title for your request");

        addRequest(JSON.stringify({url,method,headers,body,email:user.email,title}))
        .then(res=>{
            setRequests([...requests,{url,method,headers,body,email:user.email,title}])
            alert("Request saved successfully")
        })
        
        .catch(err=>{
            console.log(err)
            alert("Unable to save request")
        })

    }

    const parseCurlCommand = (curlCommand) => {
        const curlParts = curlCommand.match(/(?:[^\s"'\n]+|'[^']*'|"[^"]*")+/g);
        const newHeaders = [];
        let newMethod = 'GET';
        let newUrl = '';
        let newBody = '';
        let bodyStart = false;

        curlParts.forEach((part, index) => {
            if (part === '-X' || part === '--request') {
                newMethod = curlParts[index + 1];
            } 
            // else if(part==='--location'){
            //     newUrl=curlParts[index+1].slice(1,curlParts[index+1].length-1).trim()
            // } 
            else if(part.slice(1,part.length-1).trim().startsWith('http')){
                if(newUrl===''){
                    newUrl=part.slice(1,part.length-1).trim();
                }
            } 
            
            else if (part === '-H' || part === '--header') {
                const header = curlParts[index + 1].split(':');
                newHeaders.push({ key: header[0].slice(1).trim(), value: header[1].slice(0,header[1].length-1).trim() });
            } 
            
            else if (part === '--data' || part === '--data-raw' || part === '--data-binary' || part === '--data-urlencode') {
                newBody = curlParts[index + 1].slice(1,curlParts[index+1].length-1).trim();
                newMethod = newMethod==='GET'?'POST':newMethod; // Automatically set method to POST if data is present
            } 
            
            else if (bodyStart) {
                newBody += part + ' ';
            }
        });

        setMethod(newMethod);
        setUrl(newUrl);
        setHeaders(newHeaders.length ? newHeaders : [{ key: '', value: '' }]);
        setBody(newBody.trim());
    };

    const handleLoad = (e,request) => {
        setMethod(request.method);
        setUrl(request.url);
        setHeaders(JSON.parse(request.headers));
        setBody(request.body);
    }

    const handleCodeCopy = () => {
        navigator.clipboard.writeText(code);
        document.querySelector('.toolTip-box').style.backgroundColor="green";
        document.querySelector('.toolTip-box').innerText="Copied";
        document.querySelector('.toolTip-box').style.visibility="visible";
        setTimeout(()=>{
            document.querySelector('.toolTip-box').style.backgroundColor="white";
            document.querySelector('.toolTip-box').innerText="Copy";
            document.querySelector('.toolTip-box').style.visibility="hidden";
        },3000)
    }

    return (
        <div className="container">
            <div className="header">
                <h1>RestWave</h1>
                {user?<h3>Hi {user.displayName}</h3> :<SignInButton />}
            </div>
            <form onSubmit={handleSubmit} className="formContainer">
                <div className="form">
                    <div className="form-row">
                        <select value={method} onChange={handleMethodChange}>
                            <option value="GET">GET</option>
                            <option value="POST">POST</option>
                            <option value="PUT">PUT</option>
                            <option value="PATCH">PATCH</option>
                            <option value="DELETE">DELETE</option>
                            <option value="HEAD">HEAD</option>
                            <option value="TRACE">TRACE</option>
                            <option value="CONNECT">CONNECT</option>
                        </select>
                        <input
                            type="text"
                            placeholder="URL"
                            value={url}
                            onChange={handleUrlChange}
                        />
                        <button type="submit">Send</button>
                        <button type="button" onClick={handleCurlImport}>Import</button>
                    </div>
                    <div className="form-row-2">
                        {headers.map((header, index) => (
                            <div key={index}>
                                <input
                                    type="text"
                                    placeholder="Header Key"
                                    value={header.key}
                                    onChange={(e) => handleHeaderChange(index, 'key', e.target.value)}
                                />
                                <input
                                    type="text"
                                    placeholder="Header Value"
                                    value={header.value}
                                    onChange={(e) => handleHeaderChange(index, 'value', e.target.value)}
                                />
                                <button type="button" onClick={() => deleteHeader(index)}>Delete Header</button>
                            </div>
                        ))}
                    </div>
                    
                    <div className="form-row-3">
                        <div>
                            <button type="button" onClick={addHeader}>Add Header</button>
                        </div>
                    </div>

                    {!['GET', 'HEAD', 'TRACE', 'CONNECT'].includes(method) && (
                        <div className="form-row">
                            <div>
                                <h4>Data</h4>
                                <textarea
                                    value={body}
                                    onChange={handleBodyChange}
                                    placeholder="Body"
                                    className="body-for-req"
                                />
                            </div>
                        </div>
                    )}
                </div>

                <div className="form-row">
                    <div>
                        <h3>Response</h3>
                        <pre>{output&&JSON.stringify(output, null, 4)}</pre>
                    </div>
                </div>

                <div className="form-row">
                    <button onClick={handleSave}>Save</button>
                </div>

                <br />

                <div className="form-row">
                    <table>
                        <thead>
                            <tr>
                                {
                                    curlToCodeOptions.map((op,index) => {
                                        if(op===ctcOp){
                                            return <th key={index}>{op}</th>
                                        }
                                        else{
                                            return <th className="not-selected" style={{cursor:"pointer"}} key={index} onClick={()=>setCtcOp(op)}>{op}</th>
                                        }
                                    })
                                }
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="codeWindow" colSpan={curlToCodeOptions.length}>
                                    <pre id="xCode">{code}</pre>
                                    <div className="copyButton" onClick={handleCodeCopy}>
                                        <img src="./copy.svg" alt="copyBtn" height={"100%"}/>
                                        <div className="toolTip-box">
                                            Copy
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <br />

                <div className="form-row">
                    <h3>Saved request</h3>
                </div>
                {requests.length>0 && 
                    <div className="form-row">
                        <table>
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>URL ENDPOINT</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {requests.map((request,index)=>(
                                    <tr key={index}>
                                        <td>{request.title}</td>
                                        <td>{request.url}</td>
                                        
                                        <td><button onClick={(e)=>handleLoad(e,request)}>Load</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                }
                
            </form>
            
        </div>
    );
}

export default RestWave;
