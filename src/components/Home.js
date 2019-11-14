import React from 'react';
import Button from 'react-bootstrap/Button';
class Home extends React.Component {

    render() {
        return (
            <div>
                <h1>What are you waiting for?<br/>Sign up for free and store and access your notes anywhere you go</h1>
                <br/>
                
                <div class="jumbotron">
                    <h1 class="display-4">What are you waiting for!</h1>
                    <p class="lead">Sign up for free and store and access your notes anywhere you go</p>
                    <p class="lead">
                        <a class="btn btn-primary btn-lg" href="/register" role="button">Sign up</a>
                    </p>
                </div>
            </div>
            
        );
    }

}
export default Home;