$(function () {
  $(".slideshow").load("../research/MBDProteins.html");
});

var pages = [
  "../research/MBDProteins.html",
  "../research/NuRD-recruitment.html",
  "../research/NuRD-disruption.html",
];

var currentPage = 0;

$(".pageNum").text(currentPage + 1);

$(".next").click(function () {
  if (!(currentPage == pages.length - 1)) {
    currentPage++;
    $(".pageNum").text(currentPage + 1);
    $(".slideshow").load(pages[currentPage]);
  }
});

$(".prev").click(function () {
  if (!(currentPage == 0)) {
    currentPage--;
    $(".pageNum").text(currentPage + 1);
    $(".slideshow").load(pages[currentPage]);
  }
});
