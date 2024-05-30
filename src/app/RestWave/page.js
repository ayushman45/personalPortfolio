"use client"

import "./styles.css"

import React, { useState } from 'react';

function RestWave() {
    const [method, setMethod] = useState('GET');
    const [url, setUrl] = useState('');
    const [headers, setHeaders] = useState([{ key: '', value: '' }]);
    const [body, setBody] = useState('');
    const [output, setOutput] = useState(null);

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

    const parseCurlCommand = (curlCommand) => {
        const curlParts = curlCommand.match(/(?:[^\s"'\n]+|'[^']*'|"[^"]*")+/g);
        const newHeaders = [];
        let newMethod = 'GET';
        let newUrl = '';
        let newBody = '';
        let bodyStart = false;

        console.log(curlParts)

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
                console.log(header)
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

    return (
        <div className="container">
            <div className="header">
                <h1>RestWave</h1>
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
            </form>
            
        </div>
    );
}

export default RestWave;
