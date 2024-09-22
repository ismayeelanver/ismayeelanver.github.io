import "../css/index.css"

export default function About() {
    return (
        <>
            <div className="container">
                <div className="me-background"></div>
                <div className="glitch-container">
                    <div className="glitch-box"></div>
                </div>
                <div className="content">
                    <p>
                        I am ismayeel a 13 year old developer striving forward to learn
                        more about machine-learning. I like to play football and code in my free time.
                        I have experience in programming languages like Bash, Rust (learning), Python (Mostly Game dev),
                        Javascript, Svelte, React, Astro and many more.
                    </p>
                    <p>
                        You can check out my Github bio over <a href="https://github.com/ismayeelanver" target="_blank">here</a>
                    </p>
                </div>
            </div>
        </>
    )
}