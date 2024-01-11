# Int Mask

#### Brief description
A mask to handle with int values in html inputs.

#### Use
Is very simple of use Int Mask. Put the one script tag after body tag in the html file using the `IntMask.js` as source:

    <script src="<your path>/IntMask.js"</script>
  
 In a script, in the same html file, created a instance of `IntMask`passing as parameter the id of a input html element:
 
    const mask = new IntMask("id")
 
 That is it, the `IntMask` will be applied to the indicated input element.
 
The `IntMask` only will work if the html element indicated by the id is a text type input. In all other cases, `Error` objects containg different error messages will throw by `IntMask` constructor.

#### Testing the application
The html _testing-interface_ can be used to test the application. It can be download together with *IntMask* JS file.