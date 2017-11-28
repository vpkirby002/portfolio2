$(function() {
  var doneCheck = 0;
  var curZindex = 0;
  $(".pic").draggable({
    containment: "body",
    scroll: false
  }).on("mousedown", function() {
    $(this).css("z-index", curZindex + 1).children().addClass("grabbed").mouseup(function() {
      $(this).removeClass("grabbed");
    });
    curZindex++;
  });

  shuffle();
  dropSet();

  $(".puzzlify").on("click", function() {
    if ($("input").val() != "")
    puzzlify();
  });

  function shuffle() {
    for (var k = 1; k <= 5; k++)
      for (var i = 1; i <= 5; i++) {
        var posHolderLeft;
        var posHolderTop;
        var randIndex = Math.floor(Math.random() * 5) + 1;
        var randIndex2 = Math.floor(Math.random() * 5) + 1;
        posHolderTop = $(".pic-" + i + "-" + k).css("top");
        posHolderLeft = $(".pic-" + i + "-" + k).css("left");
        $(".pic-" + i + "-" + k).css("top", $(".pic-" + randIndex + "-" + randIndex2).css("top"));
        $(".pic-" + randIndex + "-" + randIndex2).css("top", posHolderTop);
        $(".pic-" + i + "-" + k).css("left", $(".pic-" + randIndex + "-" + randIndex2).css("left"));
        $(".pic-" + randIndex + "-" + randIndex2).css("left", posHolderLeft);
      }
  }

  function dropSet() {
    for (var i = 1; i <= 5; i++)
      for (var k = 1; k <= 5; k++) {
        $(".dz-" + i + "-" + k).droppable({
          accept: ".pic-" + i + "-" + k,
          drop: function(event, ui) {
            doneCheck++;
            $(ui.helper[0]).css("top", $(this).position().top);
            $(ui.helper[0]).css("left", $(this).position().left);
            $(ui.helper[0]).draggable("disable").css("z-index", "1");
            if (doneCheck == 25) {
              $(".pic").css("border", "none");
              alert("Good job!");
            }
          }
        })
      }
  }

  function puzzlify() {
    var picAddr = "url(\"" + $('input').val() + "\")";
    $("input").val("");
    $(".inner-pic").css("background-image", picAddr);
    $(".indz").css("background-image", picAddr);
  }

})