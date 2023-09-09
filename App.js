document.addEventListener("DOMContentLoaded", function() {
    const editor = document.getElementById("editor");


    function addText() {
        const textElement = document.createElement("p");
        textElement.textContent = "Your text goes here.";
        editor.appendChild(textElement);
    }


    function addImage() {
        const imageUrl = prompt("Enter the image URL:");
        if (imageUrl) {
            const imageElement = document.createElement("img");
            imageElement.src = imageUrl;
            editor.appendChild(imageElement);
        }
    }


    function addVideo() {
        const videoUrl = prompt("Enter the video URL:");
        if (videoUrl) {
            const videoElement = document.createElement("iframe");
            videoElement.src = videoUrl;
            videoElement.setAttribute("frameborder", "0");
            videoElement.setAttribute("allowfullscreen", "true");
            editor.appendChild(videoElement);
        }
    }


    const addTextButton = document.getElementById("addText");
    const addImageButton = document.getElementById("addImage");
    const addVideoButton = document.getElementById("addVideo");

    addTextButton.addEventListener("click", addText);
    addImageButton.addEventListener("click", addImage);
    addVideoButton.addEventListener("click", addVideo);
});