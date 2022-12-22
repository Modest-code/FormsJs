
/** Documentations
 * After Putting in data; supposed to save that data in the html file; Found Solution 12/15/22
 
 * queryString variable ->
    * Location locates the URL of Page
    * Search returns the data after the extension name of the file.. 
    * example (http://127.0.0.1:5500/SubmittedForm.html) anything after the html is apart of the query string

 * new URLSearchParams() ->
    * making a new object, you would put a queryString into the empty parenthesis, 
    * this is so that it creates a new window object.
    * new is needed because you are (initializing an object) called an constructor


 * url.get() method -> 
    * Solves the problem, where I tried to get the value of the inputtag box and it returned a typeError,
    * The method returns the value given. 
    * Example: firstName= --> url.get("firstName") returns the value of the input box, 
    * Then you could use innerhtml to format that,
*/


//  Gets the Query string
export const queryString = window.location.search

//  creating a new object called URLSearchParams that searches the querystring
export const url = new URLSearchParams(queryString)

//  An Array With All the Data being given to Javascript
const FormOutput = {
    //  Row 1
    firstName: document.getElementById("firstName").innerHTML = ` ${url.get('firstName')}`,
    lastName: document.getElementById("lastName").innerHTML = ` ${url.get('lastName')}`,
    //  Row 2
    street: document.getElementById("street").innerHTML = ` ${url.get('street')}`,
    city: document.getElementById("city").innerHTML = ` ${url.get('city')}`,
    state: document.getElementById("state").innerHTML = ` ${url.get('state')}`,
    zip: document.getElementById("zip").innerHTML = ` ${url.get('zip')}`,
    //  Row 3
    phoneNumber: document.getElementById("phoneNumber").innerHTML = ` ${url.get('phoneNumber')}`,
    emailAddress: document.getElementById("emailAddress").innerHTML = ` ${url.get('emailAddress')}`
}

//  this is what the string returns
console.log(queryString) //?firstName=&lastName=&street=&city=&state=&zip=&phoneNumber=&emailAddress= 

//  Runs the Object made
FormOutput

// ->>>>>> using an onload to initalize the variables; to stop the null bug? 12/16/22 Fix