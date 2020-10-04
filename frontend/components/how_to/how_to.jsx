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
                        <h2>But not everyone can be J.R.R. Tolkien. Or J.K.Rowling. Or George R.R. Martin.</h2>
                        <br/>
                        <p>Most us will have trouble creating an entire world and all its living habitants. Creating hundreds of characters with their own stories and backgrounds, creating different races with varying histories is all daunting.</p>
                        <br/>
                        <h2>What if you didn't need to be one?</h2>
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
                        <h1>Characters are the living building blocks of your story.</h1>
                        <br/>
                        <p>They'll be your chess piece, and your avatar to unfold the story for you. They'll interact with other characters and you might find out that they have a soul of their own. </p>
                        <br/>
                        <h1>Each character is unique. Just like us.</h1>
                        <p>There are billions of people walking on earth. But no two people are the same. So are your characters.</p>
                        <h1>Possibilities are enless.</h1>
                        <p>Ever spent hours customizing your online game avatar? Now you have even more freedom to do so. Your character can have any looks you like. Any crazy family line you can imagine. Give it life by specifying it's personalities.</p>
                        <br/>
                        <p>You can start simple and make an avatar of your own self. Or think of your favorite game, anime, Marvel studio, CD comics, TV series character. You'll find that there are traits that you especially attracted to. Red eyes? Elves? Villains with sad story behind how they became one? Twintail tsundere?</p>
                        <h1>No matter what, they represent a small piece of you.</h1>
                        <p></p>
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
                    <div>
                       world is
                    </div>
                )
            case 5:
                return(
                    <div className="intro-aboutme">
                        <h2>A little about me...</h2>
                        <br/>
                        <h6>(I have my own story to tell!)</h6>
                        <br/>
                        <p>I had a job that required me to be in close contact with other people every day. So when COVID-19 hit, I decided to make good use of the freed time to learn how to program. I knew the repetitive nature of my previous job was killing the little creative soul in me, and wanted the ability to build anything if I wanted to.</p>
                        <br/>
                        <p>Building Co-Tell has been one of the most enjoyable projects I've done in a long time. Mostly because I truly believe that no matter how common one can seem on the outside, that person is actually very special.. You just need to give them a safe space to expose that extraordinary little spark!</p>
                        <br/>
                        <p>Co-Tell is a work in progress. (Yes, I know it.) But I'll continue work on this to make it a better experience for you. Hope you enjoy.</p>
                        <br/>
                        <br/>
                        <p>If you have any questions or suggestions, don't hesitate to contact me.</p>
                        <br/>
                        <br/>
                        With love,
                        <br/>
                        A.
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
                    <div className="intro-category hover" onClick={() => this.setState({ category: 4 })}>Rules</div>
                    <div className="intro-category hover" onClick={() => this.setState({ category: 5 })}>About Me</div>
                </div>
                <div className="intro-show-container">
                    {this.renderContent()}
                </div>
            </div>
        )
    }
}

export default Intro;