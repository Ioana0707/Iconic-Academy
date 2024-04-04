 /*=============== SHOW MENU ===============*/
 const navMenu = document.getElementById('nav-menu'),
 navToggle = document.getElementById('nav-toggle'),
 navClose = document.getElementById('nav-close')

/* Menu show */
navToggle.addEventListener('click', () =>{
navMenu.classList.add('show-menu')
})

/* Menu hidden */
navClose.addEventListener('click', () =>{
navMenu.classList.remove('show-menu')
})




//  function translatePage() {
//     let targetLanguage = document.getElementById("language").value;
    
//     // Get the elements that contains text 
//     let elements = document.querySelectorAll('*:not(script):not(style)');
    
//     //Go through each element and translate the text 
//     elements.forEach(element => {
//         if (element.childNodes.length === 1 && element.childNodes[0].nodeType === Node.TEXT_NODE) {
//             let textToTranslate = element.textContent;
            
//             //Constructs the URL for the Google Translate API 
//             let apiUrl = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLanguage}&dt=t&q=${encodeURIComponent(textToTranslate)}`;
            
//             // Use fetch to call the API
//             fetch(apiUrl)
//                 .then(response => response.json())
//                 .then(data => {
//                     // Extract and replace translated text
//                     var translatedText = data[0][0][0];
//                     element.textContent = translatedText;
//                 })
//                 .catch(error => console.error('Error:', error));
//         }
//     });
// }





