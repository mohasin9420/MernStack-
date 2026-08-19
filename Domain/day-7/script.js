function changeGreeting() {

var greetingElement = document.getElementById('greeting');
// Check if the element exists
if (greetingElement) {
// Change the text content of the element
greetingElement.textContent = 'Welcome to Client-Side JavaScript!';
}
}