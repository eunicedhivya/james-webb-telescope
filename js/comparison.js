var compareData = {
    "0": {
        "hubble": "April 24, 1990",
        "jwst": "December 22, 2021"
    },
    "1": {
        "hubble": "11,110 kg",
        "jwst": "6,500 kg"
    },
    "2": {
        "hubble": "13.2 m × 4.2 m",
        "jwst": "20.197 m × 14.162 m"
    },
    "3": {
        "hubble": "2.4 metres",
        "jwst": "6.5 metres"
    },
    "4": {
        "hubble": "-",
        "jwst": "1.32 metres"
    },
    "5": {
        "hubble": "-",
        "jwst": "22 x 12 metres"
    },
    "6": {
        "hubble": "-",
        "jwst": "5 layers"
    },
    "7": {
        "hubble": "Korsch telescope",
        "jwst": "Ritchey–Chrétien reflector"
    },
    "8": {
        "hubble": "UV, visible light",
        "jwst": "Infrared"
    },
    "9": {
        "hubble": "2,800 watts",
        "jwst": "2 kilowatts"
    },
    "10": {
        "hubble": "Low Earth Orbit",
        "jwst": "Halo Orbit"
    },
    "11": {
        "hubble": "512 kilometres",
        "jwst": "1.5 million kilometres"
    },
    "12": {
        "hubble": "1 billion years after big bang",
        "jwst": "0.3 billion years after big bang"
    }
}

// var compDesc = [{ "hubbleDesc": "Test1", "jamesDesc": "Test2" }, { "hubbleDesc": "Test3", "jamesDesc": "Test4" }];
$("#comparisonList li").on("click", function () {
    $("#comparisonList li").removeClass("active");
    $(this).addClass("active");
    var val = $(this).attr("data-id");
    // console.log(val);
    $(".hubbleDesc").text(compareData[val]["hubble"])
    $(".jamesDesc").text(compareData[val]["jwst"])
})

// var dev = window.matchMedia("(max-width:767px)")
// if (dev.matches) {
//     // console.log("mob");
//     var current = $(".active");
//     var crntId = current.attr("data-id");
//     var count = 0;
//     var countCurPos = 707;
//     $("#next").on("click", function () {
//         // var pos = $(this).position()
//         count += 1;
//         // // var left = 47%;
//         // crntId = parseInt(crntId) + 1;
//         // $("#comparisonList li[data-id=" + crntId + "]").click();
//         var position = $("#comparisonList li[data-id=" + count + "]").position();
//         console.log("Next", count, position);
//         countCurPos -= position.left;
//         $("#comparisonList").css('transform', 'translateX(' + (countCurPos - position.left) + 'px)');
//         // console.log(crntId, position.left);
//         // if (crntId) {
//         //     $("#comparisonList").css('transform', 'translateX(' + position.left * (1 / 2) + 'px)');
//         // }
//         // count += 1;
//     })
//     $("#prev").on("click", function () {
//         console.log("Prev");
//         // crntId = parseInt(crntId) - 1;
//         // $("#comparisonList li[data-id=" + crntId + "]").click();
//         // // console.log(crntId)
//     })
// }

var carousel_Links = document.querySelector('.carousel_links')

console.log(carousel_Links)
const carouselButtons = document.querySelectorAll('.carousel-button');
const numberOfImages = document.querySelectorAll('.carousel_links li').length;
let imageIndex = 0;
let translateX = 0;

document.getElementById("previous").addEventListener("click", function () {
    if (imageIndex !== 0) {
        imageIndex--;
        translateX += 150;
        console.log(imageIndex);
    }
    $("#comparisonList li[data-id=" + imageIndex + "]").click();
    carousel_Links.style.transform = 'translateX(' + translateX + 'px)';

})
document.getElementById("next").addEventListener("click", function () {
    if (imageIndex !== numberOfImages - 1) {
        imageIndex++;
        translateX -= 150;
    }
    console.log(imageIndex);
    $("#comparisonList li[data-id=" + imageIndex + "]").click();
    carousel_Links.style.transform = 'translateX(' + translateX + 'px)';
})

// carouselButtons.forEach(button => {
//     button.addEventListener('click', (event) => {
//         if (event.target.id === 'previous') {
//             if (imageIndex !== 1) {
//                 imageIndex--;
//                 translateX += 125;
//             }
//         } else {
//             if (imageIndex !== numberOfImages) {
//                 imageIndex++;
//                 translateX -= 125;
//             }
//         }

//         carousel_Links.style.transform = `translateX(${translateX}px)`;
//     });
// });