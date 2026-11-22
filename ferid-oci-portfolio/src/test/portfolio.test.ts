import { describe, expect, it } from "vitest";
import { languageFromPath, pageFromPath, paths, portfolioHead, profiles } from "@/lib/portfolio";
import { getSocialLinks } from "@/lib/social-links";
import { siteURL } from "@/lib/site";
import { sitemapXML } from "@/lib/sitemap";

describe("Portfolio identity and language rules", () => {
  it("keeps all paths in English and maps legacy Turkish URLs to English content", () => {
    expect(languageFromPath("/")).toBe("en");
    expect(languageFromPath("/tr/projects")).toBe("en");
    expect(pageFromPath("/tr/projects")).toBe("projects");
    expect(paths.en.contact).toBe("/contact");
  });
  it("uses the production canonical origin", () => {
    expect(siteURL).toBe("https://ferid-oci.vercel.app");
    expect(portfolioHead("home", "en").meta[0]).toMatchObject({
      title: "Ferid Oci | Founder of Draft Wink",
    });
    const head = portfolioHead("projects", "en");
    expect(head.links.find((link) => link.rel === "canonical")?.href).toBe(
      "https://ferid-oci.vercel.app/projects",
    );
    expect(
      head.links.filter((link) => link.rel === "alternate").map((link) => link.hrefLang),
    ).toEqual(["en", "x-default"]);
  });
  it("keeps project development status and verified personal profiles accurate", () => {
    const script = portfolioHead("home", "en").scripts[0];
    if (!script) throw new Error("Missing profile schema");
    const schema = JSON.parse(script.children);
    expect(schema.mainEntity.name).toBe("Ferid Oci");
    expect(schema.mainEntity.jobTitle).toBe(
      "Founder of Draft Wink | Young Entrepreneur & Web Developer",
    );
    expect(schema.mainEntity.sameAs).toEqual([
      "https://github.com/feridoci29-prog",
      "https://www.linkedin.com/in/feridoci/",
      "https://dev.to/feridoci",
      "https://feridoci.hashnode.dev/building-draft-wink-ferid-oci",
      "https://peerlist.io/feridoci",
      "https://medium.com/@feridoci29",
    ]);
    expect(schema.mainEntity.subjectOf.name).toBe("Draft Wink");
    expect(schema.mainEntity.subjectOf.creativeWorkStatus).toBe("In development");
    expect(schema.mainEntity.subjectOf.sameAs).toBe("https://x.com/DraftWink");
    expect(schema.mainEntity.birthDate).toBeUndefined();
    expect(schema.mainEntity.email).toBeUndefined();
    expect(profiles.x).toBe("https://x.com/DraftWink");
  });
  it("exposes all seven requested profiles while keeping the product X account separate", () => {
    expect(getSocialLinks("en").map(({ name, url }) => [name, url])).toEqual([
      ["GitHub", "https://github.com/feridoci29-prog"],
      ["LinkedIn", "https://www.linkedin.com/in/feridoci/"],
      ["DEV Community", "https://dev.to/feridoci"],
      ["Hashnode", "https://feridoci.hashnode.dev/building-draft-wink-ferid-oci"],
      ["Peerlist", "https://peerlist.io/feridoci"],
      ["Medium", "https://medium.com/@feridoci29"],
      ["Draft Wink on X", "https://x.com/DraftWink"],
    ]);
    expect(profiles.x).toBe("https://x.com/DraftWink");
  });

  it("exports only English public destinations without fake timestamps", () => {
    const entries = Object.values(paths.en).map((path) => ({ path }));
    const xml = sitemapXML(siteURL, entries);
    expect(xml.match(/<url>/g)).toHaveLength(5);
    expect(xml).toContain("<loc>https://ferid-oci.vercel.app/vision</loc>");
    expect(xml).not.toContain("/tr/");
    expect(xml).not.toContain("<lastmod>");
    expect(() => sitemapXML(siteURL, [{ path: "//bad.example" }])).toThrow();
  });
});
