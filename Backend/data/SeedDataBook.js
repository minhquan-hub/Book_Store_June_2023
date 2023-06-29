"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var dotenv_1 = require("dotenv");
var Book_1 = require("../models/Book");
dotenv_1["default"].config({ path: '../.env' });
var uri = process.env.MONGODB_URL;
mongoose_1["default"]
    .connect(String(uri), {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(function () {
    console.log('Connected to MongoDB');
})["catch"](function (err) {
    console.log('Failed to connect to MongoDB', err);
});
var seedBook = [{
        title: 'Comedy Comedy Comedy Drama',
        author: 'Bob Odenkirk',
        category: 'Drama',
        description: "In this 'essential' (Entertainment Weekly), 'hilarious' (AV Club) memoir, the star of Mr. Show, Breaking Bad, and Better Call Saul opens up about the highs and lows of showbiz, his cult status as a comedy writer, and what it\u2019s like to reinvent himself as an action film ass-kicker at 50.",
        price: 9,
        quantity: 50,
        image: 'https://m.media-amazon.com/images/I/51WOC9iRITL.jpg',
        isDelete: false
    },
    {
        title: 'The Drama of the Gifted Child',
        author: 'Alice Miller',
        category: 'Drama',
        description: "This bestselling book examines childhood trauma and the enduring effects it has on an individual's management of repressed anger and pain. Why are many of the most successful people plagued by feelings of emptiness and alienation? This wise and profound book has provided millions of readers with an answer--and has helped them to apply it to their own lives. Far too many of us had to learn as children to hide our own feelings, needs, and memories skillfully in order to meet our parents' expectations and win their 'love.' Alice Miller writes, 'When I used the word 'gifted' in the title, I had in mind neither children who receive high grades in school nor children talented in a special way. I simply meant all of us who have survived an abusive childhood thanks to an ability to adapt even to unspeakable cruelty by becoming numb.... Without this 'gift' offered us by nature, we would not have survived.' But merely surviving is not enough. The Drama of the Gifted Child helps us to reclaim our life by discovering our own crucial needs and our own truth",
        price: 11,
        quantity: 50,
        image: 'https://images-na.ssl-images-amazon.com/images/I/4135uNAONwL._SX330_BO1,204,203,200_.jpg',
        isDelete: false
    },
    {
        title: 'Drama King',
        author: 'Penny Reid',
        category: 'Drama',
        description: "Becoming a famous playwright is all Winnie ever dreamed about. For now, though, she'll have to settle for assisting the celebrated, sharp-witted feminist playwright Juliette Brassard. When an experimental theater company in London, England, decides to stage Juliette's most renowned play, The Lights of Trafalgar, Winnie and Juliette pack their bags and hop across the pond",
        price: 11,
        quantity: 50,
        image: 'https://m.media-amazon.com/images/I/51vvWFsL0GL._SY346_.jpg',
        isDelete: false
    },
    {
        title: 'Here for the Drama',
        author: 'Kate Bromley',
        category: 'Drama',
        description: "Becoming a famous playwright is all Winnie ever dreamed about. For now, though, she'll have to settle for assisting the celebrated, sharp-witted feminist playwright Juliette Brassard. When an experimental theater company in London, England, decides to stage Juliette's most renowned play, The Lights of Trafalgar, Winnie and Juliette pack their bags and hop across the pond",
        price: 15,
        quantity: 50,
        image: 'https://images-na.ssl-images-amazon.com/images/I/41A8BikUMZL._SX331_BO1,204,203,200_.jpg',
        isDelete: false
    },
    {
        title: 'Minor Dramas & Other Catastrophes',
        author: 'Kathleen West',
        category: 'Drama',
        description: "When a devoted teacher comes under pressure for her progressive curriculum and a helicopter mom goes viral on social media, two women at odds with each other find themselves in similar predicaments, having to battle back from certain social ruin.",
        price: 20,
        quantity: 50,
        image: 'https://m.media-amazon.com/images/I/41wydNmwkTL.jpg',
        isDelete: false
    },
    {
        title: 'I Must Say: My Life as a Humble Comedy Legend',
        author: 'Martin Short and HarperAudio',
        category: 'Comedy',
        description: "In this engagingly witty, wise, and heartfelt memoir, Martin Short tells the tale of how a showbiz-obsessed kid from Canada transformed himself into one of Hollywood\u2019s favorite funnymen, known to his famous peers as the 'comedian\u2019s comedian'.",
        price: 13,
        quantity: 50,
        image: 'https://m.media-amazon.com/images/I/51CczvgmOEL.jpg',
        isDelete: false
    },
    {
        title: 'A Very Punchable Face: A Memoir',
        author: 'Colin Jost',
        category: 'Comedy',
        description: "If there\u2019s one trait that makes someone well suited to comedy, it\u2019s being able to take a punch - metaphorically and, occasionally, physically. \n    \n        From growing up in a family of firefighters on Staten Island to commuting three hours a day to high school and \u201Cseeing the sights\u201D (like watching a Russian woman throw a stroller off the back of a ferry), to attending Harvard while Facebook was created, Jost shares how he has navigated the world like a slightly smarter Forrest Gump. ",
        price: 19,
        quantity: 50,
        image: 'https://m.media-amazon.com/images/I/41ZMF7TuhkL.jpg',
        isDelete: false
    },
    {
        title: 'More Bedtime Stories for Cynics',
        author: 'Kirsten Kearse',
        category: 'Comedy',
        description: "If children's literature is any guide, we should all be able to magically fall asleep simply by saying goodnight to the things we can see from our beds. But any adult knows that our work anxieties and shameful memories would rather stay up all night and chat. That\u2019s where Offerman and Co. come in\u2014with clever and occasionally downright dark parodies of the classic kids genre. What really happened after Snow White died, from the perspective of the one medically trained dwarf? A naive wizard professor reports back from the trenches of an underprivileged school of magic. A middle-aged man is haunted by the voices of his own aging body. The stories will make you laugh, cry and probably squirm a little.",
        price: 21,
        quantity: 50,
        image: 'https://m.media-amazon.com/images/I/51UNG0lbdAL.jpg',
        isDelete: false
    },
    {
        title: 'Carnival Row: Tangle in the Dark',
        author: 'Carnival Row: Tangle in the Dark',
        category: 'Comedy',
        description: "Tourmaline Larou lives an idyllic life of learning by day and partying by night. An aspiring poet, her future promises nothing less than brilliance. Then, Vignette Stonemoss walks through the door, and Tourmaline\u2019s world is upended. As she struggles to understand the effect this stranger has on her, Tourmaline and her fellow fae face a looming threat from the human world. War is on the horizon, and their very existence is at stake. And Tourmaline will discover whether love will save her\u2014or destroy her.",
        price: 19,
        quantity: 50,
        image: 'https://m.media-amazon.com/images/I/511RBsi7hBL.jpg',
        isDelete: false
    },
    {
        title: 'Black Crow, White Snow',
        author: 'Michael Livingston',
        category: 'Comedy',
        description: "Bela is at the helm of the Sandcrow, a ship sent from calm seas to the far frozen north in search of a legendary power that could turn the tide of war. Locked into ice, the Sandcrow is lost. Now, for the shipmistress and her crew, a desperate voyage becomes a chilling struggle for survival against nature, fear, and prejudice. ",
        price: 8,
        quantity: 50,
        image: 'https://m.media-amazon.com/images/I/51CtqOtUhjL.jpg',
        isDelete: false
    },
    {
        title: 'The Logic of Sports Betting',
        author: 'Ed Miller',
        category: 'Sport',
        description: "The Logic Of Sports Betting answers all these questions and more with a dash of humor and a whole lot of real talk about how it all works. Peek behind the counter and learn how sportsbooks operate. Combine that insider knowledge with why-didn\u2019t-I-think-of-that sports betting logic, and you have the winning formula.\n    \n        Ed Miller is a best-selling (over 300,000 copies sold) author of books on poker and gambling. This is his first book on sports betting, but maybe his favorite book to write so far.",
        price: 19.8,
        quantity: 50,
        image: 'https://m.media-amazon.com/images/I/51vr+o9wA+L.jpg',
        isDelete: false
    },
    {
        title: 'The Brave Athlete: Calm the F--k Down and Rise to the Occasion',
        author: 'Simon Marshall PhD',
        category: 'Sport',
        description: "The Brave Athlete solves the 13 most common mental conundrums athletes face in their everyday training and in races. You don't have one brain - you have three; your ancient Chimp brain that keeps you alive, your modern Professor brain that navigates the civilized world, and your Computer brain that accesses your memories and runs your habits (good and bad). They fight for control all the time and that's when bad things happen; you get crazy nervous before a race, you choke under pressure, you quit when the going gets tough, you make dumb mistakes, you worry about how you look.",
        price: 21,
        quantity: 50,
        image: 'https://m.media-amazon.com/images/I/514906oeAXL.jpg',
        isDelete: false
    },
    {
        title: 'Peak: The New Science of Athletic Performance that Is Revolutionizing Sports ',
        author: 'Dr. Marc Bubbs',
        category: 'Sport',
        description: "There is a new revolution happening in sports as more and more athletes are basing their success on this game-changing combination: health, nutrition, training, recovery, and mindset. Unfortunately, the evidence-based techniques that the expert PhDs, academic institutions, and professional performance staffs follow can be in stark contrast to what many athletes actually practice. When combined with the noise of social media, old-school traditions, and bro-science, it can be difficult to separate fact from fiction.",
        price: 14.7,
        quantity: 50,
        image: 'https://m.media-amazon.com/images/I/51B-ArDfJtL.jpg',
        isDelete: false
    },
    {
        title: 'Mental Combat: The Sports Psychology Secrets You Can Use to Dominate Any',
        author: 'Phil Pierce',
        category: 'Sport',
        description: "Finally! An easy way to use the science of sports psychology to skyrocket your performance! You may already know that pro athletes use the power of sports psychology to boost motivation, manage nerves, and become top performers. The problem is that many of these techniques are kept secret, and other guides are heavy and full of jargon.",
        price: 11.6,
        quantity: 50,
        image: 'https://m.media-amazon.com/images/I/61dyBZ61XsL.jpg',
        isDelete: false
    },
    {
        title: "The Champion's Mind: How Great Athletes Think, Train, and Thrive",
        author: 'Jim Afremow',
        category: 'Sport',
        description: "Sports participation - from the recreational to the collegiate Division I level - is at an all-time high. While the caliber of their game may differ, athletes at every level have one thing in common: they want to excel. In The Champion's Mind, sports psychologist Jim Afremow, PhD, LPC, now offers the same advice he uses with Olympians, Heisman Trophy winners, and professional athletes, including tips and techniques based on high-performance psychology research, such as how to get in a \"zone\", thrive on a team, and stay humble; how to progress within a sport and sustain excellence long-term, and customizable pre-performance routines to hit full power when the gun goes off or the puck is dropped.",
        price: 9,
        quantity: 50,
        image: 'https://m.media-amazon.com/images/I/51I7m3J+-AL.jpg',
        isDelete: false
    },
];
var seedDB = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Book_1["default"].deleteMany({})];
            case 1:
                _a.sent();
                return [4 /*yield*/, Book_1["default"].insertMany(seedBook)];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
seedDB().then(function () {
    mongoose_1["default"].disconnect();
});
