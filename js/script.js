// "use strict";
//
// var emblaNode = document.getElementById("embla");
// var embla = EmblaCarousel(emblaNode, {
//     // align: "start",
//     loop: "true"
// });
//
//
// var prevEmbla = document.getElementById('emblaButtonPrev');
// prevEmbla.addEventListener('click', embla.scrollPrev);
// var nextEmbla = document.getElementById('emblaButtonNext');
// nextEmbla.addEventListener('click', embla.scrollNext);
//
// var autoplay = function autoplay(embla, interval) {
//     var timer = 0;
//
//     var play = function play() {
//         stop();
//         requestAnimationFrame(function () {
//             return timer = window.setTimeout(next, interval);
//         });
//     };
//
//     var stop = function stop() {
//         window.clearTimeout(timer);
//         timer = 0;
//     };
//
//     var next = function next() {
//         if (embla.canScrollNext()) {
//             embla.scrollNext();
//         } else {
//             embla.scrollTo(0);
//         }
//
//         play();
//     };
//
//     return {
//         play: play,
//         stop: stop
//     };
// };
//
// var autoplayer = autoplay(embla, 3000);
// embla.on("pointerDown", autoplayer.stop);
// embla.on("init", autoplayer.play);
//
//
// // var emblaButtons = Array.from(document.getElementsByClassName('embla__button'));
// // emblaButtons.forEach(function (el) {
// //     el.addEventListener('click', function () {
// //         el.blur();
// //     });
// // });