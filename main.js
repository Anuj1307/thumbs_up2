
Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach( 'camera' );

function take_snapshot()
{
    Webcam.snap(function(data_uri)
    {
        console.log("test");
        document.getElementById("result").innerHTML = '<img id="capture_image" src="'+data_uri+'"/>'
});
}

console.log('ml5 version', ml5.version)

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Dvu5o8PUm/model.json',modelLoaded);

function modelLoaded()
{
    console.log('Model Loaded!');
}

function speak()
{
    var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is " + prediction_1;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1);
    synth.speak(utterThis);
}