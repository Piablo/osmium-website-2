import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';

const list1 = [
  {
    label: 'INTRODUCTION TO THE PLATFORM AND SERVICES',
    children: [
      {
        label:
          'Getosmium provides a platform offering various services, including but not limited to allowing a user to conduct a property inspection using the application. All property inspections, once completed, are stored on a secured cloud server. Users are able to access any inspection via the application and may download any inspection in PDF format for offline viewing (collectively, the “Services”).',
      },
      {
        label:
          'These Terms explain  the  conditions applicable to how users must make use of the Platform and the core provisions applicable to a user’s use of any Services derived from Getosmium.',
      },
      {
        label:
          'In return for using some of the Services available, the user may have to pay a fee to Getosmium (“Fee”), but any Fee will be detailed to you on the Platform before you incur such a Fee. Please see our Platform for a breakdown of the Fees.',
      },
      {
        label:
          'To use most of the Services, users must register on the Platform using the prompted methods and submit any required information to create a Profile.',
      },
      {
        label:
          'The Platform and these Terms are subject to change without notice. These Terms are updated or amended from time to time and will be effective upon Getosmium uploading the amended Terms to the Platform. Your continued access or use of the Platform constitutes your acceptance to be bound by the Terms, as amended. It is your responsibility to read these Terms periodically to ensure you are aware of any changes.',
      },
      {
        label:
          'Unauthorised use of the Platform may give rise to a claim for damages and/or be a criminal offence.',
      },
    ],
  },
  {
    label: 'RELATIONSHIP BETWEEN THE PARTIES AND REGULATORY OVERSIGHT',
    children: [
      {
        label:
          'For all Services provided, Getosmium does not have an agent, intermediary, advisory, nor representative relationship with any user. Your use of the Platform or the Services is entirely at your own risk and based on your own volition and expertise.',
      },
      {
        label:
          'Getosmium does not provide any regulated property, financial, advisor, or payment services. As such, the Services are not subject to oversight or regulation by any[{{type}} Annotation][{{type}} Annotation] regulatory authority in South Africa, other than those concerning general consumer rights.',
      },
    ],
  },
  {
    label: 'USER REGISTRATION PROCESS',
    children: [
      {
        label:
          'To make use of the Services, you must complete the necessary registration process detailed on the Platform and acquire a Profile. You further agree to provide accurate, current, and complete information during the registration process and to update such information as and when it changes.',
      },
      {
        label:
          'Once registered, the user is allocated a unique Profile which is under their control, and which can be manipulated by the relevant Profile user using the various tools made available on the Platform. Some of the features of the Platform used by a user may automatically make adjustments or manipulate a Profile in accordance with the tool’s functions.',
      },
      {
        label:
          'Getosmium requires you to submit your full name, email address and selected password when registering a Profile. Users may then set up additional features of their Profile, as prompted by the Platform.',
      },
      {
        label:
          'To protect your privacy and security, the Platform takes reasonable steps to verify your identity by requiring your chosen password together with your provided email address or mobile number to grant access to your Profile and data. To view or change your personal information provided, you can go to the profile section under your account.',
      },
      {
        label:
          'By entering your personal information on the Platform, you warrant that the person using the Platform is you and/or you have the legal authority to act on behalf of an entity. You are responsible for your Profile and all actions perpetrated therewith and thereon, and you should not share your login details or password with anyone.',
      },
      {
        label:
          'Please see Getosmium’s Privacy Policy for more details on how Getosmium uses and processes your personal information.',
      },
    ],
  },
  {
    label: 'THE SERVICES',
    children: [
      {
        label:
          'For further and exact information on the various Services currently offered by Getosmium, or those specific to you, please consult the relevant [insert] page on the Platform or please contact hello@getosmium.com for further assistance.',
      },
      {
        label:
          'For general information purposes, and subject to further information relating to these Services made available by Getosmium on the Platform or elsewhere, the following details some of the offerings which constitute our Services available to users:',
        children: [
          { label: 'Conduct Property Inspections Using the Platform:' },
          { label: 'Engaging with our Social Media platforms:' },
          { label: 'Subscribe to our newsletter:' },
        ],
      },
    ],
  },
  {
    label: 'PAYMENT FOR GETOSMIUM SERVICES',
    children: [
      {
        label:
          'The use of the Platform and the Services does attract a Fee to be paid by the user to Getosmium. Getosmium will charge the Fee to the user to allow a user to conduct a property inspection using the Platform application. The applicable Fee will be detailed to a user on the Platform beforehand.',
      },
      {
        label:
          'For any Services purchased, a user will receive an invoice that will be both emailed, in such cases as an email address is provided on your Profile, as well as being made available for download on your Profile.',
      },
      {
        label:
          'For an indication of the Fees to be expected for the Services available from Getosmium, please see our Platform for a breakdown of the Fees.',
      },
      {
        label:
          'Getosmium is committed to providing secure online payment facilities for the payment of any Fee to us. All transactions are encrypted using appropriate encryption technology as operated by our authenticated payment service provider Stripe and/or other licenced and verified payment systems.',
      },
      {
        label:
          'Users making use of our authorised payment services provider understand that when using such third-party services, that third-party service provider may have its own terms of use and service which the user will need to read and accept to use their independent payment services.',
      },
      {
        label:
          'You may contact Getosmium via email at hello@getosmium.com or go to your Profile to obtain a full record of your transactions with Getosmium.',
      },
    ],
  },
  {
    label: 'REFUNDS AND RETURNS',
    children: [
      {
        label:
          'Unless otherwise required by applicable laws, Getosmium does not refund any Fee which has been paid by a user for the use of the Services. Users only pay for the Services which they use and therefore have the opportunity to discontinue their use of the Services and the Platform where they no longer wish to incur any Fees.',
      },
    ],
  },
  {
    label: 'USER RESPONSIBILITIES AND WARRANTIES',
    children: [
      { label: 'By using the Platform and/or the Services, you warrant that:' },
      {
        label:
          'The Platform is only available on compatible devices connected to the internet. It is your responsibility to obtain these devices and any data network access necessary to utilise the Platform. The network’s data and messaging rates and fees may apply if you use the Platform and you shall be responsible for such rates and fees. ',
      },
      {
        label:
          'Without prejudice to any of Getosmium’s other rights (whether at law or otherwise), Getosmium reserves the right to deny you access to the Platform or the Services where Getosmium believes (in its reasonable discretion) that you are in breach of any of these Terms.',
      },
      {
        label:
          'Getosmium does not guarantee that the Platform, or any portion thereof, will function on any particular hardware or device.',
      },
    ],
  },
  { label: 'KYC AND AML REQUIREMENTS' },
  { label: 'RECEIPT AND TRANSMISSION OF DATA MESSAGES' },
  { label: 'HYPERLINKS, DEEP LINKS, FRAMING' },
  { label: 'INTELLECTUAL PROPERTY PROTECTION' },
  { label: 'DISCLAIMERS AND WARRANTIES' },
  { label: 'INDEMNITIES' },
  { label: 'COMPANY INFORMATION' },
  { label: 'DISPUTE RESOLUTION AND GOVERNING LAW' },
  { label: 'TERMINATION OF USE OF PLATFORM OR SERVICES' },
  { label: 'NOTICES AND SERVICE ADDRESS' },
  { label: 'GENERAL' },
];

const TermsOfUse = () => {
  return (
    <div>
      <Head>
        <title>Osmium - Terms of use</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Container>
          <H3>GETOSMIUM’S PRIVACY AND PERSONAL INFORMATION POLICY</H3>
          <p>
            By accessing or using www.getosmium.com and its related application,
            or any of its related Platforms, or platforms (collectively, “the
            Platform”) owned by Osmium Solutions Limited (reg: NZBN
            9429049307412) (“Getosmium”) or any of its Services, you agree that
            you have read, understood and agree to be bound to the terms and
            conditions contained herein (“Terms”), in conjunction with any
            additional Getosmium terms particularly applicable to you and the
            Services you utilise. All rights in and to the content of the
            Platform remain expressly reserved by Getosmium
          </p>
          <p style={{ fontWeight: 'bold' }}>
            Please pay specific attention to the BOLD paragraphs of the
            Getosmium Terms. These paragraphs limit the risk or liability of
            Getosmium, constitute an assumption of risk or liability by you,
            impose an obligation by you to indemnify Getosmium or is an
            acknowledgement of any fact by you.
          </p>
          <p style={{ fontWeight: 'bold' }}>
            Please read these terms carefully before accessing or using the
            Platform or Services. Getosmium will assume you have read and
            understood these terms should you continue to access or make use of
            the Platform
          </p>
          <p style={{ fontWeight: 'bold' }}>
            It is important to note the following:
          </p>
          <ul>
            <li>
              The terms &apos;user&apos;, &apos;you&apos; and &apos;your&apos;
              are used interchangeably in these Terms and refer to all persons
              accessing the Platform or using the Services for any reason
              whatsoever. Accordingly, the terms “us”, “our” or “we” refers to
              Getosmium or its possession.
            </li>
            <li>These terms were last updated on [insert date].</li>
          </ul>
        </Container>
      </main>

      <footer></footer>
    </div>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: auto;
`;
const H3 = styled.h3`
  margin: auto;
`;
export default TermsOfUse;