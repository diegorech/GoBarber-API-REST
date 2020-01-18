// Para a fila não influenciar na performance da aplicação
import 'dotenv/config';
import Queue from './lib/Queue';

Queue.processQueue();
