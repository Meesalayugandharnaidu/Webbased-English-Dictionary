const inp_el = document.getElementById("search-word");
const meaning_box = document.getElementById("main-box");
const meaning_box1 = document.getElementById("words");
const meaning_box2 = document.getElementById("mean");
const info_ele = document.getElementById("info");
const audio_ele = document.getElementById("audio-file");
async function getmeaning(word) {
  let API = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

  try {
    info_ele.classList.remove("active");
    info_ele.innerHTML = `Search meaning of word${word}`;
    let result = await fetch(API).then((r) => r.json());
    info_ele.classList.add("active");
    let meaning = result[0].meanings[0].definitions[0].definition;
    meaning_box.classList.remove("active");
    meaning_box1.innerHTML = word;
    meaning_box2.innerHTML = meaning;

    let sound = result[0].phonetics;
    let a = sound.findIndex((el) => {
      return el.audio != "";
    });
    let audi = result[0].phonetics[a].audio;
    audio_ele.setAttribute("src", audi);
  } catch (error) {
    meaning_box.classList.add("active");
    info_ele.classList.remove("active");
    info_ele.innerHTML = `Sorry, We could not meaning of word ${word}`;
  }
}

inp_el.addEventListener("keyup", (e) => {
  let word = inp_el.value;
  if (word != "" && e.key === "Enter") {
    getmeaning(word);
  }
});
