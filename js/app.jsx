import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function() {

    class Paragraph extends React.Component {
        state = {
            visible: false,
        }

        componentDidMount() {
            window.addEventListener("scroll", this.show);

        }

        componentDidUpdate(prevProps, prev) {
            if (prev.visible === false && this.state.visible === true) {
                this.props.upDate(true, "show");

            } else if (prev.visible === true && this.state.visible === false) {
                this.props.upDate(false, "image");

            }

        }

        show = () => {

            const myBox = this.element;
            const topPos = myBox.getBoundingClientRect().top;
            const bottomPos = myBox.getBoundingClientRect().bottom;


            if (window.innerHeight > topPos && 0 < bottomPos && this.props.children.includes(" can ")) {
                this.setState({visible: true});
            } else {
                this.setState({visible: false});

            }

        }
        render() {
            return <p ref={i => this.element = i}>{this.props.children}</p>;
        }
    }

    class JokesList extends React.Component {
        constructor() {
            super();
            this.state = {
                jokes: [],
                imgClassName: 'image',
            }
        }

        componentDidMount() {
            fetch(`http://api.icndb.com/jokes`).then(r => r.json()).then(data => {

                let objects = data.value;

                this.setState({jokes: objects})

            });

        }

        updateParagraph = (isInView, className) => {
            console.log(isInView);
            this.setState({
                imgClassName: className,
            })

        }

        render() {
            const jokes = this.state.jokes.map(joke => {
                return <Paragraph key={joke.id} upDate={this.updateParagraph}>{joke.joke}</Paragraph>;
            });
            return <div className="jokes">
                <h1>Jokes About Chuck Norris</h1>
                {jokes}
                <img src="http://sgpnarodowy.pl/wp-content/uploads/2014/11/sgp_logo_wirtualnapolska1.png" id="img"
                    className={this.state.imgClassName}/>
            </div>;

        }
    }

    ReactDOM.render(
        <JokesList/>, document.getElementById('app'));

});
