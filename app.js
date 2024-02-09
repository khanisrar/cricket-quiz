let time;
let currentIndex = 0;
let totalQuestionData = [{
    question: "IPL के एक इनिंग में सबसे ज्यादा रन बनाने वाला प्लेयर कौन है?",
    answers: ["ब्रेंडम मैकुलम", "क्रिश गेल", "AB डीविलिअर्स", "विराट कोहली"],
    correctAnswer: "क्रिश गेल"
},
{
    question: "IPL इतिहास में सबसे ज्यादा छक्का लगाने वाला प्लेयर कौन है?",
    answers: ["MS धोनी", "क्रिश गेल", "AB डीविलिअर्स", "रोहित शर्मा"],
    correctAnswer: "क्रिश गेल"
},
{
    question: "IPL के एक इनिंग में सबसे ज्यादा छक्का लगाने वाला प्लेयर कौन है?",
    answers: ["ब्रेंडम मैकुलम", "क्रिश गेल", "AB डीविलिअर्स", "विराट कोहली"],
    correctAnswer: "क्रिश गेल"
},
{
    question: "IPL इतिहास में सबसे ज्यादा चौका लगाने वाला प्लेयर कौन है?",
    answers: ["सुरेश रैना", "विराट कोहली", "AB डीविलिअर्स", "शिखर धवन"],
    correctAnswer: "शिखर धवन"
},
{
    question: "IPL के एक इनिंग में सबसे ज्यादा चौका लगाने वाला प्लेयर कौन है?",
    answers: ["शिखर धवन", "डेविड वार्नर", "AB डीविलिअर्स", "विराट कोहली"],
    correctAnswer: "AB डीविलिअर्स"
},
{
    question: "IPL इतिहास में सबसे तेज शतक लगाने वाला प्लेयर कौन है?",
    answers: ["ब्रेंडम मैकुलम", "क्रिश गेल", "AB डीविलिअर्स", "रोहित शर्मा"],
    correctAnswer: "क्रिश गेल"
},
{
    question: "IPL इतिहास में सबसे तेज अर्ध्दशतक लगाने वाला प्लेयर कौन है?",
    answers: ["सुनील नारायण", "क्रिश गेल", "KL राहुल", "युसूफ पठान"],
    correctAnswer: "KL राहुल"
},
{
    question: "IPL इतिहास में सबसे ज्यादा स्ट्राइक रेट कौन सा प्लेयर का है?",
    answers: ["ब्रेंडम मैकुलम", "क्रिश गेल", "AB डीविलिअर्स", "आंद्रे रसेल"],
    correctAnswer: "आंद्रे रसेल"
},
{
    question: "IPL इतिहास के एक इनिंग में सबसे ज्यादा स्ट्राइक रेट कौन सा प्लेयर का है?",
    answers: ["क्रिश मोरिस", "डेविड वार्नर", "AB डीविलिअर्स", "आंद्रे रसेल"],
    correctAnswer: "क्रिश मोरिस"
},
{
    question: "IPL इतिहास में सबसे ज्यादा शतक लगाने वाला प्लेयर कौन है?",
    answers: ["विराट कोहली", "क्रिश गेल", "AB डीविलिअर्स", "डेविड वार्नर"],
    correctAnswer: "क्रिश गेल"
},
{
    question: "IPL इतिहास में सबसे ज्यादा शतक लगाने वाला प्लेयर कौन है?",
    answers: ["विराट कोहली", "सुरेश रैना", "AB डीविलिअर्स", "डेविड वार्नर"],
    correctAnswer: "डेविड वार्नर"
},
{
    question: "IPL इतिहास में हाईएस्ट पार्टनरशिप किसके नाम है?",
    answers: ["विराट-गेल", "रैना-धोनी", "डीविलिअर्स-विराट", "वार्नर-बेरेस्टो"],
    correctAnswer: "डीविलिअर्स-विराट"
},
{
    question: "IPL इतिहास में हाईएस्ट ओपनिंग पार्टनरशिप किसके नाम है?",
    answers: ["विराट-गेल", "राहुल-अग्रवाल", "पदिकल-विराट", "वार्नर-बेरेस्टो"],
    correctAnswer: "वार्नर-बेरेस्टो"
},
{
    question: "IPL इतिहास में सबसे ज्यादा छक्का लगाने वाला भारतीय प्लेयर कौन है?",
    answers: ["विराट कोहली", "सुरेश रैना", "रोहित शर्मा", "MS धोनी"],
    correctAnswer: "रोहित शर्मा"
},
{
    question: "IPL इतिहास में सबसे ज्यादा शतक लगाने वाला भारतीय प्लेयर कौन है?",
    answers: ["विराट कोहली", "सुरेश रैना", "रोहित शर्मा", "KL राहुल"],
    correctAnswer: "विराट कोहली"
},
{
    question: "IPL में सबसे पहला शतक लगाने वाला प्लेयर कौन सा है?",
    answers: ["ब्रेंडम मैकुलम", "क्रिश गेल", "AB डीविलिअर्स", "आंद्रे रसेल"],
    correctAnswer: "ब्रेंडम मैकुलम"
},
{
    question: "IPL में सबसे पहला शतक लगाने वाला प्लेयर कौन सा है?",
    answers: ["मनीष पाण्डे", "सुरेश रैना", "युसूफ पठान", "सचिन"],
    correctAnswer: "मनीष पाण्डे"
},
{
    question: "पहला ipl टूर्नामेंट कब खेला गया था?",
    answers: ["2007 में", "2008 में", "2009 में", "2010 में"],
    correctAnswer: "2008 में"
},
{
    question: "भारत के प्रथम क्रिकेट के कप्तान कौन थे?",
    answers: ["सचिन", "लाला अमरनाथ", "कपिल देव", "C.K. नायडू"],
    correctAnswer: "C.K. नायडू"
},
{
    question: "BCCI कि स्थापना कब हुई थी?",
    answers: ["1947 में", "1926 में", "1930 में", "1920 में"],
    correctAnswer: "1926 में"
},
{
    question: "क्रिकेट में सबसे ज्यादा शतक लगाने वाले बल्लेबाज कौन है?",
    answers: ["सचिन तेंदुलकर", "रिक्की पोंटिंग", "विराट कोहली", "जैक कैलिस"],
    correctAnswer: "सचिन तेंदुलकर"
},
{
    question: "वनडे में एक इनिंग में सबसे ज्यादा रन बनाने वाले खिलाडी कौन है?",
    answers: ["वीरेद्र सहवाग", "रोहित शर्मा", "सचिन तेंदुलकर", "विराट कोहली"],
    correctAnswer: "रोहित शर्मा"
},
{
    question: "IPL के एक सीजन में सबसे ज्यादा रन बनाने वाले खिलाडी कौन है?",
    answers: ["केन विलिअम्सन", "डेविड वार्नर", "रोहित शर्मा", "विराट कोहली"],
    correctAnswer: "विराट कोहली"
},
{
    question: "रोहित शर्मा का ODI में 3 दोहरा शतक किसके किसके खिलाफ है?",
    answers: ["SL-1,ENG-1,AUS-1", "AUS-1,SL-2", "AUS-2,SL-1", "SL-1,PAK-1,WI-1"],
    correctAnswer: "AUS-1,SL-2"
},
{
    question: "ODI में सबसे तेज़ 10,000 रन बनाने वाले प्लेयर कौन है?",
    answers: ["सचिन तेंदुलकर", "रिक्की पोंटिंग", "कुमार संगकारा", "विराट कोहली"],
    correctAnswer: "विराट कोहली"
},
{
    question: "वनडे में एक इनिंग में सबसे तेज शतक लगाने वाले खिलाडी कौन है?",
    answers: ["AB डीबिलिअर्स", "रोहित शर्मा", "विराट कोहली", "कोरी एंडरसन"],
    correctAnswer: "AB डीबिलिअर्स"
},
{
    question: "वनडे में एक इनिंग में भारत कि ओर से सबसे तेज शतक लगाने वाले खिलाडी कौन है?",
    answers: ["रोहित शर्मा", "विराट कोहली", "युवराज सिंह", "वीरेंद्र सहवाग"],
    correctAnswer: "विराट कोहली"
},
{
    question: "किसकी कप्तानी में भारत सबसे ज्यादा ICC ट्राफी जीती है?",
    answers: ["विराट कोहली", "गौतम गंगोली", "कपिल देव", "MS धोनी"],
    correctAnswer: "MS धोनी"
},
{
    question: "क्रिकेट में सबसे ज्यादा ICC ट्राफी कौन सी टीम जीती है?",
    answers: ["पाकिस्तान", "इंग्लैंड", "इंडिया", "ऑस्ट्रेलिया"],
    correctAnswer: "ऑस्ट्रेलिया"
},
{
    question: "क्रिकेट में भारत कितनी बार ICC ट्राफी जीती है?",
    answers: ["5 बार", "2 बार", "4 बार", "6 बार"],
    correctAnswer: "5 बार"
},
{
    question: "IPL ट्राफी सबसे ज्यादा कौन सी टीम जीती है?",
    answers: ["MI", "RCB", "CSK", "KKR"],
    correctAnswer: "MI"
},
{
    question: "वनडे में एक इनिंग में भारत कि ओर से सबसे तेज शतक लगाने वाले खिलाडी कौन है?",
    answers: ["रोहित शर्मा", "विराट कोहली", "युवराज सिंह", "वीरेंद्र सहवाग"],
    correctAnswer: "विराट कोहली"
},
{
    question: "किसकी कप्तानी में भारत सबसे ज्यादा ICC ट्राफी जीती है?",
    answers: ["विराट कोहली", "गौतम गंगोली", "कपिल देव", "MS धोनी"],
    correctAnswer: "MS धोनी"
},
{
    question: "क्रिकेट में सबसे ज्यादा ICC ट्राफी कौन सी टीम जीती है?",
    answers: ["पाकिस्तान", "इंग्लैंड", "इंडिया", "ऑस्ट्रेलिया"],
    correctAnswer: "ऑस्ट्रेलिया"
},
{
    question: "क्रिकेट में भारत कितनी बार ICC ट्राफी जीती है?",
    answers: ["5 बार", "2 बार", "4 बार", "6 बार"],
    correctAnswer: "5 बार"
},
{
    question: "IPL इतिहास में सबसे ज्यादा विकेट लेने वाला प्लेयर कौन है?",
    answers: ["पियूष चावला", "DJ ब्रावो", "अमित मिश्रा", "लसिथ मलिंगा"],
    correctAnswer: "लसिथ मलिंगा"
},
{
    question: "IPL इतिहास में सबसे ज्यादा विकेट लेने वाला भारतीय प्लेयर कौन है?",
    answers: ["पियूष चावला", "R आश्विन", "अमित मिश्रा", "हरभजन सिंह"],
    correctAnswer: "अमित मिश्रा"
},
{
    question: "IPL इतिहास में बेस्ट इकॉनमी रेट किसके नाम है?",
    answers: ["पियूष चावला", "मुरलीधरन", "अनिल कुम्बले", "राशिद खान"],
    correctAnswer: "राशिद खान"
},
{
    question: "IPL इतिहास में बेस्ट बोलिंग फिगर किसके नाम है?",
    answers: ["लसिथ मलिंगा", "मुरलीधरन", "अनिल कुम्बले", "सोहेल तनवीर"],
    correctAnswer: "सोहेल तनवीर"
},
{
    question: "ODI में एक इनिंग में सबसे ज्यादा रन बनाए का रिकॉर्ड किस टीम के नाम है?",
    answers: ["साउथ अफ्रीका", "ऑस्ट्रेलिया", "इंग्लैंड", "भारत"],
    correctAnswer: "इंग्लैंड"
},
{
    question: "विश्व का सबसे बड़ा क्रिकेट स्टेडियम कहाँ पर है?",
    answers: ["साउथ अफ्रीका में", "ऑस्ट्रेलिया में", "इंग्लैंड में", "भारत में"],
    correctAnswer: "भारत में"
},
{
    question: "एक ODI में सबसे ज्यादा रन किन दो टीम ने मिलकर बनाई है?",
    answers: ["अफ्रीका-ऑस्ट्रेलिया", "ऑस्ट्रेलिया-भारत", "इंग्लैंड-ऑस्ट्रेलिया", "भारत-श्रीलंका"],
    correctAnswer: "अफ्रीका-ऑस्ट्रेलिया"
},
{
    question: "ODI में एक इनिंग में सबसे कम रन कौन सी टीम बनाई है?",
    answers: ["नेपाल", "अमेरिका", "जिम्बाम्बे", "कनाडा"],
    correctAnswer: "अमेरिका"
},
{
    question: "ODI में एक इनिंग में सबसे ज्यादा छक्का लगाने वाली टीम कौन सी है?",
    answers: ["साउथ अफ्रीका", "ऑस्ट्रेलिया", "इंग्लैंड", "भारत"],
    correctAnswer: "इंग्लैंड"
},
{
    question: "ODI में एक इनिंग में सबसे ज्यादा चौका लगाने वाली टीम कौन सी है?",
    answers: ["श्री लंका", "ऑस्ट्रेलिया", "इंग्लैंड", "भारत"],
    correctAnswer: "श्री लंका"
},
{
    question: "ODI इतिहास में सबसे ज्यादा रन बनाने का रिकॉर्ड किस खिलाडी के नाम है?",
    answers: ["रिक्की पोंटिंग", "सचिन तेन्दुलकर", "कुमार संगकारा", "विराट कोहली"],
    correctAnswer: "सचिन तेन्दुलकर"
},
{
    question: "ODI में ओपनर स्थान पर सबसे ज्यादा रन बनाने का रिकॉर्ड किस खिलाडी के नाम है?",
    answers: ["रोहित शर्मा", "सचिन तेन्दुलकर", "TM दिलशान", "हर्शल गिब्ब्स"],
    correctAnswer: "सचिन तेन्दुलकर"
},
{
    question: "ODI में तीसरे स्थान पर सबसे ज्यादा रन बनाने का रिकॉर्ड किस खिलाडी के नाम है?",
    answers: ["रिक्की पोंटिंग", "गौतम गंभीर", "कुमार संगकारा", "विराट कोहली"],
    correctAnswer: "रिक्की पोंटिंग"
},
{
    question: "ODI में सबसे तेज 1,000 रन बनाने का रिकॉर्ड किस खिलाडी के नाम है?",
    answers: ["बाबर आज़म", "फखर जमान", "सचिन तेंदुलकर", "विराट कोहली"],
    correctAnswer: "फखर जमान"
},
{
    question: "ODI में सबसे तेज 5,000 रन बनाने का रिकॉर्ड किस खिलाडी के नाम है?",
    answers: ["हाशिम अमला", "फखर जमान", "सचिन तेंदुलकर", "विराट कोहली"],
    correctAnswer: "हाशिम अमला"
},
{
    question: "ODI में सबसे तेज 10,000 रन बनाने का रिकॉर्ड किस खिलाडी के नाम है?",
    answers: ["हाशिम अमला", "AB डीविलिअर्स", "सचिन तेंदुलकर", "विराट कोहली"],
    correctAnswer: "विराट कोहली"
},
{
    question: "ODI में सबसे ज्यादा एवरेज किस खिलाडी के नाम है(Min 50 मैच)?",
    answers: ["हाशिम अमला", "AB डीविलिअर्स", "सचिन तेंदुलकर", "विराट कोहली"],
    correctAnswer: "विराट कोहली"
},
{
    question: "ODI में सबसे ज्यादा स्ट्राइक रेट किस खिलाडी के नाम है?",
    answers: ["शाहिद आफरीदी", "AB डीविलिअर्स", "आन्द्रे रसेल", "कायरन पोलार्ड"],
    correctAnswer: "आन्द्रे रसेल"
},
{
    question: "ODI में सबसे ज्यादा शतक किस खिलाडी के नाम है?",
    answers: ["रोहित शर्मा", "रिक्की पोंटिंग", "सचिन तेंदुलकर", "विराट कोहली"],
    correctAnswer: "विराट कोहली"
},
{
    question: "ODI में सबसे ज्यादा अर्ध्दशतक किस खिलाडी के नाम है?",
    answers: ["रोहित शर्मा", "रिक्की पोंटिंग", "सचिन तेंदुलकर", "विराट कोहली"],
    correctAnswer: "सचिन तेंदुलकर"
},
{
    question: "ODI में एक इनिंग सबसे तेज अर्ध्दशतक लगाने का रिकॉर्ड किस खिलाडी के नाम है?",
    answers: ["शाहिद आफरीदी", "AB डीविलिअर्स", "आन्द्रे रसेल", "कायरन पोलार्ड"],
    correctAnswer: "AB डीविलिअर्स"
},
{
    question: "ODI में एक इनिंग सबसे तेज शतक लगाने का रिकॉर्ड किस खिलाडी के नाम है?",
    answers: ["शाहिद आफरीदी", "AB डीविलिअर्स", "आन्द्रे रसेल", "कायरन पोलार्ड"],
    correctAnswer: "AB डीविलिअर्स"
},
{
    question: "ODI इतिहास में सबसे ज्यादा छक्का लगाने का रिकॉर्ड किस खिलाडी के नाम है?",
    answers: ["शाहिद आफरीदी", "AB डीविलिअर्स", "रोहित शर्मा", "क्रिश गेल"],
    correctAnswer: "शाहिद आफरीदी"
},
{
    question: "ODI इतिहास में सबसे ज्यादा चौका लगाने का रिकॉर्ड किस खिलाडी के नाम है?",
    answers: ["रोहित शर्मा", "रिक्की पोंटिंग", "सचिन तेंदुलकर", "विराट कोहली"],
    correctAnswer: "सचिन तेंदुलकर"
},
{
    question: "ODI में एक इनिंग में सबसे ज्यादा छक्का लगाने का रिकॉर्ड किस खिलाडी के नाम है?",
    answers: ["इओन मॉर्गन", "AB डीविलिअर्स", "रोहित शर्मा", "क्रिश गेल"],
    correctAnswer: "इओन मॉर्गन"
},
{
    question: "ODI में एक इनिंग में सबसे ज्यादा चौका लगाने का रिकॉर्ड किस खिलाडी के नाम है?",
    answers: ["विराट कोहली", "AB डीविलिअर्स", "रोहित शर्मा", "सचिन तेंदुलकर"],
    correctAnswer: "रोहित शर्मा"
},
{
    question: "ODI में एक इनिंग में सबसे ज्यादा स्ट्राइक रेट से रन बनाने का रिकॉर्ड किस खिलाडी के नाम है?",
    answers: ["जेम्स नीषम", "AB डीविलिअर्स", "जेम्स फ्रेंक्लिन", "क्रिश गेल"],
    correctAnswer: "जेम्स फ्रेंक्लिन"
},
{
    question: "ODI इतिहास में सबसे ज्यादा duks का रिकॉर्ड किस खिलाडी के नाम है?",
    answers: ["वासिम अकरम", "सनथ जयसूर्या", "शाहिद आफरीदी", "क्रिश गेल"],
    correctAnswer: "सनथ जयसूर्या"
},




];



const questionData = chooseRandomNumberOfItems(totalQuestionData, 15);

// let questionData = [];
var kbcMusic = new Audio("./music/kbc.mp3");
var clockMusic = new Audio("./music/clock.mp3");

const question = document.querySelector("#question");
const options = document.querySelectorAll(".option");
const timer = document.querySelector("#timer");

const skip = document.querySelector("#skip");
const fifty = document.querySelector("#fifty");
const eins = document.querySelector("#eins");

const cAns = document.querySelector("#cAns");
const ans = document.querySelector(".ans");

const queInc = document.querySelector("#queInc");

const scoreContainer = document.querySelector(".scoreContainer");
const scores = Array.from(document.querySelectorAll(".score"));

const pause = document.querySelector("#pause");
const play = document.querySelector("#play");
const volume = document.querySelector("#volume");
const quit = document.querySelector("#quit");

const resumeBigContainer = document.querySelector(".resumeBigContainer");

pause.addEventListener("click", () => {
    resumeBigContainer.style.display = "flex";
    clearInterval(time);
});

play.addEventListener("click", () => {
    resumeBigContainer.style.display = "none";
    time = setInterval(countDown, 1000);
});

quit.addEventListener("click", () => {
    window.location.reload();
});

volume.addEventListener("click", () => {
    if (kbcMusic.muted, clockMusic.muted) {
        kbcMusic.muted = false;
        clockMusic.muted = false;
        volume.classList.remove("fa-volume-off");
        volume.classList.add("fa-volume-up");
    } else {
        kbcMusic.muted = true;
        clockMusic.muted = true;
        volume.classList.remove("fa-volume-up");
        volume.classList.add("fa-volume-off");
    }
});


// fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple').then(res => res.json()).then(data => {
//     console.log(data);
//     console.log(data.results);

//     questionData = data.results.map(item => {
//         return {
//             question: item.question,
//             answers: item.incorrect_answers.concat([item.correct_answer]),
//             correctAnswer: item.correct_answer
//         }
//     })

//     changeTheStatementofQuestion(0);


// });


skip.addEventListener('click', () => {
    if (currentIndex < questionData.length - 1) {
        currentIndex++;
        changeTheStatementofQuestion(currentIndex);
        // redBtn();
        skip.classList.remove('canBeUsed');
        skip.classList.add('cantBeUsed');
    }
});

fifty.addEventListener('click', () => {
    let currentQuestion = questionData[currentIndex];
    let correctIndex = currentQuestion.answers.indexOf(currentQuestion.correctAnswer);

    let randomIndex = Math.floor(Math.random() * 4);
    while (randomIndex == correctIndex) {
        randomIndex = Math.floor(Math.random() * 4);
    }

    fifty.classList.remove('canBeUsed');
    fifty.classList.add('cantBeUsed');



    options.forEach((option, i) => {

        if (i == correctIndex || i == randomIndex) {
            // option.style.backgroundColor = "yellow";

        } else {
            //strike out the wrong option
            option.style.textDecoration = "line-through";
            option.style.backgroundColor = "red";
        }

    });
});


function refreshTheOptions() {
    options.forEach((option, index) => {
        option.style.backgroundColor = "";
        option.style.textDecoration = "";
    });
}


eins.addEventListener('click', () => {
    einstien();
});



function countDown() {
    seconds--;
    timer.innerHTML = seconds;
    if (seconds === 0) {
        clearInterval(timer);
        alert("Game Over");
        startTheGame();
        seconds = 30;
    }

}

let seconds = 30;
time = setInterval(countDown, 1000);
kbcMusic.play();
clockMusic.play();
changeTheStatementofQuestion(currentIndex);
options.forEach((option, i) => {
    option.addEventListener("click", function () {
        if (this.innerHTML == questionData[currentIndex].correctAnswer) {

            // scoreContainer.classList.toggle('active')
            scores[currentIndex].style.backgroundColor = "rgb(106, 209, 106)";
            changeQuestion(this);
        } else {
            this.style.backgroundColor = "red";


            setTimeout(() => {
                this.style.backgroundColor = "";
                ans.style.display = "none";
                startTheGame();
                alert("You lost the game");
            }, 2000);
        }
    });
});

function chooseRandomNumberOfItems(arr, nItemsToChoose) {
    let randomIndexes = [];
    while (randomIndexes.length < nItemsToChoose) {
        let randomIndex = Math.floor(Math.random() * arr.length);
        if (!randomIndexes.includes(randomIndex)) {
            randomIndexes.push(randomIndex);
        }
    }

    return randomIndexes.map(index => arr[index]);

}

function changeQuestion(targetOption) {
    currentIndex++;
    if (currentIndex == questionData.length) {
        alert("you won $100,000")
        startTheGame();
        // changeQuestion();
    } else {

        targetOption.style.backgroundColor = "green";


        setTimeout(() => {
            changeTheStatementofQuestion(currentIndex);
            refreshTheOptions();

            targetOption.style.backgroundColor = "";
            ans.style.display = "none";
            scoreContainer.classList.add('active')

        }, 1000);

        setTimeout(() => {
            scoreContainer.classList.remove('active')
        }, 2500);



    }
}


function changeTheStatementofQuestion(idx) {
    question.innerText = questionData[idx].question;
    seconds = 30;
    queInc.innerText = currentIndex + 1;
    // scoreContainer.classList.toggle(".active");
    options.forEach((option, index) => {
        option.innerHTML = questionData[idx].answers[index];

    });
}


function startTheGame() {
    currentIndex = 0;
    changeTheStatementofQuestion(currentIndex);
    // initialBtn();
    skip.classList.add('canBeUsed');
    skip.classList.remove('cantBeUsed');
    eins.classList.add('canBeUsed');
    eins.classList.remove('cantBeUsed');
    fifty.classList.add('canBeUsed');
    fifty.classList.remove('cantBeUsed');

    refreshTheOptions();

    scores.forEach((score, index) => {
        score.style.backgroundColor = "";
    });

}




function einstien() {

    cAns.innerText = "Correct Ans is" + " " + questionData[currentIndex].correctAnswer;
    ans.style.display = "block";
    eins.classList.remove('canBeUsed');
    eins.classList.add('cantBeUsed');

}