const { getGeneros } = require('../Controllers/getGenres')

const getGenres = async (req, res) => {
    try {
        const getGenre = await getGeneros();
        res.status(200).json(getGenre);
    } catch (error) {
        res.status(500).json({error: error.message})
    }
} 

module.exports = {getGenres};