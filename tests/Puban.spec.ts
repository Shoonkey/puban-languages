import Puban from "../src/puban";
import Mutation from "./util/Mutation";
import testLanguage from "./util/testLanguage";

const mutations: Mutation[] = [
  {
    base: "Me gustan los árboles",
    encrypted: "Ubemaye ubustubangaye uboslaye bárbubolubesuaye"
  },
  {
    base: "No hay problema",
    encrypted: "Ubonaye ubayhaye ruboblubemubapaye"
  },
  {
    base: "Gracias!",
    encrypted: "Rubacubiasgaye!"
  },
  {
    base: "i",
    encrypted: "biuaye"
  },
  {
    base: "I",
    encrypted: "Biuaye"
  },
  {
    base: "YO ESTOY GRITANDO!!",
    encrypted: "UBOYAYE BESTUBOYUAYE RUBITUBANDUBOGAYE!!"
  },
  {
    base: "Funciona em português, ou não?",
    encrypted: "Ubuncubionubafaye bemuaye ubortubugubuêspaye, bouuaye ubãonaye?"
  },
  {
    base: "Sentences can have dots in the middle of them. Does it still work?",
    encrypted: "todo",
    todo: true
  },
  {
    base: "Oops. I added a. dot by mistake, does it .break anything?",
    encrypted: "todo",
    todo: true
  },
  {
    base: "In English, it's possible to use apostrophes. Do we break?",
    encrypted: "todo",
    todo: true
  },
  {
    base: "http://preserveshttplink.com",
    encrypted: "http://preserveshttplink.com"
  },
  {
    base: "https://preserveshttpslink.com",
    encrypted: "https://preserveshttpslink.com"
  },
  // As of Dec 23, 2023, Discord recognizes anything starting with http:// or https:// and two more letters as a link
  {
    base: "http://ab",
    encrypted: "http://ab"
  },
  {
    base: "https://ab",
    encrypted: "https://ab"
  },
  {
    base: "Text with https://link.com",
    encrypted: "Ubexttaye ubithwaye https://link.com"
  },
  {
    base: "[Embed link message](https://somelink.com)",
    encrypted: "[fail](https://somelink.com)",
    todo: true
  }
];

testLanguage("Puban", Puban, mutations);