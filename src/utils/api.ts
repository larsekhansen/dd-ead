/**
 * Utility functions for fetching data from the Enonic CMS API
 */

// In Deno with Astro, we need to handle environment variables differently
// @ts-ignore - Ignoring TypeScript errors for Deno.env
const API_BASE_URL =
  // @ts-ignore - Ignoring TypeScript errors for import.meta.env
  (typeof globalThis !== "undefined" &&
    // @ts-ignore
    globalThis.import?.meta?.env?.PUBLIC_API_BASE_URL) ||
  // @ts-ignore
  (typeof Deno !== "undefined" && Deno.env?.get("PUBLIC_API_BASE_URL")) ||
  "http://localhost:8080/site/api";

export interface ContentItem {
  id: string;
  name: string;
  displayName: string;
  path: string;
  type: string;
  createdTime: string;
  modifiedTime: string;
  data: Record<string, unknown>;
}

/**
 * Fetch content from Enonic CMS
 */
export async function fetchContent(path: string): Promise<ContentItem | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/content${path}`);

    if (!response.ok) {
      throw new Error(`Failed to fetch content: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching content:", error);
    return null;
  }
}

/**
 * Fetch multiple content items from Enonic CMS
 */
export async function fetchContentList(path: string): Promise<ContentItem[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/content${path}/_list`);

    if (!response.ok) {
      throw new Error(`Failed to fetch content list: ${response.statusText}`);
    }

    const data = await response.json();
    return data.contents || [];
  } catch (error) {
    console.error("Error fetching content list:", error);
    return [];
  }
}
