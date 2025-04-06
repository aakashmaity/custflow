// Login Page - Left Sidebar Content with image


import { Layout, Typography } from 'antd';
import logo from '@/style/images/logo.svg';
const { Content } = Layout;
const { Title, Text } = Typography;

export default function SideContent() {

  return (
    <Content
      style={{
        padding: '150px 30px 30px',
        width: '100%',
        maxWidth: '450px',
        margin: '0 auto',
      }}
      className="sideContent"
    >
      <div style={{ width: '100%' }}>
        <img
          src={logo}
          alt="CUSTFLOW"
          style={{ margin: '0 0 0px', display: 'block' }}
          height={150}
          width={300}
        />

        <Title level={1} style={{ fontSize: 28 }}>
          Free ERP / CRM software for enterprises
        </Title>
        <Text>
          Accounting / Invoicing / Quote App <b /> based on Node.js React.js Application
        </Text>

        <div className="space20"></div>
      </div>
    </Content>
  );
}
