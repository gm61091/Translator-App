const apiKey = '4513291d47msh8b3d703fefdbbaep11aa61jsnbc4c0f018534';
const host = 'text-translator2.p.rapidapi.com';
const getLanguagesUrl = 'https://text-translator2.p.rapidapi.com/getLanguages';
const translateUrl = 'https://text-translator2.p.rapidapi.com/translate';

const sourceLanguageInput = document.getElementById('sourceLanguage');
const targetLanguageInput = document.getElementById('targetLanguage');
const inputText = document.getElementById('inputText');
const translatedText = document.getElementById('translatedText');



const languages = [
    { name: 'Afrikaans', code: 'af' },
    { name: 'Albanian', code: 'sq' },
    { name: 'Amharic', code: 'am' },
    { name: 'Arabic', code: 'ar' },
    { name: 'Armenian', code: 'hy' },
    { name: 'Azerbaijani', code: 'az' },
    { name: 'Basque', code: 'eu' },
    { name: 'Belarusian', code: 'be' },
    { name: 'Bengali', code: 'bn' },
    { name: 'Bosnian', code: 'bs' },
    { name: 'Bulgarian', code: 'bg' },
    { name: 'Catalan', code: 'ca' },
    { name: 'Cebuano', code: 'ceb' },
    { name: 'Chichewa', code: 'ny' },
    { name: 'Chinese (Simplified)', code: 'zh-CN' },
    { name: 'Chinese (Traditional)', code: 'zh-TW' },
    { name: 'Corsican', code: 'co' },
    { name: 'Croatian', code: 'hr' },
    { name: 'Czech', code: 'cs' },
    { name: 'Danish', code: 'da' },
    { name: 'Dutch', code: 'nl' },
    { name: 'English', code: 'en' },
    { name: 'Esperanto', code: 'eo' },
    { name: 'Estonian', code: 'et' },
    { name: 'Filipino', code: 'tl' },
    { name: 'Finnish', code: 'fi' },
    { name: 'French', code: 'fr' },
    { name: 'Frisian', code: 'fy' },
    { name: 'Galician', code: 'gl' },
    { name: 'Georgian', code: 'ka' },
    { name: 'German', code: 'de' },
    { name: 'Greek', code: 'el' },
    { name: 'Gujarati', code: 'gu' },
    { name: 'Haitian Creole', code: 'ht' },
    { name: 'Hausa', code: 'ha' },
    { name: 'Hawaiian', code: 'haw' },
    { name: 'Hebrew', code: 'iw' },
    { name: 'Hindi', code: 'hi' },
    { name: 'Hmong', code: 'hmn' },
    { name: 'Hungarian', code: 'hu' },
    { name: 'Icelandic', code: 'is' },
    { name: 'Igbo', code: 'ig' },
    { name: 'Indonesian', code: 'id' },
    { name: 'Irish', code: 'ga' },
    { name: 'Italian', code: 'it' },
    { name: 'Japanese', code: 'ja' },
    { name: 'Javanese', code: 'jw' },
    { name: 'Kannada', code: 'kn' },
    { name: 'Kazakh', code: 'kk' },
    { name: 'Khmer', code: 'km' },
    { name: 'Kinyarwanda', code: 'rw' },
    { name: 'Korean', code: 'ko' },
    { name: 'Kurdish (Kurmanji)', code: 'ku' },
    { name: 'Kyrgyz', code: 'ky' },
    { name: 'Lao', code: 'lo' },
    { name: 'Latin', code: 'la' },
    { name: 'Latvian', code: 'lv' },
    { name: 'Lithuanian', code: 'lt' },
    { name: 'Luxembourgish', code: 'lb' },
    { name: 'Macedonian', code: 'mk' },
    { name: 'Malagasy', code: 'mg' },
    { name: 'Malay', code: 'ms' },
    { name: 'Malayalam', code: 'ml' },
    { name: 'Maltese', code: 'mt' },
    { name: 'Maori', code: 'mi' },
    { name: 'Marathi', code: 'mr' },
    { name: 'Mongolian', code: 'mn' },
    { name: 'Myanmar (Burmese)', code: 'my' },
    { name: 'Nepali', code: 'ne' },
    { name: 'Norwegian', code: 'no' },
    { name: 'Odia (Oriya)', code: 'or' },
    { name: 'Pashto', code: 'ps' },
    { name: 'Persian', code: 'fa' },
    { name: 'Polish', code: 'pl' },
    { name: 'Portuguese', code: 'pt' },
    { name: 'Punjabi', code: 'pa' },
    { name: 'Romanian', code: 'ro' },
    { name: 'Russian', code: 'ru' },
    { name: 'Samoan', code: 'sm' },
    { name: 'Scots Gaelic', code: 'gd' },
    { name: 'Serbian', code: 'sr' },
    { name: 'Sesotho', code: 'st' },
    { name: 'Shona', code: 'sn' },
    { name: 'Sindhi', code: 'sd' },
    { name: 'Sinhala', code: 'si' },
    { name: 'Slovak', code: 'sk' },
    { name: 'Slovenian', code: 'sl' },
    { name: 'Somali', code: 'so' },
    { name: 'Spanish', code: 'es' },
    { name: 'Sundanese', code: 'su' },
    { name: 'Swahili', code: 'sw' },
    { name: 'Swedish', code: 'sv' },
    { name: 'Tajik', code: 'tg' },
    { name: 'Tamil', code: 'ta' },
    { name: 'Tatar', code: 'tt' },
    { name: 'Telugu', code: 'te' },
    { name: 'Thai', code: 'th' },
    { name: 'Turkish', code: 'tr' },
    { name: 'Turkmen', code: 'tk' },
    { name: 'Ukrainian', code: 'uk' },
    { name: 'Urdu', code: 'ur' },
    { name: 'Uyghur', code: 'ug' },
    { name: 'Uzbek', code: 'uz' },
    { name: 'Vietnamese', code: 'vi' },
    { name: 'Welsh', code: 'cy' },
    { name: 'Xhosa', code: 'xh' },
    { name: 'Yiddish', code: 'yi' },
    { name: 'Yoruba', code: 'yo' },
    { name: 'Zulu', code: 'zu' },
    { name: 'Hebrew', code: 'he' },
    { name: 'Chinese (Simplified)', code: 'zh' },
];

const sourceLanguageSelect = document.getElementById('sourceLanguage');
const targetLanguageSelect = document.getElementById('targetLanguage');

languages.forEach(language => {
    const option = document.createElement('option');
    option.value = language.code;
    option.textContent = language.name;
    sourceLanguageSelect.appendChild(option.cloneNode(true));
    targetLanguageSelect.appendChild(option.cloneNode(true));
});


async function fetchLanguages() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': host
        }
    };

    try {
        const response = await fetch(getLanguagesUrl, options);
        if (response.ok) {
            const data = await response.json();
            data.languages.forEach(language => {
                const option = document.createElement('option');
                option.value = language.code;
                option.textContent = language.name;
                sourceLanguageInput.appendChild(option);
                targetLanguageInput.appendChild(option.cloneNode(true));
            });
        } else {
            console.error('Failed to fetch languages:', response.status);
        }
    } catch (error) {
        console.error('Error fetching languages:', error);
    }
}

// Translate text based on entered source and target languages
async function translateText() {
    const sourceLanguage = sourceLanguageInput.value;
    const targetLanguage = targetLanguageInput.value;
    const text = inputText.value;

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': host
        },
        body: new URLSearchParams({
            source_language: sourceLanguage,
            target_language: targetLanguage,
            text: text
        }).toString()
    };

    try {
        const response = await fetch(translateUrl, options);
        if (response.ok) {
            const data = await response.json();
            translatedText.textContent = data.data.translatedText;
        } else {
            console.error('Translation failed:', response.status);
        }
    } catch (error) {
        console.error('Translation error:', error);
    }
}
document.getElementById('translateButton').addEventListener('click', translateText);

document.getElementById('translateButton').addEventListener('click', function() {
   
    document.getElementById('resultContainer').style.display = 'block';
});



 fetchLanguages();
