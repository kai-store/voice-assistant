var VL = VL || {};

function setLocale(){
	if(!localStorage.getItem("locale")){
       return "en-IN";
	}
	else{
       return localStorage.getItem("locale")
	}
}

function showFeedBack(){
  if(!localStorage.length <= 0 && !localStorage.getItem("showFeedback")){
    return false;
  }
  else{
    return localStorage.getItem("showFeedback");
  }
}


// dev Key - AIzaSyAd7Tah0dlq9K7wozaqXFmmb96p5lIjwUo
function setApiKey(){
	if(!localStorage.getItem("apiKey")){
       return "AIzaSyAIufN_QozE2zqgBIHHZQibxgebbsf850k";
	}
	else{
       return localStorage.getItem("apiKey");
	}
}

function setPttFlag(){
	if(!localStorage.length <= 0 && !localStorage.getItem("pttFlag")){
       return false;
	}
	else{
       return localStorage.getItem("pttFlag")
	}
}

function isLivAi(){
  if(VL.isLivAILang.length > 0){
    return "livAI"
  }else{
    return "google"
  }
}

VL.locale = setLocale();
VL.apiKey = setApiKey();
VL.pushToTalk = JSON.parse(setPttFlag());

VL.isLivAI = true;
VL.isLiveTranscription = true;
VL.livAPIURL = "https://dev.liv.ai/liv_transcription_api/recordings/";
VL.livAPITOKEN = "5bbe8de11c2c95bf70b16f5030a42b2c3f9befc7" ;

VL.isLivAILang = []; // languages receive speech to text from liv ai
VL.isLiveTransLang = []; // LivAi speech to text with live transcription
VL.isLiveLanguage = { "hi-IN": "HI_ASST", "en-IN": "HI_ASST", "gu-IN": "gu_jio", "mr-IN": "mr_jio", "te-IN": "te_jio", "ta-IN": "ta_jio", "kn-IN": "kn_jio", "bn-IN": "bn_jio", "ml-IN": "ml_jio"};

// VL.isLivAILang = ["hi-IN", "en-IN", "gu-IN", "mr-IN", "te-IN", "ta-IN", "kn-IN", "bn-IN", "ml-IN"];
VL.defaultSpeechAPI =  isLivAi();//google |livAI 
VL.talkBackDescLong = "short";
VL.isHindiTalkBack = true;
VL.speech_output_timeout = 12000;
VL.ml_output_timeout = 5000;
VL.isShowFeedback = showFeedBack();
VL.talkBackClassNamesAgent = {};
VL.talkBackClassNamesAgent["Gecko"] = {
    "parent":'.xpc',
    "long_content":'.xpc ._oot ._H1m',
    "short_content":'.xpc ._LIp',
    "definition":"._Z1m ol>li ._H1m._kup"
}
VL.talkBackClassNamesAgent["Android"] = {
    "parent":'.hp-xpdbox ._o0d>div ._zdb',
    "long_content":'.hp-xpdbox ._tXc span',
    "short_content":'.hp-xpdbox ._o0d>div',
    "definition":'#ires table ol>li'
}

VL.speechApiHeaders = [];

VL.micIconText = ["center","मध्य","સેંટર","सेंटर","<>"]

VL.jioApps ={};
VL.jioApps['JioCinema'] = ['jiocinema', 'jio cinema','cinemas','cinema','movies','movie','film','films'];
VL.jioApps['JioTV'] = ['jiotv', 'jio tv','tv'];
VL.jioApps['JioMusic'] = ['jiomusic', 'jio music', 'music', 'gaana', 'song', 'songs'];
VL.jioApps['JioVideoCall'] = ['jiovideocall', 'jio video call', 'videocall', 'video call'];
VL.jioApps['JioKisan'] = ['jiokisan','jio kisan'];
VL.jioApps['JioMoney'] = ['jiomoney', 'jio money', 'jio pay', 'jiopay'];
VL.jioApps['JioXpressNews'] = ['news', 'samachar', 'express news', 'xpress news', 'jio xpress news', 'jio express news', "jioxpressnews","jioxpressnews"];
VL.jioApps['KaiOS Plus'] =  ['app store', 'appstore', 'jiostore', 'jio store'];
VL.jioApps['JioChat'] =  ['jio chat','jio care','jiochat','jiocare'];
VL.jioApps['MyJio'] =  ['myjio','my jio','my geo','mygeo'];


VL.systemApps ={};
VL.systemApps['Net'] = ['net','browser','google','internet'];
VL.systemApps['Namo']=['memo','namo','mann ki baat','pmapp','pm app','nm app','narendra modi app'];
VL.systemApps['Contact'] = ['contact', 'phonebook', 'contacts', 'phone book','addressbook','address book'];
VL.systemApps['Messages']= ['sms', 'message', 'messages', 'messenger','sandes','sandesh','text'];
VL.systemApps['Call'] = ['call','dial','phone'];
VL.systemApps['Camera'] = ['camera', 'selfie', 'self', 'sesley', 'selfi'];
VL.systemApps['Clock']=['clock', 'alarm', 'stopwatch', 'timer','ghada','ghadiyal','ghadiyaal','ghadiyala'];
VL.systemApps['Gallery']=['gallery'];
VL.systemApps['Browser']= ['browser','internet','net'];
VL.systemApps['Settings']= ['setting','settings'];
VL.systemApps['Facebook']= ['facebook','fb','face book'];
VL.systemApps['Youtube']= ['youtube','you tube'];
VL.systemApps['FM Radio']= ['fm','fmradio', 'radio'];
VL.systemApps['Wifi'] = ["wi-fi","wifi","wi fi","wai fai", "vifi", "vai fai"];
VL.systemApps['Volume'] = ["volume","aawaz","awaz","aawaj", "awaaj","awaaz"];
VL.systemApps['Language'] = ["language","bhasha","bhashaa","bhaasha"];
VL.systemApps['Battery'] = ["battery"];
VL.systemApps['Music'] = ["music player","musicplayer"];
VL.systemApps['Video'] = ['video player', 'videos player', 'vdo player','videoplayer'];
VL.systemApps['Calculator'] = ["calculator", "calculate"];
VL.systemApps['Calendar'] = ["calendar"];
VL.systemApps['HelpVoice'] = ['help','sahayika','sahayta','sahayata','udhavi','sahaya','madad'];

VL.openNet = ['Net','Browser','Google','net','browser','google','Internet','internet'];
VL.openSendSMS = ['send','bhejo','bejo'];
VL.searchImage = ['picture','pictures','image','images','photo','photos','इमेज','इमेजेस','फोटो','पिक्चर','पिक्चरस','पिक्चर्स','फोटोस','फोटोज'];

VL.wifiControlOff=["band","off"];
VL.volControlUp = ["up","badhao","tez","tej","badhaiye","badiye","bado","badha","badhaye"];
VL.volControlDown = ["down","ghatao","ghataiye","kam","guitar","ghataye","ghata","gita"];
VL.appLock = 60000;

VL.lang_key = {
    'en-IN': {
      launchKeywords: ['launch', 'chalu', 'play', 'chalao', 'chalo', 'chalaiye', 'chalaye', 'chalae', 'chali', 'chale', 'courier', 'lagao', 'open', 'khole', 'kholo', 'kholiye', 'koliye', 'kohli', 'kliye', 'start', 'shuru', 'shuruvat', 'suruwat', 'churu', 'show', 'dikhao', 'dikhaiye', 'dikhaye', 'cola', 'kola', 'kolo', 'kullam', 'kollo', 'collo', 'colo', 'on'],
      ignoreWords: ['karo', 'par', 'pe', 'ki', 'mujhe', 'mjhe', 'kare', 'on', 'ka', 'channel', 'karu', 'kariye', 'my', 'jio', 'geo', 'jeo', ''],
      contactIgnoreWords: ['ko', 'Kare', 'kare', 'kijiye', 'karo', 'SMS', 'message', 'Message', 'Sandesh', 'sms', 'send', 'sandesh', 'sandes', 'bheje', 'bhejo', 'bhejein', 'kijiye', 'karu', 'kariye', 'to', 'a', 'text', 'Text'],
      netSearch: ['net', 'internet', 'browser', 'open', 'show', 'check', 'search', 'on', 'kar', 'karo', 'karein', 'kariye', 'pe', 'par', 'ki', 'ke', 'ka', 'kijiye', 'kijiyein', 'dikayo', 'dikhao', 'dikha', 'dikhaiye', 'dikhaye', 'dikhaiyein']
    },
    'hi-IN': {
      launchKeywords: ['launch', 'chalu', 'play', 'chalao', 'chalo', 'chalaiye', 'chalaye', 'chalae', 'chali', 'chale', 'courier', 'lagao', 'open', 'khole', 'kholo', 'kholiye', 'koliye', 'kohli', 'kliye', 'start', 'shuru', 'shuruvat', 'suruwat', 'churu', 'show', 'dikhao', 'dikhaiye', 'dikhaye', 'cola', 'kola', 'kolo', 'kullam', 'kollo', 'collo', 'colo', 'on'],
      ignoreWords: ['karo', 'par', 'pe', 'ki', 'mujhe', 'mjhe', 'kare', 'on', 'ka', 'channel', 'karu', 'kariye', 'my', 'jio', 'geo', 'jeo', ''],
      contactIgnoreWords: ['SMS', 'एसएमएस', 'को', 'करे', 'कीजिये', 'करो', 'सन्देश', 'संदेश', 'संदेस', 'भेजे', 'भेजो', 'भेजें', 'कीजिये', 'करो', 'करिये', 'करें', 'मैसेज', 'टेक्स्ट', 'लगाओ', 'ko', 'Kare', 'kare', 'kijiye', 'karo', 'SMS', 'message', 'Message', 'Sandesh', 'sms', 'send', 'sandesh', 'sandes', 'bheje', 'bhejo', 'bhejein', 'kijiye', 'karu', 'kariye', 'to', 'a', 'text', 'Text'],
      netSearch: ['नेट', 'इंटरनेट', 'ब्राउज़र', 'खोल', 'सर्च', 'चेक', 'देखो', 'दिखाओ', 'दिखाइए', 'दिखाएं', 'दिखा', 'पे', 'पर', 'मे', 'की', 'के', 'का', 'करो', 'करिये', 'कीजिये', 'करे', 'बताओ', , 'बताएं', 'बता', 'खोलो', 'net', 'internet', 'google', 'browser', 'open']
    },
    'gu-IN': {
         launchKeywords: ['launch','chalu','play','chalao','chalo','chalaiye','chalaye','chalae','chali','chale','courier','lagao','open','khole','kholo','kholiye','koliye','kohli','kliye','start','shuru','shuruvat','suruwat','churu','show','dikhao','dikhaiye','dikhaye','cola','kola','kolo','kullam','kollo','collo','colo','on','chalavo','lagavo','chalawo','lagawo'],
         ignoreWords: ['karo', 'par', 'pe', 'ki', 'mujhe', 'mjhe', 'kare', 'on', 'ka', 'channel', 'karu', 'kariye','my','jio','geo','jeo',''],
         contactIgnoreWords: ['SMS','કો','કર', 'દો', 'સંદેશ', 'મોકલો', 'દુરુપયોગ', 'દો',' ટેક્સ્ટ ',' લાગુ','કરો ','ને','એસએમએસ','કરો','મેસેજ','karo','ne','kar','text','sms','lagao','lagavo','lagawo'],
         netSearch: ['નેટ', 'ઇન્ટરનેટ', 'બ્રાઉઝર',"ગોદો", "ગોતો", "શોધવું", "ખોળવું",  "શોધ", "ખોજ", "તપાસ", 'શોધ', 'જુઓ', 'ચેક', 'ડુ', 'પે', 'ઓન', 'ડુ', 'ગો', 'કહો', 'શો','કહો','પર', 'ઘોડૉ','ઘોટો','net','internet','open','google','browser']
    },
    'mr-IN': {
         launchKeywords: ['launch','chalu','play','chali','chale','courier','lagao','open','khola','start','shuru','suru','were','kara','la','lava','churu','show','cola','kola','colla','cola','on'],
         ignoreWords: ['kar','shodha', 'shodh', 'par','kara','ughda','ughada','ughada','Agra','agra','were','wer','var','ver', 'pe', 'ki','kare', 'on', 'ka', 'channel', 'karu', 'my','jio','geo','jeo','','la','lava'],
         contactIgnoreWords: ['SMS','sms','एसएमएस','को', 'कर', 'संदेश','दो', 'करा','ला','संदेश','मजकूर','लागू','लावा','मेसेज','ko','kar','do','sandesh','sandes','lagu','la','lava','kara'],
         netSearch: ['नेट', 'इंटरनेट','इंटरनेटवर', 'ब्राउझर', 'शोध','शोधा', 'लुक', 'चेक', 'डू', 'पे', 'ऑन', 'ग',' बॉल ',' शो ',' बोट','वर','करा','ला','net','internet','google','browser','open']
    },
    'bn-IN': {
        launchKeywords: ['launch','chalu','bajao','play','chalao','chalo','chale','courier','lagao','open','khole','kholo','start','show','cola','kola','kolo','kullam','kollo','collo','colo','on'],
        ignoreWords: ['karo','koro','ke','k', 'par', 'pe', 'ki', 'korte', 'on', 'ka', 'channel', 'my','jio','geo','jeo','','lo','lagao', 'laagao','pathao','ae','te','de','De','Chola','cholao','chola','chala'],
        contactIgnoreWords: ["sms","SMS","ko","Kare",'koro','ke','k',"kare","karo","kije","এসএমএস", "বার্তা", "বার্তা", "বার্তা", "এসএমএস", "পাঠান", "সেন্ড", "স্যান্ডেস", "ভিজি", "ভিজো", "ভিজিন", "কিজি", 'করু','কারি','টু','এ','টেক্সট','টেক্সট','কে','করো','কারো','পাঠাও','লাগাও','লাগা','কর'],
        netSearch: ['নেট', 'ইন্টারনেট','ইন্টেরনেটে', 'ব্রাউজার', 'উপর','অনুসন্ধান', 'ইন্টারনেট', 'নিট', 'পরীক্ষা', 'শো','চেক','করো','কারো','কর','net','internet','google','browser','open']
	},
    'te-IN': {
        launchKeywords: ['launch','play','courier','open','start','show','on'],
        ignoreWords: ['cheyandi', 'on', 'ka', 'channel', 'my','jio','geo','jeo','','lo','ni','ne','chaiyandi'],
        contactIgnoreWords: ['chandi','Chandi','cheyandi','ke','ka','lo',"బెజో", "భీజీన్", "కిజియ","SMS", "సందేశం", "సందేశం", "సందేశ్", "sms", "పంపు",'కరీ','టూ','ఎ','టెక్స్ట్'],
        netSearch: ['నికర', 'ఇంటర్నెట్', 'బ్రౌజర్', 'search', 'న', 'ఇంటర్నెట్', 'నెట్', 'చెక్', 'షో','లో','వెతకండి','net','internet','google','browser','open']
	},
    'ta-IN': {
        launchKeywords: ['launch','chalu','play','chalao','chalo','chalaiye','chalaye','chalae','chali','chale','courier','lagao','open','khole','kholo','kholiye','koliye','kohli','kliye','start','shuru','shuruvat','suruwat','churu','show','dikhao','dikhaiye','dikhaye','cola','kola','kolo','kullam','kollo','collo','colo','on'],
        ignoreWords: ['cheyandi','koro','ke','k', 'par', 'pe', 'ki', 'mujhe', 'mjhe', 'kare', 'on', 'ka', 'channel', 'karu', 'kariye','my','jio','geo','jeo',''],
        contactIgnoreWords: ["ko","Kare",'cheyandi','koro','ke','k',"kare","kijiye","karo","బెజో", "భీజీన్", "కిజియ","SMS", "సందేశం", "సందేశం", "సందేశ్", "sms", "పంపు", "sandesh", "sandes",'కరీ','టూ','ఎ','టెక్స్ట్'],
        netSearch: ['நிகர', 'இணைய', 'உலாவி', 'தேடல்', 'மீது', 'இணைய', 'நிகர', 'பார்க்கலாம்', 'நிகழ்ச்சி','net','internet','google','browser','open']
	},
    'kn-IN': {
        launchKeywords: ['launch','chalu','annu','play','chalao','chalo','chalaiye','chalaye','chalae','chali','chale','courier','lagao','open','khole','kholo','kholiye','koliye','kohli','kliye','start','shuru','shuruvat','suruwat','churu','show','dikhao','dikhaiye','dikhaye','cola','kola','kolo','kullam','kollo','collo','colo','on'],
        ignoreWords: ['karo', 'par', 'pe', 'ki','haaku','kelisi','nodabakku','keli','naanu','alli','nodabeku','on', 'ka', 'channel', 'my','jio','geo','jeo',''],
        contactIgnoreWords: ["SMS","message","Message","sms","send", 'to','a','text','Text'],
        netSearch: ['ನೆಟ್', 'ಇಂಟರ್ನೆಟ್', 'ಬ್ರೌಸರ್', 'ಹುಡುಕಾಟ', 'ಆನ್', 'ಇಂಟರ್ನೆಟ್', 'ನೆಟ್', 'ಚೆಕ್', 'ಶೋ','net','internet','google','browser','open']
	},
    'ml-IN': {
        launchKeywords: ['launch','chalu','annu','play','thurakoo','thooraku','thuraku','turakoo','tooraku','turaku','thurakkoo','thoorakku','thurakku','turakkoo','toorakku','turakku','open','start','show','on'],
        ignoreWords: ['il','cheeyo','chiyo','cheeyu','cheeyu','on', 'ka', 'channel','ne','ku','cheeyoo','kaanikkoo','kaanikku','kaanikoo','kanikkoo','kaaniku' ,'my','jio','geo','jeo',''],
        contactIgnoreWords: ["SMS","message","Message","sms","send", 'to','a','text','Text','il','മെസേജ്','ഇല്‍'],
        netSearch: ['ഇംടര്‌നെട്', 'നെറ്റ്', 'കാണിക്കൂ', 'ഇല്‍','net','internet','google','browser','open']
	}
    
}

VL.toReplaceInCall = ["phone","dial","call","video","फ़ोन","फोन","डायल","कॉल","ફોન","ડાયલ","કોલ"];

VL.locales = [
  {"lang_str":"en-IN","display_name":"English"},
  {"lang_str":"hi-IN","display_name":"हिन्दी (Hindi)"},
  {"lang_str":"gu-IN","display_name":"ગુજરાતી (Gujarati)"},
  {"lang_str":"mr-IN","display_name":"मराठी (Marathi)"},
  {"lang_str":"bn-IN","display_name":"বাংলা (Bengali)"},
  {"lang_str":"ta-IN","display_name":"தமிழ் (Tamil)"},
  {"lang_str":"te-IN","display_name":"తెలుగు (Telugu)"},
  {"lang_str":"kn-IN","display_name":"ಕನ್ನಡ (Kannada)"},
  {"lang_str":"ml-IN","display_name":"മലയാളം (Malayalam)"}
]

VL.mic_key = {
    'en-IN': {
        how_can_help: ['How can I help you?'],
        listening: ['Listening...'],
        wait: ['Wait'],
        processing: ['Processing...'],
        didnt_catch: ["Sorry didn\'t catch that"],
        speak_now:['Speak now...'],
        didnt_find_contact: ['Sorry couldn’t find that contact'],
        calling: ['Calling...'],
        activate_voice: ['Press center to activate voice'],
        battery_perc: ['Battery Percentage'],
        wifi_on: ['Wi-fi On'],
        wifi_off: ['Wi-fi Off'],
        check_internet: ['Please close app & ensure you have internet connectivity'],
        poor_connectivity: ['Poor network connectivity'],
        no_sim: ['Please insert a sim card'],
        push_talk : ["Press and hold center to record voice and release once done"],
        retry_msg : ["Press center to try again"],
        retry_msg_ptt : ["Press and hold center to try again"],
        press_to_record_msg : ["Long Press center to record SMS"],
        press_to_record_feedback : ["Press center to give voice feedback"],
        low_network : ["Oops! Something went wrong. Please try again"]
    },
    'hi-IN': {
        how_can_help: ['मैं आपकी कैसे मदद कर सकता हूं?'],
        listening: ['सुन रहे हैं...'],
        wait: ['रुकिए'],
        processing: ['प्रसंस्करण...'],
        didnt_catch: ["खेद नहीं मिला"],
        speak_now:['अभी बोलिये...'],
        didnt_find_contact: ['खेद है संपर्क नहीं मिला'],
        calling: ['प्रसंस्करण...'],
        activate_voice: ['बोलने के लिए मध्य बटन दबाये'],
        battery_perc: ['बैटरी प्रतिशत'],
        wifi_on: ['वाई - फाई चालू'],
        wifi_off: ['वाई - फाई बंद'],
        check_internet: ['आपके इंटरनेट कनेक्शन मे कुछ समस्या है. कृपया दुबारा कोशिश करे.'],
        poor_connectivity: ['खराब इंटरनेट कनेक्शन'],
        no_sim: ['कृपया सिम कार्ड डालें'],
        push_talk: ["बोलने के लिए मध्य बटन दबाये रखें"],
        retry_msg : ["फिर से प्रयास करने के लिए सेंटर की दबाएं"],
        retry_msg_ptt : ["फिर से प्रयास करने के लिए लंबे समय तक सेंटर की दबाएं"],
        press_to_record_msg : ["एसएमएस रिकॉर्ड करने के लिए लंबे समय तक सेंटर की दबाएं"],
        press_to_record_feedback: ["आवाज प्रतिक्रिया देने के लिए सेंटर दबाएं"],
        low_network : ["कुछ तकनीकी खराबी हैं. कृपया वापस कोशिश कीजिए"]
    },
    'gu-IN': {
        how_can_help: ['તમારી મદત કેવી રીતે કરુ?'],
        listening: ['સાંભડુ છુ...'],
        wait: ['ઉભા રેજો'],
        processing: ['પ્રોસેસીંગ ...'],
        didnt_catch: ["માફ કરજો, સાંભદાયુ ન"],
        speak_now:['હવે બોલો...'],
        didnt_find_contact: ['માફ કરજો, કૉંટૅક્ટ ન મળ્યો'],
        calling: ['ફોન લાગે ચ્હે...'],
        activate_voice: ['અવાજ રેકૉર્ડ કરવા સેંટર કી દબાઓ'],
        battery_perc: ['બૅટરી દેખાડો'],
        wifi_on: ['Wi-fi ચાલુ કરો'],
        wifi_off: ['Wi-Fi બંધ'],
        check_internet: ['ઇંટરનેટ કનેક્ટિવિટી સાથે કાય સમસ્યા હોયે ટેમ લાગે ચ્હે. મેહેરબાની કરીને ફરી થી પ્રયાસ કરો'],
        poor_connectivity: ['નેટવર્ક કનેક્ટિવિટી સારી નથી'],
        no_sim: ['સિમ કાર્ડ શામેલ કરો'],
        push_talk: ["અવાજ રેકૉર્ડ કરવા સેંટર કી દબાવી રાખો અને રેકૉર્ડિંગ થયા પછી છોડી દો"],
        retry_msg : ["ફરી પ્રયાસ કરવા માટે પ્રેસ સેંટર કી"],
        retry_msg_ptt : ["ફરી પ્રયાસ કરવા માટે સેંટર કી દબાવો અને પકડી રાખો"],
        press_to_record_msg : ["એસએમએસ રેકોર્ડ કરવા માટે લોગ પ્રેસ સેન્ટર કી"],
        press_to_record_feedback: ["વોઈસ પ્રતિક્રિયા આપવા માટે સેન્ટર દબાવો"],
        low_network : ["Press and hold Center to try again"]
    },
    'mr-IN': {
        how_can_help: ['आपली मदत कशी करू शकतो?'],
        listening: ['ऐकतोय...'],
        wait: ['थांबा'],
        processing: ['प्रोसेसिंग...'],
        didnt_catch: ["समजल नाही"],
        speak_now:['आता बोला...'],
        didnt_find_contact: ['कॉंटॅक्ट सापडला नाही'],
        calling: ['कॉलिंग...'],
        activate_voice: ['सेंटर बटन दाबा ऐकन सुरू करायला'],
        battery_perc: ['बॅटरी %'],
        wifi_on: ['वायफाय सुरू'],
        wifi_off: ['वायफाय बंद'],
        check_internet: ['तुमच्या इंटरनेट मध्ये समस्या आहे. पुन्हा प्रयत्न करा'],
        poor_connectivity: ['नेटवर्क कमी आहे'],
        no_sim: ['कृपया सिम कार्ड टाका'],
        push_talk: ["मधल बटन दाबून बोला आणि झाल्यावर सोडा"],
        retry_msg : ["मधल बटन दाबा परत प्रयत्न करण्यासाठी"],
        retry_msg_ptt : ["मधल बटन दाबून ठेवा परत प्रयत्न करण्यासाठी"],
        press_to_record_msg : ["एसएमएस रेकॉर्ड करण्यासाठी मधल बटन दाबून ठेवा आणि बोला"],
        press_to_record_feedback: ["व्हॉईस प्रतिक्रिया देण्यासाठी <> दाबा"],
        low_network : ["Press and hold Center to try again"]
    },
    'bn-IN': {
        how_can_help: ['কিভাবে আপনা সহায়তা করতে পারি ?'],
        listening: ['শুনছি...'],
        wait: ['অপেক্ষা করুন'],
        processing: ['প্রসেসিং...'],
        didnt_catch: ["দুঃখিত বুঝতে পারলাম না, পুনরায় চেষ্টা করুন"],
        speak_now:['এখন বলুন...'],
        didnt_find_contact: ['দুঃখিত ওই কন্টাক্ট টি খুঁজে পেলাম না '],
        calling: ['কল করা হচ্ছে...'],
        activate_voice: ['আওয়াজ রেকর্ড করার জন্য সেন্টার বাটন টিপুন'],
        battery_perc: ['ব্যাটারী  অবশিষ্ট / ব্যাটারি পার্সেন্টেজ'],
        wifi_on: ['ওয়াইফাই চালু আছে'],
        wifi_off: ['ওয়াইফাই বন্ধ আছে'],
        check_internet: ['মনে হচ্ছে আপনার ইন্টারনেট কানেক্শনে কিছু সমস্যা আছে, দয়া করে পুনরায় চেষ্টা করুন'],
        poor_connectivity: ['খারাপ নেটওয়ার্ক আসছে'],
        no_sim: ['দয়া  করে সিম কার্ড লাগান'],
        push_talk: ['আওয়াজ রেকর্ড করার জন্য সেন্টার বাটন টিপে রাখুন এবং রেকর্ডিং করার পর ছেড়ে দিন'],
        retry_msg : ["পুনরায় প্রচেষ্টা করার জন্য সেন্টার কি টিপুন"],
        retry_msg_ptt : ["পুনরায় প্রচেষ্টা করার জন্য সেন্টার কি টিপে রাখুন"],
        press_to_record_msg : ["এস এম এস রেকর্ড করার জন্য বেশি সময় ধরে সেন্টার কি টিপুন"],
        press_to_record_feedback: ["ভয়েস প্রতিক্রিয়া দিতে <> টিপুন"],
        low_network : ["Press and hold Center to try again"]
    },
    'te-IN': {
        how_can_help: ['నేను ఎలా సహాయపడగలను?'],
        listening: ['వింటున్నాను...'],
        wait: ['వింటున్నాను'],
        processing: ['ప్రాసెసింగ్...'],
        didnt_catch: ["క్షమించండి మరల వివరించండి"],
        speak_now:['ఇప్పుడు మాట్లాడండి...'],
        didnt_find_contact: ['క్షమించండి ఈ కాంటాక్ట్ కనుబడుటలేదు'],
        calling: ['కాలింగ్...'],
        activate_voice: ['వాయిస్ రికార్డ్ చేయటానికి మధ్య బటన్ నొక్కండి'],
        battery_perc: ['బ్యాటరీ పర్సెంటజీ'],
        wifi_on: ['వై ఫై ఆన్'],
        wifi_off: ['వై ఫై ఆఫ్'],
        check_internet: ['మీ ఇంటర్నెట్ సరిగా లేదు. మరల ప్రయత్నించండి.'],
        poor_connectivity: ['నెట్వర్క్ సరిగ్గా లేదు'],
        no_sim: ['దయచేసి సిమ్ కార్డ్ పెట్టండి'],
        push_talk: ['రికార్డ్ చేయుటకు మధ్య బటన్ పట్టుకుని ఉంచండి, అవ్వగానే వదలండి'],
        retry_msg : ["మరల ప్రయత్నించటానికి మథ్య కీ నొక్కండి"],
        retry_msg_ptt : ["మరల ప్రయత్నించటానికి మథ్య కీ నొక్కి ఉంచండి "],
        press_to_record_msg : ["ఎస్ ఎమ్ ఎస్ రికార్డ్ చేయటానికి మథ్య కీ నొక్కి ఉంచండి "],
        press_to_record_feedback: ["వాయిస్ ద్వారా అభిప్రాయం ఇవ్వడానికి <> నొక్కండి"],
        low_network : ["Press and hold Center to try again"]
    },
    'kn-IN': {
        how_can_help: ['ನಾವು ನಿಮಗೆ ಹೇಗೆ ಸಹಾಯ ಮಾದ ಬಹುದು'],
        listening: ['ಕೇಳಿಸಿಕೊಳ್ಳುತ್ತೈದೀನಿ...'],
        wait: ['ನಿಲ್ಲು'],
        processing: ['ಶರುವಾಗಿಗಿದೆ...'],
        didnt_catch: ["ಕ್ಷಮೀಸೆ ಇದು ಗೊತ್ತಾಗಲ್ಲಿಲ್ಲಾ"],
        speak_now:['ಹೇಳಿ ಇವಾಗಾ...'],
        didnt_find_contact: ['ಕ್ಷಮೀಸೆ ಕಾಂಟ್ಯಾಕ್ಟ್ ಸಿಗಿತುಲ್ಳಿಲ'],
        calling: ['ಕಾಲಿಂಗ್...'],
        activate_voice: ['ಮಧ್ಯದ ಕೀ ಅನ್ನು ಹೊತ್ತಿ  ವಾಯ್ಸ್ ಮೆಸೇಜ್ ರೆಕಾರ್ಡ್ ಮಾಡಿ'],
        battery_perc: ['ಬ್ಯಾಟರೀ %'],
        wifi_on: ['ವಿ-ಫೀ ಒನ್'],
        wifi_off: ['ವಿ-ಫೀ ಆಫ್'],
        check_internet: ['ಇಂಟರ್‌ನೆಟ್ ಕನೆಕ್ಟ್ ಮಾಡುವಾಗ ಏನೋ ತೊಂದರೆ ಇಂದೇ ಅನಿಸುತ್ತಿದೆ .ಸ್ವಲ್ಪ ಸಮಯದ ನಂತರ ಪ್ರಯತ್ನಿಸಿ'],
        poor_connectivity: ['ನೆಟ್‌ವರ್ಕ್ ಇಲ್ಲ ತುಂಭಾ ಕಡಿಮೆ'],
        no_sim: ['ದಯವಿಟ್ಟು SIM ಕಾರ್ಡ್ ಅನ್ನು ಸೇರಿಸಿ'],
        push_talk: ['ಬಟನ್ ಅನ್ನು ಹೊತ್ತಿ ಕೀ ಹೋಲ್ಡ್ ಮಾಡಿ ನಿಮ್ಮ ವಾಯ್ಸ್ ರೆಕಾರ್ಡ್ ಮಾಡಿ ಮತ್ತೆ ಬಿಟ್ಟು ಬಿಡಿ ರೆಕಾರ್ಡ್ ಮಾಡಿದ ನಂತರ'],
        retry_msg : ["ಮತ್ತೊಮ್ಮೆ ಪ್ರಯತ್ನಿಸಲು, ಕೇಂದ್ರದ ಕೀಲಿಯನ್ನು ಒತ್ತಿರಿ"],
        retry_msg_ptt : ["ಮತ್ತೊಮ್ಮೆ ಪ್ರಯತ್ನಿಸಲು, ಸೆಂಟರ್ ಕೀಲಿಯನ್ನು ಒತ್ತಿ ಹಿಡಿದುಕೊಳ್ಳಿ"],
        press_to_record_msg : ["ಮಧ್ಯದ ಕೀ ಅನ್ನು ಹೊತ್ತಿ ಮೆಸೇಜ್ ಅನ್ನು ರೆಕಾರ್ಡ್ ಮಾಡಿ"],
        press_to_record_feedback: ["ಧ್ವನಿ ಪ್ರತಿಕ್ರಿಯೆಯನ್ನು ನೀಡಲು <> ಒತ್ತಿರಿ"],
        low_network : ["Press and hold Center to try again"]
    },
    'ta-IN': {
        how_can_help: ['நான் உங்களுக்கு எப்படி உதவலாம்?'],
        listening: ['கேட்கிறேன்…'],
        wait: ['காத்திரு'],
        processing: ['செயலாக்குகிறது…'],
        didnt_catch: ["மன்னிக்கவும் புரியவில்லை"],
        speak_now:['இப்போது பேசவும்…'],
        didnt_find_contact: ['மன்னிக்கவும் அந்த தொடர்பு கிடைக்கவில்லை'],
        calling: ['காலிங்…'],
        activate_voice: ['குரல் பதிவு செய்ய சென்டர் விசையை அழுத்தவும்'],
        battery_perc: ['பேட்டரி சதவிதம்'],
        wifi_on: ['வைஃபை ஆன்'],
        wifi_off: ['வைஃபை ஆஃப்'],
        check_internet: ['இணைய இணைப்பு பிரச்சினை உள்ளது. தயவு செய்து மீண்டும் முயற்சிக்கவும்.'],
        poor_connectivity: ['மோசமான நெட்வொர்க் இணைப்பு'],
        no_sim: ['சிம் கார்டைச் செருகவும்'],
        push_talk: ['குரல் பதிவு செய்ய சென்டர் விசையை அழுத்தி பிடிக்கவும், முடிந்தவுடன் விசையை விடவும்'],
        retry_msg : ["மீண்டும் முயற்சிக்க மைய விசையை அழுத்தவும்"],
        retry_msg_ptt : ["மீண்டும் முயற்ச்சிக்க மைய விசையை அழுத்தி பிடிக்கவும்"],
        press_to_record_msg : ["எஸ்.எம்.எஸ் பதிவு செய்ய மைய விசையை நீண்டநேரம் அழுத்தவும்"],
        press_to_record_feedback: ["குரல் கருத்தை வழங்குவதற்கு  <>- ஐ அழுத்தவும்"],
        low_network : ["Press and hold Center to try again"]
    },
    'ml-IN': {
        how_can_help: ['ഞ്ഞജന്‍ നിങ്ങളെ എങ്ങിനെയാണ്‌ സഹായിക്കേണ്ടത്‌'],
        listening: ['കേള്‍ക്കുന്നു…'],
        wait: ['കാത്തിരിക്കൂ'],
        processing: ['പ്രോസെസ് ചെയ്യുന്നു…'],
        didnt_catch: ["ക്ഷമിക്കണം, പറഞ്ഞത് മനസ്സിലായില്ല"],
        speak_now:['ഇപ്പോള്‍, സംസാരിക്കൂ…'],
        didnt_find_contact: ['ക്ഷമിക്കണം, നിങ്ങള്‍ ആവശ്യപെട്ട കാംട്യാക്ട് ലഭ്യമല്ല'],
        calling: ['വിളിക്കുന്നു…'],
        activate_voice: ['ശബ്ദം റെക്കോർഡുചെയ്യുന്നതിന് സെൻട്രൽ കീ അമർത്തുക'],
        battery_perc: ['ബ്യാടരീ ശതമാനം'],
        wifi_on: ['വിഫി ഒന്നാണ്'],
        wifi_off: ['വിഫി ഓഫ്ഫാണ്'],
        check_internet: ['ഇന്റർനെറ്റ് കണക്റ്റിവിറ്റിയിൽ ഒരു പ്രശ്നമുണ്ടെന്ന് തോന്നുന്നു. വീണ്ടും ശ്രമിക്കുക.'],
        poor_connectivity: ['കുറഞ്ഞ നെറ്റ്വർക്ക് കണക്റ്റിവിറ്റി'],
        no_sim: ['ദയവായി ഒരു സിം കാർഡ് ഇടുക'],
        push_talk: ['ശബ്ദം റെക്കോർഡുചെയ്യാൻ സെന്റർ കീ അമർത്തിപ്പിടിക്കുക, ചെയ്തുകഴിഞ്ഞാൽ റിലീസ് ചെയ്യുക'],
        retry_msg : ["വീണ്ടും ശ്രമിക്കാൻ മധ്യഭാഗത്ത് കീ അമർത്തുക"],
        retry_msg_ptt : ["വീണ്ടും ശ്രമിക്കാൻ മധ്യഭാഗത്ത് കീ അമർത്തിപ്പിടിക്കുക"],
        press_to_record_msg : ["സന്ദേശം റെക്കോർഡ് ചെയ്യുന്നതിന് സെന്റർ കീ ദീർഘനേരം അമർത്തുക"],
        press_to_record_feedback: ["വോയ്സ് ഫീഡ്ബാക്ക് നൽകാൻ <> അമർത്തുക"],
        low_network : ["Press and hold Center to try again"]
    }
}

VL.feedbackList = {
  "en-IN":[
      "Lorem ipsum dolor",
      "consectetur elit",
      "sed do eiusmod"
    ],
  "hi-IN":[
      "Lorem ipsum dolor",
      "consectetur elit",
      "sed do eiusmod"
    ],
  "gu-IN":[
      "Lorem ipsum dolor",
      "consectetur elit",
      "sed do eiusmod"
    ],
  "mr-IN":[
      "Lorem ipsum dolor",
      "consectetur elit",
      "sed do eiusmod"
    ],
  "ml-IN":[
      "Lorem ipsum dolor",
      "consectetur elit",
      "sed do eiusmod"
    ],
  "ta-IN":[
      "Lorem ipsum dolor",
      "consectetur elit",
      "sed do eiusmod"
    ],
  "te-IN":[
      "Lorem ipsum dolor",
      "consectetur elit",
      "sed do eiusmod"
    ],
  "kn-IN":[
      "Lorem ipsum dolor",
      "consectetur elit",
      "sed do eiusmod"
    ],
  "bn-IN":[
      "Lorem ipsum dolor",
      "consectetur elit",
      "sed do eiusmod"
    ]
}

VL.faq = {
  "en-IN": [
    {
      "title": "1. How do I change the language?",
      "text": "To change the language, click on the ‘Language’ option on the Right Soft Key and select the desired language."
    },
    {
      "title": "2. What are some of the commands I can give my Voice Assistant?",
      "text": "To view a sample list of commands you can give, go to the Menu and select Guide."
    },
    {
      "title": "3. When do I give the voice command?",
      "text": "On App launch, you can start speaking when you see the ‘Listening’ screen. Other times, you can press the centre key, when prompted, to activate voice recording."
    },
    {
      "title": "4. Why can’t I place calls or send SMS’s using HelloJio Voice Assistant?",
      "text": "If you see the ‘Please insert SIM Card’ error message, it means your SIM card isn’t inserted or is not properly in place. Properly fix the SIM card in its slot and try again.If you see the ‘Poor Network Connectivity’ error message, it means the device is receiving very poor network coverage. Try moving to an area with better network coverage."
    },
    {
      "title": "5. I keep seeing the screen ‘Please close app and ensure you have internet connectivity’. Why can’t I use my HelloJio Voice Assistant?",
      "text": "When you see this screen, it means your device does not have an internet connection. You can try the following steps: <br>5.1. Ensure your phone is not on Airplane mode<br>5.2. Ensure your phones data connection is on or the WiFi is connected."
    },
    {
      "title": "6. Whenever I speak a voice command, I get the screen ‘Sorry didn’t catch’. Why is that?",
      "text": "If you’re seeing this screen, it means the HelloJio Voice Assistant wasn’t able to properly receive the audio message. Try not being too loud, or speaking too softly."
    }
  ],
  "hi-IN": [
    {
      "title": "1. मैं भाषा कैसे बदल सकता हूँ?",
      "text": "भाषा बदलने के लिए, दायीं सॉफ्ट की के 'भाषा' विकल्प पर क्लिक करें और मनचाही भाषा चुनें।"
    },
    {
      "title": "2. कौन से कमांड मैं अपने वॉइस असिस्टेंट को दे सकता हूँ?",
      "text": "आप कौन से कमांड दे सकते हैं उसका सैंपल लिस्ट देखने के लिए मेन्यू पर जाएं और गाइड चुनें।"
    },
    {
      "title": "3. मैं वॉइस कमांड कब दे सकता हूँ?",
      "text": "ऐप लॉन्च होने पर, जब आप 'सुन रहें हैं' स्क्रीन देखें तब आप बोलना शुरू कर सकते हैं। अन्य समय पर,  वॉइस रिकॉर्डिंग सक्रिय करने के लिए, जब संकेत दिया जाएं तब मध्य की दबाएं।"
    },
    {
      "title": "4. मैं हैलोजिओ वॉइस असिस्टेंट का उपयोग करके कॉल या एस.एम.एस क्यों नहीं कर सकता हूँ?",
      "text": "अगर आपको 'कृपया सिम कार्ड डालें' त्रुटि संदेश दिखाई देता है, तो इसका मतलब है कि आपका सिम कार्ड ठीक से लगा हुआ नहीं है या सही जगह पर नहीं रखा गया है। सिम कार्ड को उसके स्लॉट में ठीक तरह से लगायें और फिर से प्रयास करें।अगर आपको 'खराब नेटवर्क कनेक्टिविटी' त्रुटि संदेश दिखाई देता है,  तो इसका मतलब है कि डिवाइस बहुत खराब नेटवर्क कवरेज प्राप्त कर रहा है। बेहतर नेटवर्क कवरेज वाले क्षेत्र में जाने की कोशिश करें।"
    },
    {
      "title": "5. मैं 'ऐप बंद करें और सुनिश्चित करें कि आपके पास इंटरनेट कनेक्टिविटी है' स्क्रीन देखे जा रहा हूँ।  मैं मेरे हेल्लोजिओ वॉइस असिस्टेंट का उपयोग क्यों नहीं कर सकता हूँ?",
      "text": "जब आप यह स्क्रीन देखते हैं, तो इसका मतलब है कि आपके डिवाइस में इंटरनेट कनेक्शन नहीं है। आप निम्न चरण का प्रयास कर सकते हैं: <br>5.1. सुनिश्चित करें कि आपका फोन एयरप्लेन मोड पर नहीं है<br>5.2. सुनिश्चित करें कि आपके फोन का डेटा कनेक्शन चालू है या WiFi से कनेक्ट है"
    },
    {
      "title": "6. जब भी मैं एक वॉइस कमांड बोलता हूँ, तो मुझे 'खेद है कि यह समझ नहीं पाएं' स्क्रीन मिलता है। ऐसा क्यों है?",
      "text": "यदि आप इस स्क्रीन को देख रहे हैं, तो इसका मतलब है कि हेल्लोजिओ वॉइस असिस्टेंट, ऑडियो संदेश ठीक से प्राप्त करने में सक्षम नहीं है। बहुत जोर से या धीरे से बोलने की कोशिश न करें।"
    }
  ],
  "gu-IN": [
    {
      "title": "1. હું ભાષા કેવી રીતે બદલી શકું છું?",
      "text": "ભાષા બદલવા માટે,જમણી સોફ્ટ કી પર 'ભાષા' વિકલ્પ પર ક્લિક કરો અને ઇચ્છિત ભાષા પસંદ કરો."
    },
    {
      "title": "2. કયા કમાન્ડ હું મારા વોઈસ અસિસટન્ટને આપી શકું છું?",
      "text": "તમે કયા કમાન્ડ આપી શકો છો તેનું સેમ્પ્લ લીસ્ટ જોવા માટે મેન્યુમાં જાઓ અને માર્ગદર્શિકા પસંદ કરો. "
    },
    {
      "title": "3. હું વોઈસ કમાન્ડ ક્યારે  આપી શકું  છું?",
      "text": "એપના લોન્ચ પર, જયારે તમે 'સાંભળી રહ્યા છો' સ્ક્રીન જુઓ ત્યારે બોલવાનું શરૂ કરો. અન્ય સમયે,વોઈસ રેકોર્ડિંગ સક્રિય કરવા માટે, સંકેત આપવામાં આવે ત્યારે મધ્ય કી દબાવો."
    },
    {
      "title": "4. હું હેલોજીઓ વોઈસ અસિસટન્ટનો ઉપયોગ કરીને કોલ્સ અથવા એસ.એમ.એસ શા માટે નથી કરી શકતો/શક્તી?",
      "text": "જો તમે 'કૃપા કરી સિમ કાર્ડ નાખો' ત્રુટી મેસેજ જુઓ છો, તો તેનો અર્થ એ છે કે તમારૂ સિમ કાર્ડ  નાખેલુ નથી અથવા યોગ્ય જગ્યાએ નથી. સિમ કાર્ડને  તેના સ્લોટમાં બરાબર મુકો અને ફરીથી પ્રયાસ કરો.જો તમે 'નબળા નેટવર્ક કનેક્ટિવિટી' ત્રુટી સંદેશ જુઓ છો, તો તેનો અર્થ એ છે કે ડિવાઈસ ખૂબ નબળું નેટવર્ક કવરેજ પ્રાપ્ત કરી રહ્યું છે. વધુ સારા નેટવર્ક કવરેજ વાળા વિસ્તાર પર જવાનો પ્રયાસ કરો."
    },
    {
      "title": "5. હું 'કૃપા કરી એપ બંધ કરો અને ખાતરી કરો કે તમારી પાસે ઇન્ટરનેટ કનેક્ટિવિટી છે' સ્ક્રીન જોયા રાખું છું.  હું મારા હેલોજીઓ વોઈસ અસિસટન્ટને શા માટે વાપરી ન શકું?",
      "text": "જયારે તમે આ સ્ક્રીન જુઓ છો,તો તેનો અર્થ એ છે કે તમારા ડિવાઈસમાં ઇન્ટરનેટ કનેક્શન નથી. તમે નીચેના પગલાઓનો પ્રયત્ન કરી શકો છો: <br>5.1. ખાતરી કરો કે તમારો ફોન એરપ્લેન મોડમાં નથી.<br>5.2. ખાતરી કરો કે તમારા ફોનનું ડેટા કનેક્શન ચાલુ છે અથવા WIFI જોડાયેલ છે."
    },
    {
      "title": "6. જયારે પણ હું વોઈસ કમાન્ડ બોલું છું, ત્યારે મને 'માફ કરો પકડી શકાયું નથી' સ્ક્રીન જોવા મળે છે. તે શા માટે છે?",
      "text": "જો તમે આ સ્ક્રીન જોઈ રહ્યાં છો, તો તેનો અર્થ એ છે કે હેલોજીઓ વોઈસ અસિસટન્ટ, ઓડિયો સંદેશને યોગ્ય રીતે પ્રાપ્ત કરવામાં સક્ષમ નથી. ખૂબ મોટેથી અથવા ધીમેથી બોલવાનો પ્રયાસ ન કરો."
    }
  ],
  "mr-IN": [
    {
      "title": "1. मी भाषा कशी बदलू शकतो?",
      "text": "भाषा बदलण्यासाठी, 'लॅंग्वेज' पर्यायावर राईट सॉफ्ट की ने क्लिक करा आणि मनपसंद भाषा निवडा."
    },
    {
      "title": "2. मी माझ्या व्हॉईस असिस्टंटला कोणकोणत्या कमांड देऊ शकतो?",
      "text": "तुम्ही कोणकोणत्या कमांड देऊ शकता याची नमुना यादी पाहण्याकरता, मेन्यू मध्ये जाऊन गाईड निवडा."
    },
    {
      "title": "3. मी व्हॉईस कमांड केव्हा देऊ शकतो?",
      "text": "अॅप उघडल्यावर, जेव्हा तुम्हाला 'ऐकतोय' ही स्क्रीन दिसेल तेव्हा तुम्ही बोलायला सुरु करू शकता. इतरवेळी, जेव्हा सूचित केले जाईल, तेव्हा व्हॉईस रेकॉर्डिंग सक्रीय करण्यासाठी, तुम्ही सेंटर की दाबू शकता."
    },
    {
      "title": "4. हॅलोजिओ व्हॉईस असिस्टंटद्वारे मी कॉल करू किंवा संदेश का पाठवू शकत नाही?",
      "text": "तुम्हाला जर 'कृपया सिम कार्ड टाका' हा त्रुटी संदेश दिसत असेल, याचा अर्थ तुमचे सिम कार्ड टाकले गेलेले नसेल किंवा ते व्यवस्थित टाकले गेले नसेल. सिम कार्ड त्याच्या स्लॉट मध्ये व्यवस्थित टाका आणि पुन्हा प्रयत्न करा.तुम्हाला जर 'अपुरे नेटवर्क कनेक्टिव्हीटी' हा त्रुटी संदेश दिसत असेल, याचा अर्थ डिव्हाईसला खुप कमी नेटवर्क कव्हरेज मिळत आहे. उत्तम नेटवर्क कव्हरेज क्षेत्राकडे जाण्याचा प्रयत्न करा."
    },
    {
      "title": "5. 'कृपया अॅप बंद करा आणि तुम्हाला इंटरनेट जोडल्याची खात्री करा' ही स्क्रीन मला नेहमी का दिसत आहे? मी माझे हॅलोजिओ व्हॉईस असिस्टंट का वापरू शकत नाही?",
      "text": "जर तुम्हाला ही स्क्रीन दिसत असेल, याचा अर्थ तुमच्या डिव्हाईसला इंटरनेटशी जोडलेले नाही आहे. तुम्ही खालील सूचनांचा अवलंब करू शकता: <br>5.1. आपला फोन एअरोप्लेन मोड मध्ये नसल्याची खात्री करा.<br>5.2. आपल्या फोनचा डेटा कनेक्शन चालू असल्याची किंवा तो वाय-फाय शी जोडल्याची खात्री करा."
    },
    {
      "title": "6. जेव्हा कधी मी व्हॉईस कमांड बोलतो, तेव्हा 'कृपया कळले नाही' ही स्क्रीन मला दिसते. असे का?",
      "text": "जर तुम्हाला ही स्क्रीन दिसत असेल, याचा अर्थ हॅलोजिओ व्हॉईस असिस्टंट आवाज व्यवस्थित घेऊ शकला नाही. अतिउच्च किंवा अतिसौम्य आवाजात बोलण्याचा प्रयत्न करू नये."
    }
  ],
  "bn-IN": [
    {
      "title": "1. আমি কিভাবে ভাষা পরিবর্তন করব?",
      "text": "ভাষা পরিবর্তন করতে, রাইট সফ্ট কী'র 'ভাষা' বিকল্পটি ক্লিক করুন এবং প্রয়োজনীয় ভাষা নির্বাচন করুন।"
    },
    {
      "title": "2. আমি আমার ভয়েস অ্যাসিস্ট্যান্টকে কি কি কমান্ড দিতে পারি?",
      "text": "কমান্ডের একটি নমুনা তালিকা দেখতে, মেনুতে যান এবং নির্দেশিকা নির্বাচন করুন, আপনি দিতে পারেন। "
    },
    {
      "title": "3. আমি কখন ভয়েস কমান্ড দেব?",
      "text": "অ্যাপ লঞ্চে, আপনি যখন 'শুনছে' স্ক্রীন দেখতে পান তখন আপনি কথা বলতে শুরু করতে পারেন। অন্য সময়,  ভয়েস রেকর্ডিং সক্রিয় করতে, যখন প্রম্পট করা হয়েছে, আপনি সেন্টার কী টিপতে পারেন।"
    },
    {
      "title": "4. হ্যালোজিও ভয়েস অ্যাসিস্ট্যান্ট ব্যবহার করে কেন আমি কল করতে অথবা এস.এম.এস পাঠাতে পারছি না?",
      "text": "যদি আপনি 'অনুগ্রহ করে সিম কার্ড ঢোকান' ত্রুটি বার্তাটি দেখতে পান, এর মানে আপনার সিম কার্ডটি ঢোকানো হয় নি অথবা এটি যথাস্থানে নেই। সিম কার্ডটি যথোপযুক্তভাবে তার স্লটে রাখুন এবং আবার চেষ্টা করুন। যদি আপনি 'খারাপ নেটওয়ার্ক সংযোগ' ত্রুটি বার্তাটি দেখতে পান,  এর মানে ডিভাইসটি খুব খারাপ নেটওয়ার্ক কভারেজ প্রাপ্ত করছে। উন্নত নেটওয়ার্ক কভারেজ যুক্ত একটি এলাকায় যাওয়ার চেষ্টা করুন।"
    },
    {
      "title": "5. আমি স্ক্রীনটি দেখছি 'অনুগ্রহ করে অ্যাপটি বন্ধ করুন এবং আপনার ইন্টারনেট সংযোগটি নিশ্চিত করুন'। আমি কেন আমার হ্যালোজিও ভয়েস অ্যাসিস্ট্যান্ট ব্যবহার করতে পারি না?",
      "text": "যখন আপনি এই স্ক্রীনটি দেখেন, এর মানে আপনার ডিভাইসে ইন্টারনেট সংযোগ নেই। আপনি নিম্নলিখিত পদক্ষেপগুলি চেষ্টা করতে পারেন: <br>5.1. আপনার ফোনটি বিমান মোডে নেই তা নিশ্চিত করুন<br>5.2. আপনার ফোনের ডেটা সংযোগ চালু অথবা ওয়াইফাই সংযুক্ত আছে কিনা তা নিশ্চিত করুন."
    },
    {
      "title": "6. যখনই আমি একটি ভয়েস কমান্ড বলি, আমি 'দুঃখিত বোঝা গেল না'  স্ক্রীনটি পাই এটা কেন হয়?",
      "text": "আপনি যদি এই স্ক্রীনটি দেখেন, এর মানে হ্যালোজিও ভয়েস অ্যাসিস্ট্যান্টটি সঠিকভাবে অডিও বার্তাটি পেতে সক্ষম ছিল না। খুব জোরে অথবা খুব ধীরে কথা বলতে চেষ্টা করবেন না।"
    }
  ],
  "te-IN": [
    {
      "title": "1. నేను భాషను ఎలా మార్చగలను?",
      "text": "భాషను మార్చడానికి, కుడి సాఫ్ట్ కీ మీద ఉన్న 'భాష' ఎంపిక పై క్లిక్ చేయండి మరియు మీకు కావాల్సిన భాషని ఎంచుకోండి."
    },
    {
      "title": "2. నా వాయిస్ అసిస్టెంట్‌కి నేను ఇవ్వగలిగిన కొన్ని ఆదేశాలు ఏమిటి?",
      "text": "మీరు ఇవ్వగలిగే ఆదేశాల యొక్క నమూనా లిస్టుని చూడటానికి, మెనుకి వెళ్లి,  గైడ్ ఎంచుకోండి."
    },
    {
      "title": "3. నేను వాయిస్ ఆదేశం ఎప్పుడు ఇవ్వగలను?",
      "text": "యాప్ ప్రారంభించినప్పుడు, మీరు 'వింటున్నాను' స్క్రీన్ చూసినప్పుడు మీరు మాట్లడడం ప్రారంభించవచ్చు. ఇతర సమయాల్లో, వాయిస్ రికార్డింగ్ యాక్టివేట్ చేయడానికి, ప్రాంప్ట్ అయ్యినప్పుడు, మీరు మధ్యలో ఉండే బటన్ నొక్కండి."
    },
    {
      "title": "4. నేను హలోజియో వాయిస్ అసిస్టెంట్ ఉపయోగించి కాల్స్ లేదా ఎస్.ఎమ్.ఎస్‌లు ఎందుకు పంపలేను?",
      "text": "మీరు 'దయచేసి సిమ్ కార్డ్ పెట్టండి' అనే లోపం సందేశం చూసినట్లయితే,  మీరు సిమ్ కార్డ్ పెట్టలేదు లేదా సరిగ్గా దాని స్థానంలో ఉంచలేదు అని అర్ధం.  సిమ్ కార్డ్ దాని స్లాట్‌లో సరిగ్గా పెట్టి, మళ్లీ ప్రయత్నించండి. మీరు 'నెటవర్క్ కనెక్టివిటీ సరిగ్గా లేదు' అనే లోపం సందేశం చూసినట్లయితే, డివైస్ చాలా తక్కువ నెటవర్క్ కవరేజ్ అందుకుంటుంది అని అర్ధం. మెరుగైన నెటవర్క్ కవరేజ్  కోసం మరొక ప్రాంతానికి వెళ్ళడానికి ప్రయత్నించండి."
    },
    {
      "title": "5. నేను 'దయచేసి యాప్‌ని మూసివేయండి మరియు మీకు ఇంటర్నెట్ కనెక్టివిటీ ఉందా అని నిర్దారించుకోండి' అనే స్క్రీన్ చూస్తున్నాను. నేను నా హలోజియో వాయిస్ అసిస్టెంట్ ఎందుకు ఉపయోగించలేను?",
      "text": "ఈ స్క్రీన్ మీరు చూసినప్పుడు, మీ డివైస్‌కి ఇంటర్నెట్ కనెక్షన్ లేదు అని అర్ధం. మీరు క్రింది దశలను ప్రయత్నించవచ్చు: <br>5.1. మీ ఫోన్ ఎయిర్‌ప్లేన్ మోడ్‌లో లేదని నిర్దారించుకోండి <br>5.2. మీ ఫోన్ యొక్క డేటా కనెక్షన్ ఆన్‌లో ఉందా లేదా  WiFi కనెక్ట్ చేసి ఉందా అని నిర్దారించుకోండి"
    },
    {
      "title": "6. నేను వాయిస్ ఆదేశం ఇచ్చిన ఎప్పుడైనా, నాకు 'క్షమించండి లభించలేదు' అనే స్క్రీన్ వస్తుంది. ఎందుకు అలా?",
      "text": "మీరు ఈ స్క్రీన్ చూసినట్లయితే, హలోజియో వాయిస్ అసిస్టెంట్ ఆడియో సందేశాన్ని సరిగ్గా స్వీకరించలేదు అని అర్ధం. చాలా పెద్దగా లేదా, మరీ మృదువుగా మాట్లాడకుండా ఉండడానికి ప్రయత్నించండి."
    }
  ],
  "ta-IN": [
    {
      "title": "1. நான் எப்படி மொழியை மாற்றுவது?",
      "text": "மொழியை மாற்றுவதற்கு, ரைட் சாப்ட் கீ-இல் 'மொழி' விருப்பத்தை கிளிக் செய்யவும் மற்றும் விரும்பிய மொழியை தேர்ந்தெடுக்கவும்."
    },
    {
      "title": "2. நான் எனது வாய்ஸ் அசிஸ்டண்ட்-க்கு கொடுக்கும் சில  கட்டளைகள் யாவை?",
      "text": "கட்டளைகளின் மாதிரி பட்டியலைப் பார்க்க, நீங்கள் மெனு-க்கு செல்லவும் மற்றும் கையேட்டை தேர்ந்தெடுக்கவும்."
    },
    {
      "title": "3. நான் வாய்ஸ் கட்டளையை எப்போது கொடுக்க வேண்டும்?",
      "text": "ஆப்-இன் துவக்கத்தில், நீங்கள் 'கவனிக்கும்' திரையை பார்க்கும்போது பேசுவதை தொடங்கலாம். மற்ற நேரங்களில், வாய்ஸ்-ஐ பதிவை செயல்படுத்த கேட்கும் போது,  நீங்கள் சென்டர் கீ -ஐ அழுத்தலாம்."
    },
    {
      "title": "4. ஹலோ ஜியோ வாய்ஸ் அசிஸ்டண்ட்-ஐ பயன்படுத்தி நான் ஏன் அழைப்புகளை செய்யவோ அல்லது எஸ்.எம். எஸ்-ஐ அனுப்பவோ முடியாது?",
      "text": "'தயவுசெய்து சிம் கார்டு -ஐ இன்செர்ட் செய்யவும்'  என்ற பிழை செய்தியை  நீங்கள் பார்த்தால், அது உங்கள் சிம் கார்டு இன்செர்ட் செய்யவில்லை அல்லது இடத்தில் சரியாக இல்லை என்று பொருள். சிம் கார்டு-ஐ அதன் ஸ்லாட்டில் சரியாக பொருத்தி மீண்டும் முயற்சிக்கவும்.'மோசமான நெட்வொர்க் இணைப்பு' பிழை செய்தியை நீங்கள் பார்த்தால், சாதனம் மிக மோசமான நெட்வொர்க் கவரேஜ்-ஐ பெறுகிறது என்று பொருள். சிறந்த நெட்வொர்க் கவரேஜ் உள்ள ஒரு பகுதிக்கு செல்ல முயற்சிக்கவும்."
    },
    {
      "title": "5. 'தயவுசெய்து ஆப்-ஐ மூடவும் மற்றும் உங்களுக்கு இணைய இணைப்பு இருப்பதை உறுதி செய்யவும்' என்னும் திரையை நான் பார்த்துகொண்டு இருக்கிறேன். நான் ஏன் எனது ஹலோஜியோ வாய்ஸ் அசிஸ்டண்ட்-ஐ பயன்படுத்த முடியாது?",
      "text": "நீங்கள் இந்த திரையை பார்த்தால், உங்கள் சாதனத்திற்கு இணைய இணைப்பு இல்லை என்று பொருள். நீங்கள் பின்வரும் செயல்பாடுகளை முயற்சிக்கலாம்: <br>5.1. உங்கள் போன் ஏர்ப்ளைன் பயன்முறையில் இல்லை என்பதை உறுதிப்படுத்தவும்<br>5.2. உங்கள் போன்-இன் டேட்டா இணைப்பு ஆன் செய்யப்பட்டுள்ளது அல்லது WiFi இணைக்கப்பட்டுள்ளது என்பதை உறுதிசெய்யவும்"
    },
    {
      "title": "6. நான் வாய்ஸ் கட்டளையை பேசும் போதெல்லாம், 'மன்னிக்கவும் கைப்பற்றவில்லை' என்ற திரையை நான் பெறுகிறேன். ஏன் அப்படி?",
      "text": "இந்த திரையை நீங்கள் பார்த்தால், ஹலோஜியோ வாய்ஸ் அசிஸ்டண்ட் ஆனது ஆடியோ செய்தியை சரியாக பெற முடியவில்லை என்று பொருள். மிகவும் சத்தமாக அல்லது மிகவும் மென்மையாக பேச முயற்சிக்க வேண்டாம்."
    }
  ],
  "kn-IN": [
    {
      "title": "1. ನಾನು ಭಾಷೆಯನ್ನು ಹೇಗೆ ಬದಲಾಯಿಸಬಹುದು?",
      "text": "ಭಾಷೆಯನ್ನು ಬದಲಾಯಿಸಲು, ಬಲಗಡೆ ಇರುವ ಸಾಫ್ಟ್ ಕೀ ಮೇಲಿನ 'ಭಾಷೆ' ಆಯ್ಕೆಯ ಮೇಲೆ ಕ್ಲಿಕ್ ಮಾಡಿ ಮತ್ತು ಇಷ್ಟಪಡುವ ಭಾಷೆಯನ್ನು ಆಯ್ಕೆ ಮಾಡಿ."
    },
    {
      "title": "2. ನನ್ನ ವಾಯ್ಸ್  ಅಸಿಸ್ಟೆಂಟ್‌ಗೆ  ನಾನು ನೀಡಬಹುದಾದ ಕೆಲವು  ಕಮಾಂಡ್‌ಗಳು   ಯಾವುವು?",
      "text": " ಕಮಾಂಡ್‌ಗಳ ಮಾದರಿ ಪಟ್ಟಿಯನ್ನು ವೀಕ್ಷಿಸಲು, ಮೆನುಗೆ ಹೋಗಿ ಮತ್ತು ಗೈಡ್ ಅನ್ನು ಆಯ್ಕೆ ಮಾಡಿ ಎಂದು ನೀವು ಹೇಳಬಹುದು."
    },
    {
      "title": "3. ವಾಯ್ಸ್  ಕಮಾಂಡ್‌ಗಳನ್ನು ನಾನು ಯಾವಾಗ ನೀಡಬಹುದು?",
      "text": "ಆಪ್ ಬಿಡುಗಡೆಯ  ಸಮಯದಲ್ಲಿ, ನೀವು 'ಆಲಿಸುವ' ಪರದೆಯನ್ನು ನೋಡಿದಾಗ ನೀವು ಮಾತನಾಡುವುದನ್ನು ಪ್ರಾರಂಭಿಸಬಹುದು. ಇತರ ಸಮಯದಲ್ಲಿ, ಧ್ವನಿ ರೆಕಾರ್ಡಿಂಗ್ ಅನ್ನು ಸಕ್ರಿಯಗೊಳಿಸಲು ಪ್ರಚೋದಿಸಿದಾಗ,ಸೆಂಟರ್ ಕೀಯನ್ನು  ನೀವು  ಒತ್ತಬಹುದು"
    },
    {
      "title": "4. ಹಲೋ ಜಿಯೋ ವಾಯ್ಸ್ ಅಸಿಸ್ಟೆಂಟ್ ಬಳಸಿಕೊಂಡು ನಾನು ಕರೆಗಳನ್ನು ಮಾಡಲು ಅಥವಾ  ಎಸ್.ಎಮ್.ಎಸ್‌ಗಳನ್ನು ಕಳುಹಿಸಲು ಯಾಕೆ ಸಾಧ್ಯವಿಲ್ಲ?",
      "text": "'ದಯವಿಟ್ಟು ಸಿಮ್ ಕಾರ್ಡ್ ಸೇರಿಸಿ' ಎಂಬ ದೋಷದ ಸಂದೇಶವನ್ನು ನೀವು ನೋಡಿದರೆ, ಇದರರ್ಥ ನಿಮ್ಮ ಸಿಮ್ ಕಾರ್ಡ್ ಸರಿಯಾಗಿ  ಸೇರಿಸಲಾಗಿರುವುದಿಲ್ಲ ಅಥವಾ ಸರಿಯಾದ ಸ್ಥಳದಲ್ಲಿ ಇರುವುದಿಲ್ಲ ಎಂದು. ಸರಿಯಾಗಿ  ಸಿಮ್  ಕಾರ್ಡ್ ಅನ್ನು ಅದರ ಸ್ಲಾಟ್‌ನಲ್ಲಿ ಸೇರಿಸಿ  ಮತ್ತು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ. ನೀವು 'ಕಳಪೆ ನೆಟ್‌ವರ್ಕ್ ಕನೆಕ್ಟಿವಿಟಿ' ಎಂಬ ದೋಷದ ಸಂದೇಶವನ್ನು ನೋಡಿದರೆ, ಇದರರ್ಥ ಡಿವೈಸ್  ಕಳಪೆ ನೆಟ್‌ವರ್ಕ್ ಕವರೇಜ್ ಅನ್ನು ಸ್ವೀಕರಿಸುತ್ತಿದೆ ಎಂದು.  ಉತ್ತಮ ನೆಟ್‌ವರ್ಕ್ ಕವರೇಜ್  ಇರುವ ಪ್ರದೇಶಕ್ಕೆ ಚಲಿಸಲು ಪ್ರಯತ್ನಿಸಿ."
    },
    {
      "title": "5. ನಾನು  ಪರದೆಯನ್ನು ನೋಡುತ್ತಲೇ ಇದ್ದೇನೆ 'ದಯವಿಟ್ಟು ಆಪ್ ಅನ್ನು ಮುಚ್ಚಿ ಮತ್ತು ನೀವು ಇಂಟರ್ನೆಟ್ ಸಂಪರ್ಕವನ್ನು ಹೊಂದಿರುವಿರಿ ಎಂದು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ'. ನನ್ನ ಹಲೋ ಜಿಯೋ ವಾಯ್ಸ್ ಅಸಿಸ್ಟೆಂಟ್ ಅನ್ನು ನಾನು ಯಾಕೆ ಬಳಸಲು ಸಾಧ್ಯವಿಲ್ಲ?",
      "text": "ಈ ಪರದೆಯನ್ನು ನೀವು ನೋಡಿದಾಗ,ಇದರರ್ಥ ನಿಮ್ಮ ಡಿವೈಸ್ ಇಂಟರ್ನೆಟ್ ಸಂಪರ್ಕವನ್ನು ಹೊಂದಿಲ್ಲ ಎಂದು. ನೀವು ಈ ಕೆಳಗಿನ ಹಂತಗಳನ್ನು ಪ್ರಯತ್ನಿಸಬಹುದು: <br>5.1. ನಿಮ್ಮ ಫೋನ್ ಏರೋಪ್ಲೇನ್ ಮೋಡ್ನಲ್ಲಿ ಇಲ್ಲ ಎಂದು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ<br>5.2. ನಿಮ್ಮ ಫೋನ್‌ಗಳ ಡೇಟಾ ಸಂಪರ್ಕವು ಆನ್ ಆಗಿರುತ್ತದೆ ಅಥವಾ WiFi ಸಂಪರ್ಕಗೊಂಡಿದೆ ಎಂದು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ"
    },
    {
      "title": "6. ನಾನು  ವಾಯ್ಸ್ ಕಮಾಂಡ್‌ನಲ್ಲಿ ಮಾತನಾಡುವಾಗ, 'ಕ್ಷಮಿಸಿ ಕೇಳಲಿಲ್ಲ' ಎಂಬ ಪರದೆಯನ್ನು ನಾನು ಪಡೆಯುತ್ತೇನೆ. ಅದು ಯಾಕೆ?",
      "text": "ನೀವು ಈ ಪರದೆಯನ್ನು ನೋಡುತ್ತಿದ್ದರೆ, ಇದರರ್ಥ ಹಲೋಜಿಯೋ ವಾಯ್ಸ್ ಅಸಿಸ್ಟೆಂಟ್ ಸರಿಯಾಗಿ ಆಡಿಯೋ ಸಂದೇಶವನ್ನು ಸ್ವೀಕರಿಸಲಾಗಿಲ್ಲ ಎಂದು. ತುಂಬಾ ಜೋರಾಗಿರಬಾರದು ಅಥವಾ ತುಂಬಾ ಮೆದುವಾಗಿ ಮಾತನಾಡುವುದನ್ನು ಪ್ರಯತ್ನಿಸಿ."
    }
  ],
  "ml-IN": [
    {
      "title": "1. ഞാൻ എങ്ങനെ ഭാഷ മാറ്റും?",
      "text": "ഭാഷ മാറ്റുന്നതിനായി, വലത് സോഫ്റ്റ് കീയിലെ 'ഭാഷ' ഓപ്ഷനിൽ ക്ലിക്ക് ചെയ്ത് ആവശ്യമുള്ള ഭാഷ തിരഞ്ഞെടുക്കുക."
    },
    {
      "title": "2. എന്‍റെ  വോയിസ്‌ അസിസ്റ്റന്‍റിന്  എനിക്ക് നൽകാന്‍ കഴിയുന്ന ചില കമാൻഡുകൾ ഏതെല്ലാമാണ്?",
      "text": "നിങ്ങള്‍ക്ക് നല്‍കാന്‍ കഴിയുന്ന ചില കമാൻഡുകളുടെ സാമ്പിള്‍  പട്ടിക കാണുന്നതിനായി, മെന്യുവില്‍  പോയി ഗൈഡ് തിരഞ്ഞെടുക്കുക"
    },
    {
      "title": "3. ഞാൻ എപ്പോഴാണ് വോയിസ്‌  കമാൻഡ് നൽകേണ്ടത്?",
      "text": "ആപ്പ് ലോഞ്ചില്‍,  'കേൾക്കുന്നു' സ്ക്രീൻ കാണുമ്പോൾ നിങ്ങൾക്ക് സംസാരിക്കല്‍ ആരംഭിക്കാൻ കഴിയും. മറ്റ് സമയത്ത് ,വോയിസ് റെക്കോർഡിംഗ് സജീവമാക്കാൻ നിങ്ങൾക്ക് ആവശ്യമുള്ളപ്പോൾ സെന്‍റർ കീ അമർത്താനാകും."
    },
    {
      "title": "4. എന്തുകൊണ്ട് എനിക്ക് ഹെലോജിഒ വോയിസ് അസിസ്റ്റന്റ്  ഉപയോഗിച്ച് കോളുകൾ വിളിക്കാനോ അല്ലെങ്കില്‍  എസ്.എം.എസ്  അയയ്ക്കാനോ സാധിക്കുന്നില്ല ?",
      "text": "നിങ്ങൾ ' ദയവായി സിം കാർഡ് ഇടുക ' എന്ന  പിശക് സന്ദേശം കാണുകയാണെങ്കിൽ, ഇതിനര്‍ത്ഥം   നിങ്ങള്‍  സിം കാർഡ്  ഇട്ടിട്ടില്ല അല്ലെങ്കിൽ ശരിയായ സ്ഥലത്തു ഇട്ടിട്ടില്ല എന്നാണ് ശരിയായി സിം കാർഡ് അതിന്റെ സ്ലോട്ടിൽ ഫിക്സ് ചെയ്ത് വീണ്ടും ശ്രമിക്കുക.നിങ്ങൾ 'മോശം നെറ്റ് വര്‍ക്ക്‌  കണക്റ്റിവിറ്റി' എന്ന  പിശക് സന്ദേശം കാണുകയാണെങ്കിൽ, ഇതിനര്‍ത്ഥം ഉപകരണം വളരെ മോശമായ നെറ്റ് വര്‍ക്ക്‌  കവറേജ് സ്വീകരിക്കുന്നു എന്നാണ് . മികച്ച നെറ്റ് വര്‍ക്ക്  കവറേജ് ഉള്ള പ്രദേശത്തേക്ക് നീങ്ങാന്‍  ശ്രമിക്കുക."
    },
    {
      "title": "5. 'ദയവായി  ആപ്പ്  അടയ്ക്കുകയും  നിങ്ങൾക്ക് ഇന്റർനെറ്റ് കണക്റ്റിവിറ്റി ഉണ്ടെന്ന് ഉറപ്പാക്കുകയും ചെയ്യുക' എന്ന സ്ക്രീൻ ഞാൻ കണ്ടുകൊണ്ടിരിക്കുന്നു. എന്തുകൊണ്ട് എനിക്ക്  എന്‍റെ  ഹെലോജിഒ വോയിസ് അസിസ്റ്റന്റ് ഉപയോഗിക്കാനാവില്ല?",
      "text": "നിങ്ങൾ ഈ സ്ക്രീൻ കാണുമ്പോൾ, ഇതിനര്‍ത്ഥം നിങ്ങളുടെ ഉപകരണത്തിന് ഇന്റർനെറ്റ് കണക്ഷനില്ല എന്നാണ് . നിങ്ങൾക്ക് ഇനിപ്പറയുന്ന ഘട്ടങ്ങൾ ശ്രമിക്കാൻ കഴിയും: <br>5.1. നിങ്ങളുടെ ഫോൺ എയർപ്ലെയിൻ മോഡിൽ അല്ലെന്ന് ഉറപ്പാക്കുക<br>5.2. നിങ്ങളുടെ ഫോണിന്‍റെ ഡാറ്റ കണക്ഷൻ ഓൺ ആണ് അല്ലെങ്കിൽ WiFi കണക്റ്റ്  ചെയ്തിട്ടുണ്ടെന്ന് ഉറപ്പാക്കുക"
    },
    {
      "title": "6. ഞാന്‍  വോയിസ് കമാന്‍ഡ് സംസാരിക്കുമ്പോഴെല്ലാം , എനിക്ക്  'ക്ഷമിക്കണം മനസിലായില്ല' എന്ന സ്ക്രീന്‍ ലഭിക്കുന്നു . എന്തുകൊണ്ടാണത്?",
      "text": "നിങ്ങള്‍  ഈ സ്ക്രീൻ കാണുന്നുണ്ടെങ്കിൽ,ഇതിനർത്ഥം ഹെലോജിഒ വോയ്സ് അസിസ്റ്റന്റിന്  ശരിയായി ഓഡിയോ സന്ദേശം സ്വീകരിക്കാൻ കഴിഞ്ഞില്ല എന്നാണ് . വളരെ ഉച്ചത്തിൽ സംസാരിക്കുകയോ അല്ലെങ്കില്‍ പതുക്കെ സംസാരിക്കുകയോ അരുത്."
    }
  ]
}
