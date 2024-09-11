"use client";

import React from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

export default function PDFPreview() {
  return (
    <div>
      <Document file="https://cors-anywhere.herokuapp.com/https://relevant-articles.s3.us-east-1.amazonaws.com/condensed_article.pdf?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLWVhc3QtMSJGMEQCIBm0KTYRtB%2Bx4jBU2K%2FAFRXSCND9Lki%2BBCKnlseSGNRHAiBN2wo1D8enlKevrPDGKnH9tANyJHanscZDcVQG%2FmZVFCrpAgiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDk0Njg3MzE0NjY3NSIMiGDcWcv%2FrcZqBJKsKr0Cwe3kNwUW3IkIYzNvseGckX12JBWJrTynAvpzqAqmCsnohHHydxhyajuzWvN0u8OSR2hn7TWliq5a43KMq8Bfb7bbgZ%2Bbq1HZ4XgG8eRjjqXBzqr8rGHWQc6vkLqhmEcQPCOfif%2BArTrISCU96zfMeJxHwCgic%2Bm1PTdnsFE5GJrVSNCs6l6MX6xg19IDfnD9S%2Fiu87Bg2jMBgP2%2FIjJAwJw6thEBDzbCVaSgGQx%2FX6rH5opSg0mIGMcoTwjYJA0FGcNYidPMhn1Se26u2Ol4G7fAEkDPpsKe%2B5Uz0vBwzVWsAo%2Fu3IqxuIQohXUj0DwmL9S9Sj5W4Z3j0MH9bq89nHGWIty9r3N3IZjTOHt4VCeg%2Bu23wocVH2FVwrZPHKRUi36WYjQM1Jq7S%2FAZxWwoTfSLbjvmjaETfb2F2Scwz9aCtwY6iAJG9s2JAabkGUiOjmrtlvSMkUXlZcaJ1hm2w%2BXUGaDIh8QzZjYerRHkt7%2BwtHcTVkJE%2BNw3cA6KA%2B1ACIYmWXy5zDjAgoKrLHER32p5RwYAYW45WQwwvy2kPYFfUJ87pUaRsEOFVzapIMWNOdzltAfED0Cz%2FT%2FK%2BfIYamWa73fTdK1zRwGrojG4aX4ZDCZCtk3Ia90VT3ehKoraT1%2FGpjEw9bOEUXyEnTfpFi6xTAEVkrQgvlChPxp8%2FlqT%2FjjoPmmuXsfZfYj8wf2HpW73t02ohEcj%2FPOQ0ioPcltT%2F3V%2BudhzTXlzkgCLuqC%2BAHnCVVt28FGvsatBEgOWGtS80NI1T24ehRe0vsw%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240911T040856Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA5Y5QJTUZY7F5EMVN%2F20240911%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=675086dcba69863be7aaa4ba5829f4e9e90e63cdf3400dbe89cf99f366e61ef1" >
        <Page pageNumber={1} />
      </Document>
    </div>
  );
}
