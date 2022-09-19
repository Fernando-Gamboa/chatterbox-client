// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _data: [],
  _selectedRoom: '', // added this ---

  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.
  add: function(room) {
    Rooms._data.push(room); // add room to _data
    Rooms._selectedRoom = room;
    RoomsView.render();
    // console.log(Rooms._selectedRoom, 'helllllllllllo')
    // console.log(RoomsView.$roomname, 'helllllllllllo')
  },

  updateRoom: function(room) {
    // this will add the room name to the drop down menu
    Messages.get().forEach(function(message) { // added this ---
      Rooms._data.add(message.roomname);
    });

    // update the Rooms list
    RoomsView.render();
  },

  get: function (room) {
    let unique = new Set(this._data);
    unique.delete('');
    unique.delete(null);

    return unique;
  }
};