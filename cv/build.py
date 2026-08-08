#!/usr/bin/env python3
"""
Build script: render CV HTML files to single-page A4 PDFs.

Renders every cv-*.html in this directory (ATS and designed versions).
Output filenames mirror the source stem:
  cv-en.html        -> dist/cv-en.pdf       (designed, for direct send)
  cv-en-ats.html    -> dist/cv-en-ats.pdf   (ATS-strict, for upload)
  cv-es.html        -> dist/cv-es.pdf
  cv-es-ats.html    -> dist/cv-es-ats.pdf

Usage:
  python3 build.py
  python3 build.py cv-en.html  (specific file)
"""

from pathlib import Path
from playwright.sync_api import sync_playwright

ROOT = Path(__file__).parent
DIST = ROOT / "public" / "cv"


def build(html_file: Path) -> Path:
    pdf_name = html_file.stem + ".pdf"
    pdf_path = DIST / pdf_name
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        page.goto(f"file://{html_file.resolve()}")
        page.emulate_media(media="print")
        page.pdf(
            path=str(pdf_path),
            format="A4",
            print_background=False,
            prefer_css_page_size=True,
            margin={"top": "0", "right": "0", "bottom": "0", "left": "0"},
        )
        browser.close()
    print(f"  → {pdf_path.relative_to(ROOT)}")
    return pdf_path


def main() -> None:
    DIST.mkdir(exist_ok=True)
    targets = sorted(ROOT.glob("cv-*.html"))
    if not targets:
        print("No CV HTML files found.")
        return
    print(f"Rendering {len(targets)} CV file(s):")
    for html in targets:
        build(html)
    print("Done.")


if __name__ == "__main__":
    main()
