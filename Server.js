const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Public folder chhunga file zawng zawng serve rawh
app.use(express.static(path.join(__dirname, 'public')));

// Root ah index.html pe rawh
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Johan Chess Server running on port ${PORT}`);
});
