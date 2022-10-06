import { checkToken } from "../../backendLibs/checkToken";
import { readUsersDB } from "../../backendLibs/dbLib";

export default function summaryRoute(req, res) {
  if (req.method === "GET") {
    //check authentication
    const user = checkToken(req);
    if (!user || !user.isAdmin) {
      return res.status(403).json({ ok: false, message: "Permission denied" });
    }
    //compute DB summary ......................asdawwthtjuyju
  } else {
    return res.status(400).json({ ok: false, message: "Invalid HTTP Method" });
  }
}
