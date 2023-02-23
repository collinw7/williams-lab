$(function () {
  $(".content-container").load("../slideshow/MBDProteins.html");
});

var pages = [
  "../slideshow/MBDProteins.html",
  "../slideshow/NuRD-recruitment.html",
  "../slideshow/NuRD-disruption.html",
];

var currentPage = 0;

$(".next").click(function () {
  if (!(currentPage == 2)) {
    currentPage++;
    $(".content-container").load(pages[currentPage])
  }
});

$(".prev").click(function () {
    if (!(currentPage == 0)){
        currentPage--;
        $(".content-container").load(pages[currentPage]);
    }
});