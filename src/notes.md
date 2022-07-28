


## Redux thoughts
Are there tasks online?
How do the components talk to one another?

REDUX







QUESTIONS : 
creating paramenters and passing arguments through components?




1) ensure that you are in your branch
2) in your case, you will want to update your project so it is actually using actual components before continuing... Remember, hooks need to be in a function component.
3) Create a screen with 2 tabs (https://reactstrap.github.io/?path=/docs/components-nav--navs#tab-pane), which uses useState()  to switch between tabs.
4) Ensure that when tabs are switched, the active class changes on both the tab and the tab pane.

Pane 1
5) In one of the tab panes, create a component that displays a random user's data using useEffect and useState.
6) Add a button that, when pushed, generates a new random user.

Pane 2
7) In another tab pane, create a component that displays a random user's data using useMemo.

HINT: the two panes might look very similar... might be useful to use a component to share between the two of them 😉

notes: 

useEffect has 2 parameters. parameter 1 is a function. parameter 2 is an array of variables that you are listening to. If you have variables you are listening to in the function, include them in the second parameter.

useMemo is the same as useEffect, but in the first parameter, you must return a value. useMemo assigns a value.

useState uses the following syntax const [person, setPerson] = useState(null);, where the first is a constant that cannot be changed directly and the second is a setter function, which changes the first property. (setPerson(someData)) 
let me know if you have questions 🙂 have a great night




notes 7/11
What's up with the resizing.  it flips out when too wide.

made 1 container of cards.  how do I display only one card?




Questions : 
How do I affect the style of something?  Like display : flex?
What's order of operation for style? Like cardgroup than stylesheet?

What am I doing?  Like... is this react? Javascript? 
Reactstrap?  Bootstrap + REACT with Reactstrap components.
I think it's javascript with react...
Reactstrap are the componants I use. 

How do I want to lay it out?
like a dating app?   
Avatar photo on left, description on right, send a message?
toggle through the cards? 
use carousel to change people.
list to display the information

pagination?   the 1234 > >> at bottom of page...


