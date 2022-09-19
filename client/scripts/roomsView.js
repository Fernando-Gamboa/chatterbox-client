// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    RoomsView.$button.on('click', RoomsView.handleClick);
    RoomsView.$select.on('change', RoomsView.handleChange);
  },

  render: function() {
    // TODO: Render out the list of rooms.
    // RoomsView.$select.html(''); // added this ---
    let rooms = Rooms.get();
    rooms.forEach(function(room) {
      RoomsView.renderRoom(room);
    });
  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    let $roomname = $('<option></option>').text(roomname);

    RoomsView.$select.append($roomname);
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
    Rooms._selectedRoom = RoomsView.$select.val();
    console.log(MessagesView._newData, ' newData');
    console.log(Rooms._selectedRoom, 'lol');

    MessagesView._newData = [];
    MessagesView.$chats.html('');

    MessagesView.render(Rooms._selectedRoom);
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
    var room = prompt('What would you like to name your room?');
    Rooms.add(room);
    RoomsView.render();
  }

};
