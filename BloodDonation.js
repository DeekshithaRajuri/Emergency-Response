import { useState } from "react";
import { 
  Button, 
  Form, 
  Input, 
  Select, 
  DatePicker, 
  
  Card, 
  Typography, 
  Alert, 
  Divider, 
  Row, 
  Col,
  Steps,
  message
} from 'antd';
import { 
  HeartOutlined, 
  UserOutlined,
  EnvironmentOutlined,
 
  CheckCircleOutlined
} from '@ant-design/icons';
import bloodImage from "../assests/blooddonation.jpg"; // Replace with your own image

const { Title, Text, Paragraph } = Typography;
const { Option } = Select;
const { Step } = Steps;

const BloodDonation = () => {
  const [form] = Form.useForm();
  const [showForm, setShowForm] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const toggleForm = () => {
    setShowForm(!showForm);
    if (!showForm) {
      setCurrentStep(0);
      form.resetFields();
    }
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async (values) => {
    setIsSubmitting(true);
    setSubmitError(null);
  
    try {
      // Format date and time properly before sending
      const submissionData = {
        ...values,
        time: values.dateTime.format('YYYY-MM-DD HH:mm:ss')
      };
      delete submissionData.dateTime;

      const response = await fetch("http://localhost:5000/api/donations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        message.success("Thank you for your donation commitment!");
        form.resetFields();
        setShowForm(false);
      } else {
        throw new Error(data.message || "Submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitError(error.message);
      message.error("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const bloodTypes = [
    'A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'
  ];

  return (
    <div style={{ 
      padding: '24px',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      {/* Hero Section */}
      <Row gutter={[24, 24]} style={{ marginBottom: '48px' }}>
        <Col xs={24} md={12}>
          <div style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${bloodImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '400px',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            textAlign: 'center',
            padding: '24px'
          }}>
            <div>
              <Title level={2} style={{ color: 'white' }}>
                <HeartOutlined /> Be a Hero, Donate Blood
              </Title>
              <Paragraph style={{ fontSize: '18px', color: 'white' }}>
                "A single donation can save up to three lives. Your few minutes can give someone a lifetime."
              </Paragraph>
              <Button 
                type="primary" 
                size="large" 
                onClick={toggleForm}
                icon={<HeartOutlined />}
              >
                {showForm ? "Hide Donation Form" : "Donate Blood Now"}
              </Button>
            </div>
          </div>
        </Col>
        <Col xs={24} md={12}>
          <Card title="Why Donate Blood?" bordered={false}>
            <ul style={{ fontSize: '16px', lineHeight: '2' }}>
              <li>Every 2 seconds someone in the world needs blood</li>
              <li>Blood cannot be manufactured - it can only come from donors</li>
              <li>One donation can save up to 3 lives</li>
              <li>Donating blood may reduce the risk of heart disease</li>
              <li>You get a free mini health checkup before donating</li>
            </ul>
            <Divider />
            <Title level={4}>Eligibility Requirements</Title>
            <ul style={{ fontSize: '16px', lineHeight: '2' }}>
              <li>Age: 18-65 years (varies by country)</li>
              <li>Weight: At least 50kg (110 lbs)</li>
              <li>Healthy at time of donation</li>
              <li>No recent tattoos/piercings (within 4 months)</li>
              <li>Not pregnant or recently given birth</li>
            </ul>
          </Card>
        </Col>
      </Row>

      {/* Donation Form Section */}
      {showForm && (
        <Card 
          title={<Title level={3}>Blood Donation Registration</Title>}
          style={{ marginBottom: '48px' }}
        >
          <Steps current={currentStep} style={{ marginBottom: '32px' }}>
            <Step title="Personal Info" />
            <Step title="Donation Details" />
            <Step title="Confirmation" />
          </Steps>

          {submitError && (
            <Alert
              message="Submission Error"
              description={submitError}
              type="error"
              showIcon
              closable
              style={{ marginBottom: '24px' }}
            />
          )}

          <Form
            form={form}
            layout="vertical"
            onFinish={handleSubmit}
          >
            {/* Step 1: Personal Information */}
            {currentStep === 0 && (
              <div>
                <Title level={4} style={{ marginBottom: '24px' }}>Your Information</Title>
                <Row gutter={16}>
                  <Col xs={24} md={12}>
                    <Form.Item
                      name="name"
                      label="Full Name"
                      rules={[{ required: true, message: 'Please input your full name' }]}
                    >
                      <Input 
                        prefix={<UserOutlined />} 
                        placeholder="John Doe" 
                        size="large"
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item
                      name="bloodType"
                      label="Blood Type"
                      rules={[{ required: true, message: 'Please select your blood type' }]}
                    >
                      <Select 
                        placeholder="Select your blood type" 
                        size="large"
                      >
                        {bloodTypes.map(type => (
                          <Option key={type} value={type}>{type}</Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </Col>
                </Row>
                <div style={{ textAlign: 'right', marginTop: '24px' }}>
                  <Button type="primary" onClick={nextStep}>
                    Next
                  </Button>
                </div>
              </div>
            )}

            {/* Step 2: Donation Details */}
            {currentStep === 1 && (
              <div>
                <Title level={4} style={{ marginBottom: '24px' }}>Donation Details</Title>
                <Row gutter={16}>
                  <Col xs={24} md={12}>
                    <Form.Item
                      name="dateTime"
                      label="Preferred Date & Time"
                      rules={[{ required: true, message: 'Please select date and time' }]}
                    >
                      <DatePicker 
                        showTime 
                        format="YYYY-MM-DD HH:mm"
                        style={{ width: '100%' }}
                        size="large"
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item
                      name="location"
                      label="Preferred Donation Center"
                      rules={[{ required: true, message: 'Please input donation location' }]}
                    >
                      <Input 
                        prefix={<EnvironmentOutlined />} 
                        placeholder="Central Blood Bank" 
                        size="large"
                      />
                    </Form.Item>
                  </Col>
                </Row>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '24px' }}>
                  <Button onClick={prevStep}>
                    Back
                  </Button>
                  <Button type="primary" onClick={nextStep}>
                    Next
                  </Button>
                </div>
              </div>
            )}

            {/* Step 3: Confirmation */}
            {currentStep === 2 && (
              <div>
                <Title level={4} style={{ marginBottom: '24px' }}>Review Your Information</Title>
                <Card>
                  <Paragraph>
                    <Text strong>Name:</Text> {form.getFieldValue('name') || 'Not provided'}
                  </Paragraph>
                  <Paragraph>
                    <Text strong>Blood Type:</Text> {form.getFieldValue('bloodType') || 'Not provided'}
                  </Paragraph>
                  <Paragraph>
                    <Text strong>Donation Time:</Text> {form.getFieldValue('dateTime')?.format('MMMM Do YYYY, h:mm a') || 'Not provided'}
                  </Paragraph>
                  <Paragraph>
                    <Text strong>Location:</Text> {form.getFieldValue('location') || 'Not provided'}
                  </Paragraph>
                </Card>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '24px' }}>
                  <Button onClick={prevStep}>
                    Back
                  </Button>
                  <Button 
                    type="primary" 
                    htmlType="submit"
                    loading={isSubmitting}
                    icon={<CheckCircleOutlined />}
                  >
                    {isSubmitting ? 'Submitting...' : 'Confirm Donation'}
                  </Button>
                </div>
              </div>
            )}
          </Form>
        </Card>
      )}

      {/* Additional Information Section */}
      <Row gutter={[24, 24]} style={{ marginTop: '48px' }}>
        <Col xs={24} md={8}>
          <Card title="Before You Donate" bordered={false}>
            <ul style={{ fontSize: '16px', lineHeight: '2' }}>
              <li>Get a good night's sleep</li>
              <li>Eat a healthy meal before donating</li>
              <li>Drink extra fluids (avoid caffeine)</li>
              <li>Bring your ID or donor card</li>
              <li>Wear clothing with sleeves that can be rolled up</li>
            </ul>
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card title="During Donation" bordered={false}>
            <ul style={{ fontSize: '16px', lineHeight: '2' }}>
              <li>Relax - the process takes about 10 minutes</li>
              <li>You'll donate about 1 pint of blood</li>
              <li>Staff will monitor you during donation</li>
              <li>Let staff know if you feel lightheaded</li>
              <li>Enjoy snacks and refreshments</li>
            </ul>
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card title="After Donation" bordered={false}>
            <ul style={{ fontSize: '16px', lineHeight: '2' }}>
              <li>Rest for a few minutes before standing up</li>
              <li>Drink extra fluids for 24-48 hours</li>
              <li>Avoid strenuous activity for 5 hours</li>
              <li>Keep the bandage on for several hours</li>
              <li>Eat iron-rich foods to replenish</li>
            </ul>
          </Card>
        </Col>
      </Row>

      {/* FAQ Section */}
      <Divider />
      <Title level={2} style={{ textAlign: 'center', margin: '48px 0' }}>Frequently Asked Questions</Title>
      <Row gutter={[24, 24]}>
        <Col xs={24} md={12}>
          <Card title="How often can I donate blood?" bordered={false}>
            <Text>
              Most people can donate whole blood every 56 days (8 weeks). 
              Platelet donations can be made more frequently, up to 24 times per year.
              Your donation center will advise you based on your specific situation.
            </Text>
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card title="Does donating blood hurt?" bordered={false}>
            <Text>
              You may feel a brief pinch when the needle is inserted, but the donation itself 
              should not be painful. Most donors report feeling only slight discomfort.
              Our staff are trained to make the experience as comfortable as possible.
            </Text>
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card title="How long does the process take?" bordered={false}>
            <Text>
              The entire process takes about an hour from start to finish, but the actual 
              blood donation only takes about 10 minutes. This includes registration, 
              a mini-physical, donation, and refreshments afterward.
            </Text>
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card title="Is donated blood tested?" bordered={false}>
            <Text>
              Yes, all donated blood is tested for blood type and screened for infectious 
              diseases like HIV, hepatitis B and C, syphilis, and others. You will be 
              notified if any abnormalities are found in your blood.
            </Text>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default BloodDonation;