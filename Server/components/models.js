// components/models.js

const mongoose = require("./db");
const shortid = require("shortid");

const deskadminSchema = new mongoose.Schema({
  member_name: String,
  member_password: String,
});
const participantSchema = new mongoose.Schema(
  {
    registration_id: {
      type: String,
      default: shortid.generate,
      unique: true,
    },
    participant_name: String,
    participant_clgID: String,
    participant_number: Number,
    participant_email: String,
    participant_address: String,
    gender: String,
    AY: String,
    partner_name: String,
    partner_clgID: String,
    shreshti_samvaad: String,
    niyuktipath: String,
    aalochna_aagman: String,
    kalp_kaushal: String,
    payment_Method: String,
    amount: Number,
    transaction_number: Number,
    UPI_Image: String,
    member_name: String,
  },
  {
    timestamps: true,
  }
);

const ParticipantModel = mongoose.model(
  "KnowhowParticipants",
  participantSchema
);
const DeskadminModel = mongoose.model("deskadmins", deskadminSchema);

module.exports = { ParticipantModel, DeskadminModel };
