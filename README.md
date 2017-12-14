# react-search-filter
# This is a search tree where you can provide any kind of data in data.json file and you have a search filter to retreive data when in need.


Sample Tree
================
test1
    test1.1
    test1.2
test2
    test2.1
    test2.2
        test2.2.1
        test2.2.2



Execution
================ 

Example1
Search criteria - 1 
==================================
Input:
    enter "test" in text box and click on search 
    or
    enter "test*" in text box and click on search

Output:
    It will display all like below (because in output test keyword is present every where)
    test1
        test1.1
        test1.2
    test2
        test2.1
        test2.2
            test2.2.1
            test2.2.2


Example 2
Search criteria - 2
==================================
Input:
    enter "test2" in text box and click on search 
    or
    enter "test2*" in text box and click on search 
    
Output:
It will display all like below (because in output test2 keyword is present every where)
    test2
        test2.1
        test2.2
            test2.2.1
            test2.2.2
 




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
