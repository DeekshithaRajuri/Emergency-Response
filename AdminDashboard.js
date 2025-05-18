import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  DashboardOutlined, 
  FileTextOutlined, 
  TeamOutlined, 
  LogoutOutlined,
  SearchOutlined,
  DownloadOutlined,
  EditOutlined,
  DeleteOutlined,
  CheckOutlined
} from '@ant-design/icons';
import { Layout, Menu, Card, Table, Button, Input, Space, Statistic, Tag, Modal } from "antd";

const { Header, Sider, Content } = Layout;

const AdminDashboard = () => {
  const [reports, setReports] = useState([]);
  const [volunteers, setVolunteers] = useState([]);
  const [view, setView] = useState("dashboard");
  const [searchTerm, setSearchTerm] = useState("");
  const [collapsed, setCollapsed] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentVolunteer, setCurrentVolunteer] = useState(null);
  const navigate = useNavigate();

  const token = sessionStorage.getItem("authToken");

  useEffect(() => {
    if (!token) {
      navigate("/admin/login");
    } else {
      if (view === "dashboard" || view === "reports") fetchReports();
      if (view === "dashboard" || view === "volunteers") fetchVolunteers();
    }
  }, [token, navigate, view]);

  // Fetch Reports
  const fetchReports = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/reports", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setReports(data);
    } catch (error) {
      console.error("Error fetching reports:", error);
      Modal.error({
        title: 'Error',
        content: 'Failed to fetch reports',
      });
    }
  };

  // Fetch Volunteers
  const fetchVolunteers = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/volunteers", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setVolunteers(data);
    } catch (error) {
      console.error("Error fetching volunteers:", error);
      Modal.error({
        title: 'Error',
        content: 'Failed to fetch volunteers',
      });
    }
  };

  // Delete Completed Report
  const handleDeleteReport = async (id) => {
    Modal.confirm({
      title: 'Confirm Delete',
      content: 'Are you sure you want to delete this report?',
      onOk: async () => {
        try {
          await fetch(`http://localhost:5000/api/reports/${id}`, {
            method: "DELETE",
            headers: { Authorization: `Bearer ${token}` },
          });
          setReports(reports.filter((report) => report._id !== id));
          Modal.success({
            content: 'Report deleted successfully!',
          });
        } catch (error) {
          console.error("Error deleting report:", error);
          Modal.error({
            title: 'Error',
            content: 'Failed to delete report',
          });
        }
      }
    });
  };

  // Update Report Status
  const handleUpdateStatus = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/reports/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status: "completed" }),
      });
      const updatedReports = reports.map((r) =>
        r._id === id ? { ...r, status: "completed" } : r
      );
      setReports(updatedReports);
      Modal.success({
        content: 'Report marked as completed!',
      });
    } catch (error) {
      console.error("Error updating report:", error);
      Modal.error({
        title: 'Error',
        content: 'Failed to update report',
      });
    }
  };

  // Delete Volunteer
  const handleDeleteVolunteer = async (id) => {
    Modal.confirm({
      title: 'Confirm Delete',
      content: 'Are you sure you want to delete this volunteer?',
      onOk: async () => {
        try {
          await fetch(`http://localhost:5000/api/volunteers/${id}`, {
            method: "DELETE",
            headers: { Authorization: `Bearer ${token}` },
          });
          setVolunteers(volunteers.filter((v) => v._id !== id));
          Modal.success({
            content: 'Volunteer deleted successfully!',
          });
        } catch (error) {
          console.error("Error deleting volunteer:", error);
          Modal.error({
            title: 'Error',
            content: 'Failed to delete volunteer',
          });
        }
      }
    });
  };

  // Edit Volunteer
  const showEditModal = (volunteer) => {
    setCurrentVolunteer(volunteer);
    setIsModalVisible(true);
  };

  const handleEditVolunteer = async () => {
    try {
      await fetch(`http://localhost:5000/api/volunteers/${currentVolunteer._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(currentVolunteer),
      });
      const updatedVolunteers = volunteers.map((v) =>
        v._id === currentVolunteer._id ? currentVolunteer : v
      );
      setVolunteers(updatedVolunteers);
      setIsModalVisible(false);
      Modal.success({
        content: 'Volunteer updated successfully!',
      });
    } catch (error) {
      console.error("Error editing volunteer:", error);
      Modal.error({
        title: 'Error',
        content: 'Failed to update volunteer',
      });
    }
  };

  // Logout
  const handleLogout = () => {
    Modal.confirm({
      title: 'Confirm Logout',
      content: 'Are you sure you want to logout?',
      onOk: () => {
        sessionStorage.clear();
        navigate("/admin/login");
      }
    });
  };

  // Dashboard Stats
  const totalReports = reports.length;
  const completedReports = reports.filter((r) => r.status === "completed").length;
  const totalVolunteers = volunteers.length;

  // Search Functionality
  const filteredReports = reports.filter((report) =>
    report.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredVolunteers = volunteers.filter((volunteer) =>
    volunteer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Table Columns
  const reportColumns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      ellipsis: true,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <Tag color={status === 'completed' ? 'green' : 'orange'}>
          {status.toUpperCase()}
        </Tag>
      ),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Space size="middle">
          {record.status !== 'completed' && (
            <Button 
              type="primary" 
              icon={<CheckOutlined />} 
              onClick={() => handleUpdateStatus(record._id)}
            >
              Complete
            </Button>
          )}
          <Button 
            danger 
            icon={<DeleteOutlined />} 
            onClick={() => handleDeleteReport(record._id)}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  const volunteerColumns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Location',
      dataIndex: 'location',
      key: 'location',
    },
    {
      title: 'Skills',
      dataIndex: 'skills',
      key: 'skills',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Space size="middle">
          <Button 
            icon={<EditOutlined />} 
            onClick={() => showEditModal(record)}
          >
            Edit
          </Button>
          <Button 
            danger 
            icon={<DeleteOutlined />} 
            onClick={() => handleDeleteVolunteer(record._id)}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
        <div className="logo" style={{ 
          height: '32px', 
          margin: '16px', 
          background: 'rgba(255, 255, 255, 0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold'
        }}>
          {collapsed ? 'AD' : 'ADMIN'}
        </div>
        <Menu theme="dark" selectedKeys={[view]} mode="inline">
          <Menu.Item 
            key="dashboard" 
            icon={<DashboardOutlined />} 
            onClick={() => setView("dashboard")}
          >
            Dashboard
          </Menu.Item>
          <Menu.Item 
            key="reports" 
            icon={<FileTextOutlined />} 
            onClick={() => setView("reports")}
          >
            Reports
          </Menu.Item>
          <Menu.Item 
            key="volunteers" 
            icon={<TeamOutlined />} 
            onClick={() => setView("volunteers")}
          >
            Volunteers
          </Menu.Item>
          <Menu.Item 
            key="logout" 
            icon={<LogoutOutlined />} 
            onClick={handleLogout}
            style={{ marginTop: 'auto' }}
          >
            Logout
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header style={{ padding: 0, background: '#fff' }}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            padding: '0 24px'
          }}>
            <h2 style={{ margin: 0 }}>
              {view === 'dashboard' && 'Dashboard Overview'}
              {view === 'reports' && 'Reports Management'}
              {view === 'volunteers' && 'Volunteers Management'}
            </h2>
            {(view === "reports" || view === "volunteers") && (
              <Input
                placeholder="Search..."
                prefix={<SearchOutlined />}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ width: 300 }}
              />
            )}
          </div>
        </Header>
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
            {/* Dashboard Stats Section */}
            {view === "dashboard" && (
              <div>
                <h3>System Overview</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                  <Card>
                    <Statistic 
                      title="Total Reports" 
                      value={totalReports} 
                      prefix={<FileTextOutlined />}
                    />
                  </Card>
                  <Card>
                    <Statistic 
                      title="Completed Reports" 
                      value={completedReports} 
                      prefix={<CheckOutlined />}
                    />
                  </Card>
                  <Card>
                    <Statistic 
                      title="Total Volunteers" 
                      value={totalVolunteers} 
                      prefix={<TeamOutlined />}
                    />
                  </Card>
                </div>

                <h3 style={{ marginTop: 30 }}>Recent Reports</h3>
                <Table 
                  columns={reportColumns} 
                  dataSource={reports.slice(0, 5)} 
                  rowKey="_id"
                  pagination={false}
                />

                <h3 style={{ marginTop: 30 }}>Recent Volunteers</h3>
                <Table 
                  columns={volunteerColumns} 
                  dataSource={volunteers.slice(0, 5)} 
                  rowKey="_id"
                  pagination={false}
                />
              </div>
            )}

            {/* Reports Section */}
            {view === "reports" && (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
                  <h3>All Reports</h3>
                  <Button 
                    type="primary" 
                    icon={<DownloadOutlined />}
                    onClick={() => {
                      const csvContent = "data:text/csv;charset=utf-8," 
                        + reports.map(r => `${r.title},${r.description},${r.status}`).join("\n");
                      const encodedUri = encodeURI(csvContent);
                      const link = document.createElement("a");
                      link.setAttribute("href", encodedUri);
                      link.setAttribute("download", "reports.csv");
                      document.body.appendChild(link);
                      link.click();
                    }}
                  >
                    Export CSV
                  </Button>
                </div>
                <Table 
                  columns={reportColumns} 
                  dataSource={filteredReports} 
                  rowKey="_id"
                />
              </div>
            )}

            {/* Volunteers Section */}
            {view === "volunteers" && (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
                  <h3>All Volunteers</h3>
                  <Button 
                    type="primary" 
                    icon={<DownloadOutlined />}
                    onClick={() => {
                      const csvContent = "data:text/csv;charset=utf-8," 
                        + volunteers.map(v => `${v.name},${v.location},${v.skills}`).join("\n");
                      const encodedUri = encodeURI(csvContent);
                      const link = document.createElement("a");
                      link.setAttribute("href", encodedUri);
                      link.setAttribute("download", "volunteers.csv");
                      document.body.appendChild(link);
                      link.click();
                    }}
                  >
                    Export CSV
                  </Button>
                </div>
                <Table 
                  columns={volunteerColumns} 
                  dataSource={filteredVolunteers} 
                  rowKey="_id"
                />
              </div>
            )}
          </div>
        </Content>
      </Layout>

      {/* Edit Volunteer Modal */}
      <Modal
        title="Edit Volunteer"
        visible={isModalVisible}
        onOk={handleEditVolunteer}
        onCancel={() => setIsModalVisible(false)}
      >
        {currentVolunteer && (
          <div>
            <div style={{ marginBottom: 16 }}>
              <label>Name</label>
              <Input
                value={currentVolunteer.name}
                onChange={(e) => setCurrentVolunteer({...currentVolunteer, name: e.target.value})}
              />
            </div>
            <div style={{ marginBottom: 16 }}>
              <label>Location</label>
              <Input
                value={currentVolunteer.location}
                onChange={(e) => setCurrentVolunteer({...currentVolunteer, location: e.target.value})}
              />
            </div>
            <div style={{ marginBottom: 16 }}>
              <label>Skills</label>
              <Input
                value={currentVolunteer.skills}
                onChange={(e) => setCurrentVolunteer({...currentVolunteer, skills: e.target.value})}
              />
            </div>
          </div>
        )}
      </Modal>
    </Layout>
  );
};

export default AdminDashboard;