const express = require('express');
const app = express();

app.use(express.json()); // for parsing application/json

// POST endpoint to receive reschedule requests from VAPI
app.post('/vapi/reschedule', (req, res) => {
  const { candidateId, rescheduleTime, rescheduleType, eventType } = req.body;

  // Basic validation
  if (!candidateId || !rescheduleTime || !rescheduleType) {
    return res.status(400).json({ error: 'Missing one or more required fields' });
  }

  // Optional: Validate ISO 8601 format for rescheduleTime
  const isoFormat = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?Z?$/;
  if (!isoFormat.test(rescheduleTime)) {
    return res.status(400).json({ error: 'rescheduleTime is not in ISO format' });
  }

  // Log or process the reschedule data
  console.log(`[${eventType || 'reschedule'}] Candidate ID: ${candidateId}`);
  console.log(`Reschedule Time: ${rescheduleTime}`);
  console.log(`Reschedule Type: ${rescheduleType}`);

  // Respond success
  res.json({ message: 'Reschedule request received successfully' });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
