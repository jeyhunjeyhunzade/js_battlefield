{
  /*
        If the node passed into appendChild() is already part of the document, 
        it is removed from its previous location and placed at the new location.
    */
  let returnedNode = someNode.appendChild(someNode.firstChild);
  alert(returnedNode == someNode.firstChild); // false
  alert(returnedNode == someNode.lastChild); // true
}

{
  /*
    Because all attributes are properties, assigning directly to the property can set 
    the attribute values, as shown here:
  */
  div.id = "someOtherId";
  div.align = "left";

  // but custom ones not
  div.mycolor = "red";
  alert(div.getAttribute("mycolor")); // null (except in Internet Explorer)
}

{
  /*
    When used on an element, this method works exactly the same as the document version 
    except that the search is rooted on the element, 
    so only descendants of that element are returned:
  */
  let ul = document.getElementById("myList");
  let items = ul.getElementsByTagName("li");
}

{
  // Text node
  let element = document.createElement("div");
  element.className = "message";

  let textNode = document.createTextNode("Hello world!");
  element.appendChild(textNode);
  let anotherTextNode = document.createTextNode("Yippee!");
  element.appendChild(anotherTextNode);

  document.body.appendChild(element);
  alert(element.childNodes.length); // 2

  element.normalize();

  alert(element.childNodes.length); // 1
  alert(element.firstChild.nodeValue); // "Hello world!Yippee!"
}

{
  // Document fragment
  /*
    Suppose you would like to add three list items to this <ul> element. Adding each item 
    directly to the element causes the browser to rerender the page with the new information.
    To avoid this, the fol- lowing code example uses a document fragment to create the list items
    and then add them all at the same time:
  */
  let fragment = document.createDocumentFragment();
  let ul = document.getElementById("myList");

  for (let i = 0; i < 3; ++i) {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(`Item ${i + 1}`));
    fragment.appendChild(li);
  }

  /*
    When the loop is complete, all of the items are added to the <ul> element by calling 
    appendChild() and passing in the document fragment. At that point, the document 
    fragment’s child nodes are all removed and placed onto the <ul> element:
  */
  ul.appendChild(fragment);
}

// MUTATION OBSERVERS
{
  /*
    At this point, any attribute changes to the <body> element will be detected by 
    the MutationObserver instance, and the callback will asynchronously execute. 
  */
  let observer = new MutationObserver(() =>
    console.log("<body> attributes changed")
  );
  observer.observe(document.body, { attributes: true });

  document.body.className = "foo";
  console.log("Changed body class");

  // Changed body class
  // <body> attributes changed

  /*
    Note that the callback console.log executes second, indicating that the callback 
    does not synchronously execute with the actual DOM mutation.
  */
}

{
  let observer = new MutationObserver((mutationRecords) =>
    console.log(mutationRecords)
  );
  observer.observe(document.body, { attributes: true });
  document.body.setAttribute("foo", "bar");

  // [MutationRecord]:
  // [
  // {
  // addedNodes: NodeList [],
  // attributeName: "foo",
  // attributeNamespace: null,
  // nextSibling: null,
  // oldValue: null,
  // previousSibling: null
  // removedNodes: NodeList [],
  // target: body
  // type: "attributes"
  // }
  // ]
}

{
  let observer = new MutationObserver((mutationRecords) =>
    console.log(mutationRecords)
  );
  observer.observe(document.body, { attributes: true });
  document.body.className = "foo";
  document.body.className = "bar";
  document.body.className = "baz";
  // [MutationRecord, MutationRecord, MutationRecord]
}

{
  // MutationObserver
  let observer = new MutationObserver((mutationRecords, mutationObserver) =>
    console.log(mutationRecords, mutationObserver)
  );
  observer.observe(document.body, { attributes: true });
  document.body.className = "foo";
  // [MutationRecord], MutationObserver
}

{
  // MutationObserver disconnet()
  let observer = new MutationObserver(() =>
    console.log("<body> attributes changed")
  );
  observer.observe(document.body, { attributes: true });
  document.body.className = "foo";
  observer.disconnect();
  document.body.className = "bar"; // (nothing logged)
}

{
  /*
    To allow for these queued callbacks to execute before invoking disconnect(),
     a setTimeout could be employed to allow for pending callbacks to execute:
  */

  let observer = new MutationObserver(() =>
    console.log("<body> attributes changed")
  );

  observer.observe(document.body, { attributes: true });
  document.body.className = "foo";

  setTimeout(() => {
    observer.disconnect();
    document.body.className = "bar";
  }, 0);
  // <body> attributes changed
}

{
  // Mutation observer takeRecords()
  /*
    useful when you would like to call disconnect() but wish to handle all pending 
    MutationRecord instances in the queue which are discarded by calling disconnect()
  */
  let observer = new MutationObserver((mutationRecords) =>
    console.log(mutationRecords)
  );

  observer.observe(document.body, { attributes: true });

  document.body.className = "foo";
  document.body.className = "bar";
  document.body.className = "baz";

  console.log(observer.takeRecords());
  console.log(observer.takeRecords());

  // [MutationRecord, MutationRecord, MutationRecord]
  // []
}
