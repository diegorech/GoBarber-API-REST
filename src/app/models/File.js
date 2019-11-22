import Sequelize, { Model } from 'sequelize';

class File extends Model {
  static init(sequelize) {
    // primeiro parâmetro do super.init será as colunas que o usuário vai preencher
    // no BD, o segundo é um objetco com sequelize e mais algumas configs opcionais

    super.init(
      {
        name: Sequelize.STRING,
        path: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    return this;
  }
}

export default File;
