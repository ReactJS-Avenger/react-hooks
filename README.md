https://levelup.gitconnected.com/react-redux-hooks-useselector-and-usedispatch-f7d8c7f75cdd


Similar to useSelector , useDispatch is a function that we import from react-redux library and assign it to a variable. And with this, we are able to dispatch any action to the store by simply adding an action as an argument to the new variable like the code above and that's it.


useSelector is a function that takes the current state as an argument and returns whatever data you want from it. It's very similiar to mapStateToProps() and it allows you to store the return values inside a variable within the scope of you functional components instead of passing down as props.