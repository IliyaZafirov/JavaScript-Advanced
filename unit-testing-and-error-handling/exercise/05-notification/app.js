// ⦁	Notification
// Write a JS function that receives a string message and displays it inside a div with id "notification. The div starts hidden and when the function is called, reveal it. After the user clicks on it, hide the div. In the example document, a notification is shown when you click on the button ["Get notified"].

function notify(message) {

  const wrapper = document.getElementById('notification');
  wrapper.textContent = message;
  wrapper.style.display = 'block'
  wrapper.addEventListener('click', () => wrapper.style.display = 'none');
  
}