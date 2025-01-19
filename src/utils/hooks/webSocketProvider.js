import { useState, useEffect } from 'react';
import WebSocketContext from './WebSocketContext';
import WebSocketWrapper from './websocket';

const WebSocketProvider = ({ children }) => {
    const [socketConnected, setSocketConnected] = useState(false);
    const [webSocket, setWebSocket] = useState(null);

    useEffect(() => {
        const socket = new WebSocketWrapper();
        socket.connect();
        // 修改ws连接状态
        socket.onConnectionChange(isConnected => setSocketConnected(isConnected));
            
        setWebSocket(socket);
    }, []);

    return (
        <WebSocketContext.Provider value={{ webSocket, socketConnected }}>
            {children}
        </WebSocketContext.Provider>
    );
};

export default WebSocketProvider;
