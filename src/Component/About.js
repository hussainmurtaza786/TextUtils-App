import React from 'react'

function About(props) {

    let myStyle = {
        color: props.mode === 'dark' ? 'white' : 'black',
        backgroundColor: props.mode === 'dark' ? '#042743' : 'white',
        border: '2px solid',
        borderColor: 'dark' ? 'white' : 'black',
        borderColor: 'white' ? 'dark' : 'black',
    }
    return (
        <div className="accordion" id="accordionExample" style={myStyle}>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        About Text Utils App
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        <strong>Empowering Your Textual Experience</strong> Welcome to Text Utils, where we transform the way you interact with text! Our mission is to provide a suite of tools that streamline, enhance, and simplify your text-related tasks, catering to writers, students, professionals, and everyone in between.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" >
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Our Story
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        Text Utils was born from a passion for efficiency and a love for language. We envisioned a platform that could effortlessly handle various text manipulations while remaining user-friendly and accessible to all. From basic formatting to advanced analysis, our app encompasses a diverse range of functionalities, making it a go-to resource for anyone working with text.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button
                        className="accordion-button collapsed"
                        style={myStyle}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                    >
                        Our Commitment
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                >
                    <div className="accordion-body" style={myStyle}>
                        Your satisfaction is our priority. We strive for excellence in both functionality and user experience, aiming to make your text-related tasks effortless and enjoyable.
                        We value your feedback and actively incorporate suggestions to enhance our app further.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About