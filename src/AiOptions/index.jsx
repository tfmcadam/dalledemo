
export const arrayItems = [
    {
        name: 'Q&A',
        id: "q&a",
        description: "Answer questions based on existing knowledge.",
        option: {
            model: "text-davinci-003",
            temperature: 0,
            max_tokens: 100,
            top_p: 1,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
            stop: ["\n"],
        },
    },
    {
        name: "Grammar Correction",
        id: "grammarCorrection",
        description: "Corrects sentances into standard English."
    },
    {
        name: "Summarize for a 2nd Grader",
        id: "summary",
        description: "Translates difficult text into simplier concepts."
    },
    {
        name: "English to other languages",
        id: "translate",
        description:"Translates English text into French, Spanish, and Japanese."
    },
    {
        name: "Movie to Emoji",
        id: "movieToEmoji",
        description: "Convert Movie Titles into emoji."
    },
    {
        name: "Explain Code",
        id:"explainCode",
        description: "Explain a complicated piece of Code."
    },
    {
        name: "Javascript to Python",
        id: "jstopy",
        description: "Convert simple JavaScript expressions to Python."
    },
];