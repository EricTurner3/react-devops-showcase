import React from 'react';
import ReactDOM from 'react-dom';

function Home() {
    return (
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Home Page</div>

                        <div className="card-body">I'm an example component!</div>
                    </div>
                </div>
            </div>
    );
}

export default Home;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
