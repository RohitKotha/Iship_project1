AWS.config.update({
    region: 'us-east-1',
    accessKeyId: '',      // Replace with your access key ID
    secretAccessKey: '' // Replace with your secret access key
});

function translateText(sourceText, sourceLang, targetLang, callback) {
    var translate = new AWS.Translate();

    var params = {
        Text: sourceText,
        SourceLanguageCode: sourceLang,
        TargetLanguageCode: targetLang
    };

    translate.translateText(params, function (err, data) {
        if (err) {
            console.log(err, err.stack);
            callback(err, null);
        } else {
            console.log(data);
            callback(null, data.TranslatedText);
        }
    });
}

var languageCodes = {
    "english": "en",
    "spanish": "es",
    "french": "fr",
    "german": "de",
    "chinese": "zh",
    "japanese": "ja",
    "korean": "ko",
    "russian": "ru",
    "portuguese": "pt",
    "italian": "it",
    "dutch": "nl",
    "arabic": "ar",
    "hindi": "hi",
    "bengali": "bn",
    "tamil": "ta",
    "telugu": "te",
    "marathi": "mr",
    "gujarati": "gu",
    "kannada": "kn",
    "malayalam": "ml",
    "punjabi": "pa",
    "oriya": "or",
    "assamese": "as",
    "urdu": "ur",
    // Add more languages as needed
};

function performTranslation() {
    var sourceText = document.getElementById("sourceText").value;
    var sourceLangName = document.getElementById("sourceLang").value.toLowerCase();
    var targetLangName = document.getElementById("targetLang").value.toLowerCase();

    var sourceLang = languageCodes[sourceLangName];
    var targetLang = languageCodes[targetLangName];

    if (!sourceLang || !targetLang) {
        document.getElementById("translatedText").innerText = "Error: Invalid language name.";
        return;
    }

    translateText(sourceText, sourceLang, targetLang, function(err, translatedText) {
        if (err) {
            document.getElementById("translatedText").innerText = "Error: " + err.message;
        } else {
            document.getElementById("translatedText").innerText = translatedText;
        }
    });
}
