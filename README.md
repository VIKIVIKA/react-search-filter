# react-search-filter
# This is a search tree where you can provide any kind of data in data.json file and you have a search filter to retreive data when in need.


Sample Tree
================
<ul>test1
    <li>test1.1</li>
    <li>test1.2</li>
</ul>
<ul>test2
    <li>test2.1</li>
    <li><ul>test2.2
        <li>test2.2.1</li>
        <li>test2.2.2</li>
        </ul>
    </li>
 </ul>


Execution
================ 

Example
Search criteria 
===============
Input:
    enter "test" in text box and click on search 
    or
    enter "test*" in text box and click on search

Output:
    It will display all like below (because in output test keyword is present every where)
    <ul>test1
        <li>test1.1</li>
        <li>test1.2</li>
    <ul>
    <ul>test2
        <li>test2.1</li>
        <li><ul>test2.2
            <li>test2.2.1</li>
            <li>test2.2.2</li>
            </ul></li>
        </ul>




Installation procedure.

1) React and React DOM.

npm install --save react react-dom

2) Webpack, Babel

Plese follow instructions here, https://www.codecademy.com/articles/react-setup-i, https://www.codecademy.com/articles/react-setup-ii, which i referred.

2) ES6 Spread Operator

npm install --save-dev babel-plugin-transform-object-rest-spread refer this link for installation,

https://www.npmjs.com/package/babel-plugin-transform-object-rest-spread


3) Redux

npm install --save redux

4) React Router

npm install --save react-router

5) Middlewares.

npm install --save redux-promise

npm install --save redux-thunk
