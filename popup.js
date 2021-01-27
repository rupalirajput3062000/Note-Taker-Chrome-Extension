$(function () {
  $("#btnSave").click(() => {
    chrome.storage.sync.get("notes", (note) => {
      let newNote = "";
      if (note.notes) {
        newNote += note.notes;
      }
      let notesNew = $("#addText").val();
      if (notesNew) newNote = newNote + "<br>" + notesNew;
      chrome.storage.sync.set({ notes: newNote });
      $("#addText").val("");
      close();
    });
  });
});
