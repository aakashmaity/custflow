// My Profile dropdown menu - Upgrade to pro version button


import { Avatar, Popover, Button, Badge, Col, List, notification } from 'antd';
// import Notifications from '@/components/Notification';
import { RocketOutlined } from '@ant-design/icons';
import useLanguage from '@/locale/useLanguage';



export default function UpgradeButton() {
  const translate = useLanguage();

  return (
    <Badge count={0} size="small">
      <Button
        type="primary"
        style={{
          float: 'right',
          marginTop: '5px',
          cursor: 'pointer',
          background: '#16923e',
          fontSize: '13px',
          boxShadow: '0 2px 0 rgb(82 196 26 / 20%)',
        }}
        icon={<RocketOutlined />}
        onClick={() => {
          notification.open({
            message: 'CustFlow',
            description: 'CustFlow is a new version of the CRM software. We are working on it now. Please wait for the release.',
          })
        }}
      >
        {translate('Upgrade to Pro version')}
      </Button>
    </Badge>
  );
}

console.log(
  '🚀 Welcome to CustFlow ERP CRM! Did you know that we also offer commercial customization services? Contact us at hello@custflow.com for more information.'
);
