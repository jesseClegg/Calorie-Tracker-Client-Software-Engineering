const Landing = props => {
    return (
        <div>
            <section class="bg-dark text-light p-5 p-lg-0 pt-lg-5 text-center text-md-start">
                <div class="container">
                    <div class="d-md-flex align-items-center justify-content-between">
                        <div>
                            <h1>Try <span class="text-primary">Hey Coach
                            </span> for free!</h1>
                            <p class="lead my-4">
                                We can help you tackle any fitness goal on the planet
                                completely free of charge. Create your account today, and next
                                time you have a question, <br /> just say <span class="text-primary">Hey Coach</span>.
                            </p>
                            <button class="btn btn-primary btn-lg mb-3" type="button" data-bs-toggle="modal"
                                data-bs-target="#account-registration">Create Account</button>
                        </div>
                        <img className="img-fluid w-50 d-none d-md-block" src="./showcase.jpg" alt="showcasepicture" />
                    </div>
                </div>
            </section>
            <section class="bg-primary text-light py-5">
                <div class="container">
                    <div class="d-md-flex align-items-center text-center text-md-start">
                        <h3 class="mb-3 mb-md-0">Already have an account?</h3>
                        <button type="button" class="btn btn-light btn-sm m-3">Log in here</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Landing;