import React from 'react'

const ToolsContext = React.createContext({ data: [], updateData: () => {}})

export const ToolsProvider = ToolsContext.Provider

export default ToolsContext