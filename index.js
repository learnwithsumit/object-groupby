require("core-js");

const languages = [
    { title: "JavaScript", type: "scripting" },
    { title: "Java", type: "normal" },
    { title: "Python", type: "scripting" },
];
console.log(
    "Languages\n",
    languages,
    "\n-----------------------------------------------"
);

let scriptingLanguages = {};

// way 1
// languages.forEach((language) => {
//     const type = language.type;

//     if (!scriptingLanguages[type]) {
//         scriptingLanguages[type] = [];
//     }
//     scriptingLanguages[type].push(language);
// });

// way 2
// scriptingLanguages = languages.reduce((res, language) => {
//     const type = language.type;
//     if (!res[type]) {
//         res[type] = [];
//     }
//     res[type].push(language);
//     return res;
// }, {});

scriptingLanguages = Object.groupBy(languages, (lang) => lang.type);
console.log(scriptingLanguages);
