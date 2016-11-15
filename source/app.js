/**
 * Created by kostasx on 15/11/2016.
 */
var React = require('react');
var ReactDOM = require('react-dom');

var h1 = React.createElement('h1', { className: 'header', key: 'header' }, 'This is React');
var p = React.createElement('p', { className: 'content', key: 'content' }, "And that's how it works.");

var reactListItems = <ul className="list-of-items">
                        <li className="item-1">Item 1</li>
                        <li className="item-2">Item 2</li>
                        <li className="item-3">Item 3</li>
                     </ul>;

var listOfItems = React.DOM.ul({className: 'list-of-items', key: 'list-of-items'}, reactListItems);

var reactFragment = [ h1, p, listOfItems ];
var section = React.DOM.section({ className: 'container' }, reactFragment);
ReactDOM.render(section, document.getElementById('react-application'));