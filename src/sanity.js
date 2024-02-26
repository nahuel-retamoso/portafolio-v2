import { createClient } from "@sanity/client"

export const client = createClient({
    projectId: 'iodevks1',
    dataset: 'production',
    useCdn: true, // set to `false` to bypass the edge cache
    apiVersion: '2024-02-25', // use current date (YYYY-MM-DD) to target the latest API version
    // token: import.meta.env.VITE_SANITY_SECRET_TOKEN // Only if you want to update content with the client
  })
  
  // uses GROQ to query content: https://www.sanity.io/docs/groq
  export async function getProjects() {
    const posts = await client.fetch('*[_type == "project"]')
    return posts
  }
  
  export async function getContactInfo() {
    const result = client.fetch('*[_type == "contact_links"]')
    return result
  }
  