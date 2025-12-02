document.addEventListener("DOMContentLoaded", () => { // without this it doesn't work 
const buttons = document.getElementsByClassName('toggle'); // local scope

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

console.log(buttons.length); // global scope NOW IT WORKS 
console.log(buttons[i]); // global scope 
}); 

// // console.log(buttons.length); // global scope DOESN'T WORK
// // console.log(buttons[i]); // global scope 

 