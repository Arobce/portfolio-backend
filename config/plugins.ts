export default ({ env }) => ({
    ezforms: {
        config: {
            captchaProvider: {
                name: 'none',
            },
            notificationProviders: [
                {
                    name: 'email',
                    enabled: true,
                    config: {
                        subject: "RC site Contact Form",
                        from: 'noeply@roshanchapagain.com'
                    }
                },
            ]
        }
    },
    upload: {
        config: {
          provider: 'cloudinary',
          providerOptions: {
            cloud_name: env('CLOUDINARY_NAME'),
            api_key: env('CLOUDINARY_KEY'),
            api_secret: env('CLOUDINARY_SECRET'),
          },
          actionOptions: {
            upload: {},
            delete: {},
          },
        },
      },
});
 