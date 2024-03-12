import React from 'react';
import { Typography, Button, List, ListItem, ListItemText } from '@mui/material';
import './App.css';

function Section508Pro() {
  return (
    <section className="Section">
      <Typography variant="h4">Section 508 Pro</Typography>
      <Typography variant="body1">Digital Documentation Accessibility Remediation</Typography>
      <Typography variant="body1">Make your Documents Section 508 Compliant with the pros today!</Typography>
      <Button variant="contained" color="primary">Get a Quote!</Button>
    </section>
  );
}

function FAQs() {
  return (
    <section className="Section">
      <Typography variant="h4">FAQs</Typography>
      <List>
        <ListItem>
          <ListItemText
            primary="What is Section 508 and who does it apply to?"
            secondary="Section 508 refers to a US federal law that mandates federal agencies to make their electronic and information technology accessible to people with disabilities. It sets standards for accessibility, aiming to eliminate barriers in digital communication and ensure equal access for individuals with disabilities in the federal sector."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="What happens if my documents are not Section 508 Compliant?"
            secondary={
              <div>
                <Typography variant="body2">
                  Failure to make your documents Section 508 compliant may result in legal consequences, especially if you are a federal agency or working with federal contracts. Consequences may include:
                </Typography>
                <List>
                  <ListItem>Legal Action: Non-compliance can lead to lawsuits or legal actions, as Section 508 is a federal law.</ListItem>
                  <ListItem>Financial Penalties: Fines and financial penalties may be imposed for violating accessibility standards.</ListItem>
                  <ListItem>Reputational Damage: Non-compliance can harm your organization's reputation, impacting trust and relationships.</ListItem>
                  <ListItem>Exclusion: Inaccessibility may exclude individuals with disabilities from accessing important information, limiting your audience.</ListItem>
                </List>
              </div>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="What type of documents need to be made Section 508 Compliant?"
            secondary={
              <div>
                <Typography variant="body2">Documents that need to be made Section 508 compliant typically include electronic and information technology produced or used by federal agencies. This encompasses a wide range of documents, such as:</Typography>
                <List>
                  <ListItem>Word Documents: Text documents, reports, and other written content.</ListItem>
                  <ListItem>PDFs: Portable Document Format files commonly used for manuals, forms, and publications.</ListItem>
                  <ListItem>Presentations: Slideshows and presentations created using software like PowerPoint.</ListItem>
                  <ListItem>Spreadsheets: Excel sheets and other data-driven documents.</ListItem>
                  <ListItem>Emails: Electronic communications and newsletters distributed by federal agencies.</ListItem>
                </List>
                <Typography variant="body2">Here at 508 Pro, we can remediate everything listed above - and more - Section 508 Compliant.</Typography>
              </div>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="What is Digital Accessibility?"
            secondary="Digital accessibility ensures that websites, apps, and online content are usable by everyone, including those with disabilities. It focuses on creating inclusive digital experiences, making information and functionality accessible to all users, regardless of their abilities."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="How do I make my documents Section 508 compliant?"
            secondary="Through 508 Pro you can remediate your documents to be compliant within a reasonable timeframe by submitting an interest form to get a quote today!"
          />
        </ListItem>
        {/* Add other FAQ items similarly */}
      </List>
      <Typography variant="body1">Here at 508 Pro we specialize in Section 508 Documentation Remediation to ensure inclusivity and adherence to legal requirements.</Typography>
      <Typography variant="body1">Need Section 508 support for a document? We got you covered, get a quote today!</Typography>
    </section>
  );
}

function AboutUs() {
  return (
    <section className="Section">
      <Typography variant="h4">About Us</Typography>
      <Typography variant="body1">Section 508 Pro was founded by a pair of friends who saw the need for digital inclusivity for those who were unable to experience digitized documentation the way most did. With the goal of making government documentation available and accessible to all, they set out to provide a service that would be worthy of any time and resources invested.</Typography>
      <Typography variant="body1">As a former Digital Accessibilities Intern at the University of Maryland, one of the founding members began in 2018 contracting out Section 508 Documentation Remediation services to the National Park Service (NPS) of the Department of the Interior (DOI). The relationship has continued to this day and with more resources, services have now been expanded to include all other government agencies</Typography>
      <Typography variant="body1">Interested in Section 508 Documentation Remediation services? Fill out the form <a href="#">here</a>!</Typography>
    </section>
  );
}

function ContactUs() {
  return (
    <section className="Contact-section">
      <Typography variant="h4">Contact Us</Typography>
      <Typography variant="body1">Fill out the form or contact us via email or phone.</Typography>
      {/* Add contact information */}
    </section>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Your header content */}
        <Typography variant="h2">508 Pro</Typography>
      </header>

      {/* Main content */}
      <section className="Main-content">
        <Section508Pro />
        <FAQs />
        <AboutUs />
      </section>

      {/* Contact Us section */}
      <ContactUs />
    </div>
  );
}

export default App;
