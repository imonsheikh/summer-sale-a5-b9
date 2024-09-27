// function concatenateArrayToString(arr) {
//   let result = "";
//   for (const element of arr) {
//     result += element;
//   }
//   return result;
// }

// const array = ["Hello", " ", "World", "!"];
// const concatenatedString = concatenateArrayToString(array);
// console.log(concatenatedString);


// practice 
let titleCount = 1;

const cards = document.querySelectorAll('.card')
// console.log(cards);

for(let index = 0; index < cards.length; index++){
  const card = cards[index]
  // console.log(card);
  card.addEventListener('click', function(){
    // console.log('clicked');

    //get the title
    const title = card.querySelector('h3').innerText
    // console.log(title);
    // console.log(title.innerText);
    const price = card.querySelector('span').innerHTML
    // console.log(price);
    // console.log(price.innerText);
    
    const titleContainer = document.getElementById('title-container')
    console.log(titleContainer);
    
    const p = document.createElement('p')
    p.innerText = titleCount + ". " + title

    titleContainer.appendChild(p)
    console.log(titleContainer);
    titleCount++
    
  })
  
}
