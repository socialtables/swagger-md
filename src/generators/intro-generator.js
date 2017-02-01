const api = {

  generateApiIntro(swagger_spec) {
    const api_info = swagger_spec.info;
    const header = `# ${api_info.title}, version ${api_info.version}`;
    const base_url = `Base URL: ${swagger_spec.schemes.join('|') || "http|https"}://${swagger_spec.host}${swagger_spec.basePath || ''}`;
    return `${header}\n\n${base_url}`;
  },

};

export default api;
