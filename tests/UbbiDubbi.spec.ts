import UbbiDubbi from "../src/ubbi-dubbi";
import Mutation from "./util/Mutation";
import testLanguage from "./util/testLanguage";

const mutations: Mutation[] = [
  {
    base: "Me gustan los árboles",
    encrypted: "Mube gubustuban lubos ubárbubolubes"
  },
  {
    base: "No hay problema",
    encrypted: "Nubo hubay pruboblubemuba"
  },
  {
    base: "Gracias!",
    encrypted: "Grubacubias!"
  },
  {
    base: "I",
    encrypted: "Ubi"
  },
  {
    base: "Yellow",
    encrypted: "Yubellubow"
  },
  {
    base: "Eye",
    encrypted: "Ubeye"
  },
  {
    base: "Larynx",
    encrypted: "Lubarubynx"
  },
  {
    base: "FULLCAPS",
    encrypted: "FUBULLCUBAPS"
  },
  {
    base: "Funciona em português, ou não?",
    encrypted: "Fubuncubionuba ubem pubortubugubuês, ubou nubão?"
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
    encrypted: "Tubext wubith https://link.com"
  },
  {
    base: "[Embed link message](https://somelink.com)",
    encrypted: "[Ubembubed lubink mubessubagube](https://somelink.com)",
    todo: true
  }
];

testLanguage("UbbiDubbi", UbbiDubbi, mutations);