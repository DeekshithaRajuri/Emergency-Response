import { useState } from "react";
import axios from "axios";
import { 
  Form, 
  Input, 
  Button, 
  Card, 
  Typography, 
  message, 
  Row, 
  Col,
  Alert
} from 'antd';
import {
  WarningOutlined,
  EnvironmentOutlined,
  FileTextOutlined,
  SendOutlined
} from '@ant-design/icons';

const { Title, Text } = Typography;
const { TextArea } = Input;

const ReportForm = () => {
  const [form] = Form.useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleSubmit = async (values) => {
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      console.log("Submitting report:", values);
      const response = await axios.post(
        "http://localhost:5000/api/incidents/report", 
        values
      );
      console.log("Server response:", response.data);
      
      message.success("Incident reported successfully!");
      form.resetFields();
    } catch (error) {
      console.error("Error reporting incident:", error.response?.data || error.message);
      setSubmitError(error.response?.data?.message || "Error reporting incident");
      message.error("Failed to submit report");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Row justify="center" style={{ padding: '24px' }}>
      <Col xs={24} sm={20} md={16} lg={12}>
        <Card 
          title={
            <Title level={3} style={{ textAlign: 'center', marginBottom: 0 }}>
              <WarningOutlined style={{ marginRight: 8 }} />
              Report an Incident
            </Title>
          }
          bordered={false}
          style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}
        >
          {submitError && (
            <Alert
              message="Submission Error"
              description={submitError}
              type="error"
              showIcon
              closable
              style={{ marginBottom: 24 }}
            />
          )}

          <Text type="secondary" style={{ display: 'block', textAlign: 'center', marginBottom: 24 }}>
            Please provide details about the incident you witnessed or experienced.
          </Text>

          <Form
            form={form}
            layout="vertical"
            onFinish={handleSubmit}
          >
            <Form.Item
              name="title"
              label="Incident Title"
              rules={[{ required: true, message: 'Please input a title for the incident' }]}
            >
              <Input 
                prefix={<FileTextOutlined />} 
                placeholder="Brief title describing the incident" 
                size="large"
              />
            </Form.Item>

            <Form.Item
              name="description"
              label="Description"
              rules={[{ required: true, message: 'Please describe the incident' }]}
            >
              <TextArea 
                rows={4} 
                placeholder="Provide detailed information about what happened..." 
                size="large"
              />
            </Form.Item>

            <Form.Item
              name="location"
              label="Location"
              rules={[{ required: true, message: 'Please specify the location' }]}
            >
              <Input 
                prefix={<EnvironmentOutlined />} 
                placeholder="Where did this incident occur?" 
                size="large"
              />
            </Form.Item>

            <Form.Item>
              <Button 
                type="primary" 
                htmlType="submit" 
                size="large"
                icon={<SendOutlined />}
                loading={isSubmitting}
                block
              >
                {isSubmitting ? 'Submitting...' : 'Submit Report'}
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default ReportForm;