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


    //Stany do wyświetlenia w console log 

    getDefaultProps: function () {
        console.log('getDefaultProps - ustawienie domyślnych propsów');
    },

    componentWillMount: function () {
        console.log('componentWillMount - jest wywoływana tuż przed wystąpieniem montowania w stanie przed renderowaniem');
    },

    componentDidMount: function () {
        console.log('componentDidMount - jest wywoływany natychmiast po zamontowaniu komponentu (wstawiony do drzewa) - metoda działa po wygenerowaniu DOMu');
    },

    componentWillReceiveProps: function () {
        console.log('componentWillReceiveProps - jest wywoływany, zanim zamontowany komponent otrzyma nowe rekwizyty');
    },

    shouldComponentUpdate: function () {
        console.log('shouldComponentUpdate - jest wywoływana przed renderowaniem uaby React wiedział, czy aktualna zmiana stanu lub rekwizytów nie wpływa na wynik komponentu');
        return true;
    },

    componentWillUpdate: function () {
        console.log('componentWillUpdate - jest wywoływana tuż przed renderowaniem, gdy odbierane są nowe rekwizyty lub stan');
    },

    componentWillUnmount: function () {
        console.log('componentWillUnmount - jest wywoływany bezpośrednio przed odmontowaniem i zniszczeniem komponentu - metoda działa po wyrenderowaniu komponentu do DOM');
    },


    // dalsza czesc proramu liczników

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