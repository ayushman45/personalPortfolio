"use client"

import React, { useState } from 'react';

function RestWave() {
  const [method, setMethod] = useState('GET');
  const [url, setUrl] = useState('');
  const [headers, setHeaders] = useState([{ key: '', value: '' }]);
  const [body, setBody] = useState('');

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

  const handleSubmit = (e) => {
    e.preventDefault();

    const formattedHeaders = headers.reduce((acc, header) => {
      if (header.key && header.value) {
        acc[header.key] = header.value;
      }
      return acc;
    }, {});

    const requestOptions = {
      method,
      headers: { ...formattedHeaders, 'Content-Type': 'application/json' },
      body: method === 'POST' ? JSON.stringify(body) : null,
    };

    fetch(url, requestOptions)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <select value={method} onChange={handleMethodChange}>
              <option value="GET">GET</option>
              <option value="POST">POST</option>
            </select>
            <input
              type="text"
              placeholder="URL"
              value={url}
              onChange={handleUrlChange}
            />
          </div>
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
            </div>
          ))}
          <button type="button" onClick={addHeader}>Add Header</button>
          {method === 'POST' && (
            <div>
              <textarea
                value={body}
                onChange={handleBodyChange}
                placeholder="Body"
              />
            </div>
          )}
        </div>
        <button type="submit">Send Request</button>
      </form>
    </div>
  );
}

export default RestWave;
