module.exports = {
  apps: [
    {
      name: 'n8n-20250612',
      script: '/mnt/n8n-db/20250612/node_modules/n8n/bin/n8n',
      env: {
        // Expose n8n on a safe internal port
        N8N_PORT: 5679,
        N8N_HOST: '0.0.0.0',
        N8N_PROTOCOL: 'https',

        // Correct external URL for OAuth/webhook redirect
        WEBHOOK_TUNNEL_URL: 'https://n8n.intelechia.com',

        // Paths to your data + config dirs
        N8N_DATA_FOLDER: '/mnt/n8n-db/20250612-data',
        N8N_USER_FOLDER: '/mnt/n8n-db/20250612-config',

        // Auth and encryption
        N8N_ENCRYPTION_KEY: '9e34094a0f7241eab69bd81b56d5b0a3b91e834faed33eaa142fda28ad74a3d4',
        N8N_AUTH_MODE: 'db',

        // Logging level
        N8N_LOG_LEVEL: 'info',

        // (Optional) Fixes settings permission warnings
        N8N_ENFORCE_SETTINGS_FILE_PERMISSIONS: 'true'
      }
    }
  ]
};
