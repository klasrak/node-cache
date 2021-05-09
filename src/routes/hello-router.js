export default router => {
  router.get('/hello', (req, res) => {
    setTimeout(() => {
      res.json({ message: 'Hello, World' });
    }, 2000);
  });
};
