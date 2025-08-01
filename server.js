const express = require('express');
const app = express();

app.use(express.json());

app.post('/collect-time', (req, res) => {
  const { candidateID, rescheduleTime } = req.body;
  console.log('Received:', candidateID, rescheduleTime);

  // You can add your logic to handle the data here

  res.status(200).json({ status: 'success' });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
