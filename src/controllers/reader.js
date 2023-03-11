const { Reader } = require("../models");
const reader = require("../models/reader");

const createReader = async (req, res) => {
  const newReader = await Reader.create(req.body);
  res.status(201).json(newReader);
};

const findReader = async (req, res) => {
  const readers = await Reader.findAll(req.body);
  if (readers.length === 0) {
    return res.status(404).send("No readers found");
  }
  return res.status(200).json(readers);
};

const findByPK = async (req, res) => {
  const readerId = await Reader.findByPk(req.params.id);

  if (!readerId) {
    res.status(404).json({ error: "The reader could not be found." });
  }
  res.status(200).json(readerId);
};

const readerUpdate = async (req, res) => {
  const { name, email, password } = req.body;
  const readerId = await req.params.id;
  const [updatedRows, [updatedReader]] = await Reader.update(
    {
      name: name,
      email: email,
      password: password,
    },
    {
      returning: true,
      where: {
        id: readerId,
      },
    }
  );

  if (updatedRows === 0) {
    return res.status(404).json({ error: "The reader could not be found." });
  }
  return res.status(200).json(updatedReader);
};

const readerDelete = async (req, res) => {
  //const { name, email } = req.body;
  const readerId = req.params.id;
  const reader = await Reader.findByPk(readerId);

  if (!reader) {
    return res.status(404).json({ error: "The reader could not be found." });
  }
  await reader.destroy();
  res.status(204).send();
};

module.exports = {
  createReader,
  findReader,
  findByPK,
  readerDelete,
  readerUpdate,
};
