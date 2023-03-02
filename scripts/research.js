$(function () {
  $(".slideshow").load("../research/MBDProteins.html"); // First page shown
});

var pages = [
  "../research/MBDProteins.html",
  "../research/NuRD-recruitment.html",
  "../research/NuRD-disruption.html",
]; // Pages in order to be shown

var currentPage = 0;

$(".pageNum").text((currentPage + 1) + "/" + (pages.length));

$(".next").click(function () {
  if (!(currentPage == pages.length - 1)) {
    currentPage++;
    $(".pageNum").text((currentPage + 1) + "/" + (pages.length));
    $(".slideshow").load(pages[currentPage]);
  } else if (currentPage == pages.length - 1) {
    currentPage = 0;
    $(".pageNum").text((currentPage + 1) + "/" + (pages.length));
    $(".slideshow").load(pages[currentPage]);
  }
});

$(".prev").click(function () {
  if (!(currentPage == 0)) {
    currentPage--;
    $(".pageNum").text((currentPage + 1) + "/" + (pages.length));
    $(".slideshow").load(pages[currentPage]);
  } else if (currentPage == 0) {
    currentPage = pages.length - 1;
    $(".pageNum").text((currentPage + 1) + "/" + (pages.length));
    $(".slideshow").load(pages[currentPage]);
  }
});
