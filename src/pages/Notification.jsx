import React, { useState } from "react";
import { Tab, Nav, Button, Card, Row, Col, Image, Badge } from "react-bootstrap";

const notifications = {
  Today: [
    {
      id: 1,
      user: "Boyd Larkin",
      message: "has sent you a reminder",
      time: "2 hours ago",
      avatar: "https://i.pravatar.cc/40?img=1",
      actions: ["Ignore", "Respond"],
    },
  ],
  Yesterday: [
    {
      id: 2,
      user: "Josh Krajcik",
      message: "has changed the status of Design Project",
      time: "2 hours ago",
      avatar: "https://i.pravatar.cc/40?img=2",
      statusChange: {
        from: "In Progress",
        to: "Completed",
      },
    },
  ],
  Monday: [
    // Add your own sample here if needed
  ],
};

export default function Notification() {
  const [activeTab, setActiveTab] = useState("unread");

  const renderNotification = (item) => (
    <Card key={item.id} className="mb-3 bg-dark text-white border-0">
      <Card.Body className="d-flex">
        <Image src={item.avatar} roundedCircle width="40" height="40" className="mr-3" />
        <div style={{ flex: 1 }}>
          <div className="mb-1">
            <strong>{item.user}</strong> {item.message}
          </div>
          {item.statusChange && (
            <div>
              <Badge variant="secondary" className="mr-2">
                {item.statusChange.from}
              </Badge>
              <span className="mx-2">→</span>
              <Badge variant="primary">{item.statusChange.to}</Badge>
            </div>
          )}
          {item.actions && (
            <div className="mt-2">
              {item.actions.map((action, i) => (
                <Button
                  key={i}
                  variant={action === "Respond" ? "primary" : "secondary"}
                  size="sm"
                  className="mr-2"
                >
                  {action}
                </Button>
              ))}
            </div>
          )}
        </div>
        <small className="text-muted">{item.time}</small>
      </Card.Body>
    </Card>
  );

  return (
    <div className="bg-dark notification text-white p-3 container-fluid rounded" style={{ maxWidth: "500px" }}>
      <h5 className="mb-3">Notifications</h5>
      <Nav variant="tabs" defaultActiveKey="unread" className="mb-3">
        <Nav.Item>
          <Nav.Link eventKey="unread" onClick={() => setActiveTab("unread")} className="text-white bg-dark border-secondary">
            Unread
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="read" onClick={() => setActiveTab("read")} className="text-white bg-dark border-secondary">
            Read
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="archived" onClick={() => setActiveTab("archived")} className="text-white bg-dark border-secondary">
            Archived
          </Nav.Link>
        </Nav.Item>
      </Nav>

      {["Today", "Yesterday", "Monday"].map((section) =>
        notifications[section]?.length > 0 ? (
          <div key={section}>
            <div className="d-flex justify-content-between align-items-center mb-2">
              <small className="text-muted">{section}</small>
              <Button variant="link" size="sm" className="p-0 text-muted">
                See All
              </Button>
            </div>
            {notifications[section].map(renderNotification)}
          </div>
        ) : null
      )}
    </div>
  );
}
