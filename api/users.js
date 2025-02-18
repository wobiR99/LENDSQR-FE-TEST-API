import fs from "fs";
import path from "path";

export default (req, res) => {
  const filePath = path.join(process.cwd(), "db.json");
  const jsonData = fs.readFileSync(filePath);
  const data = JSON.parse(jsonData);

  res.status(200).json(data.users); // Respond with users data
};
