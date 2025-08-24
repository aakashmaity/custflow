import { Button, Result } from 'antd';

import useLanguage from '@/locale/useLanguage';

const About = () => {
  const translate = useLanguage();
  return (
    <Result
      status="info"
      title={'CUSTFLOW'}
      subTitle={translate('Do you need help on customize of this app ?')}
      extra={
        <>
          <p>
          At CUSTFLOW, we are dedicated to revolutionizing business operations through our innovative 
          ERP SaaS solutions. Our platform streamlines workflows, enhances productivity, and drives smarter 
          decision-making for businesses of all sizes. With a focus on customization, scalability, and ease 
          of use, we empower organizations to optimize their processes, manage resources efficiently, 
          and stay ahead in a fast-evolving market. Our team of experts is committed to providing 
          exceptional customer support, ensuring seamless implementation, and helping our clients 
          unlock their full potential with a comprehensive ERP solution tailored to their unique needs.
          </p>
        </>
      }
    />
  );
};

export default About;
