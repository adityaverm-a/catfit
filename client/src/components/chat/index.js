import React, { useState }  from 'react'
import DashboardLayout from '../layout/Layout'
import Sidepanel from '../layout/Sidepanel'
import ChannelContainer from './ChannelContainer'

const Chat = () => {
    const [createType, setCreateType] = useState('')
    const [isCreating, setIsCreating] = useState(false)
    const [isEditing, setIsEditing] = useState(false)
  return (
    <DashboardLayout>
        <Sidepanel>
            Chat
        </Sidepanel>
        <ChannelContainer 
            isCreating={isCreating}
            setIsCreating={setIsCreating}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            createType={createType}
        />
    </DashboardLayout>
  )
}

export default Chat