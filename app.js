const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function speak(sentence) {
    const text_speak = new SpeechSynthesisUtterance(sentence);

    text_speak.rate = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hr = day.getHours();

    if(hr >= 0 && hr < 12) {
        speak("Good Morning");
    }

    else if(hr == 12) {
        speak("Good noon");
    }

    else if(hr > 12 && hr <= 17) {
        speak("Good Afternoon");
    }

    else {
        speak("Good Evening");
    }
}

window.addEventListener('load', ()=>{
    speak("Activating Galaxy family");
    speak("Going online");
    wishMe();
})

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    speakThis(transcript.toLowerCase());
}

btn.addEventListener('click', ()=>{
    recognition.start();
})

function speakThis(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = "I did not understand what you said please try again and talk with me only family law releted";

    if(message.includes('hey') || message.includes('hello')) {
        const finalText = "Hello how can i help you ";
        speech.text = finalText;
    }

    else if(message.includes('how are you')) {
        const finalText = "I am fine tell me how can i help you please talk with me only family law releted";
        speech.text = finalText;
    }

    else if(message.includes('name')) {
        const finalText = "My name is Galaxy and I am here to talking with you about family law ";
        speech.text = finalText;
    }

    else if(message.includes('family member')) {
        const finalText = "Your mother, father, bother, sister are your family members";
        speech.text = finalText;
    }

    else if(message.includes('in india there are how many types of family law')) {
        const finalText = "There are five types of Family Law in India. Hindu law– Hindu law, is the oldest and most widely used family law in India. It is based on Hindu holy scriptures such as the Vedas, Upanishads, the Bhagavad-Gita, and the Manusmriti.Muslim law- The Quran and Hadith are the foundations of Muslim law in India. Christian law- The Bible is the foundation of Christian family law in India. Parsi law- The Parsee legal system is founded on Zoroastrian texts. Special Marriage Act, 1954";
        speech.text = finalText;
    }

    else if(message.includes('tell me more information about hindu law')) {
        const finalText = "Hindu family law in India is one of the world’s oldest legal systems. It still has a significant role in determining family law in India. Because Hindu law is founded on religious writings, it might be interpreted differently by various people. As a result, changing or modernizing Hindu law can be difficult. However, Hindu family law in India can be modified to meet the demands of various households. The Hindu Marriage Act of 1955 applied to Hindus, Buddhists, Sikhs, and Jains. The legislation allows a husband to divorce his wife for adultery, cruelty, desertion, or conversion to another faith, and vice versa. ";
        speech.text = finalText;
    }

    
    else if(message.includes('tell me more information about muslim law')) {
        const finalText = "islamic law is a source of family law in india. islamic law, often known as shariat law, is founded on islamic principles. marriage, divorce, inheritance, and child custody are all discussed in islam. in 1937, the muslim personal law (shariat) application act was passed. the dissolution of muslim marriages act of 1939 allows a wife to seek divorce from her husband if, among other things, he hasn’t been seen in four years, hasn’t taken care of her for two years, has been sentenced to prison for more than seven years, or hasn’t performed his marital obligations for three years. ";
        speech.text = finalText;
    }
    
    else if(message.includes('tell me more information about christian law')) {
        const finalText = "the christian divorce act of 1869 established family law in india for christians. a christian husband might divorce his wife for adultery as a result of this behavior. if her spouse has committed adultery, she has the right to divorce him. the indian divorce act was passed in 1869 and applied to all indian people, regardless of religion. a husband might divorce his wife under this statute for adultery, abuse, desertion, or conversion to another faith. similarly, the wife might divorce her husband for infidelity, abuse, or desertion. ";
        speech.text = finalText;
    }
    else if(message.includes('tell me more information about parsi law')) {
        const finalText = "the parsi marriage and divorce act of 1936 acknowledged the wife’s right to maintenance in the form of both alimony pendente lite and permanent alimony.the greatest amount that a judge can order as alimony while a marital dispute is underway is one-fifth of the husband’s net income. the court will evaluate what is just in determining the level of permanent maintenance, taking into account the husband’s ability to pay, the wife’s own assets, and the parties’ behavior. the injunction shall be enforced as long as the wife is chaste and unmarried.";
        speech.text = finalText;
    }
    
    else if(message.includes('tell me more information about special marriage act 1954')) {
        const finalText = "although many people regard marriage as a very religious and ceremonious occasion, other people opt to marry in a fashion that is not regulated by religious regulations. this is especially true in inter-caste or inter-religious weddings when it is more convenient to keep one’s faith and marry legally rather than convert for the sake of a legally legitimate marriage under religionbased statutes. marriage is considered a civil contract under the special marriage act, and if a couple or one of the parties believes that their marriage has ended, they may take legal consultation from a divorce lawyer and file for divorce. the fundamental motivation for enacting the special marriage act of 1954 was to establish a special form of marriage for the people of india and all indian citizens living abroad, regardless of religion or faith practiced by either side.";
        speech.text = finalText;
    }
    
    else if(message.includes('what is hindu widows remarriage act 1856')) {
        const finalText = "marriage of hindu widows legalised, guardianship of children of deceased husband on the remarriage of his widow, nothing in this act to render any childless widow capable of inheriting, saving of rights of widow marrying, except as provided in sections 2 to 4, ceremonies constituting valid marriage to have same effect on widows marriage, consent to remarriage of minor widow.";
        speech.text = finalText;
    }

    else if(message.includes('what is married womens property act 1874')) {
        const finalText = "an act to explain and amend the law relating to certain married women, and for other purposes. any married woman may effect a policy of insurance on her own behalf and independently of her husband; and the same and all benefit thereof, if expressed on the face of it to be so effected, shall enure as her separate property, and the contract evidenced by such policy shall be as valid as if made with an unmarried women.";
        speech.text = finalText;
    }
    else if(message.includes('what are the conditions for a hindu marriage')) {
        const finalText = "a marriage may be solemnized between any two hindus, if the following conditions are fulfilled, namely: neither party has a spouse living at the time of the marriage, at the time of the marriage, neither party, (a) is incapable of giving a valid consent to it in consequence of unsoundness of mind, or (b) though capable of giving a valid consent, has been suffering from mental disorder of such  a kind or to such an extent as to be unfit for marriage and the procreation of children; or (c) has been subject to recurrent attacks of insanity.";
        speech.text = finalText;
    }

    else if(message.includes('who had founded the muslim personal law board')) {
        const finalText = "during the administration of prime minister indira gandhi, the all−india muslim personal law board was established, under the supervision of faizur rahman. according to him, the majority of muslims adhered to islamic law rather than the hindu civil code. the board positions itself as the dominant voice of muslim opinion in india, a claim that has drawn both support and criticism.";
        speech.text = finalText;
    }

    else if(message.includes('what are the four sources of islamic law')) {
        const finalText = "the holy book (the quran), the sunnah (the customs and recognised practises of the prophet muhammad), ijma' (consensus), and qiyas are the main sources of islamic law (analogy). ";
        speech.text = finalText;
    }

    else if(message.includes('what are the rights and duties of parental responsibility')) {
        const finalText = "as a parent with responsibility you must care for and bring up the child. you are also the child’s legal representative. if you were married or in a registered partnership when your child was born or adopted, you automatically get parental responsibility for your child. if two women are married or have a registered partnership, they both also automatically have parental responsibility – provided the child was not acknowledged by someone else before the birth. after a divorce, both parents keep parental responsibility for the children unless a court decides otherwise. parents still have a duty of maintenance for their children until they are 21. liability for maintenance does not stop after a divorce or after a registered partnership ends.";
        speech.text = finalText;
    }

    else if(message.includes('what are the legal rights and duties of parents')) {
        const finalText = "parents who exercise responsibility must raise and care for the child. this means that you must provide the child with food, care and somewhere to live. you are also the child’s legal representative. and you are liable for the child’s maintenance until they reach the age of 21. parents according to the law a child’s legal parents are the mother and father as defined below. the mother is: the woman who gave birth to the child. this also applies if the child was conceived using a donor egg; the woman who adopted the child; the duomoeder (female partner of the birth mother) who has automatically become the child's parent, or has acknowledged the child, or has been declared the child’s parent by a court.the father is: the mother’s husband or registered partner at the time of the child’s birth, unless his paternity of the child is denied; the man who has acknowledged or adopted the child; the man who has been declared the child’s father by a court.";
        speech.text = finalText;
    }

    else if(message.includes('what are the rights and duties of a guardian')) {
        const finalText = "as the guardian, you are the child’s legal representative. you manage the child’s assets instead of the parents. the limited jurisdiction sector (kantonrechter) of the district court monitors the way you manage these assets and you have to ask permission in advance for certain acts. you can also use the child’s assets to pay for their support. but you do need the court’s permission to do so.";
        speech.text = finalText;
    }

    else if(message.includes('who is the father if i get divorced or my husband dies before the child is born')) {
        const finalText = "if you have a child within 306 days after your husband’s death, your late husband is assumed by law to be the legal father of your child. if you became pregnant while you were married but gave birth after your divorce, the law assumes that your ex-husband is not the father of your child. if you were married and have a child within 306 days after your husband’s death, your late husband is assumed by law to be the father of your child. if you and your husband had separated before he died, within one year after your child’s birth you can declare that he was not the father. you can file a declaration with the municipal registry of births, deaths, marriages and registered partnerships (burgerlijke stand).";
        speech.text = finalText;
    }
    else {
        const finalText = "sorry I don't know this answer talk with me only family law releted";
        speech.text = finalText;
    }
/*
    else if(message.includes('')) {
        const finalText = "";
        speech.text = finalText;
    }

    else if(message.includes('')) {
        const finalText = "";
        speech.text = finalText;
    }

*/

    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 1;

    window.speechSynthesis.speak(speech);
}