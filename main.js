const translations = {
    ArrowUp: {
        italian: "C'è qualcosa che non hai capito?",
        chinese: "有什么你不明白的吗？",
        image: "./icons/QuestionMark.PNG"
    },
    ArrowDown: {
        italian: "Riprendiamo la lezione!",
        chinese: "我们继续上课吗!",
        image: "./icons/Play.PNG"
    },
    ArrowRight: {
        italian: "Ciao! Sei pronto per iniziare la lezione?",
        chinese: "你好!你准备好开始上课了吗？",
        image: "./icons/Hello.PNG"
    },
    ArrowLeft: {
        italian: "Qual'è il problema?",
        chinese: "有什么问题吗？",
        image: "./icons/WhatProblem.PNG"
    },
    g: {
        italian: "Posso andare in bagno?",
        chinese: "我可以去趟洗手间吗？",
        image: "./icons/WC.PNG"
    },
    f: {
        italian: "Non sono pronto, non mi sento bene",
        chinese: "我还没准备好，我感觉不舒服",
        image: "./icons/Bad.PNG"
    },
    d: {
        italian: "Sono pronto!",
        chinese: "好我准备好了",
        image: "./icons/Happy.PNG"
    },
    s: {
        italian: "Sì, ho già mangiato",
        chinese: "我已经吃了",
        image: "./icons/Yes.PNG"
    },
    a: {
        italian: "No, non ho ancora mangiato",
        chinese: "我还没吃饭",
        image: "./icons/No.PNG"
    },
    w: {
        italian: "Ho problemi che riguardano la scuola",
        chinese: "我没吃饭",
        image: "./icons/Backpack.PNG"
    },
    r: {
        italian: "Ho problemi personali",
        chinese: "我有个人问题",
        image: "./icons/Home.PNG"
    },
    ' ': {
        italian: "Ho bisogno di una pausa",
        chinese: "我需要休息一下",
        image: "./icons/Pause.PNG"
    },
    z: {
        italian: "Indicami dove ti fa male",
        chinese: "告诉我哪里痛",
        image: "./icons/WherePain.PNG"
    },
    x: {
        italian: "Hai già mangiato?",
        chinese: "你吃饭了吗？",
        image: "./icons/Chopstick.PNG"
    },
    c: {
        italian: "Puoi andare in bagno",
        chinese: "你可以去洗手间",
        image: "./icons/Yes.PNG"
    },
    v: {
        italian: "Non puoi andare in bagno adesso",
        chinese: "你现在不能去洗手间",
        image: "./icons/No.PNG"
    },
    b: {
        italian: "Mi fa male una parte del corpo",
        chinese: "我身体的一部分疼痛",
        image: "./icons/Pain.PNG"
    }
};

const italianText = document.getElementById('italian-text');
const chineseText = document.getElementById('chinese-text');
const imageelement = document.getElementById('icon')

function speak(text, lang) {
    return new Promise((resolve) => {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 0.7;
        utterance.lang = lang;
        utterance.onend = resolve;
        speechSynthesis.speak(utterance);
    });
}

async function showTranslation(key) {
    // Reset texts
    italianText.textContent = '';
    chineseText.textContent = '';
    italianText.classList.remove('visible');
    chineseText.classList.remove('visible');

    const translation = translations[key];
    if (!translation) return;

    // Show icon
    imageelement.setAttribute('src', translation.image)
    const loaded = new Promise(resolve => {
        imageelement.onload = resolve
    })
    await loaded
    await wait(1500)

    // Show and speak Italian
    italianText.textContent = translation.italian;
    italianText.classList.add('visible');
    await speak(translation.italian, 'it-IT');

    // Show and speak Chinese
    chineseText.textContent = translation.chinese;
    chineseText.classList.add('visible');
    await speak(translation.chinese, 'zh-CN');
}

document.addEventListener('keydown', (event) => {
    const key = event.key;
    if (Object.keys(translations).includes(key)) {
        event.preventDefault();
        showTranslation(key);
    }
});

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
