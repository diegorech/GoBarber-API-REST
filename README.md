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



date-fns

  const hourStart = startOfHour(parseISO(date));
    -> parseISO recebe a string gerada na req quando feito um Appointment e transforma num obeto Date do JS
    ->startOfHour zera os minutos e segundos e guarda apenas as horas do agendamento, a idéia é poder criar apenas 1 agendamento a cada hora.
