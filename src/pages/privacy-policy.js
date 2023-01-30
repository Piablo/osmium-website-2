import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';

const list1 = [
  {
    label: 'Important information and who we are',
    children: [
      {
        label: 'Purpose of this Privacy Policy',
        children: [
          {
            label:
              'This Privacy Policy aims to give you information on how Getosmium collects and processes your personal data through any form of your engagement with Getosmium, such as when you provide your third-party services to us, or correspond with us, use our Services, access, or use the Platform, or provide us with your personal information in any other way',
          },
          {
            label:
              'This Privacy Policy complies with, and facilitates the obligations required from, the European Commission’s General Data Protection Regulation, 2016/679 (“GDPR”), as amended. It is important that you read this Privacy Policy together with any other privacy policy or fair processing notice we may provide on specific occasions when we are collecting or processing personal data so that you are fully aware of how and why we are using your data. This Privacy Policy supplements the other notices and is not intended to override them',
          },
          {
            label:
              'We do not process special categories of personal data or the data of minors. Do not provide us with any such personal data, where the provision of same will constitute an immediate and automatic material breach of these terms',
          },
        ],
      },
      {
        label: 'Role as "Data Controller"',
        children: [
          {
            label:
              'Getosmium is the “Data Controller” (as defined in the GDPR) and is responsible for your personal data in instances where we decide the processing operations concerning your personal data',
          },
          {
            label:
              'We have appointed a data representative at Getosmium who is responsible for overseeing questions in relation to this Privacy Policy. If you have any questions about this Privacy Policy, including any requests to exercise your legal rights, please contact the representative using the details set out below',
          },
        ],
      },
      {
        label: 'Our Contact Details',
        children: [
          { label: 'Our full details are:' },
          {
            label:
              'You have the right to make a complaint at any time to the office of any relevant European Information Regulator. We would, however, appreciate the chance to deal with your concerns before you approach any such regulator, so  please contact us in the first instance.',
          },
        ],
      },
      {
        label:
          'Changes to the Privacy Policy and Your Duty to Inform us of Changes',
        children: [
          {
            label:
              'This Privacy Policy version was last updated on [insert date] and historic versions are archived and can be obtained by contacting us',
          },
          {
            label:
              'It is important that the personal data we hold about you is accurate and current at all times. Please update your personal information on the Platform should any of your personal information change or contact us directly at hello@getosmium.com. Getosmium will not be liable for any incorrect personal data it may hold on/about you if you do not update your personal information or notify us of the changes needed.',
          },
        ],
      },
      {
        label: 'Third-Party Links on Platform or otherwise',
        children: [
          {
            label:
              'The Platform may include links to third-party Platforms, plug-ins, and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party Platforms and are not responsible for their privacy statements or terms. When you leave our Platform or engage with such third parties, we encourage you to read the distinct privacy policy of every third party you engage with',
          },
        ],
      },
    ],
  },
  {
    label: 'The Data We Collect About You',
    children: [
      {
        label:
          '"Personal data", or “personally identifiable information”, means any information about an individual, both natural and juristic entities, from which that entity can be identified. It does not include data where the identity has been removed (anonymous data).',
      },
      {
        label:
          'We may collect, use, store, and transfer ("process") different kinds of personal data about you which we have grouped together as follows',
        children: [
          {
            label:
              'Identity Data including full name, country of residence, username or similar identifier, or the information about your company such as company registration details, company address and name',
          },
          {
            label:
              'Contact Data including email address, contact number, physical/registered addresses, and social media contact details;',
          },
          {
            label:
              'Financial Data including bank account details, payment details, third-party payment provider information and payment card details (which we do not store but only provide to our authorised third-party payment service provider under contract with us);',
          },
          {
            label:
              'Transaction Data including details about payments to and from you, contracts, contractual terms, contract fees, signups, subscriptions, invoices and other details of products and services you have obtained from us;',
          },
          {
            label:
              'Social Media Data including information accessible on your publicly available profile such as first name, last name, and email address;',
          },
          {
            label:
              'Technical Data including internet protocol address/es, your login data, browser type and version, time zone setting and location, cookies, browser plug-in types and versions, operating system and platform and other technology on the devices you use to access the Platform;',
          },
          {
            label:
              'Profile   Data  including   your   Platform   username   and   password,   preferences, feedback, ratings and reviews, and any information which you provide to Getosmium upon creating your unique Getosmium Profile;',
          },
          {
            label:
              'Usage Data including information about how you use our company, Platform, Services, and feedback; and',
          },
          {
            label:
              'Marketing and Communications Data including your preferences in receiving notices and marketing from us and our third parties and your communication preferences.',
          },
        ],
      },
      {
        label:
          'We also collect, use, and share Aggregated Data such as statistical or demographic data for any purpose. Aggregated Data may be derived from your personal data but is not considered personal data in law as this data does not directly or indirectly reveal your identity. For example, we may aggregate your Usage Data to calculate the percentage of users accessing a specific Platform feature. However, if we combine or connect Aggregated Data with your personal data so that it can directly or indirectly identify you, we treat the combined data as personal data which will be used in accordance with this Privacy Policy',
      },
      {
        label:
          'Where we need to collect personal data by law, or under the terms of a contract we have with you and you fail to provide that data when requested, we may not be able to perform the contract we have or are trying to enter into with you (for example, to provide you with our Services).',
      },
    ],
  },

  //
  // {label: "", children: [
  //   {label: "", children: [
  //     {label: ""}
  //   ]}
  // ]}
];
const PrivacyPolicy = () => {
  return (
    <div>
      <Head>
        <title>Osmium - Privacy policy</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Container>
          <H3>GETOSMIUM’S PRIVACY AND PERSONAL INFORMATION POLICY</H3>
          <p>
            Osmium Solutions Limited (reg: NZBN 9429049307412) (“Getosmium”)
            adheres to the highest standards of protecting your personal
            information when we process it by virtue of your use of our
            Services, your use of our Platform www.getosmium.com or our
            application any related platforms (collectively, “the Platform”),
            when contracting with us or by providing us with your personal
            information in any other way. As such, we have created this specific
            and detailed Privacy Policy (“Policy”) for you to read and
            appreciate exactly how we safeguard your personal information and
            respect your privacy.
          </p>
          <ul>
            <li>
              Please note that Getosmium is a limited liability for-profit
              company duly registered and operating in accordance with the laws
              of New Zealand.
            </li>
            <li>
              For more information regarding your personal information lawfully
              stored or used by Getosmium, please contact hello@getosmium.com
              who will gladly assist.
            </li>
            <li>
              Please ensure that you read all the provisions below, and our
              other Getosmium rules and policies which may apply from time to
              time and are made available to you, to understand all of your, and
              our, rights and duties.
            </li>
          </ul>
          <p>
            Please use the following links to jump to the relevant sections
            described in this Privacy Policy:
          </p>
          <ol>
            <li>Important information and who we are</li>
            <li>The data we collect about you</li>
            <li>How is your personal data collected</li>
            <li>How we use your personal data</li>
            <li>Disclosures of your personal data</li>
            <li>Express Cookie Provision</li>
            <li>International transfers</li>
            <li>Data security</li>
            <li>Data retention</li>
            <li>Your legal rights</li>
            <li>Data security</li>
          </ol>

          <ol>
            <li>Important information and who we are</li>
            <ol></ol>
            <li>Data security</li>
          </ol>

        </Container>
      </main>

      <footer></footer>
    </div>
  );
};

const Container = styled.div``;
const H3 = styled.h3`
  margin: 0;
  border: 0;
`;
export default PrivacyPolicy;