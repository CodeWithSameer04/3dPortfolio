import { personalInfo } from '../data/personalInfo';

/**
 * SEO metadata helper
 * Sets page title and OpenGraph metadata dynamically
 */
export function updatePageSEO({ title, description }) {
  const baseTitle = `${personalInfo.name} — Full Stack & Creative Developer`;
  document.title = title ? `${title} | ${personalInfo.name}` : baseTitle;

  const defaultDesc = personalInfo.bio;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute('content', description || defaultDesc);
  }

  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) {
    ogTitle.setAttribute('content', title ? `${title} | ${personalInfo.name}` : baseTitle);
  }

  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) {
    ogDesc.setAttribute('content', description || defaultDesc);
  }
}
