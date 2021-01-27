// Page not found 404

import React from 'react';
import { Link } from 'react-router-dom';

class PageNotFound extends React.Component {
    render() {
        return (
        <main>
            <section className="error">
                <h2>404 ... : (</h2>
                <p>Page not found.</p>
                <p>Go to <Link to="/">Home</Link> page.</p>
            </section>
	    </main>
        );
    }
}

export default PageNotFound;