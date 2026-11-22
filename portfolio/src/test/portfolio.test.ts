import { describe, expect, it } from 'vitest';
import { languageFromPath, pageFromPath, paths, portfolioHead, profiles } from '@/lib/portfolio';
import { siteURL } from '@/lib/site';
import { sitemapXML } from '@/lib/sitemap';

describe('Portfolio identity and language rules', () => {
  it('defaults to English and maps Turkish page URLs', () => {
    expect(languageFromPath('/')).toBe('en');
    expect(languageFromPath('/tr/projects')).toBe('tr');
    expect(pageFromPath('/tr/projects')).toBe('projects');
    expect(paths.tr.contact).toBe('/tr/contact');
  });
  it('uses the supplied temporary canonical origin', () => {
    expect(siteURL).toBe('https://feridoci29-prog.github.io');
    const head = portfolioHead('projects', 'tr');
    expect(head.links.find(link => link.rel === 'canonical')?.href).toBe('https://feridoci29-prog.github.io/tr/projects');
    expect(head.links.filter(link => link.rel === 'alternate').map(link => link.hrefLang)).toEqual(['en', 'tr', 'x-default']);
  });
  it('keeps project development status and verified personal profiles accurate', () => {
    const script = portfolioHead('home', 'en').scripts[0];
    if (!script) throw new Error('Missing profile schema');
    const schema = JSON.parse(script.children);
    expect(schema.mainEntity.name).toBe('Ferid Oci');
    expect(schema.mainEntity.subjectOf.name).toBe('Draft Wink');
    expect(schema.mainEntity.subjectOf.creativeWorkStatus).toBe('In development');
    expect(schema.mainEntity.sameAs).toEqual(['https://github.com/feridoci29-prog', 'https://www.linkedin.com/in/feridoci/', 'https://dev.to/feridoci', 'https://feridoci.hashnode.dev/building-draft-wink-ferid-oci', 'https://peerlist.io/feridoci', 'https://medium.com/@feridoci29']);
    expect(schema.mainEntity.sameAs).not.toContain('https://x.com/DraftWink');
    expect(schema.mainEntity.subjectOf.sameAs).toBe('https://x.com/DraftWink');
    expect(schema.mainEntity.birthDate).toBeUndefined();
    expect(schema.mainEntity.email).toBeUndefined();
    expect(profiles.x).toBe('https://x.com/DraftWink');
  });
  it('exports all bilingual public destinations without fake timestamps', () => {
    const entries = [...Object.values(paths.en), ...Object.values(paths.tr)].map(path => ({ path }));
    const xml = sitemapXML(siteURL, entries);
    expect(xml.match(/<url>/g)).toHaveLength(10);
    expect(xml).toContain('<loc>https://feridoci29-prog.github.io/tr/vision</loc>');
    expect(xml).not.toContain('<lastmod>');
    expect(() => sitemapXML(siteURL, [{ path: '//bad.example' }])).toThrow();
  });
});