import multer from 'multer';
import crypto from 'crypto';
import { extname, resolve } from 'path';

export default {
  // diskStorage pq vamos salvar no diretório uploads
  storage: multer.diskStorage({
    destination: resolve(__dirname, '..', '..', 'temp', 'uploads'),
    // cb recebe o nome que o arquivo recebera qnd for salvo ou o erro, se houver
    filename: (req, file, cb) => {
      // crypto blib do node q ajuda a gerar caracteres aleatórios
      crypto.randomBytes(16, (err, res) => {
        if (err) return cb(err);
        // extname pega apenas a extensão do arquivo
        return cb(null, res.toString('hex') + extname(file.originalname));
      }); // com isso nunca será salvo 2 fotos com mesmo nome
    },
  }),
};
