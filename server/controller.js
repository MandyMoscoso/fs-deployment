const quotes = [{id: 1,quote:"Opportunities don't happen, you create them."},{id: 2,quote:"Success is not final; failure is not fatal: It is the courage to continue that counts."}, {id: 3,quote: "Success usually comes to those who are too busy looking for it."}];

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["A hunch is creativity trying to tell you something.", "A lifetime friend shall soon be made.", "A golden egg of opportunity falls into your lap this month.","A pleasant surprise is waiting for you.","Adventure can be real happiness.","All the troubles you have will pass away very quickly."];
      
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
    },

    getInspiration: (req,res)=>{
        let randomIndex = Math.floor(Math.random() * quotes.length);
        let randomIns = quotes[randomIndex];
        res.status(200).send(randomIns);
    },


    registerQuote: (req,res)=>{
        console.log(req.body)
        quotes.push(req.body);
        console.log("registering new quote-control.js");     

        res.status(200).send("quotes")
    },
    getAllQuotes: (req, res) => {
        res.status(200).send(quotes);
    },

    deleteQuote: (req,res)=>{
        console.log("control.js clicked delete")
        console.log(req.params.id)
        let index = quotes.findIndex(elem => elem.id === +req.params.id);
        quotes.splice(index,1);

        res.status(200).send(quotes);
    },
    updateQuote: (req,res)=>{
        // console.log("request edit control.js", req.body);
        let index = quotes.findIndex(elem => elem.id === +req.params.id);
        quotes.splice(index,1,req.body);
        // console.log(quotes)
        res.status(200).send(quotes);
    }
}
