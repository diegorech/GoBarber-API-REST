import File from '../models/File';

class FileController {
  async store(req, res) {
    // req.file(pq é 1 arquivo apenas) recebe tds os dados do arquivo
    const { originalname: name, filename: path } = req.file;

    const file = await File.create({
      name,
      path,
    });
    return res.json(file);
  }
}

export default new FileController();
