import React, { useState, useEffect } from 'react';
import './App.css';
import Loader from './components/Loader';
import TypeWriter from './components/TypeWriter';
import StringToList from './components/StringToList';
function GetTheFlag() {
  const [flag, setFlag] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchFlag = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/756e63');
      if (!response.ok) {
        throw new Error('Failed to fetch flag');
      }
      const data = await response.text();
      setFlag(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    const delay = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      fetchFlag();
    };
    delay();
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <TypeWriter text={flag || error || 'Something went wrong'} />
          <StringToList string={flag || error || 'Something went wrong'} />
        </>
      )}
    </div>
  );
}
/*
//Step 2 Code
let chars = "";
function findChars() {
  const codeElements = document.querySelectorAll('code[data-class^="23"]');
  
  codeElements.forEach(codeElement => {
    const tagElements = codeElement.querySelectorAll('div[data-tag$="93"]');
    
    tagElements.forEach(tagElement => {
      const spanElements = tagElement.querySelectorAll('span[data-id*="21"]');
      
      spanElements.forEach(spanElement => {
        const charElements = spanElement.querySelectorAll('i.char');
        
        charElements.forEach(charElement => {
          chars += charElement.getAttribute("value");
        });
      });
    });
  });
}
findChars();
console.log(chars);
*/
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>STETTSEN OLSEN</h1>
        <GetTheFlag />
      </header>
    </div>
  );
}

export default App;
