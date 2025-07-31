Session 2>>> Episode 04

Initialize a git repository
Step 1: command git init
Step 2: create ".gitignore"
Step 3: commit the files
Step 3: create a repository on github
Step 4: git remote add origin https://github.com/jasleen30/devMeet-backend.git
Step 5: git branch -M main
Step 6: git push -u origin main

Routing
> Route order matters when matching
> app.use() 
> // This will match for ac, abc . Here b is optional
app.get("ab?c",(req, res) =>{
    res.send({firstName: "Jasleen", lastName: "Kaur"});
});
>// REgular expressions also works in route,Here + works as regular expression. So it will work for abc, abbbc, abbbbbc etc
app.get("ab+c",(req, res) =>{
    res.send({firstName: "Jasleen", lastName: "Kaur"});
});
>// *, ab*c, it means anything can be written in replace of * and it works // abakshaycd, abhfhsdfjhcd all are valid
app.get("ab*cd",(req, res) =>{
    res.send({firstName: "Jasleen", lastName: "Kaur"});
});
> any of the regex works in routes

EPISODE 5:
Error Handling
// err must be the first parameter
app.get("/user, (err,req, res, next) =>{
    if(err) {
        res.status(500).send("something went wrong");
    }
})

// Good way to use try catch
app.get("/getUserData", (req,res) =>{
    try {
        throw new Error("jhfdjf");
        res.send("User Data Sent");
    } catch(err) {
        res.status(500).send("Some Error cntact support Team");
    }
})
