document.getElementById("noButton").addEventListener("click", function() {
    zoomIn(1.1);
    changeGif(); // Change the GIF each time the "No" button is clicked
});

document.getElementById("yesButton").addEventListener("click", function() {
    window.location.href = "thankyou.html";
});

const gifUrls = [
    "https://media1.tenor.com/m/Z9mXH7-MlcsAAAAd/sexy-black-man-thirst-trap.gif",
    "https://media1.tenor.com/m/tLX14hqgV4kAAAAC/black-man-down-syndrome.gif",
    "https://c.tenor.com/rC_mbGxsqu8AAAAM/dawg-skull-emoji.gif"
];

let currentGifIndex = 0;

function zoomIn(scale) {
    if (scale <= 2) {
        document.body.style.transform = "scale(" + scale + ")";
        if (scale === 2) {
            document.getElementById("noButton").remove(); // Remove the "No" button from the DOM
        }
        else {
            document.getElementById("noButton").removeEventListener("click", changeGif); // Remove previous event listener
            document.getElementById("noButton").addEventListener("click", function() {
                zoomIn(scale + 0.1);
                changeGif(); // Change the GIF each time the "No" button is clicked
            });
        }
    }
}

function changeGif() {
    currentGifIndex = (currentGifIndex + 1) % gifUrls.length; // Increment index and wrap around if needed
    document.getElementById("gifImage").src = gifUrls[currentGifIndex];
}

