import PigLatin from "../src/pig-latin";
import Mutation from "./util/Mutation";
import testLanguage from "./util/testLanguage";

const mutations: Mutation[] = [
  {
    base: "Me gustan los árboles",
    encrypted: "Emaye ustangaye oslaye rbolesáaye"
  },
  {
    base: "No hay problema",
    encrypted: "Onaye ayhaye roblemapaye" 
  },
  {
    base: "Gracias!",
    encrypted: "Raciasgaye!"
  },
  {
    base: "I",
    encrypted: "Iaye"
  },
  {
    base: "i",
    encrypted: "iaye"
  },
  {
    base: "FULLCAPS",
    encrypted: "ULLCAPSFAYE"
  },
  {
    base: "Funciona em português, ou não?",
    encrypted: "Uncionafaye meaye ortuguêspaye, uoaye ãonaye?"
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
    encrypted: "Exttaye ithwaye https://link.com"
  },
  {
    base: "[Embed link message](https://somelink.com)",
    encrypted: "[Mbedeaye inklaye essagemaye](https://somelink.com)",
    todo: true
  }
];

testLanguage("PigLatin", PigLatin, mutations);