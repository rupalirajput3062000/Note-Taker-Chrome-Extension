chrome.storage.sync.get("notes", (note) => {
  $("#dummyText").html(note.notes);
});
$(function () {
  $("#deleteAll").click(() => {
    let op = confirm("Are you Sure you want to delete the whole Data ?");
    if (op) {
      chrome.storage.sync.remove("notes", (note) => {
        location.reload();
      });
    }
  });
  $("#saveChange").click(() => {
    $("#changeData").css("display", "block");
    $("#dummyText").css("display", "none");
    chrome.storage.sync.get("notes", (note) => {
      let notes = note.notes;
      let res = notes.replace("<br>", "");
      $("#changeData").text(res);
      $("#Update").css("display", "block");
      $("#saveChange").css("display", "none");
      $("#Update").click(() => {
        let newNote = $("#changeData").val();
        $("#changeData").css("display", "none");
        $("#dummyText").css("display", "block");
        chrome.storage.sync.set({ notes: newNote });
        location.reload();
      });
    });
  });
});
