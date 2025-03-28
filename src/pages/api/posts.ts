import type { APIRoute } from "astro";
import { writeFile } from "node:fs/promises";
import { join } from "node:path";

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();

    // Validate required fields
    if (
      !data.title ||
      !data.description ||
      !data.pubDate ||
      !data.author ||
      !data.content
    ) {
      return new Response(
        JSON.stringify({
          error: "Missing required fields"
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }

    // Create frontmatter
    const frontmatter = [
      "---",
      `title: "${data.title}"`,
      `description: "${data.description}"`,
      `pubDate: ${new Date(data.pubDate).toISOString()}`,
      `author: "${data.author}"`,
      data.image ? `image: "${data.image}"` : null,
      data.tags
        ? `tags: [${data.tags.map((tag) => `"${tag}"`).join(", ")}]`
        : null,
      data.kategori ? `kategori: "${data.kategori}"` : null,
      "---",
      "",
      data.content
    ]
      .filter(Boolean)
      .join("\n");

    // Create slug from title
    const slug = data.title
      .toLowerCase()
      .replace(/[æå]/g, "a")
      .replace(/[ø]/g, "o")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

    // Save the file
    const filePath = join(
      process.cwd(),
      "src",
      "content",
      "blogg",
      `${slug}.md`
    );
    await writeFile(filePath, frontmatter, "utf-8");

    return new Response(
      JSON.stringify({
        success: true,
        slug
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  } catch (error) {
    console.error("Error creating post:", error);
    return new Response(
      JSON.stringify({
        error: "Internal server error"
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
};
