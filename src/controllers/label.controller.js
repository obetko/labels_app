import qr from "qrcode";

export const createLabel = (req, res) => {
  try {
    const data = req.body;
    const strData = JSON.stringify(data);

    qr.toDataURL(strData, (err, code) => {
      if (err) return console.log(err);
      res.render("label", { code, data });
    });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};
