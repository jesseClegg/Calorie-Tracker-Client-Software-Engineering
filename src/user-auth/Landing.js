import { Link } from 'react-router-dom'

const Landing = props => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3">
                <div className="container">

                    <Link className='navbar-brand text-primary' to='/'>Hey Coach</Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navmenu">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className='nav-link' to='/signup'>Sign Up</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link text-info' to='/login'>Log In</Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>

            <section className="bg-dark text-light p-5 p-lg-0 pt-lg-5 text-center text-md-start" id="landing">
                <div className="container">
                    <div className="d-md-flex align-items-center justify-content-between">
                        <div>
                            <h1>Try <span className="text-primary">Hey Coach
                            </span> for free!</h1>
                            <p className="lead my-4">
                                We can help you tackle any fitness goal on the planet
                                completely free of charge. Create your account today, and next
                                time you have a question, <br /> just say <span className="text-primary">Hey Coach</span>.
                            </p>
                            <button className="btn btn-primary btn-lg" type="button" data-bs-toggle="modal"
                                data-bs-target="#account-registration">Create Account</button>
                        </div>
                        <img className="img-fluid w-50 d-none d-md-block" src="https://hey-coach-bucket.s3.us-east-2.amazonaws.com/showcase.jpg" alt="showcasepicture" />
                    </div>
                </div>
            </section>

            <section className="bg-primary text-light py-5">
                <div className="container">
                    <div className="d-md-flex align-items-center text-center text-md-start">
                        <h3 className="mb-3 mb-md-0">Already have an account?</h3>
                        <button type="button" className="btn btn-light btn-sm m-3">Log in here</button>
                    </div>
                </div>
            </section>

            <section className="bg-dark text-light py-5">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-md-8">
                            <img className="img-fluid text-center d-none d-md-block" src="https://hey-coach-bucket.s3.us-east-2.amazonaws.com/hey-coach-dash-ss.png" alt="showcasepicture" />
                        </div>
                        <div className="col col-md-4">
                            <h3>Don't miss out on everything <span className="text-primary">Hey Coach</span> has to offer!</h3>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-dark text-secondary pb-5">
                <div className="container">
                    <div className="row py-3">
                        <div className="col-3">
                            <h5>Works Cited</h5>
                        </div>
                        <div className="col-3">
                            <h5>More Resources</h5>
                        </div>
                        <div className="col-3">
                            <h5>Tools</h5>
                        </div>
                        <div className="col-3">
                            <h5>Legal</h5>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Landing;