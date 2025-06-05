import { Html, Head, Body, Container, Section, Row, Column, Img, Text, Hr, Button, Link } from "@react-email/components";
import * as React from "react";

interface EmailTemplateProps {
  name: string;
  username?: string;
  membershipLevel?: string;
  joinDate?: string;
}

export default function ProfessionalWelcomeEmail({ 
  name = "New Member",
  username = "member2025",
  membershipLevel = "Standard",
  joinDate = "April 12, 2025"
}: EmailTemplateProps) {
  return (
    <Html>
      <Head>
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
            
            @keyframes gradientBG {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
            
            @keyframes fadeIn {
              from { opacity: 0; transform: translateY(12px); }
              to { opacity: 1; transform: translateY(0); }
            }
            
            .animated-section {
              animation: fadeIn 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
            }
            
            .pulse {
              animation: pulse 2.5s infinite;
            }
            
            @keyframes pulse {
              0% { transform: scale(1); box-shadow: 0 4px 14px rgba(56, 189, 248, 0.4); }
              50% { transform: scale(1.03); box-shadow: 0 6px 20px rgba(56, 189, 248, 0.6); }
              100% { transform: scale(1); box-shadow: 0 4px 14px rgba(56, 189, 248, 0.4); }
            }
            
            .hover-lift:hover {
              transform: translateY(-3px);
              box-shadow: 0 7px 24px rgba(56, 189, 248, 0.5) !important;
              transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
            }
            
            /* Mobile Responsiveness */
            @media only screen and (max-width: 600px) {
              .container {
                width: 100% !important;
                padding: 12px !important;
              }
              
              .main-section {
                padding: 28px !important;
              }
              
              .header-text {
                font-size: 26px !important;
              }
              
              .subheader-text {
                font-size: 19px !important;
              }
              
              .logo-image {
                width: 100% !important;
                max-width: 320px !important;
                height: auto !important;
              }
              
              .content-text {
                font-size: 15px !important;
                line-height: 26px !important;
              }
              
              .details-section {
                padding: 16px !important;
              }
              
              .step-text {
                font-size: 17px !important;
              }
              
              .step-desc {
                font-size: 14px !important;
              }
              
              .cta-button {
                padding: 14px 22px !important;
                font-size: 16px !important;
              }
              
              .footer-text {
                font-size: 12px !important;
              }
            }
          `}
        </style>
      </Head>
      <Body style={{ 
        margin: "0", 
        padding: "0", 
        backgroundColor: "#0f172a", // slate-900
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
        backgroundImage: "radial-gradient(circle at 15% 25%, #1e293b 0%, #0f172a 75%)",
        backgroundSize: "200% 200%",
        animation: "gradientBG 18s ease infinite",
        color: "#f8fafc", // slate-50
        WebkitTextSizeAdjust: "100%",
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
      }}>
        <Container className="container" style={{ 
          maxWidth: "650px", 
          margin: "0 auto", 
          padding: "24px", 
          width: "100%",
          boxSizing: "border-box"
        }}>
          <Section className="main-section" style={{ 
            backgroundColor: "#1e293b", // slate-800
            padding: "48px", 
            borderRadius: "16px", 
            boxShadow: "0 8px 30px rgba(0,0,0,0.25), 0 0 1px rgba(255,255,255,0.08)",
            border: "1px solid rgba(71, 85, 105, 0.3)", // semi-transparent slate-600
            boxSizing: "border-box",
            width: "100%",
            position: "relative",
            overflow: "hidden"
          }}>
            {/* Background Accent Element */}
            <div style={{
              position: "absolute",
              top: "0",
              right: "0",
              width: "180px",
              height: "180px",
              background: "linear-gradient(135deg, rgba(56, 189, 248, 0.12) 0%, rgba(56, 189, 248, 0) 70%)",
              borderRadius: "0 0 0 100%",
              zIndex: "1"
            }}></div>
            
            {/* Logo Section */}
            <Section style={{ textAlign: "center", marginBottom: "38px", position: "relative", zIndex: "2" }} className="animated-section">
              <Img
                src="https://images.unsplash.com/vector-1744358676648-eb8a3bd02d4f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D"
                alt="IDESIGarshemo Welcome"
                width="440"
                height="180"
                className="logo-image"
                style={{ 
                  margin: "0 auto", 
                  borderRadius: "14px",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.25)",
                  maxWidth: "100%",
                  height: "auto"
                }}
              />
            </Section>

            <Hr style={{ 
              border: "none",
              borderTop: "1px solid rgba(71, 85, 105, 0.4)", // semi-transparent slate-500 
              margin: "30px 0", 
              width: "100%"
            }} />

            {/* Header Section */}
            <Section className="animated-section" style={{ animationDelay: "0.2s", position: "relative", zIndex: "2" }}>
              <Text className="header-text" style={{ 
                fontSize: "32px", 
                fontWeight: "700", 
                color: "#f1f5f9", // slate-100
                margin: "0", 
                lineHeight: "1.2",
                letterSpacing: "-0.02em"
              }}>
                Welcome to IDESIGarshemo!
              </Text>
              <Text className="subheader-text" style={{ 
                fontSize: "21px", 
                color: "#cbd5e1", // slate-300
                marginTop: "14px",
                fontWeight: "500",
                letterSpacing: "-0.01em"
              }}>
                We're excited to have you with us, {name}!
              </Text>
            </Section>

            {/* Main Content */}
            <Section style={{ marginTop: "32px", position: "relative", zIndex: "2" }} className="animated-section">
              <Text className="content-text" style={{ 
                color: "#cbd5e1", // slate-300
                fontSize: "17px", 
                lineHeight: "1.7",
                fontWeight: "400" 
              }}>
                Thank you for joining the IDESIGarshemo community. We're thrilled to welcome you to our platform where creativity meets innovation. Your membership has been successfully activated, and you now have access to all our {membershipLevel} features.
              </Text>
              
              <Section className="details-section" style={{ 
                backgroundColor: "rgba(15, 23, 42, 0.6)", // semi-transparent slate-900
                padding: "26px", 
                borderRadius: "12px", 
                marginTop: "32px",
                border: "1px solid rgba(51, 65, 85, 0.6)", // semi-transparent slate-700
                boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
                width: "100%",
                boxSizing: "border-box",
                backdropFilter: "blur(10px)"
              }}>
                <Text style={{ 
                  color: "#94a3b8", // slate-400
                  fontWeight: "600", 
                  margin: "0",
                  fontSize: "19px",
                  letterSpacing: "-0.01em"
                }}>
                  Your Membership Details:
                </Text>
                <Row style={{ marginTop: "18px" }}>
                  <Column style={{ paddingRight: "10px", width: "33%" }}>
                    <Text style={{ 
                      color: "#94a3b8", // slate-400
                      margin: "0 0 4px 0",
                      fontSize: "14px",
                      fontWeight: "500",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em"
                    }}>
                      Username
                    </Text>
                    <Text style={{
                      color: "#f1f5f9", // slate-100
                      margin: "0",
                      fontSize: "16px",
                      fontWeight: "600"
                    }}>
                      {username}
                    </Text>
                  </Column>
                  <Column style={{ paddingRight: "10px", width: "33%" }}>
                    <Text style={{ 
                      color: "#94a3b8", // slate-400
                      margin: "0 0 4px 0",
                      fontSize: "14px",
                      fontWeight: "500",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em"
                    }}>
                      Join Date
                    </Text>
                    <Text style={{
                      color: "#f1f5f9", // slate-100
                      margin: "0",
                      fontSize: "16px",
                      fontWeight: "600"
                    }}>
                      {joinDate}
                    </Text>
                  </Column>
                  <Column style={{ width: "33%" }}>
                    <Text style={{ 
                      color: "#94a3b8", // slate-400
                      margin: "0 0 4px 0",
                      fontSize: "14px",
                      fontWeight: "500",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em"
                    }}>
                      Membership
                    </Text>
                    <Text style={{
                      color: "#38bdf8", // sky-400
                      margin: "0",
                      fontSize: "16px",
                      fontWeight: "700"
                    }}>
                      {membershipLevel}
                    </Text>
                  </Column>
                </Row>
              </Section>
            </Section>

            <Section style={{ marginTop: "40px", textAlign: "center", position: "relative", zIndex: "2" }} className="animated-section">
              <Button
                href="https://www.ideisgarshemo.space/dashboard"
                className="cta-button pulse hover-lift"
                style={{
                  backgroundColor: "#38bdf8", // sky-400
                  color: "#0f172a", // slate-900
                  padding: "16px 32px",
                  borderRadius: "10px",
                  fontWeight: "700",
                  textDecoration: "none",
                  textAlign: "center",
                  display: "inline-block",
                  boxShadow: "0 4px 14px rgba(56, 189, 248, 0.4)",
                  fontSize: "17px",
                  transition: "all 0.3s ease",
                  border: "none",
                  letterSpacing: "0.01em",
                  width: "auto"
                }}
              >
                Access Your Dashboard
              </Button>
            </Section>

            <Hr style={{ 
              border: "none",
              borderTop: "1px solid rgba(71, 85, 105, 0.4)", // semi-transparent slate-500
              margin: "42px 0",
              width: "100%" 
            }} />

            {/* Getting Started Section */}
            <Section className="animated-section" style={{ animationDelay: "0.6s", position: "relative", zIndex: "2" }}>
              <Text style={{
                fontSize: "24px",
                fontWeight: "700",
                color: "#f1f5f9", // slate-100
                margin: "0",
                lineHeight: "1.2",
                letterSpacing: "-0.01em"
              }}>
                Getting Started
              </Text>
              
              {/* Steps - Improved visual design */}
              <Section style={{ marginTop: "24px" }}>
                <Row style={{ marginBottom: "22px" }}>
                  <Column style={{ width: "50px", verticalAlign: "top", paddingTop: "4px" }}>
                    <div style={{
                      backgroundColor: "rgba(56, 189, 248, 0.15)", // semi-transparent sky-400
                      color: "#38bdf8", // sky-400
                      width: "40px",
                      height: "40px",
                      borderRadius: "12px",
                      textAlign: "center",
                      lineHeight: "40px",
                      fontWeight: "700",
                      fontSize: "18px",
                      boxShadow: "0 2px 8px rgba(56, 189, 248, 0.25)",
                      border: "1px solid rgba(56, 189, 248, 0.3)"
                    }}>1</div>
                  </Column>
                  <Column style={{ paddingLeft: "6px" }}>
                    <Text className="step-text" style={{
                      color: "#f1f5f9", // slate-100
                      fontWeight: "600",
                      margin: "0",
                      fontSize: "18px",
                      letterSpacing: "-0.01em"
                    }}>Complete Your Profile</Text>
                    <Text className="step-desc" style={{
                      color: "#94a3b8", // slate-400
                      fontSize: "16px",
                      margin: "8px 0 0 0",
                      lineHeight: "1.6"
                    }}>Add your photo, bio, and showcase your portfolio to get noticed by our community members.</Text>
                  </Column>
                </Row>
                
                <Row style={{ marginBottom: "22px" }}>
                  <Column style={{ width: "50px", verticalAlign: "top", paddingTop: "4px" }}>
                    <div style={{
                      backgroundColor: "rgba(56, 189, 248, 0.15)", // semi-transparent sky-400
                      color: "#38bdf8", // sky-400
                      width: "40px",
                      height: "40px",
                      borderRadius: "12px",
                      textAlign: "center",
                      lineHeight: "40px",
                      fontWeight: "700",
                      fontSize: "18px",
                      boxShadow: "0 2px 8px rgba(56, 189, 248, 0.25)",
                      border: "1px solid rgba(56, 189, 248, 0.3)"
                    }}>2</div>
                  </Column>
                  <Column style={{ paddingLeft: "6px" }}>
                    <Text className="step-text" style={{
                      color: "#f1f5f9", // slate-100
                      fontWeight: "600",
                      margin: "0",
                      fontSize: "18px",
                      letterSpacing: "-0.01em"
                    }}>Explore Resources</Text>
                    <Text className="step-desc" style={{
                      color: "#94a3b8", // slate-400
                      fontSize: "16px",
                      margin: "8px 0 0 0",
                      lineHeight: "1.6"
                    }}>Browse our extensive library of design tutorials, premium templates, and trending community projects.</Text>
                  </Column>
                </Row>
                
                <Row>
                  <Column style={{ width: "50px", verticalAlign: "top", paddingTop: "4px" }}>
                    <div style={{
                      backgroundColor: "rgba(56, 189, 248, 0.15)", // semi-transparent sky-400
                      color: "#38bdf8", // sky-400
                      width: "40px",
                      height: "40px",
                      borderRadius: "12px",
                      textAlign: "center",
                      lineHeight: "40px",
                      fontWeight: "700",
                      fontSize: "18px",
                      boxShadow: "0 2px 8px rgba(56, 189, 248, 0.25)",
                      border: "1px solid rgba(56, 189, 248, 0.3)"
                    }}>3</div>
                  </Column>
                  <Column style={{ paddingLeft: "6px" }}>
                    <Text className="step-text" style={{
                      color: "#f1f5f9", // slate-100
                      fontWeight: "600",
                      margin: "0",
                      fontSize: "18px",
                      letterSpacing: "-0.01em"
                    }}>Connect With Others</Text>
                    <Text className="step-desc" style={{
                      color: "#94a3b8", // slate-400
                      fontSize: "16px",
                      margin: "8px 0 0 0",
                      lineHeight: "1.6"
                    }}>Join our thriving forums, engage in creative discussions, and network with industry professionals.</Text>
                  </Column>
                </Row>
              </Section>
            </Section>

            <Hr style={{ 
              border: "none",
              borderTop: "1px solid rgba(71, 85, 105, 0.4)", // semi-transparent slate-500
              margin: "42px 0",
              width: "100%" 
            }} />

            {/* Member Benefits */}
            <Section className="animated-section" style={{ animationDelay: "0.8s", position: "relative", zIndex: "2" }}>
              <Text style={{
                fontSize: "24px",
                fontWeight: "700",
                color: "#f1f5f9", // slate-100
                margin: "0",
                lineHeight: "1.2",
                letterSpacing: "-0.01em"
              }}>
                Your Membership Benefits
              </Text>
              
              <Section style={{ 
                marginTop: "24px",
                backgroundColor: "rgba(30, 41, 59, 0.5)", // semi-transparent slate-800
                borderRadius: "14px",
                padding: "26px",
                border: "1px solid rgba(51, 65, 85, 0.5)" // semi-transparent slate-700
              }} className="details-section">
                <Row style={{ marginBottom: "18px" }}>
                  <Column style={{ width: "24px", verticalAlign: "top", paddingTop: "4px" }}>
                    <Text style={{
                      color: "#38bdf8", // sky-400
                      margin: "0",
                      fontSize: "16px",
                      fontWeight: "bold"
                    }}>✓</Text>
                  </Column>
                  <Column style={{ paddingLeft: "8px" }}>
                    <Text style={{
                      color: "#f1f5f9", // slate-100
                      margin: "0",
                      fontSize: "16px",
                      fontWeight: "600",
                      lineHeight: "1.5"
                    }}>
                      <strong>Exclusive Content</strong>
                    </Text>
                    <Text style={{
                      color: "#94a3b8", // slate-400
                      margin: "4px 0 0 0",
                      fontSize: "15px",
                      lineHeight: "1.6"
                    }}>
                      Access premium design resources, templates, and mockups
                    </Text>
                  </Column>
                </Row>
                
                <Row style={{ marginBottom: "18px" }}>
                  <Column style={{ width: "24px", verticalAlign: "top", paddingTop: "4px" }}>
                    <Text style={{
                      color: "#38bdf8", // sky-400
                      margin: "0",
                      fontSize: "16px",
                      fontWeight: "bold"
                    }}>✓</Text>
                  </Column>
                  <Column style={{ paddingLeft: "8px" }}>
                    <Text style={{
                      color: "#f1f5f9", // slate-100
                      margin: "0",
                      fontSize: "16px",
                      fontWeight: "600",
                      lineHeight: "1.5"
                    }}>
                      <strong>Community Support</strong>
                    </Text>
                    <Text style={{
                      color: "#94a3b8", // slate-400
                      margin: "4px 0 0 0",
                      fontSize: "15px",
                      lineHeight: "1.6"
                    }}>
                      Connect with experienced designers and receive mentorship
                    </Text>
                  </Column>
                </Row>
                
                <Row style={{ marginBottom: "18px" }}>
                  <Column style={{ width: "24px", verticalAlign: "top", paddingTop: "4px" }}>
                    <Text style={{
                      color: "#38bdf8", // sky-400
                      margin: "0",
                      fontSize: "16px",
                      fontWeight: "bold"
                    }}>✓</Text>
                  </Column>
                  <Column style={{ paddingLeft: "8px" }}>
                    <Text style={{
                      color: "#f1f5f9", // slate-100
                      margin: "0",
                      fontSize: "16px",
                      fontWeight: "600",
                      lineHeight: "1.5"
                    }}>
                      <strong>Monthly Webinars</strong>
                    </Text>
                    <Text style={{
                      color: "#94a3b8", // slate-400
                      margin: "4px 0 0 0",
                      fontSize: "15px",
                      lineHeight: "1.6"
                    }}>
                      Learn directly from industry experts and thought leaders
                    </Text>
                  </Column>
                </Row>
                
                <Row>
                  <Column style={{ width: "24px", verticalAlign: "top", paddingTop: "4px" }}>
                    <Text style={{
                      color: "#38bdf8", // sky-400
                      margin: "0",
                      fontSize: "16px",
                      fontWeight: "bold"
                    }}>✓</Text>
                  </Column>
                  <Column style={{ paddingLeft: "8px" }}>
                    <Text style={{
                      color: "#f1f5f9", // slate-100
                      margin: "0",
                      fontSize: "16px",
                      fontWeight: "600",
                      lineHeight: "1.5"
                    }}>
                      <strong>Project Feedback</strong>
                    </Text>
                    <Text style={{
                      color: "#94a3b8", // slate-400
                      margin: "4px 0 0 0",
                      fontSize: "15px",
                      lineHeight: "1.6"
                    }}>
                      Receive constructive critique and insights on your work
                    </Text>
                  </Column>
                </Row>
              </Section>
            </Section>

            <Hr style={{ 
              border: "none",
              borderTop: "1px solid rgba(71, 85, 105, 0.4)", // semi-transparent slate-500
              margin: "42px 0",
              width: "100%" 
            }} />

            {/* Contact Section */}
            <Section className="details-section animated-section" style={{
              backgroundColor: "rgba(15, 23, 42, 0.6)", // semi-transparent slate-900
              padding: "28px",
              borderRadius: "14px",
              border: "1px solid rgba(51, 65, 85, 0.6)", // semi-transparent slate-700
              boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
              width: "100%",
              boxSizing: "border-box",
              animationDelay: "1s",
              position: "relative",
              zIndex: "2",
              backdropFilter: "blur(10px)"
            }}>
              <Text style={{
                color: "#f1f5f9", // slate-100
                fontWeight: "600",
                margin: "0",
                fontSize: "19px"
              }}>
                Need help getting started?
              </Text>
              <Text className="content-text" style={{
                color: "#94a3b8", // slate-400
                margin: "12px 0 0 0",
                lineHeight: "1.7",
                fontSize: "16px"
              }}>
                Our support team is ready to assist you at <Link 
                  href="mailto:support@idesigarshemo.com"
                  style={{ color: "#38bdf8", fontWeight: "600", textDecoration: "none" }}
                >support@idesigarshemo.com</Link> or send an <Link href="https://www.ideisgarshemo.space/contact-us">Email</Link>  <span style={{ color: "#e2e8f0", fontWeight: "500" }}>(555) 123-4567</span>.
              </Text>
            </Section>

            {/* Footer */}
            <Section style={{ marginTop: "42px", textAlign: "center", position: "relative", zIndex: "2" }} className="animated-section">
              <Img
                src="https://images.unsplash.com/vector-1744358676648-eb8a3bd02d4f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D"
                alt="IDESIGarshemo Icon"
                width="48"
                height="48"
                style={{ 
                  margin: "0 auto", 
                  borderRadius: "8px",
                  marginBottom: "16px",
                  opacity: "0.9"
                }}
              />
              <Text className="footer-text" style={{
                fontSize: "14px",
                color: "#94a3b8", // slate-400
                margin: "0",
                fontWeight: "500"
              }}>
                © 2025 IDESIGarshemo. 
              </Text>
              <Text className="footer-text" style={{
                fontSize: "14px",
                color: "#64748b", // slate-500
                margin: "8px 0 0 0"
              }}>
                Tbilis Georgia
              </Text>
              <Text className="footer-text" style={{
                fontSize: "14px",
                color: "#64748b", // slate-500
                margin: "12px 0 0 0"
              }}>
                <Link 
                  href="https://www.ideisgarshemo.space/about" 
                  style={{ color: "#94a3b8", textDecoration: "none", borderBottom: "1px solid rgba(148, 163, 184, 0.3)", paddingBottom: "1px", marginRight: "12px" }}
                >About</Link>
                <Link 
                  href="https://www.ideisgarshemo.space/privacy" 
                  style={{ color: "#94a3b8", textDecoration: "none", borderBottom: "1px solid rgba(148, 163, 184, 0.3)", paddingBottom: "1px", marginRight: "12px" }}
                >Privacy Policy</Link>
                <Link 
                  href="https://www.ideisgarshemo.space/terms" 
                  style={{ color: "#94a3b8", textDecoration: "none", borderBottom: "1px solid rgba(148, 163, 184, 0.3)", paddingBottom: "1px" }}
                >Terms of Service</Link>
              </Text>
            </Section>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}