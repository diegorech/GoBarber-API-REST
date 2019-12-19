# rocketseat-bootcamp
Starting the goBarber project


Yarn to download all dependencies

Yarn dev to start server






Notes:

* on: nodemon.json
    {
    "execMap": {
        "js": "node -r sucrase/register"
    }
    }

-- All files with .js will always exec sucrase/register before the node command
    -- That's what '-r' do

* module path from node



# date-fns

  const hourStart = startOfHour(parseISO(date));
    -> parseISO recebe a string gerada na req quando feito um Appointment e transforma num obeto Date do JS
    -> startOfHour zera os minutos e segundos e guarda apenas as horas do agendamento, a idéia é poder criar apenas 1 agendamento a cada hora.



# AppointmentsController - listagem e paginação de appointments
const { page = 1 } = req.query;

    const appointments = await Appointment.findAll({
      where: {
        user_id: req.userId,
        deleted_at: null,
      },
      order: ['date'],
      attributes: ['id', 'date'],
      limit: 20,
      offset: (page - 1) * 20,
      include: [
        {
          model: User,
          as: 'provider',
          attributes: ['id', 'name'],
          include: [
            {
              model: File,
              as: 'avatar',
              attributes: ['id', 'path', 'url'],
            },
          ],
        },
      ],
    });

      # order - a ordem em que o json será apresentado
      # attributer - quais dados serão adicionados no json
      # limit - quantidade de appointments que aparecerão em tela
      # offset - de quantos em quantos devem ser pulados - se for a 1º pag não pulará nenhum para as pags a seguir pulará de 20 em 20
      # include - faz associação com outros models


# ScheduleController - listagem dos appointments para o provider mostrando apenas os marcados para o dia atual
const appointments = await Appointment.findAll({
      where: {
        provider_id: req.userId,
        deleted_at: null,
        date: {
          [Op.between]: [startOfDay(parsedDate), endOfDay(parsedDate)],
        },
      },
      order: ['date'],
    });

      # Op.between - entre [] para ser uma chave do objeto é um operador do sequelize para utilizar o método bewtween
        ## between recebe 2 variáveis em um array e retorna o que estiver entre elas

      # start/endOfDay retornam, respectivamente, o primeiro e último momento da data que recebe -> import from date-fns
        # parsedDate variável do parseISO


# MongoDB
  -> Bando não relacional aqui utlizado para guardar as notificações do provedor de serviço
  -> Preza pelo desempenho
