const button = document.getElementsByClassName('toggle'); 

for (let i = 0; i < button.length; i++) { 
    button[i].addEventListener("click", function() { // arrow function not applicable here 
        this.classList.toggle("active"); 
        const content = this.parentElement.nextElementSibling; // gets the next sibling in line
        if (content.style.display === 'block') { // checks if this element is currently visible 
             content.style.display = 'none'; 
            } else { 
                content.style.display = 'block'; 
            }
    }); 
} 

console.log(this.parentElement); // should be <div class="faq">
console.log(this.parentElement.nextElementSibling); // should be <p class="answer">
