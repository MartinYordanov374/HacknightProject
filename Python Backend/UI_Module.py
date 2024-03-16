import TextSummarizer
import PdfReader


def summarize_text(filePath):
    pdf_text = PdfReader.readPdf(filePath)

    summarized_text = TextSummarizer.summarizeText(pdf_text)

    return summarized_text