import React, { useEffect } from 'react'
import { Typography, Input, Form } from 'antd'
import Rotate from 'react-reveal/Rotate';
import Slide from 'react-reveal/Slide';

import { Phone, Email, LocationOn, WhatsApp, Facebook, Instagram, Twitter, GitHub } from '@material-ui/icons';

import comingsoon from '../assets/images/comingsoon.png'

const Contactus = () => {

  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  useEffect(() => {
    document.title = "Contact Us | Red Blazer";
  }, []);

  return (
    <>
      <div className='contactus'>
        <Typography className='page-title'>Contact Us</Typography>
        <div className='contactus-layout'>
          <div className='contactus-form'>
            <Slide left>
              <Typography className='title'>Get in touch with us</Typography>
              <Typography className='sub-title'>Fill in and submit the form below. We will reply to you as soon as possible.</Typography>
              <Form className='form' name="basic" layout="vertical" onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off"
                // labelCol={{
                //   span: 8,
                // }}
                // wrapperCol={{
                //   span: 16,
                // }}
              >
                <Form.Item
                  label="FULL NAME"
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: '',
                    },
                  ]}
                >
                  <Input placeholder='Your Name'/>
                </Form.Item>

                <Form.Item
                  label="CONTACT NUMBER"
                  name="phone"
                  rules={[
                    {
                      required: true,
                      message: '',
                    },
                  ]}
                >
                  <Input placeholder='+60' type='number'/>
                </Form.Item>

                <Form.Item
                  label="EMAIL"
                  name="email"
                  rules={[
                    {
                      type: 'email',
                      message: 'The input is not valid Email',
                    },
                    {
                      required: true,
                      message: '',
                    },
                  ]}
                >
                  <Input placeholder='name@company.com'/>
                </Form.Item>

                <Form.Item
                  label="SUBJECT"
                  name="subject"
                  rules={[
                    {
                      required: true,
                      message: '',
                    },
                  ]}
                >
                  <Input placeholder='Title' />
                </Form.Item>

                <Form.Item
                  label="MESSAGE"
                  name="message"
                  rules={[
                    {
                      required: true,
                      message: '',
                    },
                  ]}
                >
                  <Input.TextArea showCount maxLength={1000} placeholder='Maximum 1000 letters'/>
                </Form.Item>

                <Form.Item
                  wrapperCol={{
                    offset: 8,
                    span: 16,
                  }}
                >
                  <button className='submit-button' htmlType="submit">
                    <Typography>Submit</Typography>
                  </button>
                </Form.Item>
              </Form>
            </Slide>
          </div>

          <div className='contactus-info'>
            <Slide right>
              <div className="info">
                <Typography className='title'>Info</Typography>
                <span>
                  <Phone /> <Typography>+60 10-302 0168</Typography>
                </span>
                <span>
                  <Email /> <Typography>zirian@redblazer.com</Typography>
                </span>
                <span>
                  <LocationOn /> <Typography>Kuala Lumpur, Malaysia</Typography>
                </span>
                <span>
                  <WhatsApp /> <Typography>+60 10-302 0168</Typography>
                </span>
              </div>

              <div className="socmed">
                <Rotate top left delay={500}>
                  <img src={comingsoon} alt="Coming Soon" className='comingsoon-mark'/>
                </Rotate>
                <Typography className='title'>Social Media</Typography>
                <span>
                  <Facebook /> <Typography>Facebook</Typography>
                </span>
                <span>
                  <Instagram /> <Typography>Instagram</Typography>
                </span>
                <span>
                  <Twitter /> <Typography>Twitter</Typography>
                </span>
                <span>
                  <GitHub /> <Typography>GitHub</Typography>
                </span>
              </div>
            </Slide>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contactus