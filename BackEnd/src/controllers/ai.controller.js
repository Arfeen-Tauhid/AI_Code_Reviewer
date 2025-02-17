const aiService = require('../Services/ai.service.js');
export async function getReview(req, res) {
    const code = await  req.body.code;
    
    try {
        if(!code) {
            res.status(400).send('Prompt is required');
            return;
        } 
        const response = await aiService(code);
        res.send(response);
    } catch (error) {   
        res.status(500).send(error.message);
    }
}   