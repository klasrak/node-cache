import axios from 'axios';

export default router => {
  router.get('/photos', async (req, res) => {
    try {
      const photosUrl = `https://jsonplaceholder.typicode.com/photos${req.query.id ? `/${req.query.id}` : ''}`;

      setTimeout(async () => {
        const response = await axios.get(photosUrl);
        const { data } = response;
        res.status(200).json(data);
      }, 1500);
    } catch (err) {
      res.status(500).json({
        error: err.message,
      });
    }
  });
};
