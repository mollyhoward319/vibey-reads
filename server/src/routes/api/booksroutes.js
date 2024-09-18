// create a simple health route
import {Router} from "express";
const router = Router();

router.get('/health', (req, res)=>{
    res.status(200).send('Hello from the API Route');
});

router.get('/:subjects', async (req, res) =>{
    const categories = req.params.categories;
    console.log(categories);
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=subject+[${categories}]&key=${process.env.GOOGLE_KEY}`);
        const data = await response.json();
        res.send(data);
})


// todo: create the mapping for how the respon data will look like, reference model
// spotify.api. wil// create logic that will feed subjects into this router.get from client.
// this logic up there is gettingt data from the google api. 
// we have to figure out the parameters that come form the user. that would be a file in api client side for book params.
// we need a musicroutes.js in server/routes/api from l look like above
// we create a logic in client side that connects paramaters for both the book and music to match and populate front end.


export default router;