const franc = require("franc");
const langs = require("langs");
const langCode = franc("Alle menslike wesens word vry");

const language = where("3", langCode);
console.log(language);
