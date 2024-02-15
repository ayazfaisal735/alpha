function hideElement(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}
function showElement(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}
function getRandomAlphabet() {
  const alphabetString = "abcdefghijklmnopqrstuvwxyz";
  const alphabetArray = alphabetString.split("");
  const randomNumber = Math.random() * 25;
  const index = Math.round(randomNumber);
  const alphabet = alphabetArray[index];
  return alphabet;
}
function setBackgroundById(element) {
  const background = document.getElementById(element);
  background.classList.add("bg-orange-400");
}
function removeBackgroundById(element) {
  const background = document.getElementById(element);
  background.classList.remove("bg-orange-400");
}
function getTextElement(elementId) {
  const getElement = document.getElementById(elementId);
  const getInnerText = getElement.innerText;
  const finalResult = parseInt(getInnerText);
  return finalResult;
}
function setElementValue(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}
function getAlphabetText(elementId){
      const element = document.getElementById(elementId);
      const text = element.innerText;
      return text;
}
