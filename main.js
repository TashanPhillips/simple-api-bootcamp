document.querySelector("button").addEventListener("click", getWord);
function getWord() {
  const word = document.getElementById("words").value;
  const noun = document.querySelector("select").value;
  console.log(word);

  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        let object = data[i].meanings;
        // line 14 is going though the object inside the data array and only findiing the definition that has the same noun that was selected
        let test = object.find((word) => word.partOfSpeech.includes(noun));
        console.log(test);
        document.querySelector("#definition").innerText =
          test.definitions[0].definition;
      }
      // const correctWord = data[0].find(word => word.partOfSpeech.includes(noun))
      // console.log(correctWord)
      //document.querySelector("#definition").innerText = data.meaning;
      //document.querySelector("img").src = data.hdurl;
      //document.querySelector("#location").innerText = data.location.country;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
