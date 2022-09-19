// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),
  _newData: [],

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    this.$chats.click(this.handleClick);

  },

  render: function(roomName) {
    // TODO: Render _all_ the messages.
    if (typeof roomName === 'string') {
      Messages._data.forEach(function(rightMesssage) {
        if (rightMesssage.roomname === roomName) {
          MessagesView._newData.push(rightMesssage);
        }
      });
      MessagesView.$chats.html('');
      MessagesView._newData.filter(message => MessagesView.renderMessage(message));
      Messages._data.forEach(message => {Rooms.add(message.roomname)});
    } else {
      MessagesView.$chats.html('');
      Messages._data.filter(message => MessagesView.renderMessage(message));

      Messages._data.forEach(message => {Rooms.add(message.roomname)});
    }

  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    var $message = MessageView.render(message);
    MessagesView.$chats.prepend($message);
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
    console.log('hi you clicked a chat');
    Friends.toggleStatus(event.target.innerText);
  }
};