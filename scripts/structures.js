$(function() {
  $("#coiled-coil").toggle("close"); // closes all but the first structure on load
});

var pages = [
  "#cMBD2",
  "#coiled-coil"
]; // list of structure IDs

var currentPage = 0;

$(".pageNum").text((currentPage + 1) + "/" + (pages.length));

$(".next").click(function () {
  if (!(currentPage == pages.length - 1)) {
    $(pages[currentPage]).toggle("close");
    currentPage++;
    $(pages[currentPage]).toggle("close");
    $(".pageNum").text((currentPage + 1) + "/" + (pages.length));
  } else if (currentPage == pages.length - 1) {
    $(pages[currentPage]).toggle("close");
    currentPage = 0;
    $(pages[currentPage]).toggle("close");
    $(".pageNum").text((currentPage + 1) + "/" + (pages.length));
  }
});

$(".prev").click(function () {
  if (!(currentPage == 0)) {
    $(pages[currentPage]).toggle("close");
    currentPage--;
    $(pages[currentPage]).toggle("close");
    $(".pageNum").text((currentPage + 1) + "/" + (pages.length));
  } else if (currentPage == 0) {
    $(pages[currentPage]).toggle("close");
    currentPage = pages.length - 1;
    $(pages[currentPage]).toggle("close");
    $(".pageNum").text((currentPage + 1) + "/" + (pages.length));
  }
});
