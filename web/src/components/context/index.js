import React from 'react'

const ToolsContext = React.createContext({ originalData: [], data: [], updateData: () => {}, reloadContent: () => {}})

export const ToolsProvider = ToolsContext.Provider

export { ToolsContext }


const ModalContext = React.createContext({ isVisible: [], changeVisibilty: () => {}})

export const ModalProvider = ModalContext.Provider

export { ModalContext }