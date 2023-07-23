Este es mi readme.md. Aquí agregare mis notas con respecto a los procesos. Las agregare en un futuro super cercano ya que mis hallazgos a estas soluciones fueron lecciones de aprendiizaje. 


DOCUMENT OBJECT MODEL(DOM)

Element Selectors:

  • document.getElementById(elementId)

Permite seleccionar un elemento de DOM mediante id del elemento (regresa solamente el elemento de DOM seleccionado)


  • document.getElementByClassName(elementClassName)

Permite seleccionar todos que cuenten con la clase indicada en el metodo.Devuelve un objeto del tipo HTML collection


  • document.getElementByTagName(elementTagName)

Permite seleccionar todos los elementos por tagname. Devuelve un objeto de tipo HTML collection.


  • document.querySelector(cssSelector)
Permite selceccionar el primer elemento que cumpla con el selector de css provisto en el argument. Devuelve un unico elemento de DOM (NodeList).


  • document.quesrySelectorAll(cssSelector)

Permite seleccionar todos los elementos de DOM que cumplan con el selector de CSS provisto como argumento devuele una NodeList. 



IMPORTANT:NODELIST VS HTMLCOLLECTION


---Methods that return NodeList & HTMLCollection (ORIGIN)--- 

Methods that return NodeList:
• `getElementsByName()`
• `querySelectorAll()`
• `childnodes`

Methods that return HTMLCollection object:
• `getElementsByTagName()`
• `detElementsByClassName()`

--- I T E R A B I L I T Y ---

• Both NodeList and HTMLCollection are iterable, which means you can loop through their elements using methods like ``forEach` or a `for...of` loop.

--- C O N T E N T S ---

• NodeList: Contains a list of nodes (e.g., elements, text nodes, comments) that match the specified selector.

• HTMLCollection: Contains a list of elements that match the specified tag name or class name.

--- L I V E  V S  S T A T I C ---

• NodeList: Generally a live collection, meaning it reflects the changes in DOM. If the DOM changes, the NodeList updates automatically.
    - `getElementsByName()`` :Returns a live NodeList.
    - `querySelectorAll()` :is not a live NodeList.
    
• HTMLCollection: Also a live collection; it behaves similarly to NodeList in terms of reflecting DOM changes. 
    - `getElementsByClassName()` :Returns a live HTMLCollection.
    - ``getElementsByTagName()` :Returns a live HTMLCollection.

---JavaScript methods for NodeList---

• `forEach()` :Allows you to iterate through each node in the NodeList.
• `item(index)` :Returns the node at the specified index in the NodeList.
• `length` :Returns the number of nodes in the NodeList.

---JavaScript methods for HTMLCollection---

• `length` :Returns the number of elements in the HTMLCollection.
• `item(index)` :Returns the element at the specified index in the HTMLCollection.
• Additionally, HTMLCollection can be accessed using array like notation, like `collection[index]` to retrieve elements.

NOTE: `getElementsById()` :Returns a single, live DOM element (node) that has the specified ID. 

.                   :::!~!!!!!:.
                  .xUHWH!! !!?M88WHX:.
                .X*#M@$!!  !X!M$$$$$$WWx:.
               :!!!!!!?H! :!$!$$$$$$$$$$8X:
              !!~  ~:~!! :~!$!#$$$$$$$$$$8X:
             :!~::!H!<   ~.U$X!?R$$$$$$$$MM!
             ~!~!!!!~~ .:XW$$$U!!?$$$$$$RMM!
               !:~~~ .:!M"T#$$$$WX??#MRRMMM!
               ~?WuxiW*`   `"#$$$$8!!!!??!!!
             :X- M$$$$       `"T#$T~!8$WUXU~
            :%`  ~#$$$m:        ~!~ ?$$$$$$
          :!`.-   ~T$$$$8xx.  .xWW- ~""##*"
.....   -~~:<` !    ~?T#$$@@W@*?$$      /`
W$@@M!!! .!~~ !!     .:XUW$W!~ `"~:    :
#"~~`.:x%`!!  !H:   !WM$$$$Ti.: .!WUn+!`
:::~:!!`:X~ .: ?H.!u "$$$B$$$!W:U!T$$M~
.~~   :X@!.-~   ?@WTWo/"*$$$W$TH$! `
Wi.~!X$?!-~    : ?$$$B$Wu/"**$RM!
$R@i.~~ !     :   ~$$$$$B$$en:``
?MXT@Wx.~    :     ~"##*$$$$M~