import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [val, setVal] = useState('');
  const [val2, setVal2] = useState(false);

  useEffect(() => {
    const res = sessionStorage.getItem('login_state');
    setVal2(res === 'true');
  }, []);

  const handleSaveLocal = () => {
    alert('Please check the Local storage');
    localStorage.setItem('value', val);
    setVal('');
  };
  const handleRemoveLocal = () => {
    alert('Local storage cleared');
    localStorage.removeItem('value', val);
  };

  const handleLogin = () => {
    alert('Please check the Session storage');
    sessionStorage.setItem('login_state', true);
    setVal2(true);
  };
  const handleLogout = () => {
    sessionStorage.removeItem('login_state', false);
    setVal2(false);
  };

  return (
    <>
      <div>
        <div>
          <h1>Hello StackBlitz!</h1>
          <p>Start editing to see some magic happen :)</p>
          <h3>Save in local storage</h3>
          <input
            type="text"
            value={val}
            onChange={(e) => setVal(e.target.value)}
            placeholder="Enter something"
          />
          <button onClick={handleSaveLocal}>Save</button>
          <button onClick={handleRemoveLocal}>Remove</button>
        </div>
        <div style={{ marginTop: '10px' }}>
          {!val2 ? <h3>Login </h3> : <h3>Logout </h3>}
          {!val2 ? (
            <button onClick={handleLogin}>Login</button>
          ) : (
            <button onClick={handleLogout}>Logout</button>
          )}
        </div>
      </div>
    </>
  )
}

export default App
