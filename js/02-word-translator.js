let language = prompt("Enter a language code (es, de, en, fr):");

if (language === "en") {
    console.log("Hello World");
} else if (language === "es") {
  console.log("Hello World translated in Spanish is: Hola Mundo");
} else if (language === "de") {
  console.log("Hello World translated in German is: Hallo Welt");
} else if (language === "fr") {
  console.log("Hello World translated in French is: Bonjour le monde");
} else {
  console.log("Hello World");
}
