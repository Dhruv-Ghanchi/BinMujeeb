import { Document, Packer, Paragraph, TextRun, HeadingLevel } from "docx";
import * as fs from "fs";
import * as path from "path";

export async function generateDocx(content: {
  title: string;
  paragraphs: string[];
  filename?: string;
}) {
  const doc = new Document({
    sections: [
      {
        properties: {},
        children: [
          new Paragraph({
            text: content.title,
            heading: HeadingLevel.HEADING_1,
          }),
          ...content.paragraphs.map(
            (text) =>
              new Paragraph({
                children: [
                  new TextRun({
                    text: text,
                  }),
                ],
              })
          ),
        ],
      },
    ],
  });

  const buffer = await Packer.toBuffer(doc);
  const filename = content.filename || "document.docx";
  const filePath = path.join(process.cwd(), filename);
  
  fs.writeFileSync(filePath, buffer);
  return filePath;
}

// Example usage
if (require.main === module) {
  generateDocx({
    title: "Bin Mujeeb Logistics",
    paragraphs: [
      "This is a sample document generated for Bin Mujeeb Logistics.",
      "You can customize this content as needed.",
    ],
    filename: "bin-mujeeb-document.docx",
  })
    .then((filePath) => {
      console.log(`Document generated successfully at: ${filePath}`);
    })
    .catch((error) => {
      console.error("Error generating document:", error);
    });
}

