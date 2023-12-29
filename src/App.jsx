import { Button, ConfigProvider, Space } from 'antd'
import { StyleProvider } from '@ant-design/cssinjs'

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          colorPrimary: '#00b96b',
          borderRadius: 2,

          // Alias Token
          colorBgContainer: '#f6ffed',
        },
      }}
    >
      <StyleProvider hashPriority="high">
        <Space>
          <Button type="primary">Primary</Button>
          <Button>Default</Button>
        </Space>
      </StyleProvider>
    </ConfigProvider>
  )
}

export default App
