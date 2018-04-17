const img = document.querySelector('img');
const video = document.querySelector('video');
const file = document.querySelector('input');

function openCam() {
    video.style.display = "block";
    navigator.getUserMedia({ video: true }, function (stream) {
        video.src = window.URL.createObjectURL(stream);
        let mediaStreamTrack = stream.getVideoTracks()[0];
        imageCapture = new ImageCapture(mediaStreamTrack);
        video.play();
    }, function (err) {
        console.error(err);
    }
    );
}

function stopCam() {
    video.style.display = "none";
    navigator.getUserMedia({ audio: false, video: true },
        function (stream) {
            var track = stream.getTracks()[0];
            track.stop();
        },
        function (error) {
            console.log('getUserMedia() error', error);
        });
}
function takePhoto() {
    imageCapture.takePhoto()
        .then(blob => {
            console
            let url = window.URL;
            img.src = url.createObjectURL(blob);
            url.revokeObjectURL(blob);
        })
        .catch((error) => {
            console.log('error');
        });
};

