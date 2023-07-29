Notes for 13th session: 


J A V A S C R I P T   E V E N T S :

HTML events are "things" that happen to HTML elements. When JavaScript is used in HTML pages. JavaScript can react on these events.

HTML Events: 

An HTML event can be something the browser does, or something a user does.

Here are some examples of HTML events: 

 •An HTML web page has finished loading.
 •An HTML input field was changed.
 •An HTML button was clicked. 

JavaScript lets you execute the code when events are detected. 


H T M L   E V E N T S:

Here is a list of the most common HTML events: 

EVENT       |DESCRIPTION
onchange    |An HTML element has been changed
onclick     |The user clicks and HTML element
onmouseover |The user moves the mouse over an HTML element
onmouseout  |The user moves the mouse away from an HTML element
onkeydown   |The user pushes a keyboard key
onload      |The browser has finished loading the page 
onkeydown   |Fires when a user is pressing a key
onkeypress  |Fires when a user presses a key
onkeyup     |Fires when a user releases a key
onscroll    |Script to be run when an element's scrollbar is being scrolled

NOTE: HTML allows event handler attributes, with JavaScript code, to be added to HTML elements. 

(can be added with single or double quotes)
<element event = "some-javascript">/ <element event = `some-javascript`>

ADDING EVENT LISTENERS:

element.addEventListener(event, callBack)

document.getElementById("search").addEventListener(`keyup`, (event) => {
    <!-- event.target representa el elemento que recibe el evento -->
    let value = event.target.value<!--obtengo lo que esta escrito en el input -->
    console.log(value)
})