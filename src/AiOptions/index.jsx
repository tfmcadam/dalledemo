
export const arrayItems = [
    {
        name: "Marv with the honest answers",
        id: "marv",

        description: "He's a straight shooter",
        option: {
            model: "text-davinci-003",
            temperature: 0.5,
            max_tokens: 300,
            top_p: 0.3,
            frequency_penalty: 0.5,
            presence_penalty: 0.0,
        },
    },
    {
        name: "Recipe Creator",
        id: "recipes",
        description: "Create a recipe from a list of ingredients",
        option: {
            model: "text-davinci-003",
            temperature: 0.3,
            max_tokens: 300,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        }
    },
    {
        name: "Chat",
        id: "chat",
        description: "Open ended conversation with an AI assistant",
        option: {
            model: "text-davinci-003",
            temperature: 0.9,
            max_tokens: 300,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.6,
            stop: [" Human", " AI:"],
        }
    },
    {
        name: "Micro Horror Story Creator",
        id: "MHScreator",
        description: "Creates a two to three sentence short horror stories from a topic input.",
        option: {
            model: "text-davinci-003",
            temperature: 0.8,
            max_tokens: 200,
            top_p: 1.0,
            frequency_penalty: 0.5,
            presence_penalty: 0.0,
        },
    },
    {
        name: 'Q&A',
        id: "q&a",
        description: "Answer questions based on existing knowledge.",
        option: {
            model: "text-davinci-003",
            temperature: 0,
            max_tokens: 300,
            top_p: 1,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        },
    },
    {
        name: "Grammar Correction",
        id: "grammarCorrection",
        description: "Corrects sentances into standard English.",
        option: {
            model: "text-davinci-003",
            temperature: 0,
            max_tokens: 300,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        },
        
    },
    {
        name: "Summarize for a 2nd Grader",
        id: "summary",
        description: "Translates difficult text into simplier concepts.",
        option: {
            model: "text-davinci-003",
            temperature: 0.7,
            max_tokens: 300,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        }
    },
    {
        name: "English to other languages",
        id: "translate",
        description:"Translates English text into French, Spanish, and Japanese.",
        option: {
            model: "text-davinci-003",
            temperature: 0.3,
            max_tokens: 300,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        },
    },
    {
        name: "Movie to Emoji",
        id: "movieToEmoji",
        description: "Convert Movie Titles into emoji.",
        option: {
            model: "text-davinci-003",
            temperature: 0.8,
            max_tokens: 300,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        },
    },
    {
        name: "Explain Code",
        id:"explainCode",
        description: "Explain a complicated piece of Code.",
        option: {
            model: "code-davinci-002",
            temperature: 0,
            max_tokens: 300,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        },
    },
    {
        name: "Javascript to Python",
        id: "jstopy",
        description: "Convert simple JavaScript expressions to Python.",
        option: {
            model: "code-davinci-002",
            temperature: 0,
            max_tokens: 300,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        },
    },
];