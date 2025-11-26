// const button = document.getElementsByClassName('toggle'); 

// for (let i = 0; i < button.length; i++) { 
//     button[i].addEventListener("click", function() { // arrow function not applicable here 
//         this.classList.toggle("active"); 
//         const content = this.parentElement.nextElementSibling; // gets the next sibling in line
//         if (content.style.display === 'block') { // checks if this element is currently visible 
//              content.style.display = 'none'; 
//             } else { 
//                 content.style.display = 'block'; 
//             }
//     }); 
// } 

document.addEventListener("DOMContentLoaded", () => { 
const buttons = document.getElementsByClassName('toggle'); 

for (let i = 0; i < buttons.length; i++) { 
    buttons[i].addEventListener("click", function() { 
        const answerElement = this.parentElement.nextElementSibling; 

        // Find the plus and minus icons within the clicked buttons 
        const minusIcon = this.querySelector('.minus-icon'); 
        const plusIcon = this.querySelector('.plus-icon'); 

        if (answerElement.style.display === 'block') { 
            answerElement.style.display = 'none';
            minusIcon.style.display = 'none'; 
            plusIcon.style.display = 'inline'; 
        } else { 
            answerElement.style.display = 'block'; 
            minusIcon.style.display = 'inline'; 
            plusIcon.style.display = 'none'; 
        }
    });
}
}); 

// console.log(this.parentElement); // should be <div class="faq">
// console.log(this.parentElement.nextElementSibling); // should be <p class="answer">
console.log(buttons.length); 
console.log(buttons[i]); 