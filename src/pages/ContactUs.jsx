import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setSubmitted(true);
  };

  return (
    <>
      <style>{`
        /* Responsive styles */
        @media (max-width: 768px) {
          .container {
            padding: 1rem !important;
          }
          .flex-container {
            flex-direction: column !important;
          }
          .left, .right {
            min-width: 100% !important;
            flex: unset !important;
          }
          h1 {
            font-size: 2rem !important;
          }
          h2 {
            font-size: 1.5rem !important;
          }
          p, label {
            font-size: 1rem !important;
          }
          input, textarea, button {
            font-size: 1rem !important;
            padding: 0.75rem !important;
          }
          button {
            width: 100% !important;
          }
        }
      `}</style>

      <div
        className="container"
        style={{
          fontFamily: "Arial, sans-serif",
          lineHeight: 1.5,
          color: "#333",
          padding: "2rem",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        {/* Hero Section */}
        <div
          style={{
            backgroundColor: "#f5f5f5",
            padding: "2rem 1rem",
            color: "#fd390e",
            textAlign: "center",
            borderRadius: "8px",
            marginBottom: "2rem",
          }}
        >
          <h1 style={{ margin: 0, fontWeight: "bold", fontSize: "2.5rem" }}>
            Contact Us
          </h1>
          <p
            style={{
              marginTop: "0.5rem",
              fontSize: "1.1rem",
              color: "#555",
              maxWidth: "600px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            We’d love to hear from you! Reach out with any questions or
            inquiries.
          </p>
        </div>

        {/* Two column layout */}
        <div
          className="flex-container"
          style={{
            display: "flex",
            gap: "3rem",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {/* Left Text Section */}
          <div
            className="left"
            style={{
              flex: "1 1 300px",
              color: "#555",
              minWidth: "280px",
            }}
          >
            <h2 style={{ color: "#fd390e", fontSize: "1.7rem" }}>Our Office</h2>
            <p style={{ fontSize: "1.05rem" }}>
              123 Dream Street, Innovation City, Country
            </p>

            <h2
              style={{
                color: "#fd390e",
                marginTop: "2rem",
                fontSize: "1.7rem",
              }}
            >
              Business Hours
            </h2>
            <p style={{ fontSize: "1.05rem" }}>
              Monday – Friday: 9:00 AM – 6:00 PM
            </p>
            <p style={{ fontSize: "1.05rem" }}>Saturday – Sunday: Closed</p>

            <h2
              style={{
                color: "#fd390e",
                marginTop: "2rem",
                fontSize: "1.7rem",
              }}
            >
              Need Help?
            </h2>
            <p style={{ fontSize: "1.05rem" }}>
              Email us at <strong>support@example.com</strong> or call{" "}
              <strong>+123 456 7890</strong>
            </p>
          </div>

          {/* Right Contact Form */}
          <div
            className="right"
            style={{
              flex: "1 1 300px",
              minWidth: "280px",
            }}
          >
            {!submitted ? (
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: "1.5rem", textAlign: "left" }}>
                  <label
                    htmlFor="name"
                    style={{
                      display: "block",
                      marginBottom: "0.5rem",
                      fontWeight: "600",
                      fontSize: "1.1rem",
                    }}
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    style={{
                      width: "100%",
                      padding: "0.65rem",
                      borderRadius: "6px",
                      border: "1.5px solid #ccc",
                      boxShadow: "inset 0 1px 3px rgba(0,0,0,0.1)",
                      fontSize: "1rem",
                      transition: "border-color 0.3s",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#fd390e")}
                    onBlur={(e) => (e.target.style.borderColor = "#ccc")}
                  />
                </div>
                <div style={{ marginBottom: "1.5rem", textAlign: "left" }}>
                  <label
                    htmlFor="email"
                    style={{
                      display: "block",
                      marginBottom: "0.5rem",
                      fontWeight: "600",
                      fontSize: "1.1rem",
                    }}
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    style={{
                      width: "100%",
                      padding: "0.65rem",
                      borderRadius: "6px",
                      border: "1.5px solid #ccc",
                      boxShadow: "inset 0 1px 3px rgba(0,0,0,0.1)",
                      fontSize: "1rem",
                      transition: "border-color 0.3s",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#fd390e")}
                    onBlur={(e) => (e.target.style.borderColor = "#ccc")}
                  />
                </div>
                <div style={{ marginBottom: "1.5rem", textAlign: "left" }}>
                  <label
                    htmlFor="message"
                    style={{
                      display: "block",
                      marginBottom: "0.5rem",
                      fontWeight: "600",
                      fontSize: "1.1rem",
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Write your message here..."
                    style={{
                      width: "100%",
                      padding: "0.65rem",
                      borderRadius: "6px",
                      border: "1.5px solid #ccc",
                      boxShadow: "inset 0 1px 3px rgba(0,0,0,0.1)",
                      fontSize: "1rem",
                      resize: "vertical",
                      transition: "border-color 0.3s",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#fd390e")}
                    onBlur={(e) => (e.target.style.borderColor = "#ccc")}
                  />
                </div>
                <button
                  type="submit"
                  style={{
                    backgroundColor: "#fd390e",
                    color: "#fff",
                    padding: "0.65rem 1.5rem",
                    border: "none",
                    borderRadius: "6px",
                    cursor: "pointer",
                    fontWeight: "600",
                    fontSize: "1.1rem",
                    transition: "background-color 0.3s",
                    width: "auto",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = "#e6360c")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = "#fd390e")
                  }
                >
                  Submit
                </button>
              </form>
            ) : (
              <div
                style={{
                  padding: "2rem",
                  backgroundColor: "#dff0d8",
                  color: "#3c763d",
                  borderRadius: "8px",
                  fontSize: "1.2rem",
                }}
              >
                <h2>Thank you!</h2>
                <p>
                  Your message has been successfully sent. We will get back to
                  you shortly.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Additional Sections */}
        <div
          style={{
            marginTop: "3rem",
            color: "#555",
            lineHeight: 1.5,
          }}
        >
          <h2
            style={{
              color: "#fd390e",
              fontSize: "1.7rem",
              marginBottom: "1rem",
            }}
          >
            Frequently Asked Questions
          </h2>
          <p style={{ fontSize: "1.05rem", marginBottom: "1rem" }}>
            <strong>Q:</strong> How soon will I get a reply?
          </p>
          <p style={{ fontSize: "1rem", marginBottom: "1.5rem" }}>
            A: We aim to respond within 24-48 hours during business days.
          </p>
          <p style={{ fontSize: "1.05rem", marginBottom: "1rem" }}>
            <strong>Q:</strong> Can I request a demo?
          </p>
          <p style={{ fontSize: "1rem", marginBottom: "1.5rem" }}>
            A: Absolutely! Please fill out the form and mention your request.
          </p>
          <p style={{ fontSize: "1.05rem", marginBottom: "1rem" }}>
            <strong>Q:</strong> Where can I find your privacy policy?
          </p>
          <p style={{ fontSize: "1rem" }}>
            A: You can find it at the bottom of our homepage under "Privacy
            Policy."
          </p>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
