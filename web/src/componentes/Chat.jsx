import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MessageList from './MessageList';
import Mensagem from './imagens/send.png';

const ChatContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #121214;
`;

const ChatContent = styled.div`
  width: 994px;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #09090a;
  overflow: hidden;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  background-color: #09090a;
  border-radius: 0 0 15px 15px;
`;

const Input = styled.input`
  flex: 1;
  padding: 1px 8px;
  border-radius: 20px;
  margin-right: 10px;
  font-size: 14px;
`;

const Button = styled.button`
  padding: 14px;
  background-color: #42a5f5;
  color: #fff;
  border: none;
  border-radius: 50%;
  cursor: pointer;
`;

const ButtonIcon = styled.img`
  width: 16px;
  height: 16px;
`;

const MessageListContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: #09090a;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none; /* Esconde a barra de rolagem no Chrome/Safari */
  }
`;

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          sender: 'User',
          content: newMessage,
        },
      ]);
      setNewMessage('');
    }
  };

  let control = 1;
  let idMessage = 1;
  function handleFlowChat() {
    setLoading(true);

    const delay = 2000;
    let newMessages = [];
    switch (control) {
      case 1:
        newMessages.push({
          id: idMessage,
          sender: 'Lingu',
          content: `Olá! Sou o Lingu, seu guia e intermediador nesta jornada de aprendizado.\n\nEstou aqui para facilitar a conversa entre você, o aluno, e uma inteligência artificial especializada, que vai te ajudar a entender o conteúdo que você precisa aprender.\n\nSeja qual for o tema, eu ajudo a organizar a interação, garantir que suas dúvidas sejam respondidas e que você aproveite ao máximo esse aprendizado.`,
        });
        idMessage++;
        const novaLista = [...messages, ...newMessages];
        setMessages(novaLista);

        setTimeout(function () {
          newMessages = [];
          newMessages.push({
            id: idMessage,
            sender: 'Lingu',
            content: `Nessa caminhada, contaremos com o apoio do nosso BOT com Inteligência Atificial para apresentar o conteúdo.\n\nVamos lá BOT, se apresente`,
          });
          idMessage++;
          const novaLista2 = [...novaLista, ...newMessages];
          setMessages(novaLista2);

          setTimeout(function () {
            newMessages = [];
            newMessages.push({
              id: idMessage,
              sender: 'Gemini',
              content: `Olá, sou o BOT. A inteligência artificial que vai te ajudar no apredizado do nosso conteúdo.\n\nSou muito inteligente e capaz de responder suas perguntas, explicar conceitos complexos e até mesmo aplicar exercicios.`,
            });
            idMessage++;
            const novaLista3 = [...novaLista2, ...newMessages];
            setMessages(novaLista3);

            setTimeout(function () {
              newMessages = [];
              newMessages.push({
                id: idMessage,
                sender: 'Lingu',
                content: `É isso aí BOT.\n\nAgora deixando a nossa apresentação de lado, vamos começar a falar um pouco sobre o nosso primeiro conteúdo: A história dos computadores.\n\nApresenta uma introdução pra gente BOT.`,
              });
              idMessage++;
              const novaLista4 = [...novaLista3, ...newMessages];
              setMessages(novaLista4);
  
              setTimeout(function () {
                newMessages = [];
                newMessages.push({
                  id: idMessage,
                  sender: 'Gemini',
                  content: `Agora mesmo Lingu.\n\nA história dos computadores é fascinante e passa por várias etapas de inovação. Tudo começou com dispositivos simples de cálculo e processamento de informações, evoluindo ao longo dos séculos até chegar nas máquinas avançadas que usamos hoje.\n\n1º Primeiros Dispositivos de Cálculo (Antes de 1800): Muito antes dos computadores eletrônicos, já existiam dispositivos mecânicos para ajudar com cálculos. Um exemplo famoso é o Ábaco, usado há milhares de anos em civilizações como a Mesopotâmia e a China.\n\n2º Máquina de Diferenciais (Século XIX): No início do século XIX, o matemático britânico Charles Babbage projetou a Máquina de Diferenciais, considerada o primeiro conceito de um computador mecânico. Ele também idealizou a Máquina Analítica, um dispositivo capaz de realizar operações programadas. Ada Lovelace, muitas vezes considerada a primeira programadora, escreveu um algoritmo para essa máquina.\n\n3º Primeiros Computadores Eletrônicos (Década de 1940): Durante a Segunda Guerra Mundial, começaram a surgir os primeiros computadores eletrônicos. Um exemplo marcante é o ENIAC (Electronic Numerical Integrator and Computer), desenvolvido em 1945 nos Estados Unidos. Ele era gigantesco, ocupando uma sala inteira, mas foi um dos primeiros computadores eletrônicos de uso geral.\n\n4º Transistores e Circuitos Integrados (Década de 1950-1960): Na década de 1950, o advento dos transistores substituiu as válvulas, permitindo computadores menores e mais eficientes. Mais tarde, nos anos 1960, os circuitos integrados (microchips) tornaram possível a criação de computadores ainda menores e mais rápidos.\n\n5º Computadores Pessoais (Década de 1970-1980): Nos anos 1970 e 1980, houve um grande avanço com o surgimento dos computadores pessoais (PCs). Empresas como a Apple e a IBM introduziram computadores acessíveis ao público em geral, mudando completamente o uso doméstico e empresarial da tecnologia.\n\n6º Era da Internet (Anos 1990-2000): Com o avanço da tecnologia da rede, os computadores se tornaram conectados globalmente através da internet. Isso permitiu a comunicação instantânea, acesso a informações e desenvolvimento de novas plataformas digitais que revolucionaram a vida cotidiana.\n\n7º Computadores Modernos e IA (Presente): Hoje, os computadores são extremamente poderosos e compactos, com smartphones tendo mais capacidade de processamento do que os primeiros computadores. Tecnologias como a inteligência artificial e a computação em nuvem estão moldando o futuro, tornando os computadores mais inteligentes e onipresentes.`,
                });
                idMessage++;
                const novaLista5 = [...novaLista4, ...newMessages];
                setMessages(novaLista5);
    
                setLoading(false);
              }, delay);
            }, delay);
          }, delay);
        }, delay);

        break;
    }

    control++;
  }

  useEffect(() => {
    handleFlowChat();

    return setMessages([]);
  }, []);

  return (
    <ChatContainer>
      <ChatContent>
        <MessageListContainer>
          <MessageList messages={messages} loading={loading} />
        </MessageListContainer>

        <InputContainer>
          <Input
            type='text'
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder='Tire suas dúvidas aqui...'
          />

          <Button onClick={handleSendMessage}>
            <ButtonIcon src={Mensagem} alt='Enviar' />
          </Button>
        </InputContainer>
      </ChatContent>
    </ChatContainer>
  );
};

export default Chat;
