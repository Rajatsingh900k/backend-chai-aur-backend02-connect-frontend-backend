import express from 'express';

const App=express();

App.get('/',(req,res)=>{
    res.send("Hello World");
});

App.get('/api/jokes',(req,res)=>{
    const jokes = [
        {
            id: 1,
            title: "Math Joke",
            content: "Why was the math book sad? Because it had too many problems."
        },
        {
            id: 2,
            title: "Coffee Joke",
            content: "Why did the coffee file a police report? It got mugged!"
        },
        {
            id: 3,
            title: "Scarecrow Joke",
            content: "Why did the scarecrow win an award? Because he was outstanding in his field."
        },
        {
            id: 4,
            title: "Bicycle Joke",
            content: "Why can't a bicycle stand up by itself? Because it's two tired."
        },
        {
            id: 5,
            title: "Cheesy Joke",
            content: "What do you call cheese that isn't yours? Nacho cheese."
        }
    ];
    res.send(jokes);
})

const port = process.env.PORT || 3000;

App.listen(port,()=>{
    console.log(`server running at ${port}`);
})