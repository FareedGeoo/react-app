import React, { useState } from 'react';


function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handelSubmit = (username,password)=>{
    console.log(username , password )
    alert(username)
    alert(password)

  }
  return (
    <div className="App">
      <div className='container'>

        <div className="card mt-5">
          <div className="card-body">
            <div className="row">
              <form data-testid="login-form" onSubmit={handelSubmit}>
                <div className="col-12">
                  <h3 className='mb-1'>Login</h3>
                  <div className="row">
                    <div className="col-12">
                      <div className="mb-3">
                        <label htmlFor="input" className="form-label">Username:</label>
                        <input data-testid="username-input" type="text" className="form-control" id="input" placeholder='Username' 
                        onChange={(e)=>setUsername(e.target.value)}/>
                      </div>

                      <div className="mb-3">
                        <label htmlFor="input" className="form-label">Password:</label>
                        <input data-testid="password-input" type="text" className="form-control bg-white" id="input" placeholder='Password'
                        onChange={(e)=>setPassword(e.target.value)} />
                      </div>
              <hr />

                      <div className="mb-3">
                      <button data-testid="submit-button" type="sumbit" className="btn btn-primary">Submit</button>
                      </div>
                    </div>

                  </div>
                </div>
              </form>

             
             





            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;
