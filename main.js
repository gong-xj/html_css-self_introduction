// import './style.css'

msg = document.querySelector('#msg-box')
const msgBtn = document.querySelector('#msg-btn')
const msgs = document.querySelector('#msgs')
msgBtn.addEventListener('click', onSubmit);

function onSubmit() {
  if (msg.value === '') {
    alert("leave a message before submit")
  } else {
    console.log(msg.value)
    const wrotenMsg = document.createElement('div')
    wrotenMsg.appendChild(document.createTextNode(`${msg.value}`));
    wrotenMsg.innerHTML = msg.value
    msgs.appendChild(wrotenMsg)
    msg = ''
  }
}
