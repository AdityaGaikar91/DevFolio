/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.jsx",
    driver: 'pg',
    dialect:'postgresql',
    dbCredentials: {
      url:'postgresql://neondb_owner:npg_PH1a7TlGtIQw@ep-white-resonance-a87pfqlp-pooler.eastus2.azure.neon.tech/developer-portfolio?sslmode=require'
    }
  };