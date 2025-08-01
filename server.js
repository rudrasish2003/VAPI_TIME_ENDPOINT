const express = require('express');
const app = express();

app.use(express.json()); // Ensure JSON body parsing is enabled

app.post('/collect-time', (req, res) => {
  const { candidateID, rescheduleTime } = req.body;

  // Log everything for debugging
  console.log('✅ Full body received:', req.body);

  if (!candidateID || !rescheduleTime) {
    console.error('❌ Missing required data:', { candidateID, rescheduleTime });
    return res.status(400).json({
      status: 'error',
      message: 'candidateID and rescheduleTime are required.'
    });
  }

  // Here, you can handle the rescheduling logic (save to DB, etc.)
  console.log(`✅ Rescheduling interview for candidate ${candidateID} at ${rescheduleTime}`);

  res.status(200).json({ status: 'success', candidateID, rescheduleTime });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});
