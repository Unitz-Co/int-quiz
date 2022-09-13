import { advisorsModel } from "../utils/db.js";

export async function getDataAdvisors(req, res) {
    try {
        const advisors = await advisorsModel.find({});
        console.log(advisors);
        res.status(200).json(advisors);
    } catch (error) {
        console.error(error.message);
    }
}