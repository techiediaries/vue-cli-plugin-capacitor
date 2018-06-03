const { info } = require('@vue/cli-shared-utils')

module.exports = (api, options) => {
    api.registerCommand('capacitor-init', {
        description: 'init Capacitor. This will also install the default native platforms.',
        usage: 'vue-cli-service capacitor-init',
        options: {
        }
      }, args => {
        //npx cap init
        info('Run npx cap init')
    })
    api.registerCommand('capacitor-copy', {
        description: 'Copy your web Assets.',
        usage: 'vue-cli-service capacitor-copy',
        options: {
        }
      }, args => {
        //npx cap copy
        info('Run npx cap copy')
    })
    api.registerCommand('capacitor-update', {
        description: 'Periodic Maintenance',
        usage: 'vue-cli-service capacitor-update',
        options: {
        }
      }, args => {
        //npx cap update
        info('Run npx cap update')
    })        
    api.registerCommand('capacitor-open',{
        description : 'Open your Native IDE',
        usage: '',
        options: {}
    }, args => {
        //npx cap open
        info('Run npx cap open')

    })
}