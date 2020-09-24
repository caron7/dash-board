let Socket = ''
let setIntervalWesocketPush = null

/**
 * 建立websocket连接
 * @param {string} url ws地址
 */
export const createSocket = url => {
    Socket && Socket.close()
    if (! Socket) {
        console.log('建立websocket连接')
        Socket = new WebSocket(url)
        Socket.onopen = onopenWS
        Socket.onmessage = onmessageWS
        Socket.onerror = function () {
            onerrorWS(url)
        }
        Socket.onclose = function () {
            oncloseWS(url)
        }
    } else {
        console.log('websocket已连接')
    }
}

/**打开WS之后发送心跳 */
const onopenWS = () => {
    sendPing()
}

/**连接失败重连 */
const onerrorWS = (url) => {
    Socket.close()
    clearInterval(setIntervalWesocketPush)
    console.log('连接失败重连中')
    if (Socket.readyState !== 3) {
        setTimeout(() => {
            Socket = null
            createSocket(url)
        }, 5000)
    }
}

/**WS数据接收统一处理 */
const onmessageWS = e => {
    window.dispatchEvent(new CustomEvent('onmessageWS', {
        detail: {
            data: e.data
        }
    }))
}

/**
 * 发送数据但连接未建立时进行处理等待重发
 * @param {any} message 需要发送的数据
 */
const connecting = message => {
    setTimeout(() => {
        if (Socket.readyState === 0) {
            connecting(message)
        } else {
            Socket.send(JSON.stringify(message))
        }
    }, 1000)
}

/**
 * 发送数据
 * @param {any} message 需要发送的数据
 */
export const sendWSPush = message => {
    if (Socket !== null && Socket.readyState === 3) {
        Socket.close()
        createSocket()
    } else if (Socket.readyState === 1) {
        Socket.send(JSON.stringify(message))
    }
    // else if (Socket.readyState === 0) {
    //     connecting(message)
    // }
}

/**断开重连 */
const oncloseWS = (url) => {
    clearInterval(setIntervalWesocketPush)
    console.log('websocket已断开....正在尝试重连')
    if (Socket.readyState !== 2) {
        setTimeout(() => {
            Socket = null
            createSocket(url)
        }, 5000)
    }
}
/**发送心跳
 * @param {number} time 心跳间隔毫秒 默认5000
 * @param {string} ping 心跳名称 默认字符串ping
 */
export const sendPing = (time = 60000, ping = 'ping') => {
    clearInterval(setIntervalWesocketPush)
    Socket.send(ping)
    setIntervalWesocketPush = setInterval(() => {
        Socket.send(ping)
    }, time)
}
