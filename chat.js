 
 var config = {
   apiKey: "AIzaSyC9bnZqFFeexhBIfr3OgX2h-Cil1cl8lKw",
  authDomain: "chat-c0682.firebaseapp.com",
  databaseURL: "https://chat-c0682.firebaseio.com",
  projectId: "chat-c0682",
  storageBucket: "chat-c0682.appspot.com",
  messagingSenderId: "784392845157",
  appId: "1:784392845157:web:40a362bd432fa1b7a8538c",
  measurementId: "G-DN2KJN08J5"
};
firebase.initializeApp(config);

var chatData = firebase.database().ref();

function pushMessage(event) {
  if (event.keyCode == 13) {
    var name = $('#nameInput').val();
    var text = $('#messageInput').val();
    chatData.push({name: name, text: text});
    $('#messageInput').val('');
  }
}

$('#messageInput').keypress(pushMessage);

chatData.on("child_added", showMessage);

function showMessage(msg) {
  var message = msg.val();
  var messageSender = message.name;
  var messageContent = message.text;

  var messageEl = $("<div/>").addClass("message");
  var senderEl = $("<span/>").text(messageSender + ": ");
  var contentEl = $("<span/>").text(messageContent);
  
  messageEl.append(senderEl);
  messageEl.append(contentEl);
  $('#messages').append(messageEl);
}