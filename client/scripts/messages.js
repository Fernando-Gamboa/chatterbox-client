// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  // TODO: Define how you want to store your messages.
  _data: [],

  // add to, and generally interact with the messages.
  addMessage: (message) => {
    newMessage = {
      username: message.username,
      text: message.text,
      roomName: message.roomname
    };

    Messages._data[message.message_id] = newMessage;
  },

  // TODO: Define methods which allow you to retrieve from,
  get: (message) => {
    // return Messages._data[message]

  }

};