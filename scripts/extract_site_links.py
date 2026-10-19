import re
import urllib.request
from html import unescape

URLS = [
    "https://sites.google.com/view/amanuel-td",
    "https://sites.google.com/view/amanuel-td/home",
    "https://sites.google.com/view/amanuel-td/cv",
    "https://sites.google.com/view/amanuel-td/data-management-contributions-in-research-projects",
    "https://sites.google.com/view/amanuel-td/data-management-contributions-in-research-projects?authuser=0",
]


def fetch(url: str) -> str:
    req = urllib.request.Request(
        url,
        headers={
            "User-Agent": (
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
                "AppleWebKit/537.36 (KHTML, like Gecko) "
                "Chrome/120.0.0.0 Safari/537.36"
            )
        },
    )
    with urllib.request.urlopen(req, timeout=45) as resp:
        return resp.read().decode("utf-8", "replace")


def strip_tags(text: str) -> str:
    text = re.sub(r"<script[^>]*>.*?</script>", " ", text, flags=re.S | re.I)
    text = re.sub(r"<style[^>]*>.*?</style>", " ", text, flags=re.S | re.I)
    text = re.sub(r"<[^>]+>", " ", text)
    return unescape(re.sub(r"\s+", " ", text)).strip()


for url in URLS:
    print("=" * 80)
    print(url)
    try:
        html = fetch(url)
    except Exception as exc:
        print("FETCH ERROR:", exc)
        continue

    print("LEN", len(html))
    anchors = re.findall(
        r'<a[^>]+href="([^"]+)"[^>]*>(.*?)</a>',
        html,
        flags=re.S | re.I,
    )
    print("ANCHORS", len(anchors))
    for href, inner in anchors:
        label = strip_tags(inner)
        if not href.startswith("http"):
            continue
        skip = (
            "accounts.google" in href
            or "gstatic.com" in href
            or "googleapis.com" in href
            or "google.com/search" in href
            or href.rstrip("/").endswith("amanuel-td")
            or "/view/amanuel-td/" in href
            and label.lower() in {"home", "cv", "data management contributions in research projects"}
        )
        if skip and label.lower() not in {"here", "linkedin", "twitter", "github", "email", "link"}:
            continue
        print(f"  [{label[:80]}] -> {href}")

    # Also dump unique external-looking hrefs
    hrefs = re.findall(r'href="(https?://[^"]+)"', html)
    unique = []
    seen = set()
    for h in hrefs:
        if h in seen:
            continue
        seen.add(h)
        if any(
            s in h
            for s in (
                "accounts.google",
                "gstatic",
                "googleapis",
                "google.com/view/amanuel",
                "sites.google.com/site",
            )
        ):
            continue
        unique.append(h)
    print("EXTERNAL-ISH", len(unique))
    for h in unique[:100]:
        print(" ", h)
