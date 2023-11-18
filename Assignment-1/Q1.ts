//Q2. Personal Message: Store a person’s name in a variable, and print a message to that person. 
//Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”

let personName:string="Muneeb"
console.log(`Hello ${personName},would you like to learn some python today?`);

//Q4. Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. 
//Your output should look something like the following, including the quotation marks:
//Albert Einstein once said, “A person who never made a mistake never tried anything new.”

let FamousQuote:string=`Albert Einstein said,"A person who never made a mistake never tried anything new."`
console.log(FamousQuote);

//Q5. Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. 
//Then compose your message and store it in a new variable called message. Print your message.

let famous_person:string="Albert Einstein"
let message:string="A person who never made a mistake never tried anything new."
console.log(`${famous_person} once said, "${message}"`)
 
//Q6. Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name.
// Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace 
//around the name is displayed. Then print the name after striping the white spaces.

let nameWithWhiteSapce: string = "\t\n  Rashid Munir  \n\t";

//print name with loading and trailing White Space 

console.log("Name with white Space is = ", nameWithWhiteSapce);



//Q9. Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message
// that reveals your favorite number. Print that message.

let favourite_Number:number=3
let messageToShow:string =`${favourite_Number} is my  favourite number.`
console.log(messageToShow)