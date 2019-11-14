import React from 'react'


class Login extends React.Component {



    render() {
        return (
            <div>
                <h1>Hello from Login Component</h1>

                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Username  </label>
                        <input
                            type='text'
                        ></input>
                    </div>

                    <div>
                        <label>Password  </label>
                        <input
                            type='password'
                        ></input>
                    </div>

                    <div>
                        <input
                            type='submit'
                            value='Sign in'
                        ></input>
                    </div>
                </form>
            </div>
        );
    }
}
export default Login;