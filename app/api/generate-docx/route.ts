import { NextResponse } from "next/server";
import { Document, Packer, Paragraph, TextRun, HeadingLevel } from "docx";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, paragraphs, filename } = body;

    const doc = new Document({
      sections: [
        {
          properties: {},
          children: [
            new Paragraph({
              text: title || "Document",
              heading: HeadingLevel.HEADING_1,
            }),
            ...(paragraphs || []).map(
              (text: string) =>
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

    return new NextResponse(buffer as unknown as BodyInit, {
      headers: {
        "Content-Type":
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "Content-Disposition": `attachment; filename="${filename || "document.docx"}"`,
      },
    });
  } catch (error) {
    console.error("Error generating DOCX:", error);
    return NextResponse.json(
      { error: "Failed to generate document" },
      { status: 500 }
    );
  }
}

