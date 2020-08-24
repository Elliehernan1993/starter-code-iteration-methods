// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
console.log(users)

function printKata (kataNumber, object) {
    // For the usage of the DETAILS and SUMMARY tags
    // in HTML, see: http://mdn.io/details-element
    const detailsElement = document.createElement('details')
    main.append(detailsElement)
    //
    const summaryElement = document.createElement('summary')
    summaryElement.append("KATA " + kataNumber)
    detailsElement.append(summaryElement)
    //
    // http://mdn.io/json.stringify
    const stringifiedObject = JSON.stringify(object)
    detailsElement.append(stringifiedObject)
}

// Append the katas to this element:
const main = document.querySelector('main')

// KATA 1 -- Filter isActive === True
// array to show only the users with an isActive property of true.
const kata1 = users.filter(user => user.isActive === true)
printKata(1, kata1)

//KATA 2 -- Map over users to show only email
const kata2 = users.map(user => user.email)
printKata(2, kata2)

//KATA 3 -- Use some() to check whether 1 or more users work at company 'OVATION'
const kata3 = users.some(user => user.company === "OVATION")
printKata(3, kata3)

//KATA 4 Use the .find() method to Find the first user in the array over the age of 38
const kata4 = users.find(user => user.age > 38)
printKata(4, kata4)

//KATA 5 use filter () and find() to find first user who is over 38 and active
const kata5 = users.filter(user => user.isActive === true)
                    .find(user => user.age > 38)
 printKata(5, kata5)                   

 //KATA 6 Use the .filter() and .map() methods toShow the balance of every user in the array from the "ZENCO" company.
 const kata6 = users.filter(user => user.company === "ZENCO")   
                    .map(user => user.balance)
printKata(6, kata6)

//Kata 7: Use the .filter() method with .includes() and the .map() method
//Show the age of every user with the "fugiat" tag.
const kata7 = users.filter(user => user.tags.includes('fugiat'))
                    .map(fugiatUsers => fugiatUsers.age)
printKata(7, kata7)

