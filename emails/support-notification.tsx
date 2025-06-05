import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Text,
  Section,
  Row,
  Column,
  Button,
} from "@react-email/components";
import * as React from "react";

interface SupportNotificationEmailProps {
  clientEmail: string;
  name: string;
  projectType: string;
  description: string;
  urgency: string;
  submittedAt: string;
}

const SupportNotificationEmail = ({ 
  clientEmail = "",
  name = "", 
  projectType = "", 
  description = "", 
  urgency = "standard",
  submittedAt = ""
}: SupportNotificationEmailProps) => {
  const getUrgencyColor = (urgency: string) => {
    switch (urgency.toLowerCase()) {
      case "urgent":
        return "#dc2626"; // red-600
      case "high":
        return "#ea580c"; // orange-600
      case "medium":
        return "#d97706"; // amber-600
      case "standard":
      default:
        return "#059669"; // emerald-600
    }
  };

  const getUrgencyBadge = (urgency: string) => {
    switch (urgency.toLowerCase()) {
      case "urgent":
        return "🚨 URGENT";
      case "high":
        return "⚡ HIGH PRIORITY";
      case "medium":
        return "📋 MEDIUM PRIORITY";
      case "standard":
      default:
        return "✅ STANDARD";
    }
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return "Unknown";
    try {
      return new Date(dateString).toLocaleString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        timeZoneName: "short"
      });
    } catch {
      return dateString;
    }
  };

  return (
    <Html>
      <Head />
      <Preview>New project request from {name} - {urgency.toUpperCase()} Priority</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Text style={headerText}>🔔 New Project Request</Text>
          </Section>

          {/* Alert Banner for Urgent/High Priority */}
          {(urgency.toLowerCase() === "urgent" || urgency.toLowerCase() === "high") && (
            <Section style={{
              ...alertBanner,
              backgroundColor: urgency.toLowerCase() === "urgent" ? "#fee2e2" : "#fff7ed",
              borderColor: getUrgencyColor(urgency),
            }}>
              <Text style={{
                ...alertText,
                color: getUrgencyColor(urgency),
              }}>
                {urgency.toLowerCase() === "urgent" ? "⚠️ URGENT REQUEST" : "⚡ HIGH PRIORITY REQUEST"}
              </Text>
            </Section>
          )}

          {/* Main Content */}
          <Section style={content}>
            <Heading style={h1}>New Project Request Received</Heading>
            
            <Text style={text}>
              A new project request has been submitted and requires your attention.
            </Text>

            {/* Priority Badge */}
            <Section style={prioritySection}>
              <Text style={{
                ...priorityBadge,
                backgroundColor: getUrgencyColor(urgency),
              }}>
                {getUrgencyBadge(urgency)}
              </Text>
            </Section>

            {/* Client Details Box */}
            <Section style={detailsBox}>
              <Heading style={h2}>📋 Request Details</Heading>
              
              <Row style={detailRow}>
                <Column style={labelColumn}>
                  <Text style={label}>Client Name:</Text>
                </Column>
                <Column style={valueColumn}>
                  <Text style={value}>{name || "Not provided"}</Text>
                </Column>
              </Row>

              <Row style={detailRow}>
                <Column style={labelColumn}>
                  <Text style={label}>Email:</Text>
                </Column>
                <Column style={valueColumn}>
                  <Link href={`mailto:${clientEmail}`} style={emailLink}>
                    {clientEmail}
                  </Link>
                </Column>
              </Row>

              <Row style={detailRow}>
                <Column style={labelColumn}>
                  <Text style={label}>Project Type:</Text>
                </Column>
                <Column style={valueColumn}>
                  <Text style={value}>{projectType || "Not specified"}</Text>
                </Column>
              </Row>

              <Row style={detailRow}>
                <Column style={labelColumn}>
                  <Text style={label}>Submitted:</Text>
                </Column>
                <Column style={valueColumn}>
                  <Text style={value}>{formatDate(submittedAt)}</Text>
                </Column>
              </Row>

              {description && (
                <Row style={detailRow}>
                  <Column>
                    <Text style={label}>Project Description:</Text>
                    <Text style={descriptionText}>{description}</Text>
                  </Column>
                </Row>
              )}
            </Section>

            {/* Action Buttons */}
            <Section style={actionSection}>
              <Button 
                href={`mailto:${clientEmail}?subject=Re: Your Project Request - ${projectType}`}
                style={primaryButton}
              >
                📧 Reply to Client
              </Button>
              
              <Button 
                href={`mailto:${clientEmail}?cc=team@ideisgarshemo.space&subject=Project Discussion - ${name}`}
                style={secondaryButton}
              >
                💬 Start Team Discussion
              </Button>
            </Section>

            {/* Next Steps */}
            <Section style={nextStepsBox}>
              <Heading style={h3}>📋 Recommended Next Steps</Heading>
              <Text style={stepText}>
                1. <strong>Review the request</strong> - Analyze project requirements and complexity
              </Text>
              <Text style={stepText}>
                2. <strong>Respond promptly</strong> - Aim to reply within 24 hours (sooner for urgent requests)
              </Text>
              <Text style={stepText}>
                3. <strong>Schedule consultation</strong> - Set up a call to discuss project details
              </Text>
              <Text style={stepText}>
                4. <strong>Prepare proposal</strong> - Create detailed timeline and pricing
              </Text>
            </Section>
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              This is an automated notification from your project request system.
            </Text>
            <Text style={footerText}>
              ideisgarshemo.space - Support Team
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default SupportNotificationEmail;

// Styles
const main = {
  backgroundColor: "#f3f4f6",
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
  maxWidth: "650px",
};

const header = {
  padding: "20px 40px",
  backgroundColor: "#1e40af",
  borderRadius: "8px 8px 0 0",
};

const headerText = {
  color: "#ffffff",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "0",
  textAlign: "center" as const,
};

const alertBanner = {
  padding: "16px 40px",
  border: "2px solid",
  borderRadius: "0",
  textAlign: "center" as const,
};

const alertText = {
  fontSize: "16px",
  fontWeight: "bold",
  margin: "0",
};

const content = {
  padding: "40px",
};

const h1 = {
  color: "#1f2937",
  fontSize: "28px",
  fontWeight: "bold",
  margin: "0 0 20px",
};

const h2 = {
  color: "#374151",
  fontSize: "20px",
  fontWeight: "600",
  margin: "0 0 20px",
};

const h3 = {
  color: "#374151",
  fontSize: "18px",
  fontWeight: "600",
  margin: "0 0 15px",
};

const text = {
  color: "#374151",
  fontSize: "16px",
  lineHeight: "1.6",
  margin: "0 0 20px",
};

const prioritySection = {
  textAlign: "center" as const,
  margin: "20px 0",
};

const priorityBadge = {
  color: "#ffffff",
  fontSize: "14px",
  fontWeight: "bold",
  padding: "8px 16px",
  borderRadius: "20px",
  display: "inline-block",
  margin: "0",
};

const detailsBox = {
  backgroundColor: "#f8fafc",
  border: "1px solid #e2e8f0",
  borderRadius: "8px",
  padding: "24px",
  margin: "24px 0",
};

const nextStepsBox = {
  backgroundColor: "#f0f9ff",
  border: "1px solid #bae6fd",
  borderRadius: "8px",
  padding: "24px",
  margin: "24px 0",
};

const actionSection = {
  textAlign: "center" as const,
  margin: "32px 0",
};

const primaryButton = {
  backgroundColor: "#1e40af",
  color: "#ffffff",
  padding: "12px 24px",
  borderRadius: "6px",
  textDecoration: "none",
  fontWeight: "600",
  display: "inline-block",
  margin: "0 8px 12px",
};

const secondaryButton = {
  backgroundColor: "#6b7280",
  color: "#ffffff",
  padding: "12px 24px",
  borderRadius: "6px",
  textDecoration: "none",
  fontWeight: "600",
  display: "inline-block",
  margin: "0 8px 12px",
};

const detailRow = {
  marginBottom: "12px",
};

const labelColumn = {
  width: "30%",
  verticalAlign: "top" as const,
};

const valueColumn = {
  width: "70%",
  verticalAlign: "top" as const,
};

const label = {
  color: "#6b7280",
  fontSize: "14px",
  fontWeight: "600",
  margin: "0",
};

const value = {
  color: "#1f2937",
  fontSize: "14px",
  margin: "0",
};

const emailLink = {
  color: "#1e40af",
  fontSize: "14px",
  textDecoration: "none",
  fontWeight: "500",
};

const descriptionText = {
  color: "#1f2937",
  fontSize: "14px",
  lineHeight: "1.5",
  margin: "8px 0 0",
  padding: "16px",
  backgroundColor: "#ffffff",
  border: "1px solid #d1d5db",
  borderRadius: "6px",
};

const stepText = {
  color: "#374151",
  fontSize: "14px",
  lineHeight: "1.6",
  margin: "0 0 8px",
};

const footer = {
  padding: "20px 40px",
  backgroundColor: "#f9fafb",
  borderTop: "1px solid #e5e7eb",
  borderRadius: "0 0 8px 8px",
};

const footerText = {
  color: "#6b7280",
  fontSize: "12px",
  textAlign: "center" as const,
  margin: "0 0 8px",
};