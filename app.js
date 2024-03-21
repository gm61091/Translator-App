const apiKey = '6c4e9b6c07msh741e20ca1b26975p172f77jsnf272ec5a74fa';
const host = 'text-translator2.p.rapidapi.com';
const url = 'https://text-translator2.p.rapidapi.com/getLanguages';

const dropDown = document.getElementById('languageDropDown');
const dropDown2 = document.getElementById('targetLanguage');
const inputText = document.getElementById('inputText');
const translatedText = document.getElementById('translatedText');



const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': apiKey,
    'X-RapidAPI-Host': host
  }
};

async function populateLanguages() {
  try {
    const response = await fetch(url, options);
    if (response.ok) {
      const data = await response.json();
      const languages = data.data.languages;
      languages.forEach(language => {
        const option = document.createElement('option');
        option.value = language.code;
        option.textContent = language.name;
        dropDown.appendChild(option);
      });
    } else {
      console.error('Failed to fetch languages:', response.status);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

async function translateText() {
  const sourceLang = dropDown.value;
  const targetLang = dropDown2.value;
  const text = inputText.value;

  const translateOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': host
    },
    body: new URLSearchParams({
      source_language: sourceLang,
      target_language: targetLang,
      text: text
    }).toString()
  };

  try {
    const response = await fetch(url, translateOptions);
    if (response.ok) {
      const result = await response.text();
      translatedText.textContent = result; // Display the translated text in the result div
    } else {
      console.error('Translation failed:', response.status);
    }
  } catch (error) {
    console.error('Translation error:', error);
  }
}

document.getElementById('translateButton').addEventListener('click', translateText);

// Remove the input event listener from inputText element
// inputText.addEventListener('input', translateText);

populateLanguages();

async function targetLanguages() {
  try {
    const response = await fetch(url, options);
    if (response.ok) {
      const data = await response.json();
      const languages = data.data.languages;
      languages.forEach(language => {
        const option = document.createElement('option');
        option.value = language.code;
        option.textContent = language.name;
        dropDown2.appendChild(option);
      });
    } else {
      console.error('Failed to fetch languages:', response.status);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

targetLanguages();
