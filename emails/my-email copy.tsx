import { Html, Head, Body, Container, Section, Row, Column, Img, Text, Hr, Button, Link } from "@react-email/components";
import * as React from "react";

interface EmailTemplateProps {
  name: string;
  applicationId?: string;
  submissionDate?: string;
  position?: string;
}

export default function SlateAnimatedEmail({ 
  name = "Applicant",
  applicationId = "APP-123456",
  submissionDate = "April 11, 2025",
  position = "IT Developer"
}: EmailTemplateProps) {
  return (
    <Html>
      <Head>
        <style>
          {`
            @keyframes gradientBG {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
            
            @keyframes fadeIn {
              from { opacity: 0; transform: translateY(10px); }
              to { opacity: 1; transform: translateY(0); }
            }
            
            .animated-section {
              animation: fadeIn 0.8s ease-out forwards;
            }
            
            .pulse {
              animation: pulse 2s infinite;
            }
            
            @keyframes pulse {
              0% { transform: scale(1); }
              50% { transform: scale(1.05); }
              100% { transform: scale(1); }
            }
            
            .hover-lift:hover {
              transform: translateY(-2px);
              transition: transform 0.3s ease;
            }
          `}
        </style>
      </Head>
      <Body style={{ 
        margin: "0", 
        padding: "0", 
        backgroundColor: "#0f172a", // slate-900
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
        backgroundImage: "radial-gradient(circle at 10% 20%, #1e293b 0%, #0f172a 80%)",
        backgroundSize: "200% 200%",
        animation: "gradientBG 15s ease infinite",
        color: "#f8fafc" // slate-50
      }}>
        <Container style={{ 
          maxWidth: "600px", 
          margin: "0 auto", 
          padding: "20px" 
        }}>
          <Section style={{ 
            backgroundColor: "#1e293b", // slate-800
            padding: "40px", 
            borderRadius: "12px", 
            boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
            border: "1px solid #334155" // slate-600
          }}>
            {/* Logo Section */}
            <Section style={{ textAlign: "center", marginBottom: "30px" }} className="animated-section">
              <Img
                src="https://images.unsplash.com/vector-1744358676648-eb8a3bd02d4f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D"
                alt="IDESIGarshemo Handshake"
                width="400"
                height="200"
                style={{ 
                  margin: "0 auto", 
                  borderRadius: "12px",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.2)"
                }}
              />
            </Section>

            <Hr style={{ 
              borderTop: "1px solid #475569", // slate-500
              margin: "25px 0" 
            }} />

            {/* Header Section */}
            <Section className="animated-section" style={{ animationDelay: "0.2s" }}>
              <Text style={{ 
                fontSize: "28px", 
                fontWeight: "bold", 
                color: "#e2e8f0", // slate-200
                margin: "0", 
                lineHeight: "1.25",
                textShadow: "0 1px 2px rgba(0,0,0,0.3)"
              }}>
                Application Received
              </Text>
              <Text style={{ 
                fontSize: "20px", 
                color: "#cbd5e1", // slate-300
                marginTop: "12px",
                fontWeight: "500"
              }}>
                Thank you for applying, {name}!
              </Text>
            </Section>

            {/* Main Content */}
            <Section style={{ marginTop: "28px", animationDelay: "0.4s" }} className="animated-section" >
              <Text style={{ 
                color: "#cbd5e1", // slate-300
                fontSize: "16px", 
                lineHeight: "28px" 
              }}>
                We're pleased to confirm that we've received your application for the {position} position at IDESIGarshemo. Our team is reviewing your qualifications and will be in touch soon regarding next steps.
              </Text>
              
              <Section style={{ 
                backgroundColor: "#0f172a", // slate-900
                padding: "20px", 
                borderRadius: "10px", 
                marginTop: "28px",
                border: "1px solid #334155", // slate-600
                boxShadow: "0 2px 10px rgba(0,0,0,0.2)"
              }}>
                <Text style={{ 
                  color: "#94a3b8", // slate-400
                  fontWeight: "600", 
                  margin: "0",
                  fontSize: "18px"
                }}>
                  Application Details:
                </Text>
                <Text style={{ 
                  color: "#cbd5e1", // slate-300
                  margin: "12px 0 0 0" 
                }}>
                  Application ID: <strong style={{ color: "#e2e8f0" }}>{applicationId}</strong>
                </Text>
                <Text style={{ 
                  color: "#cbd5e1", // slate-300
                  margin: "8px 0" 
                }}>
                  Submission Date: <strong style={{ color: "#e2e8f0" }}>{submissionDate}</strong>
                </Text>
                <Text style={{ 
                  color: "#cbd5e1", // slate-300
                  margin: "8px 0" 
                }}>
                  Position: <strong style={{ color: "#e2e8f0" }}>{position}</strong>
                </Text>
              </Section>
            </Section>

            <Section style={{ marginTop: "36px", textAlign: "center", animationDelay: "0.6s" }} className="animated-section" >
              <Button
                href="https://idesigarshemo.com/application-status"
                style={{
                  backgroundColor: "#38bdf8", // sky-400
                  color: "#0f172a", // slate-900
                  padding: "14px 28px",
                  borderRadius: "8px",
                  fontWeight: "600",
                  textDecoration: "none",
                  textAlign: "center",
                  display: "inline-block",
                  boxShadow: "0 4px 14px rgba(56, 189, 248, 0.4)",
                  fontSize: "16px",
                  transition: "all 0.3s ease",
                  border: "none"
                }}
                className="pulse hover-lift"
              >
                Track Your Application
              </Button>
            </Section>

            <Hr style={{ 
              borderTop: "1px solid #475569", // slate-500
              margin: "36px 0" 
            }} />

            {/* What to Expect Next */}
            <Section className="animated-section" style={{ animationDelay: "0.8s" }}>
              <Text style={{
                fontSize: "22px",
                fontWeight: "700",
                color: "#e2e8f0", // slate-200
                margin: "0",
                lineHeight: "1.25",
                textShadow: "0 1px 2px rgba(0,0,0,0.3)"
              }}>
                What Happens Next?
              </Text>
              
              <Row style={{ marginTop: "20px" }}>
                <Column style={{ width: "50px" }}>
                  <Text style={{
                    backgroundColor: "#38bdf8", // sky-400
                    color: "#0f172a", // slate-900
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    textAlign: "center",
                    lineHeight: "36px",
                    fontWeight: "bold",
                    margin: "0",
                    boxShadow: "0 2px 6px rgba(56, 189, 248, 0.4)"
                  }}>1</Text>
                </Column>
                <Column>
                  <Text style={{
                    color: "#e2e8f0", // slate-200
                    fontWeight: "600",
                    margin: "0",
                    fontSize: "18px"
                  }}>Application Review</Text>
                  <Text style={{
                    color: "#94a3b8", // slate-400
                    fontSize: "15px",
                    margin: "6px 0 0 0",
                    lineHeight: "24px"
                  }}>Our hiring team will carefully review your qualifications.</Text>
                </Column>
              </Row>
              
              <Row style={{ marginTop: "20px" }}>
                <Column style={{ width: "50px" }}>
                  <Text style={{
                    backgroundColor: "#38bdf8", // sky-400
                    color: "#0f172a", // slate-900
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    textAlign: "center",
                    lineHeight: "36px",
                    fontWeight: "bold",
                    margin: "0",
                    boxShadow: "0 2px 6px rgba(56, 189, 248, 0.4)"
                  }}>2</Text>
                </Column>
                <Column>
                  <Text style={{
                    color: "#e2e8f0", // slate-200
                    fontWeight: "600",
                    margin: "0",
                    fontSize: "18px"
                  }}>Initial Interview</Text>
                  <Text style={{
                    color: "#94a3b8", // slate-400
                    fontSize: "15px",
                    margin: "6px 0 0 0",
                    lineHeight: "24px"
                  }}>Qualified candidates will be contacted for an initial interview.</Text>
                </Column>
              </Row>
              
              <Row style={{ marginTop: "20px" }}>
                <Column style={{ width: "50px" }}>
                  <Text style={{
                    backgroundColor: "#38bdf8", // sky-400
                    color: "#0f172a", // slate-900
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    textAlign: "center",
                    lineHeight: "36px",
                    fontWeight: "bold",
                    margin: "0",
                    boxShadow: "0 2px 6px rgba(56, 189, 248, 0.4)"
                  }}>3</Text>
                </Column>
                <Column>
                  <Text style={{
                    color: "#e2e8f0", // slate-200
                    fontWeight: "600",
                    margin: "0",
                    fontSize: "18px"
                  }}>Design Assessment</Text>
                  <Text style={{
                    color: "#94a3b8", // slate-400
                    fontSize: "15px",
                    margin: "6px 0 0 0",
                    lineHeight: "24px"
                  }}>Selected candidates will complete a design assessment related to the position.</Text>
                </Column>
              </Row>
            </Section>

            <Hr style={{ 
              borderTop: "1px solid #475569", // slate-500
              margin: "36px 0" 
            }} />

            {/* Contact Section */}
            <Section style={{
              backgroundColor: "#0f172a", // slate-900
              padding: "22px",
              borderRadius: "10px",
              border: "1px solid #334155", // slate-600
              boxShadow: "0 2px 10px rgba(0,0,0,0.2)"
            }} className="animated-section" >
              <Text style={{
                color: "#e2e8f0", // slate-200
                fontWeight: "600",
                margin: "0",
                fontSize: "18px"
              }}>
                Questions about your application?
              </Text>
              <Text style={{
                color: "#94a3b8", // slate-400
                margin: "10px 0 0 0",
                lineHeight: "24px"
              }}>
                Contact our recruitment team at <Link 
                  href="mailto:careers@idesigarshemo.com"
                  style={{ color: "#38bdf8", fontWeight: "500" }}
                >careers@idesigarshemo.com</Link> or call us at (555) 123-4567.
              </Text>
            </Section>

            {/* Footer */}
            <Section style={{ marginTop: "36px", textAlign: "center" }} className="animated-section" >
              <Text style={{
                fontSize: "14px",
                color: "#64748b", // slate-500
                margin: "0"
              }}>
                © 2025 IDESIGarshemo. All rights reserved.
              </Text>
              <Text style={{
                fontSize: "14px",
                color: "#64748b", // slate-500
                margin: "6px 0 0 0"
              }}>
                123 Design Avenue, Creative District, CA 94103
              </Text>
            </Section>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}