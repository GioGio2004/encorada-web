import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Text,
  Section,
  Row,
  Column,
} from "@react-email/components";
import * as React from "react";

interface WelcomeEmailProps {
  name: string;
  projectType: string;
  description: string;
  urgency: string;
}

const WelcomeEmail = ({ 
  name = "", 
  projectType = "", 
  description = "", 
  urgency = "standard" 
}: WelcomeEmailProps) => {
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

  const getUrgencyLabel = (urgency: string) => {
    switch (urgency.toLowerCase()) {
      case "urgent":
        return "🚨 Urgent";
      case "high":
        return "⚡ High Priority";
      case "medium":
        return "📋 Medium Priority";
      case "standard":
      default:
        return "✅ Standard";
    }
  };

  return (
    <Html>
      <Head />
      <Preview>Order Confirmation - Your project request has been received</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Text style={headerText}>ideisgarshemo.space</Text>
          </Section>

          {/* Main Content */}
          <Section style={content}>
            <Heading style={h1}>Order Confirmation</Heading>
            
            <Text style={text}>
              Hi {name || "there"},
            </Text>
            
            <Text style={text}>
              Thank you for reaching out! We've successfully received your project request 
              and will get back to you shortly.
            </Text>

            {/* Order Details Box */}
            <Section style={orderBox}>
              <Heading style={h2}>Project Details</Heading>
              
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
                  <Text style={label}>Project Type:</Text>
                </Column>
                <Column style={valueColumn}>
                  <Text style={value}>{projectType || "Not specified"}</Text>
                </Column>
              </Row>

              <Row style={detailRow}>
                <Column style={labelColumn}>
                  <Text style={label}>Priority:</Text>
                </Column>
                <Column style={valueColumn}>
                  <Text style={{
                    ...value,
                    color: getUrgencyColor(urgency),
                    fontWeight: "600"
                  }}>
                    {getUrgencyLabel(urgency)}
                  </Text>
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

            {/* Next Steps */}
            <Section style={nextStepsBox}>
              <Heading style={h3}>What happens next?</Heading>
              <Text style={text}>
                • We'll review your project requirements within 24 hours
              </Text>
              <Text style={text}>
                • Our team will prepare a detailed proposal and timeline
              </Text>
              <Text style={text}>
                • You'll receive a follow-up email with project details and pricing
              </Text>
            </Section>

            <Text style={text}>
              If you have any urgent questions, feel free to reply to this email 
              or contact us directly.
            </Text>

            <Text style={signature}>
              Best regards,<br />
              The ideisgarshemo.space Team
            </Text>
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              This is an automated confirmation email. Please do not reply directly to this message.
            </Text>
            <Text style={footerText}>
              © 2024 ideisgarshemo.space. All rights reserved.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default WelcomeEmail;

// Styles
const main = {
  backgroundColor: "#f6f9fc",
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
  maxWidth: "600px",
};

const header = {
  padding: "20px 40px",
  backgroundColor: "#1f2937",
  borderRadius: "8px 8px 0 0",
};

const headerText = {
  color: "#ffffff",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "0",
  textAlign: "center" as const,
};

const content = {
  padding: "40px",
};

const h1 = {
  color: "#1f2937",
  fontSize: "28px",
  fontWeight: "bold",
  margin: "0 0 30px",
  textAlign: "center" as const,
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
  margin: "0 0 16px",
};

const orderBox = {
  backgroundColor: "#f9fafb",
  border: "1px solid #e5e7eb",
  borderRadius: "8px",
  padding: "24px",
  margin: "24px 0",
};

const nextStepsBox = {
  backgroundColor: "#eff6ff",
  border: "1px solid #bfdbfe",
  borderRadius: "8px",
  padding: "24px",
  margin: "24px 0",
};

const detailRow = {
  marginBottom: "12px",
};

const labelColumn = {
  width: "40%",
  verticalAlign: "top" as const,
};

const valueColumn = {
  width: "60%",
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

const descriptionText = {
  color: "#1f2937",
  fontSize: "14px",
  lineHeight: "1.5",
  margin: "8px 0 0",
  padding: "12px",
  backgroundColor: "#ffffff",
  border: "1px solid #d1d5db",
  borderRadius: "4px",
};

const signature = {
  color: "#374151",
  fontSize: "16px",
  lineHeight: "1.6",
  margin: "32px 0 0",
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