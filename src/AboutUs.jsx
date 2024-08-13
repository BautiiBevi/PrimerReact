import "./AboutUs.css"

export function AboutUs () {
    return (
        <section id="about-us" className="about-us">
            <form className="about-us-form">
                <h3>About us</h3>
                <div className="about-us-text">
                    <p>
                    We are a tribute page about sneakers from Nike and Adidas.
                    This page is for a project for FreeCodeCamp, about HTML and CSS.
                    All this page is made for academic purpose, and it´s not real.
                    </p>
                </div>
                <iframe
                    id="video"
                    className="video"
                    src="https://www.youtube-nocookie.com/embed/lBpS4FXC51s?rel=0&amp;controls=0&amp;showinfo=0"
                    frameborder="0"
                    allowfullscreen
                ></iframe>
                <h4>More Info?</h4>
                <input
                    className="email"
                    name="email"
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    required
                />
                <input id="submit" type="submit" value="Get Info" className="submit" />
            </form>
        </section>
    )
}