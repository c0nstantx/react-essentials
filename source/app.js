/**
 * Created by kostasx on 15/11/2016.
 */
var React = require('react');
var ReactDOM = require('react-dom');

var ReactClass = React.createClass({
    getInitialState: function () {
        return {
            isHeaderHidden: false,
            title: 'Title 1'
        };
    },
    hideTitle: function () {
        this.setState({
            isHeaderHidden: !this.state.isHeaderHidden
        });
    },
    changeTitle: function () {
        var randomTitles = [
            'Title 1',
            'Title 2',
            'Title 3',
            'Title 4',
        ];
        this.setState({
            title: randomTitles[Math.floor(Math.random() * randomTitles.length)]
        });
    },
    render: function () {
        var headerElement = React.createElement('h1', { className: 'header', key: 'header' }, this.state.title);
        var buttonElement = React.createElement('button', { className: 'btn btn-default', onClick: this.hideTitle, key: 'toggle-button' }, 'Toggle header');
        var changeButtonElement = React.createElement('button', { className: 'btn btn-default', onClick: this.changeTitle, key: 'change-button' }, 'Change header');
        var elementList = [ buttonElement, changeButtonElement ];
        if (!this.state.isHeaderHidden) {
            elementList.push(headerElement);
        }

        return React.createElement('div', null, elementList);
    }
});
var reactComponentElement = React.createElement(ReactClass);
var reactComponent = ReactDOM.render(reactComponentElement, document.getElementById('react-application'));

// var ReactClass = React.createClass({
//     setHidden: function(hidden) {
//         this.setState({
//             isHidden: hidden
//         })
//     },
//     getInitialState: function() {
//         return {
//             isHidden: true
//         }
//     },
//     render: function () {
//         return this.state.isHidden ? null : <h1>React Component</h1>;
//     }
// });
// var reactComponentElement = React.createElement(ReactClass);
// var reactComponent = ReactDOM.render(reactComponentElement, document.getElementById('react-application'));


// var h1 = React.createElement('h1', { className: 'header', key: 'header' }, 'This is React');
// var p = React.createElement('p', { className: 'content', key: 'content' }, "And that's how it works.");
//
// var listOfItems = <ul className="list-of-items">
//                         <li className="item-1">Item 1</li>
//                         <li className="item-2">Item 2</li>
//                         <li className="item-3">Item 3</li>
//                      </ul>;
//
// var reactFragment = [ h1, p, listOfItems ];
// var section = React.DOM.section({ className: 'container' }, reactFragment);
// ReactDOM.render(section, document.getElementById('react-application'));