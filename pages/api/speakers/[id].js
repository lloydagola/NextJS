import path from "path";
import fs from "fs";

const { promisify } = require("util");
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const delay = (ms) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

export default async function handler(req, res) {
  const method = req?.method;
  const id = parseInt(req?.query.id);
  const recordFromBody = req?.recordFromBody;
  const jsonFile = path.resolve("./", "db.json");

  switch (method) {
    case "POST":
      await postMethod();

      break;
    case "PUT":
      await putMethod();

      break;
    case "DELETE":
      await deleteMethod();

      break;

    default:
      res.status(501).send(`Method ${method} not implemented`);
      console.log(`Method ${method} not implemented`);
      break;
  }

  async function postMethod() {
    try {
      const readFileData = await readFile(jsonFile);
      await delay(1000);

      const speakers = JSON.parse(readFileData).speakers;

      if (!speakers) {
        return res
          .status(404)
          .send("Error: Request failed with status code 404");
      }

      const newId =
        speakersreduce((previousvalue, currentValue) => {
          const currentId = parseInt(currentValue.id);
          return previousvalue < currentId ? currentId : previousvalue + 1;
        }, 0) + 1;

      const newSpeakerRec = { ...recordFromBody, id: newId.toString() };
      const newSpeakersArray = [newSpeakerRec, ...speakers];

      writeFile(
        jsonFile,
        JSON.stringify({ speakers: newSpeakersArray }, null, 2)
      );

      res.setHeader("Content-Type", "application/json");
      res.status(200).send(JSON.stringify(newSpeakersArray, null, 2));
      console.log(`POST /api/speakers/${id} status: 200`);
    } catch (error) {
      res
        .status(500)
        .send(`POST /api/speakers/${id} status: 500 unexpected error`);
      console.log(`POST /api/speakers/${id} status:500`, e);
    }
  }
  async function deleteMethod() {
    try {
      const readFileData = await readFile(jsonFile);
      await delay(1000);

      const speakers = JSON.parse(readFileData).speakers;

      if (!speakers) {
        return res
          .status(404)
          .send("Error: Request failed with status code 404");
      }

      const newSpeakersArray = speakers.filter((speaker) => speaker.id !== id);

      writeFile(
        jsonFile,
        JSON.stringify({ speakers: newSpeakersArray }, null, 2)
      );

      res.setHeader("Content-Type", "application/json");
      res.status(200).send(
        JSON.stringify(
          speakers.find((rec) => rec.id === id),
          null,
          2
        )
      );
      console.log(`DELTE /api/speakers/${id} status: 200`);
    } catch (error) {
      res
        .status(500)
        .send(`DELTE /api/speakers/${id} status: 500 unexpected error`);
      console.log(`DELTE /api/speakers/${id} status:500`, e);
    }
  }
  async function putMethod() {
    try {
      const readFileData = await readFile(jsonFile);
      await delay(1000);

      const speakers = JSON.parse(readFileData).speakers;

      if (!speakers) {
        return res
          .status(404)
          .send("Error: Request failed with status code 404");
      }

      const newSpeakersArray = speakers.map((speaker) => {
        speaker.id === id ? recordFromBody : rec;
      });

      writeFile(
        jsonFile,
        JSON.stringify({ speakers: newSpeakersArray }, null, 2)
      );

      res.setHeader("Content-Type", "application/json");
      res.status(200).send(JSON.stringify(recordFromBody, null, 2));
      console.log(`PUT /api/speakers/${id} status: 200`);
    } catch (error) {
      res
        .status(500)
        .send(`PUT /api/speakers/${id} status: 500 unexpected error`);
      console.log(`PUT /api/speakers/${id} status:500`, e);
    }
  }
}
