const { log } = require("console");
const { ParticipantModel, DeskadminModel } = require("../components/models");
const cloudinary = require("cloudinary").v2;
const fs = require("fs");

function dataURItoBlob(dataURI) {
  var byteString = atob(dataURI.split(",")[1]);

  var mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
  var ab = new ArrayBuffer(byteString.length);
  var dw = new DataView(ab);
  for (var i = 0; i < byteString.length; i++) {
    dw.setUint8(i, byteString.charCodeAt(i));
  }
  return new Blob([ab], { type: mimeString });
}
//ADD Configuration of cloudinary here along with your credentials you see that on cloudinary Documentation
exports.addParticipant = async (req, res) => {
  let UPI_Image = "";
  let member_name = "";
  let file;
  let shreshti_samvaad = "false";
  let niyuktipath = "false";
  let aalochna_aagman = "false";
  let kalp_kaushal = "false";
  let {
    participant_name,
    participant_clgID,
    participant_number,
    participant_email,
    participant_address,
    gender,
    AY,
    partner_name,
    partner_clgID,
    eventE1,
    eventE2,
    eventE3,
    eventE4,
    payment_Method,
    amount,
    transaction_number,
    passkey,
  } = req.body.form;
  if (eventE1.length > 1) {
    shreshti_samvaad = "true";
  }
  if (eventE2.length > 1) {
    niyuktipath = "true";
  }
  if (eventE3.length > 1) {
    aalochna_aagman = "true";
  }
  if (eventE4.length > 1) {
    kalp_kaushal = "true";
  }

  try {
    const data = await DeskadminModel.findOne({
      member_password: passkey,
    });
    if (!data) {
      return res.json({ success: false, error: "Invalid Password" });
    }
    member_name = data.member_name;
    file = req.body.form.file;
    if (file) {
      let filedata = dataURItoBlob(file);
      fs.writeFileSync(
        "upifile.png",
        Buffer.from(await filedata.arrayBuffer())
      );
      const result = await cloudinary.uploader.upload("upifile.png");
      UPI_Image = result.url;
      fs.unlinkSync("upifile.png");
    }
    participant_name = participant_name.replaceAll(",", ".");
    participant_clgID = participant_clgID.replaceAll(",", ".");
    participant_email = participant_email.replaceAll(",", ".");
    participant_address = participant_address.replaceAll(",", ".");
    participant_address = participant_address.replaceAll("/", ".");
    participant_address = participant_address.replaceAll("\n", ".");
    partner_name = partner_name.replaceAll(",", ".");
    partner_clgID = participant_clgID.replaceAll(",", ".");

    const newParticipant = new ParticipantModel({
      participant_name,
      participant_clgID,
      participant_number,
      participant_email,
      participant_address,
      gender,
      AY,
      partner_name,
      partner_clgID,
      shreshti_samvaad,
      niyuktipath,
      aalochna_aagman,
      kalp_kaushal,
      payment_Method,
      amount,
      transaction_number,
      UPI_Image,
      member_name,
    });

    await newParticipant.save();
    res.json({
      registration_id: newParticipant.registration_id,
      success: true,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};