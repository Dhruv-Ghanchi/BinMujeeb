import { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType } from "docx";
import * as fs from "fs";
import * as path from "path";

// Helper function to create paragraphs easily
function createParagraph(text: string, options?: {
  bold?: boolean;
  italic?: boolean;
  color?: string;
  size?: number;
  heading?: (typeof HeadingLevel)[keyof typeof HeadingLevel];
  alignment?: (typeof AlignmentType)[keyof typeof AlignmentType];
  spacing?: { before?: number; after?: number };
}) {
  return new Paragraph({
    children: [
      new TextRun({
        text,
        bold: options?.bold,
        italics: options?.italic,
        color: options?.color,
        size: options?.size,
      }),
    ],
    heading: options?.heading,
    alignment: options?.alignment,
    spacing: options?.spacing,
  });
}

async function generateContentDocx() {
  const doc = new Document({
    sections: [
      {
        properties: {},
        children: [
          // Title Page
          createParagraph("BIN MUJEEB LOGISTICS - WEBSITE CONTENT REVIEW", {
            bold: true,
            size: 32,
            heading: HeadingLevel.TITLE,
            alignment: AlignmentType.CENTER,
            spacing: { after: 400 },
          }),
          createParagraph("Please review each section below and provide your updated content in the answer fields.", {
            alignment: AlignmentType.CENTER,
            spacing: { after: 200 },
          }),
          createParagraph("IMPORTANT UPDATES MADE TO WEBSITE:", {
            bold: true,
            size: 20,
            alignment: AlignmentType.CENTER,
            spacing: { after: 100 },
          }),
          createParagraph("• Company founding year updated to 2000 (previously 1983)", {
            alignment: AlignmentType.CENTER,
            spacing: { after: 50 },
          }),
          createParagraph("• Years of experience updated to '20+ years' (previously '40+ years')", {
            alignment: AlignmentType.CENTER,
            spacing: { after: 50 },
          }),
          createParagraph("• Organization Chart removed from About page", {
            alignment: AlignmentType.CENTER,
            spacing: { after: 50 },
          }),
          createParagraph("• Contact page now shows only Muscat and Sohar locations", {
            alignment: AlignmentType.CENTER,
            spacing: { after: 50 },
          }),
          createParagraph("• WhatsApp button added (replaces dark mode toggle)", {
            alignment: AlignmentType.CENTER,
            spacing: { after: 50 },
          }),
          createParagraph("• OUR CLIENTS section added with sliding company logos on Projects page", {
            alignment: AlignmentType.CENTER,
            spacing: { after: 200 },
          }),

          // ========== HEADER/NAVBAR SECTION ==========
          createParagraph("SECTION 1: HEADER/NAVBAR", {
            bold: true,
            size: 28,
            heading: HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 200 },
          }),
          createParagraph("[IMAGE PLACEHOLDER: Screenshot of the header/navbar]", {
            italic: true,
            color: "808080",
            spacing: { after: 200 },
          }),
          createParagraph("Question 1.1: What should be the company logo text?", {
            bold: true,
            spacing: { before: 200, after: 100 },
          }),
          createParagraph("Current Answer: Bin Mujeeb", {
            spacing: { after: 200 },
          }),
          createParagraph("Your Updated Answer: _________________________________________________", {
            color: "0066CC",
            spacing: { after: 400 },
          }),

          // ========== HOME PAGE - HERO SECTION ==========
          createParagraph("SECTION 2: HOME PAGE - HERO SECTION", {
            bold: true,
            size: 28,
            heading: HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 200 },
          }),
          createParagraph("[IMAGE PLACEHOLDER: Screenshot of the hero section with background image]", {
            italic: true,
            color: "808080",
            spacing: { after: 200 },
          }),
          createParagraph("Question 2.1: What should be the main hero heading?", {
            bold: true,
            spacing: { before: 200, after: 100 },
          }),
          createParagraph("Current Answer: INNOVATIVE • RELIABLE • SOLUTIONS", {
            spacing: { after: 200 },
          }),
          createParagraph("Your Updated Answer: _________________________________________________", {
            color: "0066CC",
            spacing: { after: 200 },
          }),
          createParagraph("Question 2.2: What should be the hero subtitle?", {
            bold: true,
            spacing: { before: 200, after: 100 },
          }),
          createParagraph("Current Answer: PROVIDING YOU WITH A NEW EXPERIENCE BEYOND LOGISTIC SERVICES", {
            spacing: { after: 200 },
          }),
          createParagraph("Your Updated Answer: _________________________________________________", {
            color: "0066CC",
            spacing: { after: 200 },
          }),
          createParagraph("Question 2.3: What are the four feature boxes? (Please list all four)", {
            bold: true,
            spacing: { before: 200, after: 100 },
          }),
          createParagraph("Current Answers:", {
            spacing: { after: 100 },
          }),
          createParagraph("1. COST MINIMIZING", { spacing: { after: 50 } }),
          createParagraph("2. ON SCHEDULE DELIVERY", { spacing: { after: 50 } }),
          createParagraph("3. REAL-TIME TRACKING", { spacing: { after: 50 } }),
          createParagraph("4. CARGO HANDLING", { spacing: { after: 200 } }),
          createParagraph("Your Updated Answers:", {
            spacing: { after: 100 },
          }),
          createParagraph("1. _________________________________________________", {
            color: "0066CC",
            spacing: { after: 50 },
          }),
          createParagraph("2. _________________________________________________", {
            color: "0066CC",
            spacing: { after: 50 },
          }),
          createParagraph("3. _________________________________________________", {
            color: "0066CC",
            spacing: { after: 50 },
          }),
          createParagraph("4. _________________________________________________", {
            color: "0066CC",
            spacing: { after: 400 },
          }),

          // ========== HOME PAGE - ABOUT US SECTION ==========
          createParagraph("SECTION 3: HOME PAGE - ABOUT US SECTION", {
            bold: true,
            size: 28,
            heading: HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 200 },
          }),
          createParagraph("[IMAGE PLACEHOLDER: Screenshot of the About Us section]", {
            italic: true,
            color: "808080",
            spacing: { after: 200 },
          }),
          createParagraph("Question 3.1: What should be the About Us description (first paragraph)?", {
            bold: true,
            spacing: { before: 200, after: 100 },
          }),
          createParagraph("Current Answer: Bin Mujeeb Logistics is an Oman-based company that specializes in providing innovative and efficient logistics solutions to meet the needs of our clients. Our team of experienced professionals is dedicated to delivering top-notch services that exceed expectations.", {
            spacing: { after: 200 },
          }),
          createParagraph("Your Updated Answer: _________________________________________________", {
            color: "0066CC",
            spacing: { after: 200 },
          }),
          createParagraph("Question 3.2: What should be the About Us description (second paragraph)?", {
            bold: true,
            spacing: { before: 200, after: 100 },
          }),
          createParagraph("Current Answer: Bin Mujeeb is a comprehensive logistics services provider in the Middle East. With our extensive network and cutting-edge technology, we ensure smooth and efficient transportation and custom clearance for businesses of all sizes.", {
            spacing: { after: 200 },
          }),
          createParagraph("Your Updated Answer: _________________________________________________", {
            color: "0066CC",
            spacing: { after: 400 },
          }),

          // ========== SERVICES PAGE - OUR SERVICES BANNER ==========
          createParagraph("SECTION 4: SERVICES PAGE - OUR SERVICES BANNER", {
            bold: true,
            size: 28,
            heading: HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 200 },
          }),
          createParagraph("[IMAGE PLACEHOLDER: Screenshot of the 'OUR SERVICES' banner]", {
            italic: true,
            color: "808080",
            spacing: { after: 200 },
          }),
          createParagraph("Question 4.1: What should be the main heading?", {
            bold: true,
            spacing: { before: 200, after: 100 },
          }),
          createParagraph("Current Answer: OUR SERVICES", {
            spacing: { after: 200 },
          }),
          createParagraph("Your Updated Answer: _________________________________________________", {
            color: "0066CC",
            spacing: { after: 200 },
          }),
          createParagraph("Question 4.2: What should be the subtitle?", {
            bold: true,
            spacing: { before: 200, after: 100 },
          }),
          createParagraph("Current Answer: Comprehensive logistics solutions for your business needs", {
            spacing: { after: 200 },
          }),
          createParagraph("Your Updated Answer: _________________________________________________", {
            color: "0066CC",
            spacing: { after: 400 },
          }),

          // ========== HOW WE WORK SECTION ==========
          createParagraph("SECTION 5: HOW WE WORK", {
            bold: true,
            size: 28,
            heading: HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 200 },
          }),
          createParagraph("[IMAGE PLACEHOLDER: Screenshot of the 'HOW WE WORK' section with 4 cards]", {
            italic: true,
            color: "808080",
            spacing: { after: 200 },
          }),
          createParagraph("Question 5.1: Card 1 - What should be the title?", {
            bold: true,
            spacing: { before: 200, after: 100 },
          }),
          createParagraph("Current Answer: INITIAL CONSULTATION", {
            spacing: { after: 200 },
          }),
          createParagraph("Your Updated Answer: _________________________________________________", {
            color: "0066CC",
            spacing: { after: 200 },
          }),
          createParagraph("Question 5.2: Card 1 - What should be the description?", {
            bold: true,
            spacing: { before: 200, after: 100 },
          }),
          createParagraph("Current Answer: We assess your logistics needs and requirements", {
            spacing: { after: 200 },
          }),
          createParagraph("Your Updated Answer: _________________________________________________", {
            color: "0066CC",
            spacing: { after: 200 },
          }),
          createParagraph("Question 5.3: Card 2 - What should be the title?", {
            bold: true,
            spacing: { before: 200, after: 100 },
          }),
          createParagraph("Current Answer: CUSTOM SOLUTION", {
            spacing: { after: 200 },
          }),
          createParagraph("Your Updated Answer: _________________________________________________", {
            color: "0066CC",
            spacing: { after: 200 },
          }),
          createParagraph("Question 5.4: Card 2 - What should be the description?", {
            bold: true,
            spacing: { before: 200, after: 100 },
          }),
          createParagraph("Current Answer: Our experts design a tailored logistics plan", {
            spacing: { after: 200 },
          }),
          createParagraph("Your Updated Answer: _________________________________________________", {
            color: "0066CC",
            spacing: { after: 200 },
          }),
          createParagraph("Question 5.5: Card 3 - What should be the title?", {
            bold: true,
            spacing: { before: 200, after: 100 },
          }),
          createParagraph("Current Answer: IMPLEMENTATION", {
            spacing: { after: 200 },
          }),
          createParagraph("Your Updated Answer: _________________________________________________", {
            color: "0066CC",
            spacing: { after: 200 },
          }),
          createParagraph("Question 5.6: Card 3 - What should be the description?", {
            bold: true,
            spacing: { before: 200, after: 100 },
          }),
          createParagraph("Current Answer: Execute the plan with precision and care", {
            spacing: { after: 200 },
          }),
          createParagraph("Your Updated Answer: _________________________________________________", {
            color: "0066CC",
            spacing: { after: 200 },
          }),
          createParagraph("Question 5.7: Card 4 - What should be the title?", {
            bold: true,
            spacing: { before: 200, after: 100 },
          }),
          createParagraph("Current Answer: DELIVERY & FOLLOW-UP", {
            spacing: { after: 200 },
          }),
          createParagraph("Your Updated Answer: _________________________________________________", {
            color: "0066CC",
            spacing: { after: 200 },
          }),
          createParagraph("Question 5.8: Card 4 - What should be the description?", {
            bold: true,
            spacing: { before: 200, after: 100 },
          }),
          createParagraph("Current Answer: Ensure successful completion and client satisfaction", {
            spacing: { after: 200 },
          }),
          createParagraph("Your Updated Answer: _________________________________________________", {
            color: "0066CC",
            spacing: { after: 400 },
          }),

          // ========== CORE CAPABILITIES SECTION ==========
          createParagraph("SECTION 6: CORE CAPABILITIES", {
            bold: true,
            size: 28,
            heading: HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 200 },
          }),
          createParagraph("[IMAGE PLACEHOLDER: Screenshot of the 'CORE CAPABILITIES' section]", {
            italic: true,
            color: "808080",
            spacing: { after: 200 },
          }),
          createParagraph("Question 6.1: Column 1 - CUSTOM CLEARANCE - 'UNDERSTANDING OF CUSTOM CLEARANCE' description?", {
            bold: true,
            spacing: { before: 200, after: 100 },
          }),
          createParagraph("Current Answer: Bin Mujeeb has its own broker license and experienced brokers. It is easy to troubleshoot during custom clearance for us with our extensive network.", {
            spacing: { after: 200 },
          }),
          createParagraph("Your Updated Answer: _________________________________________________", {
            color: "0066CC",
            spacing: { after: 200 },
          }),
          createParagraph("Question 6.2: Column 1 - 'GOOD CONNECTION WITH OMANI AUTHORITIES' description?", {
            bold: true,
            spacing: { before: 200, after: 100 },
          }),
          createParagraph("Current Answer: Bin Mujeeb has direct connections with Omani customs authorities at various levels.", {
            spacing: { after: 200 },
          }),
          createParagraph("Your Updated Answer: _________________________________________________", {
            color: "0066CC",
            spacing: { after: 200 },
          }),
          createParagraph("Question 6.3: Column 2 - DUTY EXEMPTION - 'OMAN DUTY SYSTEM SPECIALISTS' description?", {
            bold: true,
            spacing: { before: 200, after: 100 },
          }),
          createParagraph("Current Answer: Our dedicated team processes duty exemptions daily, maintaining current knowledge of regulations and optimization opportunities in the Sultanate of Oman.", {
            spacing: { after: 200 },
          }),
          createParagraph("Your Updated Answer: _________________________________________________", {
            color: "0066CC",
            spacing: { after: 200 },
          }),
          createParagraph("Question 6.4: Column 3 - PROJECT MANAGEMENT EXCELLENCE - 'EXPERT PROJECT TEAM' description?", {
            bold: true,
            spacing: { before: 200, after: 100 },
          }),
          createParagraph("Current Answer: Our project managers bring 15+ years of average experience in complex logistics projects across Oman and GCC, ensuring seamless execution from planning to delivery.", {
            spacing: { after: 200 },
          }),
          createParagraph("Your Updated Answer: _________________________________________________", {
            color: "0066CC",
            spacing: { after: 400 },
          }),

          // ========== TRANSPORTATION SOLUTIONS ==========
          createParagraph("SECTION 7: TRANSPORTATION SOLUTIONS", {
            bold: true,
            size: 28,
            heading: HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 200 },
          }),
          createParagraph("[IMAGE PLACEHOLDER: Screenshot of Transportation Solutions section]", {
            italic: true,
            color: "808080",
            spacing: { after: 200 },
          }),
          createParagraph("Question 7.1: GLOBAL AIR FREIGHT SOLUTIONS - What are the key points? (List all)", {
            bold: true,
            spacing: { before: 200, after: 100 },
          }),
          createParagraph("Current Answers:", { spacing: { after: 100 } }),
          createParagraph("• Comprehensive air freight solutions", { spacing: { after: 50 } }),
          createParagraph("• Timely and cost-effective", { spacing: { after: 50 } }),
          createParagraph("• Clearance solutions", { spacing: { after: 200 } }),
          createParagraph("Your Updated Answers:", { spacing: { after: 100 } }),
          createParagraph("• _________________________________________________", {
            color: "0066CC",
            spacing: { after: 50 },
          }),
          createParagraph("• _________________________________________________", {
            color: "0066CC",
            spacing: { after: 50 },
          }),
          createParagraph("• _________________________________________________", {
            color: "0066CC",
            spacing: { after: 200 },
          }),
          createParagraph("Question 7.2: GLOBAL SHIPPING SOLUTIONS - What are the key points? (List all)", {
            bold: true,
            spacing: { before: 200, after: 100 },
          }),
          createParagraph("Current Answers:", { spacing: { after: 100 } }),
          createParagraph("• Comprehensive sea freight solutions", { spacing: { after: 50 } }),
          createParagraph("• Break-bulk and project cargo handling", { spacing: { after: 50 } }),
          createParagraph("• Dangerous goods transportation", { spacing: { after: 200 } }),
          createParagraph("Your Updated Answers:", { spacing: { after: 100 } }),
          createParagraph("• _________________________________________________", {
            color: "0066CC",
            spacing: { after: 50 },
          }),
          createParagraph("• _________________________________________________", {
            color: "0066CC",
            spacing: { after: 50 },
          }),
          createParagraph("• _________________________________________________", {
            color: "0066CC",
            spacing: { after: 200 },
          }),
          createParagraph("Question 7.3: MODERN TRAILER SOLUTIONS - What are the key points? (List all)", {
            bold: true,
            spacing: { before: 200, after: 100 },
          }),
          createParagraph("Current Answers:", { spacing: { after: 100 } }),
          createParagraph("• Our newly acquired fleet of trailers", { spacing: { after: 50 } }),
          createParagraph("• Nationwide coverage", { spacing: { after: 50 } }),
          createParagraph("• Specialized equipment", { spacing: { after: 200 } }),
          createParagraph("Your Updated Answers:", { spacing: { after: 100 } }),
          createParagraph("• _________________________________________________", {
            color: "0066CC",
            spacing: { after: 50 },
          }),
          createParagraph("• _________________________________________________", {
            color: "0066CC",
            spacing: { after: 50 },
          }),
          createParagraph("• _________________________________________________", {
            color: "0066CC",
            spacing: { after: 400 },
          }),

          // ========== SERVICE CATEGORIES ==========
          createParagraph("SECTION 8: SERVICE CATEGORIES", {
            bold: true,
            size: 28,
            heading: HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 200 },
          }),
          createParagraph("[IMAGE PLACEHOLDER: Screenshot of Service Categories section]", {
            italic: true,
            color: "808080",
            spacing: { after: 200 },
          }),
          createParagraph("Question 8.1: IMPORT SERVICES - What services should be listed? (List all)", {
            bold: true,
            spacing: { before: 200, after: 100 },
          }),
          createParagraph("Current Answers:", { spacing: { after: 100 } }),
          createParagraph("• Documentation Management", { spacing: { after: 50 } }),
          createParagraph("• Customs Clearance", { spacing: { after: 50 } }),
          createParagraph("• Duty Calculation", { spacing: { after: 50 } }),
          createParagraph("• Warehousing", { spacing: { after: 200 } }),
          createParagraph("Your Updated Answers:", { spacing: { after: 100 } }),
          createParagraph("• _________________________________________________", {
            color: "0066CC",
            spacing: { after: 50 },
          }),
          createParagraph("• _________________________________________________", {
            color: "0066CC",
            spacing: { after: 50 },
          }),
          createParagraph("• _________________________________________________", {
            color: "0066CC",
            spacing: { after: 50 },
          }),
          createParagraph("• _________________________________________________", {
            color: "0066CC",
            spacing: { after: 200 },
          }),
          createParagraph("Question 8.2: EXPORT SERVICES - What services should be listed? (List all)", {
            bold: true,
            spacing: { before: 200, after: 100 },
          }),
          createParagraph("Current Answers:", { spacing: { after: 100 } }),
          createParagraph("• Customs Documentation", { spacing: { after: 50 } }),
          createParagraph("• Air/Sea Freight Booking", { spacing: { after: 50 } }),
          createParagraph("• Cargo Insurance", { spacing: { after: 50 } }),
          createParagraph("• Specialized Packing", { spacing: { after: 200 } }),
          createParagraph("Your Updated Answers:", { spacing: { after: 100 } }),
          createParagraph("• _________________________________________________", {
            color: "0066CC",
            spacing: { after: 50 },
          }),
          createParagraph("• _________________________________________________", {
            color: "0066CC",
            spacing: { after: 50 },
          }),
          createParagraph("• _________________________________________________", {
            color: "0066CC",
            spacing: { after: 50 },
          }),
          createParagraph("• _________________________________________________", {
            color: "0066CC",
            spacing: { after: 400 },
          }),

          // ========== INDUSTRY-SPECIFIC SOLUTIONS ==========
          createParagraph("SECTION 9: INDUSTRY-SPECIFIC SOLUTIONS", {
            bold: true,
            size: 28,
            heading: HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 200 },
          }),
          createParagraph("[IMAGE PLACEHOLDER: Screenshot of Industry-Specific Solutions section]", {
            italic: true,
            color: "808080",
            spacing: { after: 200 },
          }),
          createParagraph("Question 9.1: MANUFACTURING - What should be the description?", {
            bold: true,
            spacing: { before: 200, after: 100 },
          }),
          createParagraph("Current Answer: Specialized handling for industrial equipment and materials", {
            spacing: { after: 200 },
          }),
          createParagraph("Your Updated Answer: _________________________________________________", {
            color: "0066CC",
            spacing: { after: 200 },
          }),
          createParagraph("Question 9.2: CONSTRUCTION - What should be the description?", {
            bold: true,
            spacing: { before: 200, after: 100 },
          }),
          createParagraph("Current Answer: Heavy equipment and building materials logistics", {
            spacing: { after: 200 },
          }),
          createParagraph("Your Updated Answer: _________________________________________________", {
            color: "0066CC",
            spacing: { after: 400 },
          }),

          // ========== READY TO GET STARTED ==========
          createParagraph("SECTION 10: READY TO GET STARTED?", {
            bold: true,
            size: 28,
            heading: HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 200 },
          }),
          createParagraph("[IMAGE PLACEHOLDER: Screenshot of the 'READY TO GET STARTED?' CTA section]", {
            italic: true,
            color: "808080",
            spacing: { after: 200 },
          }),
          createParagraph("Question 10.1: What should be the main heading?", {
            bold: true,
            spacing: { before: 200, after: 100 },
          }),
          createParagraph("Current Answer: READY TO GET STARTED?", {
            spacing: { after: 200 },
          }),
          createParagraph("Your Updated Answer: _________________________________________________", {
            color: "0066CC",
            spacing: { after: 200 },
          }),
          createParagraph("Question 10.2: What should be the subtitle?", {
            bold: true,
            spacing: { before: 200, after: 100 },
          }),
          createParagraph("Current Answer: Let us handle your logistics needs with expertise and precision.", {
            spacing: { after: 200 },
          }),
          createParagraph("Your Updated Answer: _________________________________________________", {
            color: "0066CC",
            spacing: { after: 400 },
          }),

          // ========== ABOUT PAGE ==========
          createParagraph("SECTION 11: ABOUT PAGE", {
            bold: true,
            size: 28,
            heading: HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 200 },
          }),
          createParagraph("[IMAGE PLACEHOLDER: Screenshot of the About page]", {
            italic: true,
            color: "808080",
            spacing: { after: 200 },
          }),
          createParagraph("NOTE: The Organization Chart section has been removed from the About page as per your request.", {
            italic: true,
            color: "FF6600",
            spacing: { after: 200 },
          }),
          createParagraph("Question 11.1: What should be the main heading?", {
            bold: true,
            spacing: { before: 200, after: 100 },
          }),
          createParagraph("Current Answer: Bin Mujeeb, CREATIVE LOGISTICS SOLUTION PROVIDER!", {
            spacing: { after: 200 },
          }),
          createParagraph("Your Updated Answer: _________________________________________________", {
            color: "0066CC",
            spacing: { after: 200 },
          }),
          createParagraph("Question 11.2: What should be the first paragraph?", {
            bold: true,
            spacing: { before: 200, after: 100 },
          }),
          createParagraph("Current Answer: As a project-based logistics company in Oman and GCC, we have gained many years of experience and know-how from it. In addition, by expanding our business area to its own transportation business, it aims to be a total logistics service provider, not just forwarding, and based on this, it aims to provide optimal logistics services to our customers.", {
            spacing: { after: 200 },
          }),
          createParagraph("Your Updated Answer: _________________________________________________", {
            color: "0066CC",
            spacing: { after: 200 },
          }),
          createParagraph("Question 11.3: What should be the second paragraph?", {
            bold: true,
            spacing: { before: 200, after: 100 },
          }),
          createParagraph("Current Answer: Bin Mujeeb Logistics specializes in customizing logistics services to meet the unique needs of each client. With over 20+ years of operational excellence since 2000, we have established ourselves as a trusted partner for businesses across Oman and the GCC region.", {
            spacing: { after: 200 },
          }),
          createParagraph("Your Updated Answer: _________________________________________________", {
            color: "0066CC",
            spacing: { after: 400 },
          }),

          // ========== HISTORY PAGE ==========
          createParagraph("SECTION 11A: HISTORY PAGE", {
            bold: true,
            size: 28,
            heading: HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 200 },
          }),
          createParagraph("[IMAGE PLACEHOLDER: Screenshot of the History page with timeline]", {
            italic: true,
            color: "808080",
            spacing: { after: 200 },
          }),
          createParagraph("Question 11A.1: What should be the main heading?", {
            bold: true,
            spacing: { before: 200, after: 100 },
          }),
          createParagraph("Current Answer: HISTORY OF BIN MUJEEB", {
            spacing: { after: 200 },
          }),
          createParagraph("Your Updated Answer: _________________________________________________", {
            color: "0066CC",
            spacing: { after: 200 },
          }),
          createParagraph("Question 11A.2: What should be the subtitle?", {
            bold: true,
            spacing: { before: 200, after: 100 },
          }),
          createParagraph("Current Answer: INSIGHT TO NEXT GENERATION IS LEADING ON BIN MUJEEB", {
            spacing: { after: 200 },
          }),
          createParagraph("Your Updated Answer: _________________________________________________", {
            color: "0066CC",
            spacing: { after: 200 },
          }),
          createParagraph("Question 11A.3: What should be the introductory paragraph?", {
            bold: true,
            spacing: { before: 200, after: 100 },
          }),
          createParagraph("Current Answer: As a project-based logistics company in Oman and GCC, we have gained many years of experience and know-how from it. In addition, by expanding our business area to its own transportation business, it aims to be a total logistics service provider, not just forwarding, and based on this, it aims to provide optimal logistics services to our customers.", {
            spacing: { after: 200 },
          }),
          createParagraph("Your Updated Answer: _________________________________________________", {
            color: "0066CC",
            spacing: { after: 200 },
          }),
          createParagraph("Question 11A.4: Please provide timeline events for each year (Year and events)", {
            bold: true,
            spacing: { before: 200, after: 100 },
          }),
          createParagraph("Current Timeline:", { spacing: { after: 100 } }),
          createParagraph("2000: Founded Bin Mujeeb in Muscat, Oman | Started as a small logistics operation", {
            spacing: { after: 50 },
          }),
          createParagraph("2020: Established comprehensive warehousing facilities | Obtained heavy equipment rental licenses", {
            spacing: { after: 50 },
          }),
          createParagraph("2022: Established Bin Mujeeb Logistics in Oman | Expanded to container transport services", {
            spacing: { after: 50 },
          }),
          createParagraph("2023: Transition to comprehensive logistics services | Established customs clearance division | Bin Mujeeb for Logistics operations", {
            spacing: { after: 50 },
          }),
          createParagraph("2024: October: Expanded operations across GCC region | January: Launched 4PL capabilities | January: Enhanced modern fleet with new trailers", {
            spacing: { after: 200 },
          }),
          createParagraph("Your Updated Timeline:", { spacing: { after: 100 } }),
          createParagraph("Year: _________________________________________________", {
            color: "0066CC",
            spacing: { after: 50 },
          }),
          createParagraph("Events: _________________________________________________", {
            color: "0066CC",
            spacing: { after: 50 },
          }),
          createParagraph("(Please list all years and their corresponding events)", {
            color: "0066CC",
            spacing: { after: 400 },
          }),

          // ========== VISION PAGE ==========
          createParagraph("SECTION 11B: VISION PAGE", {
            bold: true,
            size: 28,
            heading: HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 200 },
          }),
          createParagraph("[IMAGE PLACEHOLDER: Screenshot of the Vision page]", {
            italic: true,
            color: "808080",
            spacing: { after: 200 },
          }),
          createParagraph("Question 11B.1: What should be the main heading?", {
            bold: true,
            spacing: { before: 200, after: 100 },
          }),
          createParagraph("Current Answer: VISION", {
            spacing: { after: 200 },
          }),
          createParagraph("Your Updated Answer: _________________________________________________", {
            color: "0066CC",
            spacing: { after: 200 },
          }),
          createParagraph("Question 11B.2: What should be the main vision statement (first paragraph)?", {
            bold: true,
            spacing: { before: 200, after: 100 },
          }),
          createParagraph("Current Answer: To be the leading logistics solutions provider in Oman and the GCC region, recognized for innovation, reliability, and exceptional service delivery. We envision a future where Bin Mujeeb sets the standard for logistics excellence, driving business growth and economic development across the region.", {
            spacing: { after: 200 },
          }),
          createParagraph("Your Updated Answer: _________________________________________________", {
            color: "0066CC",
            spacing: { after: 200 },
          }),
          createParagraph("Question 11B.3: What should be the second paragraph of the vision statement?", {
            bold: true,
            spacing: { before: 200, after: 100 },
          }),
          createParagraph("Current Answer: Our vision extends beyond traditional logistics services. We aim to transform the logistics landscape through cutting-edge technology, sustainable practices, and customer-centric solutions that create lasting value for our clients and partners.", {
            spacing: { after: 200 },
          }),
          createParagraph("Your Updated Answer: _________________________________________________", {
            color: "0066CC",
            spacing: { after: 200 },
          }),
          createParagraph("Question 11B.4: What should be the three vision pillars? (Excellence, Innovation, Leadership)", {
            bold: true,
            spacing: { before: 200, after: 100 },
          }),
          createParagraph("Current Answers:", { spacing: { after: 100 } }),
          createParagraph("Excellence: Striving for excellence in every aspect of our operations", {
            spacing: { after: 50 },
          }),
          createParagraph("Innovation: Embracing innovation to stay ahead of industry trends", {
            spacing: { after: 50 },
          }),
          createParagraph("Leadership: Leading the way in logistics solutions and services", {
            spacing: { after: 200 },
          }),
          createParagraph("Your Updated Answers:", { spacing: { after: 100 } }),
          createParagraph("Excellence: _________________________________________________", {
            color: "0066CC",
            spacing: { after: 50 },
          }),
          createParagraph("Innovation: _________________________________________________", {
            color: "0066CC",
            spacing: { after: 50 },
          }),
          createParagraph("Leadership: _________________________________________________", {
            color: "0066CC",
            spacing: { after: 400 },
          }),

          // ========== CEO MESSAGE PAGE ==========
          createParagraph("SECTION 11C: CEO MESSAGE PAGE", {
            bold: true,
            size: 28,
            heading: HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 200 },
          }),
          createParagraph("[IMAGE PLACEHOLDER: Screenshot of the CEO Message page]", {
            italic: true,
            color: "808080",
            spacing: { after: 200 },
          }),
          createParagraph("Question 11C.1: What should be the main heading?", {
            bold: true,
            spacing: { before: 200, after: 100 },
          }),
          createParagraph("Current Answer: CEO MESSAGE", {
            spacing: { after: 200 },
          }),
          createParagraph("Your Updated Answer: _________________________________________________", {
            color: "0066CC",
            spacing: { after: 200 },
          }),
          createParagraph("Question 11C.2: What should be the first paragraph of the CEO message?", {
            bold: true,
            spacing: { before: 200, after: 100 },
          }),
          createParagraph("Current Answer: As the founder and Chief Executive of Bin Mujeeb Logistics, I am proud to lead a company that has been at the forefront of logistics services in Oman and the GCC region for over two decades.", {
            spacing: { after: 200 },
          }),
          createParagraph("Your Updated Answer: _________________________________________________", {
            color: "0066CC",
            spacing: { after: 200 },
          }),
          createParagraph("Question 11C.3: What should be the second paragraph?", {
            bold: true,
            spacing: { before: 200, after: 100 },
          }),
          createParagraph("Current Answer: Since our establishment in 2000, Bin Mujeeb has grown from a small logistics operation to a comprehensive logistics solutions provider. Our journey has been marked by continuous innovation, strategic expansion, and an unwavering commitment to delivering exceptional service.", {
            spacing: { after: 200 },
          }),
          createParagraph("Your Updated Answer: _________________________________________________", {
            color: "0066CC",
            spacing: { after: 200 },
          }),
          createParagraph("Question 11C.4: What should be the third paragraph?", {
            bold: true,
            spacing: { before: 200, after: 100 },
          }),
          createParagraph("Current Answer: Our success is built on the foundation of trust, integrity, and a deep understanding of the unique logistics challenges faced by businesses in our region. We have consistently invested in modern infrastructure, cutting-edge technology, and most importantly, our people.", {
            spacing: { after: 200 },
          }),
          createParagraph("Your Updated Answer: _________________________________________________", {
            color: "0066CC",
            spacing: { after: 200 },
          }),
          createParagraph("Question 11C.5: What should be the fourth paragraph?", {
            bold: true,
            spacing: { before: 200, after: 100 },
          }),
          createParagraph("Current Answer: At Bin Mujeeb, we believe that every client deserves personalized attention and customized solutions. Our team of experienced professionals works tirelessly to ensure that we not only meet but exceed our clients' expectations. Whether it's container transport, customs clearance, freight forwarding, or comprehensive 4PL services, we approach each project with dedication and expertise.", {
            spacing: { after: 200 },
          }),
          createParagraph("Your Updated Answer: _________________________________________________", {
            color: "0066CC",
            spacing: { after: 200 },
          }),
          createParagraph("Question 11C.6: What should be the closing paragraph?", {
            bold: true,
            spacing: { before: 200, after: 100 },
          }),
          createParagraph("Current Answer: As we look to the future, we remain committed to innovation, excellence, and building lasting partnerships. Thank you for choosing Bin Mujeeb Logistics as your trusted logistics partner.", {
            spacing: { after: 200 },
          }),
          createParagraph("Your Updated Answer: _________________________________________________", {
            color: "0066CC",
            spacing: { after: 200 },
          }),
          createParagraph("Question 11C.7: Please provide a high-resolution photo of the CEO", {
            bold: true,
            spacing: { before: 200, after: 100 },
          }),
          createParagraph("Current Status: [Placeholder image - CEO Photo]", {
            spacing: { after: 200 },
          }),
          createParagraph("Please provide: High-resolution CEO photo (JPG or PNG format, recommended size: 800x1200px or similar portrait orientation)", {
            color: "0066CC",
            spacing: { after: 400 },
          }),

          // ========== PROJECTS PAGE ==========
          createParagraph("SECTION 12: PROJECTS PAGE", {
            bold: true,
            size: 28,
            heading: HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 200 },
          }),
          createParagraph("[IMAGE PLACEHOLDER: Screenshot of the Projects page with project cards]", {
            italic: true,
            color: "808080",
            spacing: { after: 200 },
          }),
          createParagraph("Question 12.1: What should be the main heading?", {
            bold: true,
            spacing: { before: 200, after: 100 },
          }),
          createParagraph("Current Answer: OUR PORTFOLIO", {
            spacing: { after: 200 },
          }),
          createParagraph("Your Updated Answer: _________________________________________________", {
            color: "0066CC",
            spacing: { after: 200 },
          }),
          createParagraph("Question 12.2: Please provide details for each project card (Project Name, Date, Client, Services, Partner if any)", {
            bold: true,
            spacing: { before: 200, after: 100 },
          }),
          createParagraph("Current Projects:", { spacing: { after: 100 } }),
          createParagraph("Project 1: FADHILI (2024 ~ PRESENT) - Client: SAMSUNG E&A - Services: GENERAL/HEAVY CARGO TRANSPORT, IMPORT CLEARANCE - Partner: Saudi Aramco", {
            spacing: { after: 50 },
          }),
          createParagraph("Project 2: JAFURAH COGEN (2023 ~ 2024) - Client: DOOSAN Enerbility - Services: GENERAL/HEAVY CARGO TRANSPORT, DUTY EXEMPTION & CONSULTING, IMPORT CLEARANCE - Partner: KEPCO", {
            spacing: { after: 50 },
          }),
          createParagraph("Project 3: S-PROJECT (2023 ~ 2024) - Client: SeAH - Services: GENERAL/HEAVY CARGO TRANSPORT, DUTY EXEMPTION & CONSULTING, IMPORT CLEARANCE", {
            spacing: { after: 50 },
          }),
          createParagraph("Project 4: SS8D (2022 ~ 2023) - Client: HYUNDAI ENGINEERING & CONSTRUCTION - Services: GENERAL CARGO TRANSPORT, IMPORT CLEARANCE - Partner: Saudi Electricity Company", {
            spacing: { after: 200 },
          }),
          createParagraph("Your Updated Projects:", { spacing: { after: 100 } }),
          createParagraph("Project 1: _________________________________________________", {
            color: "0066CC",
            spacing: { after: 50 },
          }),
          createParagraph("Project 2: _________________________________________________", {
            color: "0066CC",
            spacing: { after: 50 },
          }),
          createParagraph("Project 3: _________________________________________________", {
            color: "0066CC",
            spacing: { after: 50 },
          }),
          createParagraph("Project 4: _________________________________________________", {
            color: "0066CC",
            spacing: { after: 200 },
          }),
          createParagraph("Question 12.3: OUR CLIENTS SECTION - Please provide company logo images for the sliding client logos section", {
            bold: true,
            spacing: { before: 200, after: 100 },
          }),
          createParagraph("Current Client Companies Displayed:", { spacing: { after: 100 } }),
          createParagraph("• Samsung E&A", { spacing: { after: 50 } }),
          createParagraph("• Doosan Enerbility", { spacing: { after: 50 } }),
          createParagraph("• SeAH", { spacing: { after: 50 } }),
          createParagraph("• Hyundai Engineering & Construction", { spacing: { after: 50 } }),
          createParagraph("• Saudi Aramco", { spacing: { after: 50 } }),
          createParagraph("• KEPCO", { spacing: { after: 50 } }),
          createParagraph("• Saudi Electricity Company", { spacing: { after: 200 } }),
          createParagraph("Please provide:", { spacing: { after: 100 } }),
          createParagraph("1. High-resolution logo images (PNG format preferred, transparent background if possible)", {
            color: "0066CC",
            spacing: { after: 50 },
          }),
          createParagraph("2. Any additional client companies you would like to add to the sliding logos section", {
            color: "0066CC",
            spacing: { after: 50 },
          }),
          createParagraph("3. Any companies you would like to remove from the list", {
            color: "0066CC",
            spacing: { after: 400 },
          }),

          // ========== CONTACT PAGE ==========
          createParagraph("SECTION 13: CONTACT PAGE", {
            bold: true,
            size: 28,
            heading: HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 200 },
          }),
          createParagraph("[IMAGE PLACEHOLDER: Screenshot of the Contact page]", {
            italic: true,
            color: "808080",
            spacing: { after: 200 },
          }),
          createParagraph("Question 13.1: What should be the main heading?", {
            bold: true,
            spacing: { before: 200, after: 100 },
          }),
          createParagraph("Current Answer: CONTACT BIN MUJEEB LOGISTICS", {
            spacing: { after: 200 },
          }),
          createParagraph("Your Updated Answer: _________________________________________________", {
            color: "0066CC",
            spacing: { after: 200 },
          }),
          createParagraph("Question 13.2: What should be the subtitle?", {
            bold: true,
            spacing: { before: 200, after: 100 },
          }),
          createParagraph("Current Answer: Get in touch with our offices in Muscat and Sohar for logistics solutions tailored to your needs.", {
            spacing: { after: 200 },
          }),
          createParagraph("Your Updated Answer: _________________________________________________", {
            color: "0066CC",
            spacing: { after: 200 },
          }),
          createParagraph("Question 13.3: Please provide contact details for each location (Muscat and Sohar only)", {
            bold: true,
            spacing: { before: 200, after: 100 },
          }),
          createParagraph("Current Answers:", { spacing: { after: 100 } }),
          createParagraph("Muscat: P.O BOX No. [Your Box Number], Muscat, Sultanate of Oman | Phone: (+968) [Your Phone Number] | Email: info@binmujeeb.com", {
            spacing: { after: 50 },
          }),
          createParagraph("Sohar: P.O BOX No. [Your Box Number], Sohar, Sultanate of Oman | Phone: (+968) [Your Phone Number] | Email: sohar@binmujeeb.com", {
            spacing: { after: 200 },
          }),
          createParagraph("Your Updated Answers:", { spacing: { after: 100 } }),
          createParagraph("Muscat - Address: _________________________________________________", {
            color: "0066CC",
            spacing: { after: 50 },
          }),
          createParagraph("Muscat - Phone: _________________________________________________", {
            color: "0066CC",
            spacing: { after: 50 },
          }),
          createParagraph("Muscat - Email: _________________________________________________", {
            color: "0066CC",
            spacing: { after: 100 },
          }),
          createParagraph("Sohar - Address: _________________________________________________", {
            color: "0066CC",
            spacing: { after: 50 },
          }),
          createParagraph("Sohar - Phone: _________________________________________________", {
            color: "0066CC",
            spacing: { after: 50 },
          }),
          createParagraph("Sohar - Email: _________________________________________________", {
            color: "0066CC",
            spacing: { after: 400 },
          }),

          // ========== FOOTER & WHATSAPP BUTTON ==========
          createParagraph("SECTION 14: FOOTER & WHATSAPP BUTTON", {
            bold: true,
            size: 28,
            heading: HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 200 },
          }),
          createParagraph("[IMAGE PLACEHOLDER: Screenshot of the Footer and WhatsApp button]", {
            italic: true,
            color: "808080",
            spacing: { after: 200 },
          }),
          createParagraph("Question 14.1: What should be the company tagline?", {
            bold: true,
            spacing: { before: 200, after: 100 },
          }),
          createParagraph("Current Answer: Providing you with a new experience beyond Logistic Services.", {
            spacing: { after: 200 },
          }),
          createParagraph("Your Updated Answer: _________________________________________________", {
            color: "0066CC",
            spacing: { after: 200 },
          }),
          createParagraph("Question 14.2: What should be the copyright text?", {
            bold: true,
            spacing: { before: 200, after: 100 },
          }),
          createParagraph("Current Answer: Copyright © 2025 BIN MUJEEB Logistics LLC. All rights reserved.", {
            spacing: { after: 200 },
          }),
          createParagraph("Your Updated Answer: _________________________________________________", {
            color: "0066CC",
            spacing: { after: 200 },
          }),
          createParagraph("Question 14.3: WHATSAPP CONTACT NUMBER - Please provide your WhatsApp business number", {
            bold: true,
            spacing: { before: 200, after: 100 },
          }),
          createParagraph("Current Answer: [Placeholder - 968XXXXXXXXX]", {
            spacing: { after: 200 },
          }),
          createParagraph("NOTE: The WhatsApp button is now displayed on all pages (fixed position, bottom right). When clicked, it will open WhatsApp with a pre-filled message.", {
            italic: true,
            color: "808080",
            spacing: { after: 100 },
          }),
          createParagraph("Please provide:", { spacing: { after: 100 } }),
          createParagraph("1. WhatsApp Number (format: country code + number without + or spaces, e.g., 96812345678): _________________________________________________", {
            color: "0066CC",
            spacing: { after: 50 },
          }),
          createParagraph("2. Default message for WhatsApp (optional - currently: 'Hello, I would like to know more about Bin Mujeeb Logistics services.'): _________________________________________________", {
            color: "0066CC",
            spacing: { after: 400 },
          }),

          // ========== SERVICES CAROUSEL ==========
          createParagraph("SECTION 15: SERVICES CAROUSEL (HOME PAGE)", {
            bold: true,
            size: 28,
            heading: HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 200 },
          }),
          createParagraph("[IMAGE PLACEHOLDER: Screenshot of the Services Carousel section]", {
            italic: true,
            color: "808080",
            spacing: { after: 200 },
          }),
          createParagraph("Question 15.1: AIR FREIGHT FORWARDING - What should be the description?", {
            bold: true,
            spacing: { before: 200, after: 100 },
          }),
          createParagraph("Current Answer: Fast and reliable air freight services connecting Oman and GCC to global markets. We offer express and standard air freight options with real-time tracking and specialized handling for time-sensitive cargo.", {
            spacing: { after: 200 },
          }),
          createParagraph("Your Updated Answer: _________________________________________________", {
            color: "0066CC",
            spacing: { after: 200 },
          }),
          createParagraph("Question 15.2: OCEAN FREIGHT FORWARDING - What should be the description?", {
            bold: true,
            spacing: { before: 200, after: 100 },
          }),
          createParagraph("Current Answer: Cost-effective and comprehensive ocean freight services including FCL, LCL, and special cargo handling. We provide optimal routing, competitive rates, and end-to-end visibility for your maritime shipments.", {
            spacing: { after: 200 },
          }),
          createParagraph("Your Updated Answer: _________________________________________________", {
            color: "0066CC",
            spacing: { after: 200 },
          }),
          createParagraph("Question 15.3: CUSTOM CLEARANCE - What should be the description?", {
            bold: true,
            spacing: { before: 200, after: 100 },
          }),
          createParagraph("Current Answer: Expert customs clearance services in Oman and GCC, handling import / export documentation, duty calculations, and compliance with local regulations. We ensure smooth and efficient customs processing for all your shipments.", {
            spacing: { after: 200 },
          }),
          createParagraph("Your Updated Answer: _________________________________________________", {
            color: "0066CC",
            spacing: { after: 200 },
          }),
          createParagraph("Question 15.4: DUTY EXEMPTION - What should be the description?", {
            bold: true,
            spacing: { before: 200, after: 100 },
          }),
          createParagraph("Current Answer: Specialized assistance in obtaining duty exemptions and managing tax benefits for qualified shipments. Our team helps navigate complex regulations to maximize your cost savings through available exemption programs.", {
            spacing: { after: 200 },
          }),
          createParagraph("Your Updated Answer: _________________________________________________", {
            color: "0066CC",
            spacing: { after: 200 },
          }),
          createParagraph("Question 15.5: INLAND FREIGHT FORWARDING - What should be the description?", {
            bold: true,
            spacing: { before: 200, after: 100 },
          }),
          createParagraph("Current Answer: Efficient land transportation solutions for domestic and cross-border shipments. Our extensive network covers all major routes with tracking capabilities, specialized vehicles, and time-definite delivery options.", {
            spacing: { after: 200 },
          }),
          createParagraph("Your Updated Answer: _________________________________________________", {
            color: "0066CC",
            spacing: { after: 400 },
          }),

          // ========== END NOTE ==========
          createParagraph("END OF DOCUMENT", {
            bold: true,
            size: 28,
            heading: HeadingLevel.HEADING_1,
            alignment: AlignmentType.CENTER,
            spacing: { before: 400, after: 200 },
          }),
          createParagraph("Thank you for reviewing this document. Please fill in your updated answers and return this document. We will update the website content accordingly.", {
            alignment: AlignmentType.CENTER,
            spacing: { after: 200 },
          }),
        ],
      },
    ],
  });

  const buffer = await Packer.toBuffer(doc);
  const baseFileName = "Bin-Mujeeb-Website-Content-Review";
  const fileExtension = ".docx";
  let filePath = path.join(process.cwd(), `${baseFileName}${fileExtension}`);
  
  // If file is locked, try with timestamp
  let attempts = 0;
  while (attempts < 3) {
    try {
      // Try to delete existing file if it exists and is not locked
      if (fs.existsSync(filePath)) {
        try {
          fs.unlinkSync(filePath);
        } catch (error) {
          // File is locked, use timestamp
          const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5);
          filePath = path.join(process.cwd(), `${baseFileName}-${timestamp}${fileExtension}`);
        }
      }
      fs.writeFileSync(filePath, buffer);
      break;
    } catch (error: any) {
      if (error.code === 'EBUSY' && attempts < 2) {
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5);
        filePath = path.join(process.cwd(), `${baseFileName}-${timestamp}${fileExtension}`);
        attempts++;
      } else {
        throw error;
      }
    }
  }
  console.log(`Document generated successfully at: ${filePath}`);
  return filePath;
}

// Run if called directly
if (require.main === module) {
  generateContentDocx()
    .then((filePath) => {
      console.log(`✓ DOCX file created: ${filePath}`);
    })
    .catch((error) => {
      console.error("Error generating document:", error);
      process.exit(1);
    });
}

export { generateContentDocx };
