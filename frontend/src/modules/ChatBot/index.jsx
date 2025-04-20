import { Fab, Webchat } from '@botpress/webchat'
import { useState } from 'react'


function ChatBot() {
  const [isWebchatOpen, setIsWebchatOpen] = useState(false)

  const bootpress_client_id = import.meta.env.VITE_BOOTPRESS_CLIENT_ID;

  // console.log("client: ", bootpress_client_id)
  const toggleWebchat = () => {
    setIsWebchatOpen((prevState) => !prevState)
  }
  return (
    <>
      <Webchat
        clientId={bootpress_client_id}
        style={{
          width: '400px',
          height: '600px',
          display: isWebchatOpen ? 'flex' : 'none',
          position: 'fixed',
          bottom: '90px',
          right: '20px',
          zIndex: 100
        }}
      />
      <Fab onClick={() => toggleWebchat()} style={{ position: 'fixed', bottom: '20px', right: '20px' }} />
    </>
  )
}

export default ChatBot