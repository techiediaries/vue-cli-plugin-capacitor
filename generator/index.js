module.exports = (api, options, rootOptions) => {
    api.extendPackage({
        scripts: {
          'capacitor-init':  'vue-cli-service capacitor-init',  
          'capacitor-copy': 'vue-cli-service capacitor-copy',
          'capacitor-open': 'vue-cli-service capacitor-open',
          'capacitor-update': 'vue-cli-service capacitor-update',
          
        },
        dependencies: {
          '@capacitor/cli': '^',
          '@capacitor/core': '^'
        }
    })    
}