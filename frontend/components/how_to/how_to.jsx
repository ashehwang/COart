import React from 'react';

class Intro extends React.Component {

    constructor(props) {
        super(props);
        this.state = { category: 1 };
    }

    renderContent(){
        switch (this.state.category) {
            case 1:
                return(
                    <div className="intro-about">
                        <h2>Every person has its own story to tell.</h2>
                        <br/>
                        <p>But not everyone has been given a chance to do so. We think of authors, screen writers, and webtoon artists as someone with extreme gifts sent from above. Writing your own story seems daunting. But we all know you have a creative soul in you that's willing to bloom, and have an urging desire for your story to be unfolded.</p>
                        <br/>
                        <h2>Not everyone can be J.R.R. Tolkien. Or J.K.Rowling. Or George R.R. Martin.</h2>
                        <br/>
                        <p>Most us will have trouble creating an entire world and all its living habitants. Creating hundreds of characters with their own stories and backgrounds, creating different races with varying histories is all daunting.</p>
                        <br/>
                        <h2>But what if you didn't need to?</h2>
                        <br/>
                        <p>What if you only needed to create a few, or just ONE character, to tell your own story? What if many of us collaborated on creating an epic together? Each of us can come up with one character, with its own different stories and backgrounds, and have them simultaneously interact with each other.</p>
                        <br/>
                        <h2>You've already been doing it.</h2>
                        <br/>
                        <p>Our history itself is an epic collaboration of storytelling by billions of people. We each have our own special place in this world. As small as we, as individual, seem to be swept away in the great flow of history, we each have our own strengths, and talents that shine.</p>
                        <br/>
                        <h2>Let us hear your story. And you can help us tell ours.</h2>
                        <br/>
                        <p>What are you waiting for? I know your creative mind is now bursting with ideas! :-) </p>
                    </div>
                )
            case 2:
                return(
                    <div>
                        characters are..
                    </div>
                )
            case 3:
                return(
                    <div>
                       world is
                    </div>
                )
            case 4:
                return(
                    <div className="intro-aboutme">
                        <h2>A little about me...</h2>
                        <br/>
                        <h6>(I have my own story to tell!)</h6>
                        <br/>
                        <p>I had a job that required me to be in close contact with people. When COVID-19 hit, I decided to make good use of the freed time to learn how to program. </p>
                    </div>
                )
        }
    }

    render(){
        return(
            <div className="intro-container relative">
                <div className="intro-prompt">
                    <h1>Welcome to Co-Tell!</h1>
                    <h3></h3>
                </div>
                <div className="intro-categories flex">
                    <div className="intro-category hover" onClick={() => this.setState({ category: 1 })}>What's this about?</div>
                    <div className="intro-category hover" onClick={() => this.setState({ category: 2 })}>Characters</div>
                    <div className="intro-category hover" onClick={() => this.setState({ category: 3 })}>World</div>
                    <div className="intro-category hover" onClick={() => this.setState({ category: 4 })}>About Me</div>
                </div>
                <div className="intro-show-container">
                    {this.renderContent()}
                </div>
            </div>
        )
    }
}

export default Intro;