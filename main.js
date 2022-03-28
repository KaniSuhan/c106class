function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    var classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/noIo-ZNFI/model.json",modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
console.log("ready");
}