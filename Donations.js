import mongoose from 'mongoose';

const donationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  bloodType: { type: String, required: true },
  time: { type: Date, required: true },
  location: { type: String, required: true },
});

const Donation = mongoose.model('Donation', donationSchema);

export default Donation;
