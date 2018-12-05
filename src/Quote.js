import React, {Component} from 'react';

const QUOTE_API_URL = 'https://talaikis.com/api/quotes/random';

class Quote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author: '',
            cat: '',
            quote: ''
        }
    }

    getRandomQuote = event => {
        fetch(QUOTE_API_URL)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    author: response.author,
                    cat: response.cat,
                    quote: response.quote

                })
            });
    };

    shareOnTwitter = (quote, author) => {
        const url = author;
        const text = quote;
        window.open('http://twitter.com/share?url=' + encodeURIComponent(url) + '&text=' + encodeURIComponent(text), '', 'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0');
    };

    componentDidMount() {
        this.getRandomQuote();
    }

    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="col">
                    <h1 className="display-4">Quote Machine</h1>
                    <blockquote>
                        <q className="lead">{this.state.quote}</q>
                        <hr className="my-4"/>
                        <p className="lead">{this.state.author}</p>
                    </blockquote>
                    <div className="lead">
                        <div className="btn-toolbar">
                            <button type="button" className="mx-3 btn btn-primary"
                                    onClick={() => this.shareOnTwitter(this.state.quote, this.state.author)}>
                                Tweet
                            </button>
                            <button type="button" className="btn btn-danger" onClick={this.getRandomQuote}>
                                Click Me for Random Quote
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Quote;