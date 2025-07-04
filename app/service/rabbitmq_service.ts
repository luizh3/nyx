import amqp from 'amqplib'

export async function sendEmailConfirmation(user: { id: number, email: string }) {
  const queue = 'email_queue'
  const message = {
    pattern: 'send_email',
    data: {
      to: user.email,
      subject: 'Confirmação de E-mail NYX',
      body: `Olá!\n\nSomos da NYX e recebemos uma solicitação para criar sua conta. Para concluir o processo, confirme seu endereço de e-mail clicando no link abaixo:\n\nhttp://localhost:3333/confirm-email/${user.id}\n\nSe você não solicitou isso, apenas ignore este e-mail.\n\nObrigado!`
    }
  }

  const connection = await amqp.connect('amqp://localhost')
  const channel = await connection.createChannel()
  await channel.assertQueue(queue, { durable: true })
  channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)), { persistent: true })
  setTimeout(() => {
    channel.close()
    connection.close()
  }, 500)
} 