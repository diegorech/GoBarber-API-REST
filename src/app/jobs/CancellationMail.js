import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Mail from '../../lib/Mail';

class CancellationMail {
  // get para criar variável de fácil acesso
  // pode ser usado com "CancellationMail.key", no exemplo abaixo
  get key() {
    return 'CancellationMail';
  }

  // handle é atarefa que será executada no envio de cada email
  async handle({ data }) {
    const { appointment } = data;

    console.log(' A fila executou!');

    await Mail.sendEmail({
      to: `${appointment.provider.name} <${appointment.provider.email}>`,
      subject: 'Agendamento cancelado',
      template: 'cancellation',
      context: {
        provider: appointment.provider.name,
        user: appointment.user.name,
        date: format(
          parseISO(appointment.date),
          "'dia' dd 'de' MMMM', às' H:mm'h'",
          {
            locale: pt,
          }
        ),
      },
    });
  }
}

export default new CancellationMail();
