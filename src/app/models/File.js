import Sequelize, { Model } from 'sequelize';

class File extends Model {
  static init(sequelize) {
    // primeiro parâmetro do super.init será as colunas que o usuário vai preencher
    // no BD, o segundo é um objetco com sequelize e mais algumas configs opcionais

    super.init(
      {
        name: Sequelize.STRING,
        path: Sequelize.STRING,
        url: {
          // Campo virtual para poder entregar para o front-end a url da imagem
          // front não terá que fazer nenhum processo para ir atrás da imagem
          type: Sequelize.VIRTUAL,
          get() {
            return `${process.env.APP_URL}/files/${this.path}`;
          },
          // método get() define como o valor será formatado
        },
      },
      {
        sequelize,
      }
    );
    return this;
  }
}

export default File;
