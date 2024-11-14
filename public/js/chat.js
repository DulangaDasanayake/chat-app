const socket = io();

// Send message
const form = document.getElementById('form');
const input = document.getElementById('input');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (input.value) {
    socket.emit('chat message', input.value);
    input.value = '';
  }
});

// Receive message
socket.on('chat message', (msg) => {
  const item = document.createElement('li');
  item.textContent = msg;
  document.getElementById('messages').appendChild(item);
  window.scrollTo(0, document.body.scrollHeight);
});
