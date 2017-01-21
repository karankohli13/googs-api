
var config = {
    'port': process.env.port || 5555,
    'database':'mongodb://127.0.0.1:27017/GoogsApp',                                                  // database connection link
    'superSecretCustomer':'Secret',                                                        // key for generating for customer api token
    'superSecretAdmin':'Secret' ,
    'GoogleApiKey':'Key',
    'transactionKey':'Key',
    'vendorKey':'Key'

};

config.adapters={

    revcontent:{
        api_key: 'xxxxxxxxx',
        pub_id: 51773,
        widget_id: 69191,
        widget_id_locksreen: 72432,
        widget_id_notification: 72431,
        widget_id_icon: 72430,
        domain: 'xxxxx',
        referer: 'xxxxxx'
    },

    custom:{
      widget_id: 69191,
      widget_id_locksreen: 72432,
      widget_id_notification: 72431,
      widget_id_icon: 72430,
    }
};

module.exports = config;
