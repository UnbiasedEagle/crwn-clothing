const path = require('path');

const express = require('express');

const cors = require('cors');

const dotenv = require('dotenv');

dotenv.config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const compression = require('compression');

const app = express();

app.use(compression());

app.use(express.json());

app.use(cors());

if (process.env.NODE_ENV === 'production') {
	// Serving static files in client/build
	app.use(express.static(path.join(__dirname, 'client', 'build')));

	app.get('*', (req, res) => {
		res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
	});
}

// Payment Route
app.post('/payment', (req, res) => {
	const { token, amount } = req.body;

	const body = {
		source: token.id,
		amount: amount,
		currency: 'inr'
	};

	stripe.charges.create(body, (err, response) => {
		if (err) {
			res.status(500).json({ error: err });
		} else {
			res.status(200).json({
				success: response
			});
		}
	});
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
