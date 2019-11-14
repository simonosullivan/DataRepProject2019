import React from 'react'


class Register extends React.Component {



    render() {
        return (
            <div>
                <h1>Registration Form </h1>

                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Name  </label>
                        <input
                            type='text'
                        ></input>
                    </div>

                    <div>
                        <label>Email  </label>
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
                        <label>Confirm Password  </label>
                        <input
                            type='password'
                        ></input>
                    </div>

                    <div>
                        <input
                            type='submit'
                            value='Sign up'
                        ></input>
                    </div>
                </form>
            </div>
        );
    }
}
export default Register;