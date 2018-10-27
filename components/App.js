var Counter = React.createClass({

    getInitialState: function () {
        return {
            counter: 0
        };
    },

    increment: function () {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function () {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    render: function () {
        return (
            React.createElement('div', { className: 'counter' },
                React.createElement('h2', {}, 'Licznik'),
                React.createElement('span', {}, 'Stan licznika: ' + this.state.counter),
                React.createElement('div', {},
                    React.createElement('button', {
                        className: 'buttonZmiana',
                        onClick: this.decrement
                    },
                        'Zmniejszenie stanu'
                    ),
                    React.createElement('button', {
                        onClick: this.increment
                    },
                        'Zwiększenie stanu'
                    )
                )
            )
        );
    }
});

var element = React.createElement('div', { className: 'counters' },
    React.createElement('h1', {}, 'Kilka liczników'),
    React.createElement(Counter),
    React.createElement(Counter),
    React.createElement(Counter)
);

ReactDOM.render(element, document.getElementById('app'));