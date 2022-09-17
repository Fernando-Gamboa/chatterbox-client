// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
  },

  render: function() {
    // TODO: Render _all_ the messages.

    // Messages._data.forEach()

  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    // big component
    // $message = MessageView.render()
    let $message = $('<div class="singleMessage"></div>');

    // smaller components - username, text
    let $username = $('<div class="username"></div>');
    $username.text(`${(message.username)}`);

    let $text = $('<div class="text"></div>');
    $text.text(`${(message.text)}`);

    // append the smaller components to $message
    $message.append($username, $text);

    MessagesView.$chats.append($message);
    console.log(MessagesView.$chats);


    return $message;
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }
};